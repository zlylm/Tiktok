<template>
    <div class="same-city">
        <div class="title" @click="showCity">厦门<span class="iconfont">&#xe604;</span></div>
        <select-city v-if="isCity" @hideCity="hideCity" :cityList="cityList"></select-city>
    </div>
</template>
<script lang="ts">
import {Vue,Component} from 'vue-property-decorator'
import SelectCity from './SelectCity.vue'
import {getCity} from '@/api/city'

@Component({
    name: 'City',
    components: {
        SelectCity
    }
})
export default class City extends Vue{
    public isCity = false
    private cityList = []

    public mounted() {
        getCity().then(res=>{
            if (res) {
                this.cityList = (res as any).data.city
            }
        })
    }

    public showCity() {
        this.isCity = true
    }
    public hideCity() {
        this.isCity = false
    }
}
</script>
<style lang="less" scoped>
.same-city{
    color: @fontColor;
    .title{
        text-align: center;
        line-height: 0.45rem;
        font-size: 0.15rem;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        .iconfont{
            font-size: 0.2rem;
        }
    }
}
</style>