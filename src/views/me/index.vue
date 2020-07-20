<template>
    <div id="me">我的</div>
</template>
<script lang="ts">
import {Vue,Component} from 'vue-property-decorator'

@Component({
    name: 'Me'
})
export default class Me extends Vue{

}
</script>
<style lang="less" scoped>
#me{
    color: #fff;
}
</style>