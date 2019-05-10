<template>
<a-row class="row">
    <a-col :span="6">
        <slot></slot>
    </a-col>
    <a-col :span="6" :offset="12">共计{{count}}人</a-col>
</a-row>
</template>

<script>
export default {
    props: ['count']
}
</script>

<style lang="scss" scoped>
.row {
    font-size: 18px;
}
</style>
