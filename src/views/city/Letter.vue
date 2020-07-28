<template>
    <div class="letter">
        <div class="list" v-for="item of letterList" :key="item">{{item}}</div>
    </div>
</template>
<script lang="ts">
import {Vue,Component,Prop} from 'vue-property-decorator'
@Component({
    name: 'Letter'
})
export default class Letter extends Vue{
    @Prop() letterList
}
</script>
<style lang="less" scoped>
.letter{
    position: fixed;
    right: 0.1rem;
    top: 50%;
    transform: translateY(-50%);
    z-index: 100;
    .list{
        margin-bottom: 0.05rem;
        color: rgba(255, 255, 255, 0.6);
        text-align: center;
        font-size: 0.12rem;
    }
}
</style>