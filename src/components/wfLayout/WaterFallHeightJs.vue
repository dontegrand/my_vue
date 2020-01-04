<template>
  <div ref="waterfall" class="waterfall">
    <div ref="box" class="waterfall-box">
      <div
        class="waterfall-container"
        v-for="(img,index) in imgList"
        :key="index"
        :style="{top: img.top + 'px',left: img.left + 'px'}"
      >
        <div class="waterfall-image">
          <img :src="img.url" alt />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "WaterFallAbsoultePostion", //等宽瀑布流的绝对定位展示
  data() {
    return {
      colWidth: 200,
      colNumbers: 0,
      colIndex: 0,
      colHeight: [],
      imgList: [],
      renderResize: null
    };
  },
  created() {
    this.loadImage();
  },
  mounted() {
    this.renderResize = this.throttle(this.resize, 200);
    window.addEventListener("resize", this.renderResize);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.renderResize);
  },
  methods: {
    getColNumbers() {
      /**
       * $nextTick是在下次DOM更新循环结束之后执行延迟回调，修改数据之后使用$nextTick，才可以获取更新后的DOM。
       * $refs是用来定位DOM节点的，必须要从mounted开始拿。
       */
      this.$nextTick(function() {
        let clientWidth = this.$refs.waterfall.clientWidth;
        this.colNumbers = Math.floor(clientWidth / this.colWidth);
        this.$refs.box.style.marginLeft =
          (clientWidth - this.colWidth * this.colNumbers) / 2 + "px";
      });
    },
    loadImage() {
      this.getColNumbers();
      for (let i = 0; i < 17; i++) {
        let url = require(`@/assets/images/${i}.jpg`);
        let image = new Image();
        image.src = url;
        image.onload = () => {
          this.render({
            url: url,
            index: i,
            ratio: image.width / image.height
          });
        };
      }
    },
    render(imageInfo) {
      let colIndex = imageInfo.index % this.colNumbers;
      imageInfo.left = colIndex * this.colWidth;
      if (imageInfo.index < this.colNumbers) {
        imageInfo.top = 0;
        this.colHeight[colIndex] = this.colWidth / imageInfo.ratio;
      } else {
        let minHeight = Math.min(...this.colHeight);
        let minIndex = this.colHeight.indexOf(minHeight);
        imageInfo.top = minHeight;
        imageInfo.left = minIndex * this.colWidth;
        this.colHeight[minIndex] += this.colWidth / imageInfo.ratio;
      }
      this.imgList.push(imageInfo);
    },
    resize() {
      this.imgList = [];
      this.loadImage();
    },
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
    }
  }
};
</script>

<style lang="less" scoped>
.waterfall {
  position: relative;
  &-box {
    position: relative;
  }
  &-container {
    position: absolute;
    width: 200px;
  }
  &-image {
    padding: 5px;
  }
  img {
    display: block;
    width: 100%;
  }
}
</style>


