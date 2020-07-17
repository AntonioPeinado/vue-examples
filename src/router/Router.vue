<template>
    <div>
        <h1>Ejemplo router</h1>
        <router-link to="/foo/x">Go to Foo</router-link>
        <router-link to="/bar">Go to Bar</router-link>
        <router-view></router-view>
    </div>
</template>
<script>
    export default {
        name: 'Router'
    }
</script>