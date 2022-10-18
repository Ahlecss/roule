<template>
    <div>
        <div class="canvas-container">
            <canvas id="_canvas" ref="canvas"></canvas>
        </div>

    </div>
</template>

<script>

export default {

    mounted() {
        this.$game.init({
            canvas: this.$refs.canvas,
        })
    }
}
</script>

<style>
.canvas-container {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate3d(-50%, -50%, 0);
    z-index: 1;
    pointer-events: all;
    width: 100%;
    height: 100%;
}

canvas {
    position: absolute;
    width: 100vw;
    height: 100vh;
}

.loader {
    border: 5px solid #f3f3f3;
    border-top: 5px solid #000000;
    border-radius: 50%;
    width: 60px;
    height: 60px;
    animation: spin 2s linear infinite;
}

@keyframes spin {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}
</style>
