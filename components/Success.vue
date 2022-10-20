<!-- Please remove this file from your project -->
<template>
    <div class="success" id="success" ref="success">
        <h2>New badge</h2>
        <img v-if="currentSuccess === 'theBeat'" src="@/assets/img/badges/badge-beat.png" alt="badge-beat">
        <img v-if="currentSuccess === 'theDrop'" src="@/assets/img/badges/badge-drop.png" alt="badge-drop">
        <img v-if="currentSuccess === 'theWouin'" src="@/assets/img/badges/badge-wouin.png" alt="badge-wouin">
        <img v-if="currentSuccess === 'theSolo'" src="@/assets/img/badges/badge-solo.png" alt="badge-solo">
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
    left: 50%;
    top: 75%;
    transform: translate3d(-50%, -75%, 0);
    display: none;
}

.show {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

h2 {
    font-size: 3rem;
    color: white
}
</style>
  