<template>
    <div class="per">
        <!-- 头部区域 -->
        <div class="header">
            <div class="header-mid">
                <div class="logo">
                    Logo    
                </div>
                <div class="nav-head">
                    <a href="#">Github</a>
                    <a href="#">Register</a>
                    <a href="#">Login</a>
                </div>
            </div>
        </div>
        <!-- banner区域 -->
        <div class="banner">
            <div class="page01">1</div>
            <div class="page02">2</div>
            <div class="page03">3</div>
            <div class="page04">4</div>
        </div>
        <!-- 主导航区 -->
        <div class="main">
            <div class="nav-main">
                <div class="nav-home">
                    HOME
                </div>
                <div class="nav-profile">
                    PROFILE
                </div>
                <div class="nav-about">
                    ABOUT
                </div>
            </div>
        </div>
        <!-- 主要内容区 -->
        <div class="main-container">
            <div class="row">
                <div class="grid-cell">This is Content1</div>
                <div class="grid-cell">Maybe Content2</div>
                <div class="grid-cell">Content3</div>
            </div>
            <div class="row">
                <div class="grid-cell">Content4</div>
                <div class="grid-cell">Content5</div>
                <div class="grid-cell">Content6</div>
                <div class="grid-cell">Content7</div>
            </div>
            <div class="row">
                <div class="grid-cell">Content8</div>
                <div class="grid-cell">Content9</div>
                <div class="grid-cell">Content10</div>
            </div>
        </div>
        <!-- 页脚区域 -->
        <div class="footer">
            &copy; 2018 gree.com.cn
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{

        }
    },
    mounted(){

    },
    created(){

    }
}
</script>

<style scoped>
* {
	margin: 0;
	padding: 0;
	font-family: "Microsoft YaHei";
}
/* header区 */
.header {
	width: 100%;
	height: 80px;
	color: #fff;
	background-color: #222222;
}
.header-mid {
	margin: 0 auto;
	width: 960px;
	height: 80px;
}
.logo {
	float: left;
	margin-left: 20px;
	height: 80px;
	font-size: 24px;
	line-height: 80px;
}
.nav-head {
	float: right;
	margin-right: 20px;
	height: 80px;
	line-height: 80px;
}
.nav-head a {
	display: inline-block;
	margin: 0 5px;
	color: #fff;
}
/* banner区 */
.banner {
	position: relative;
	width: 100%;
	height: 250px;
	background-color: #00CC00;
	opacity: 0.9;
}
.page01, 
.page02,
.page03,
.page04 {
	position: absolute;
	bottom: 10px;
	width: 20px;
	height: 30px;
	line-height: 30px;
	text-align: center;
	border: 1px solid #999999;
	background-color: #EEEEEE;
	opacity: 0.8;
	cursor: pointer;
}
.page04 {
	right: 200px;
}
.page03 {
	right: 230px;
}
.page02 {
	right: 260px;
}
.page01 {
	right: 290px;
}
/* 主导航区 */
.main {
	width: 100%;
	height: 60px;
	border-bottom: 1px solid #CCC;
}
.nav-main{
	margin: 0 auto;
    width:960px;
    height: 60px;
}
.nav-home,
.nav-profile,
.nav-about{
	float: left;
	box-sizing: border-box;
	margin-top: 16px;
    /* margin:0 auto; */
	width: 100px;
	height: 45px;
	text-align: center;
	line-height: 45px;
	border: 1px solid #CCC;
	border-bottom: none;
	border-top-left-radius: 20px;
	border-top-right-radius: 20px;
	background-color: #fff;
	cursor: pointer;
}
.nav-profile,
.nav-about {
	background-color: #DDD;
}

.main-container{
    margin:10px auto;
    width:960px;
}
.row{
    display: flex;
}
.grid-cell{
    /* 项目放大比例，项目缩小比例，项目在主轴上的位置 */
    flex:1 1 auto;
    box-sizing: border-box;
	margin: 5px;
	min-width: 200px;
	height: 160px;
	line-height: 160px;
	text-align: center;
	border: 1px solid #DDD;
	box-shadow: 0 0 5px #DDD;
}   
/* child选择器,父元素需要第一个元素是所选子元素，否则不会选择。
   .row:nth-child(1)表示父元素下第1个row元素，
   .grid-cell:nth-child(1)表示父元素下第1个grid-cell元素 */
.row:nth-child(1) .grid-cell:nth-child(1),
.row:nth-child(1) .grid-cell:nth-child(2){
    flex: 0 0 34%;
}
/* 页脚区 */
.footer {
	box-sizing: border-box;
	padding-top: 20px;
	width: 100%;
	height: 120px;
	color: #fff;
	text-align: center;
	background-color: #888888;
}
</style>
