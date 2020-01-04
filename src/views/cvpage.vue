<template>
  <div class="body">
    <div id="lang-panel">
      <a class="lang selected" href="#">中</a>
      <a class="lang" href="index.html">En</a>
    </div>
    <div id="pagepiling">
      <div class="section center" id="home">
        <img id="avatar" src="@/assets/img/user.png" />
        <h1 id="title">DonteGrand</h1>
        <p id="subtitle">篮球 · 音乐 · 电竞</p>
        <h4>Hello World,Keep Coding!</h4>
      </div>

      <div class="section center" id="project">
        <h1>项目经验</h1>
        <p class="center">
          更多精彩，敬请移步
          <a
            href="http://mobileapi.gree.com:3000/180469"
            target="_blank"
            class="highlight"
          >GreeGitHub</a>
        </p>
      </div>

      <div class="section center" id="profession">
        <h1>擅长技术</h1>
        <div class="tag-panel">
          <div class="tag familiar">CSS</div>
          <div class="tag familiar">HTML5</div>
        </div>
        <div class="tag-panel">
          <div class="tag expert">Vue.js</div>
          <div class="tag expert">JavaScript</div>
        </div>
        <div class="tag-panel">
          <div class="tag expert">Java SE</div>
          <div class="tag expert">MySQL</div>
        </div>
        <div class="tag-panel">
          <div class="tag familiar">SpringBoot</div>
          <div class="tag familiar">Hibernate</div>
        </div>
      </div>

      <div class="section center">
        <h1>教育背景</h1>
        <h4>桂林电子科技大学 本科毕业生</h4>
        <p>计算机科学与技术专业</p>
      </div>

      <div class="section center">
        <h1>工作经历</h1>
        <p>计算机中心 软件应用二室</p>
      </div>
      <div class="section center">
        <h1>了解更多</h1>
        <h2>
          <a href="http://10.3.0.186/video" target="_blank">Gree主页</a> |
          <a
            href="https://yun1.gree.com/microblog/3600910a-af5e-11e8-96e5-005056af442d/profile"
            target="_blank"
          >我的微博</a>
        </h2>
        <p>
          Email:
          <a href="#" target="_blank">180469@gree.com.cn</a>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  }
};
</script>

<style scoped>
.body {
  /* 三种字体，替补原则 */
  font-family: Lato, "Microsoft YaHei", sans-serif;
  font-weight: 400;
  font-size: 1.1em;
}
h1 {
  font-size: 3.5em;
  margin: 0 0 0.5em 0;
  /*水平阴影的位置，垂直阴影的位置，模糊的距离，阴影的颜色*/
  text-shadow: 1px 2px #22c3aa, 2px 4px #aee2d9;
}
h2 {
  font-size: 2em;
  margin: 0 0 0.2em 0;
}
h4 {
  font-size: 1.25em;
  margin: 0 0 0.1em 0;
}
p {
  font-size: 1.1em;
  margin: 0.5em 0;
  color: #aee2d9;
}
a {
  color: #008a75;
  text-decoration: none;
  transition: 0.5s;
}
a:hover {
  color: #9f3;
}
a.highlight {
  color: #9f3;
}
a.highlight:hover {
  color: #008a75;
}
#lang-panel {
  position: absolute;
  right: 20px;
  top: 20px;
  border-radius: 5px;
  z-index: 100;
  font-size: 0.8em;
}
#lang-panel .lang {
  display: inline-block;
  border-radius: 5px;
  padding: 2px 8px;
}
#lang-panel .lang.selected {
  background-color: #aee2d9;
  color: #008a75;
  /* 默认指针 */
  cursor: default;
}
/*相邻兄弟选择器，第一个元素不起作用，后面的兄弟元素都会起作用*/
h1 + h2,
h1 + p {
  margin-top: -0.5em;
}
h2 + h1 {
  margin-top: 0.8em;
}
h1 em,
h2 em,
h3 em,
h4 em,
h5 em,
h6 em {
  color: #008a75;
  font-style: normal;
}
#title {
  margin: 0.25em 0 0 0;
}
#subtitle {
  margin: 1em 0 0.25em 0;
}
.tag-panel {
  margin: 15px auto;
}
.tag {
  background-color: #096254;
  color: #aee2d9;
  border-radius: 5px;
  display: inline-block;
  padding: 2px 8px;
  margin-right: 3px;
  margin-bottom: 3px;
}
.tag.expert {
  /*div透明度,会影响背景色和文本*/
  opacity: 1;
}
.tag.familiar {
  opacity: 0.75;
}
.content {
  max-width: 800px;
  /*上下为零左右居中,margin:auto:上下左右都居中*/
  margin: 0 auto;
}
* {
  box-sizing: border-box;
}
.section {
  background-color: #22c3aa;
  color: #eef3f0;
  padding: 50px;
  /*改变样式时过渡时间*/
  transition: 0.5s;
}
.center {
  text-align: center;
}
#avatar {
  width: 200px;
  height: 200px;
  /* 外边框的样式为inset */
  border: 10px inset #aee2d9;
}
</style>
