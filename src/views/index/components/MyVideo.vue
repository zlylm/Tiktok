<template>
    <video-player ref="videoPlayer" class="videoPlayer" :playsinline="true" :options="playerOptions"></video-player>
</template>
<script lang="ts">
import {Vue,Component,Prop,Watch,Emit} from 'vue-property-decorator'
import { videoPlayer } from 'vue-video-player'
@Component<Vue>({
    name: 'MyVideo',
    components: {
        videoPlayer
    }
})

export default class MyVideo extends Vue{
    @Prop() param: any //视频数据
    @Prop() swiperIndex: number|any //swiper的index
    @Prop() selfIndex: any //index
    // @Emit('chuanThis') send(msg: any) {console.log(1)} // 执行父组件
    @Watch('swiperIndex')
    watchSwiperIndex(newVal: any, oldVal: any) {
        if (this.selfIndex === newVal) {
            this.myPlayer.play() //播放
            this.isPlay = false
        }
    }
    constructor () {
        super()
        // this.send(this) //触发emit事件
        if (this.selfIndex === 0) {
            this.playerOptions.autoplay = true
            this.isPlay = false
        }
    }
    // 播放器配置
    private playerOptions = {
        controls:false,//隐藏控制台
        autoplay: false, // 播放器准备好之后，是否自动播放
        muted: false, // 是否静音
        loop: false, // 循环播放
        fluid: true, // 是否适应父容器大小
        sources:[{
            type:'video/mp4',
            src: this.param.src
        }]
    }
    private isPlay: any = true //是否播放

    // 获取播放器实例
    get myPlayer () {
        return (this.$refs.videoPlayer as any).player
    }

    // 点击视频时触发
    public clickVideo () {
       if (this.isPlay) {
           this.myPlayer.play() //播放
       } else {
           this.myPlayer.pause() //暂停
       }
       this.isPlay = !this.isPlay
    }

    // 重置视频
    public reset() {
        // this.myPlayer.reset() //重置
        this.myPlayer.pause()
        this.isPlay = true
    }
   
}
</script>