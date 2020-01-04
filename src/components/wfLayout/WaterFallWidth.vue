<template>
  <div ref="waterfall" class="wfwidth">
    <div class="wfwidth-row" v-for="(list,index) in imgList" :key="index">
      <div class="wfwidth-row-image" v-for="img in list" :key="img.url">
        <img :src="img.url" :height="img.height" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "WaterFallWidth", //等高瀑布流，js实现啊
  data() {
    return {
      resizeRender: null,
      baseHeight: 200, //图片的基础高度
      imgList: [[]], //二维数组保存每一行数据
      rowWidth: 0, //行宽
      rowIndex: 0 //行索引
    };
  },
  created() {
    this.loadImage();
  },
  mounted() {
    this.resizeRender = this.throttle(this.resize, 200); 
    //当屏幕尺寸改变引起重绘，图片重新排列实现响应式。
    window.addEventListener("resize", this.resizeRender); 
  },
  beforeDestroy() {
    window.removeEventListener('resize',this.resizeRender);
  },
  methods: {
    loadImage() {
      for (let i = 0; i < 17; i++) {
        let image = new Image();
        let url = require(`@/assets/images/${i}.jpg`);
        image.src = url;
        image.onload = () => {
          this.compare({
            url: url,
            width: this.baseHeight * (image.width / image.height),
            height: this.baseHeight
          });
        };
      }
    },
    //缩放后，行宽与屏幕宽比较，换行讨论。
    compare(image) {
      let clientWidth = this.$refs.waterfall.clientWidth;
      this.rowWidth += image.width;
      //新增image使得行宽超屏宽，应换行，然后拉伸行图片充满正行。
      if (this.rowWidth > clientWidth) {
        this.rowWidth -= image.width;
        //拉伸图片，充满整行
        clientWidth = clientWidth - this.imgList[this.rowIndex].length * 10; //减去padding的实际总行宽
        let growAfterHeight = (clientWidth * this.baseHeight) / this.rowWidth; //按比例改变高度
        this.imgList[this.rowIndex].forEach(item => {
          item.height = growAfterHeight;
        });
        //换行,调整新行宽
        this.rowIndex++;
        this.rowWidth = image.width;
        //vm.$set 是Vue.set方法的别名
        /**
         * 由于实例创建后新增的属性更新，是不会触发视图更新的。
         * 这是需要用this.$set方法为新增的属性添加到嵌套的对象上
         * this.$set(obj,key,vale),就会触发视图更新了。
         * 也可以在实例创建后，用Object.assign({},this.obj,{a:1,e:2})来创建一个新实例包含旧实例。
         */
        this.$set(this.imgList, this.rowIndex, [image]);
      } else {
        this.imgList[this.rowIndex].push(image);
      }
    },
    //节流函数
    throttle(fn, threshhold = 100) {
      let timeout = null;
      let start = new Date();
      return function() {
        let curr = new Date() - 0;
        clearTimeout(timeout);
        if (curr - start >= threshhold) {
          fn.apply(this, arguments);
          start = curr;
        } else {
          timeout = setTimeout(() => {
            fn.apply(this, arguments);
          }, threshhold);
        }
      };
    },
    resize() {
      //Array.reduce(fn(sumValue,currentValue),initVale);
      // Array.concat(array) 合并数组返回新数组
      let newList = this.imgList.reduce((list, item) => list.concat(item), []); //重绘时，刷新数组。
      //重置排列图片时的参数
      this.imgList = [[]];
      this.rowWidth = 0;
      this.rowIndex = 0;
      newList.forEach(image => this.compare(image));
    }
  }
};
</script>
<style lang="less" scoped>
.wfwidth-row-image{
  float: left;
  padding: 5px;
  img{
    display: block;
  }
}
</style>


