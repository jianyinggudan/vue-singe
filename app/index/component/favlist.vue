<template>
    <div id="example">
        <h1>{{ msg }}</h1>
        <ul>
            <li v-for="n in 5">{{ n }}</li>
        </ul>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                msg: 'Hello World!This is vue'
            }
        }
    }
</script>

<style>
    #example {
        background: red;
        height: 100vh;
    }
</style>
