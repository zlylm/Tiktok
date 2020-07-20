<template>
    <div id="me">首页</div>
</template>
<script lang="ts">
import {Vue,Component} from 'vue-property-decorator'

@Component({
    name: 'Index'
})
export default class Index extends Vue{

}
</script>
<style lang="less" scoped>
#me{
    color: #fff;
}
</style>