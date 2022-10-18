import EventEmitter from './EventEmitter'

import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader'
import { MeshoptDecoder } from 'three/examples/jsm/libs/meshopt_decoder.module.js'
// import { FontLoader } from 'three/examples/jsm/loaders/FontLoader'

import { AudioLoader, TextureLoader } from 'three'

export default class Loader extends EventEmitter {
  constructor() {
    // Get parent methods
    super()
    // Set up
    this.needsLoad = false
    this.ressourcesList = []
    this.total = 0
    this.done = 0
    this.currentPercent = 0
    this.models = {}
    this.textures = {}
    // this.sounds = {}
    // this.fonts = {}

    this.setLoaders()
    this.setRessourcesList()
  }
  setLoaders() {

    const dracoLoader = new DRACOLoader()
    dracoLoader.setDecoderPath('/draco/')
    dracoLoader.setDecoderConfig({ type: 'js' })

    const gltfLoader = new GLTFLoader()
    gltfLoader.setDRACOLoader(dracoLoader)
    gltfLoader.setMeshoptDecoder(MeshoptDecoder)

    const fbxLoader = new FBXLoader()

    const textureLoader = new TextureLoader()
    // const fontLoader = new FontLoader()
    // const soundLoader = new AudioLoader()

    this.loaders = [
      {
        filetype: ['gltf', 'glb'],
        action: (model) => {
          gltfLoader.load(
            model.src,
            (loaded) => {
              this.loadComplete(model, loaded)
            },
            (xhr) => {
              this.progress(xhr)
            }
          )
        },
      },
      {
        filetype: ['fbx'],
        action: (model) => {
          fbxLoader.load(
            model.src,
            (loaded) => {
              this.loadComplete(model, loaded)
            },
            (xhr) => {
              this.progress(xhr)
            }
          )
        },
      },
      {
        filetype: ['png', 'jpg', 'jpeg', 'tif'],
        action: (texture) => {
          textureLoader.load(
            texture.src,
            (loaded) => {
              this.loadComplete(texture, loaded)
            },
            (xhr) => {
              this.progress(xhr)
            }
          )
        },
      },
      // {
      //     filetype: ['json'],
      //     action: (font) => {
      //         fontLoader.load(
      //             font.src,
      //             (loaded) => {
      //                 this.loadComplete(font, loaded)
      //             },
      //             (xhr) => {
      //                 this.progress(xhr)
      //             }
      //         )
      //     },
      // },
      // {
      //     filetype: ['mp3', 'ogg', 'wav'],
      //     action: (sound) => {
      //         soundLoader.load(
      //             sound.src,
      //             (loaded) => {
      //                 this.loadComplete(sound, loaded)
      //             },
      //             (xhr) => {
      //                 this.progress(xhr)
      //             }
      //         )
      //     },
      // },
    ]
  }
  progress(xhr) {
    if (xhr.lengthComputable) {
      this.currentPercent = Math.floor((xhr.loaded / xhr.total) * 100)
      if (this.currentPercent === 100) {
        this.currentPercent = 0
      }
      this.trigger('ressourceLoad')
    }
  }
  setRessourcesList() {
    // eslint-disable-next-line
    const modelsContext = require.context(
      '../../assets/models',
      true,
      /\.(glb|gltf|fbx)$/
    )
    modelsContext.keys().forEach((key) => {
      const newKey = `${key}`.substring(2)
      // eslint-disable-next-line
      const modelSrc = require('../../assets/models/' + newKey)
      this.ressourcesList.push({
        name: key.substring(
          2,
          key.length - (key.length - newKey.lastIndexOf('.') - 2)
          ),
          src: modelSrc.default,
          type: 'model',
        })
    })

    // eslint-disable-next-line
    const texturesContext = require.context(
      '../../assets/textures',
      true,
      /\.(png|jpeg|jpg|tif)$/
    )
    texturesContext.keys().forEach((key) => {
      const newKey = `${key}`.substring(2)
      // eslint-disable-next-line
      const textureSrc = require('../../assets/textures/' + newKey)
      this.ressourcesList.push({
        name: key.substring(
          2,
          key.length - (key.length - newKey.lastIndexOf('.') - 2)
        ),
        src: textureSrc, //.default,
        type: 'texture',
      })
    })
    // // eslint-disable-next-line
    // const fontsContext = require.context(
    //   '../../assets/fonts',
    //   true,
    //   /\.(json)$/
    // )
    // fontsContext.keys().forEach((key) => {
    //   const newKey = `${key}`.substring(2)
    //   // eslint-disable-next-line
    //   const fontSrc = 'assets/fonts/' + newKey
    //   this.ressourcesList.push({
    //     name: key.substring(
    //       2,
    //       key.length - (key.length - newKey.lastIndexOf('.') - 2)
    //     ),
    //     src: fontSrc,
    //     type: 'font',
    //   })
    // })
    // // eslint-disable-next-line
    // const soundsContext = require.context(
    //   '../../assets/sounds',
    //   true,
    //   /\.(mp3|ogg|wav)$/
    // )
    // soundsContext.keys().forEach((key) => {
    //   const newKey = `${key}`.substring(2)
    //   // eslint-disable-next-line
    //   const soundSrc = require('../../assets/sounds/' + newKey)
    //   this.ressourcesList.push({
    //     name: key.substring(
    //       2,
    //       key.length - (key.length - newKey.lastIndexOf('.') - 2)
    //     ),
    //     src: soundSrc.default,
    //     type: 'sound',
    //   })
    // })

    if (this.ressourcesList.length > 0) {
      this.needsLoad = true
      this.loadRessources(this.ressourcesList)
    } else {
      this.needsLoad = false
      this.trigger('ressourcesReady')
    }
  }
  loadRessources(ressources) {
    ressources.forEach((ressource) => {
      this.total++
      const ressourceExtension =
        ressource.src.substring(
          ressource.src.lastIndexOf('.') + 1,
          ressource.src.length
        ) || ressource.src
      if (ressourceExtension) {
        const loader = this.loaders.find(($loader) =>
          $loader.filetype.find(($filetype) => $filetype === ressourceExtension)
        )
        if (loader) {
          loader.action(ressource)
        } else {
          console.error(`No loader is set for ${ressourceExtension}`)
        }
      } else {
        console.error(`${ressource} is a valid ressource ?`)
      }
    })
  }
  loadComplete(ressource, loaded) {
    this.done++
    this.createNestedObject(
      this[`${ressource.type}s`],
      ressource.name.split('/'),
      loaded
    )

    this.trigger('ressourceLoad', [ressource, loaded])

    if (this.total === this.done) {
      this.trigger('ressourcesReady')
      this.needsLoad = false
    }
  }
  createNestedObject(base, names, value) {
    let lastName = arguments.length === 3 ? names.pop() : false
    for (let i = 0; i < names.length; i++) {
      base = base[names[i]] = base[names[i]] || {}
    }
    if (lastName) base = base[lastName] = value
    return base
  }
}
