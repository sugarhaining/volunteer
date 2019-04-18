<template>
<a-layout class='layout'>
    <a-layout-header class='layout-header'>头部</a-layout-header>
    <a-layout-content class='layout-content'>内容部</a-layout-content>
    <a-layout-footer class='layout-footer'>
        <a-divider type="horizontal">Cyberspace@西电青年志愿者总队</a-divider>
    </a-layout-footer>
</a-layout>
</template>

<script>
export default {
    data() {
        return {

        }
    },
}
</script>

<style lang="scss" scoped>
.layout {
    .layout-header {
        position: fixed;
        z-index: 1;
        width: 100%;
        backgroundColor: rgba(0,0,0,0.7);
    }
}
</style>
