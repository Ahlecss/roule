<!-- Please remove this file from your project -->
<template>
    <div class="success" id="success" ref="success">
        <h2>just won {{ currentSuccess }}</h2>
    </div>
</template>
  
<script>
export default {
    name: 'Success',
    data() {
        return {
            currentSuccess: ''
        }
    },
    mounted() {
        $nuxt.$on('win', newSuccess => {
            this.currentSuccess = newSuccess
            this.showSuccess()
        })
    },
    methods: {
        showSuccess() {
            this.$refs.success.classList.add('show')
            this.hideSuccess()
        },
        hideSuccess() {
            setTimeout(() => {
                this.$refs.success.classList.remove('show')
            }, 4000)
        }
    }
}
</script>
  
<style scoped>
.success {
    z-index: 1;
    position: absolute;
    left: 80%;
    top: 5%;
    transform: translate3d(-80%, -5%, 0);
    display: none;
}

.show {
    display: flex;
}

h2 {
    font-size: 3rem;
    color: white
}
</style>
  