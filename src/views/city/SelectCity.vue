<template>
    <div class="sel-city" ref="wrapper">
        <div class="header">
            <span class="iconfont" @click="hideCity">&#xe606;</span>
            切换城市
        </div>
        <div class="search">
            <span class="iconfont">&#xe605;</span>
            <input class="val" type="text" placeholder="输入城市或区县名称"/>
        </div>
        <div class="def-city">
            <div class="title">默认位置</div>
            <div class="val">厦门</div>
        </div>
        <div class="hot-city">
            <div class="title">热门城市</div>
            <div class="city-list">
                <div class="list">广州</div>
                <div class="list">广州</div>
                <div class="list">广州</div>
                <div class="list">广州</div>
            </div>
        </div>
        <letter :letterList="letterList" @letterClick="letterClick"></letter>
        
        <div class="city-box" v-for="(item) in cityList" :key="item.initial">
            <div :class="['city-key',item.initial]" :ref="item.initial">{{item.initial}}</div>
            <div class="city-values" v-for="(city,index) in item.list" :key="index">{{city.name}}</div>
        </div>
       
        
    </div>
</template>
<script lang="ts">
import {Vue,Component,Emit,Prop} from 'vue-property-decorator'
import {getCity} from '@/api/city'
import Letter from './Letter.vue'
import BScroll from 'better-scroll'


@Component({
    name: 'SelectCity',
    components: {
        Letter
    }
})
export default class SelectCity extends Vue{
    private letterList = []; //字母表
    private cityList = [];//城市
    private scroll = null;
    @Emit('hideCity')
    public hideCity(){
       console.log('关闭窗口')
    }

    public mounted(){
        getCity().then(res=>{
            if (res) {
                this.cityList = (res as any).data.city
                this.showLetter()
            }
        })
    }

    /**
     * 处理字母
     */
    public showLetter() {
        const result = []
        this.cityList.forEach(item=>{
            result.push(item.initial)
        })
        this.letterList = result
        this.scroll = new BScroll(this.$refs.wrapper,{
            click: true,
            tap: true,
            scrollX: true,
            scrollY: false,
        })
    }

    /**
     * 接收子组件 字母点击
     */
    public letterClick(name) {
        
        const ele = this.$refs[name][0]
        this.scroll.scrollToElement(ele)
        console.log(this.scroll.scrollToElement)
    }
}
</script>
<style lang="less" scoped>
@myColor: rgba(255, 255, 255, 0.6);
@solidColor: rgba(255, 255, 255, 0.15);
.sel-city{
    // position: fixed;
    // width: 100%;
    // height: 100%;
    // top: 0;
    // left: 0;
    // z-index: 2;
    background-color: @bgColor;
    color: @myColor;
    height: auto;
    padding: 0 0.1rem;
    // overflow-y: scroll;
    .header{
        font-size: 0.16rem;
        font-weight: 500;
        text-align: center;
        line-height: 0.45rem;
        position: relative;
        .iconfont{
            position: absolute;
            left: 0;
            top: 50%;
            transform: translateY(-50%);
            font-size: 0.26rem;
        }
    }
    .search{
        width: 100%;
        height: 0.4rem;
        background-color: rgba(57, 58, 67, 1);
        border-radius: 0.02rem;
        display: flex;
        align-items: center;
        padding: 0.1rem;
        .iconfont{
            font-size: 0.2rem;
            margin-right: 0.05rem;
        }
        .val{
            flex: 1;
            height: 100%;
            background: transparent;
            border:none;
            outline: none;
            color: @myColor;
        }
    }
    .def-city{
        padding: 0.15rem 0;
        border-bottom: @solidColor solid 0.01rem ;
        .title{
            font-size: 0.14rem;
            margin-bottom: 0.15rem;
        }
        .val{
            font-size: 0.15rem;
            
        }
    }
    .hot-city{
        margin-top: 0.15rem;
        padding-bottom: 0.1rem;
        border-bottom: @solidColor solid 0.01rem ;
        .title{
            font-size: 0.14rem;
            margin-bottom: 0.15rem;
        }
        .city-list{
            font-size: 0.14rem;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            .list{
                display: inline-block;
                width: 1.12rem;
                height: 0.38rem;
                line-height: 0.38rem;
                text-align: center;
                background-color: rgba(57, 58, 67, 1);
                margin-bottom: 0.12rem;
                border-radius: 0.02rem;

            }
        }
    }
    .city-box{
        font-size: 0.15rem;
        .city-key{
            margin: 0.1rem 0 0.15rem 0;
            color: #fff;
        }
        .city-values{
            padding: 0.1rem 0;
            border-bottom: @solidColor solid 0.01rem ;
        }
    }
}
</style>