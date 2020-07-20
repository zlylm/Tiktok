<template>
    <div class="index">
        <Header />
        <router-view/>
    </div>
</template>
<script lang="ts">
import {Vue,Component} from 'vue-property-decorator'
import Header from './components/Header.vue'

@Component({
    name: 'Index',
    components: {
        Header
    }
})
export default class Index extends Vue{

}
</script>
<style lang="less" scoped>
.index{
    width: 100%;
    height: 100%;
    color: #fff;
}
</style>