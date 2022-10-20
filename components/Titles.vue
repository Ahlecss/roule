<!-- Please remove this file from your project -->
<template>
    <div class="titles" id="titles" ref="titles">
        <h2>{{ currentTitle }}</h2>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Titles',
		data() {
			return {
				currentTitle: ''
			}
		},
    mounted() {
			$nuxt.$on('changeCurrentTitle', newTitle => {
				this.currentTitle = newTitle
				this.showTitle()
      })
    },
    methods: {
        showTitle() {
					this.$refs.titles.classList.add('show')
					this.hideTitle()
        },
				hideTitle() {
					setTimeout(() => {
						this.$refs.titles.classList.remove('show')
					}, 4000)
				}
    }
  }
  </script>
  
  <style scoped>
  .titles {
    z-index: 1;
    position: absolute;
    left: 50%;
    top: 50%;
		transform: translate3d(-50%, -50%, 0);
		display: none;
	}
	.show {
		display: flex;
	}
	h2{
		font-size: 8rem;
      color: white
  }
  </style>
  