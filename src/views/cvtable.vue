<template>
<body >
	<div>
	<div class="header">
		<h1>个人简历</h1>
	</div>
	<div class="basicInfo">
		<div class="left">
			<form method= "post" action="#">
				<label>姓名：<input calss=form-input type="text" placeholder="张三"></label>
				<label>姓别：<input type="text" placeholder="男"></label>
				<label>年龄：<input type="text" placeholder="18"></label>
				<label>籍贯：<input calss=form-input type="text" placeholder="北京市"></label>
				<label>整治面貌：<input type="text" placeholder="共产党员"></label><br>
				<label>联系方式：<input type="text" placeholder="139****0019"></label>
				<label>邮箱：<input type="text" placeholder="mail@example.com"></label><br>
				<label>GitHub：<input type="text" placeholder="https://github.com/"></label>
				<label>CSDN：<input type="text" placeholder="https://www.csdn.net/"></label>
			</form>
		</div>
		<div class="right">
			<img src="/static/img/user.png" alt="证件照">
		</div>
	</div>
	<div class="eduBack">
		<p>教育经历</p>
		<textarea name="textarea" placeholder="2001-2007  xxxx学校  xxxx专业"></textarea>
	</div>
	<div class="projectBack">
		<p>项目经历</p>
		<textarea name="textarea" placeholder="项目名称  项目周期  担任角色"></textarea>
	</div>
	<div class="socialAct">
		<p>社会经历</p>
		<textarea name="textarea" placeholder="时间  活动名称  组织单位"></textarea>
	</div>
	<div class="person-skill">
		<p>个人技能</p>
		<textarea name="textarea" placeholder="1.精通HTML5、CSS、JavaScript"></textarea>
	</div>
	<div class="footer">
		<a href="#">下载简历</a>&Iota;<a href="#">GitHub</a>&Iota;<a href="#">CSDN</a>
	</div>
	</div>
</body>
</template>

<script>
export default {

}
</script>

<style>
* {
	margin: 0;
	padding: 0;
	font-family: "Microsoft YaHei";
}
div {
    /* 上下置顶，左右居中 */
	margin: 0 auto;
	max-width: 794px;
}
.header {
	height: 80px;
	width: 100%;
    /* 行距 */
	line-height: 80px;
	text-align: center;
	border: 1px dashed #000;
	/* background-color: #0ea73c; */
	border-bottom: none;
    /* 背景图片 */
    background-image: url("/static/img/springboot.png");
    /* 背景不重复 */
    background-repeat: no-repeat;
    /* 背景位置 */
    background-position: 20px center;
}
.basicInfo {
	min-height: 240px;
	width: 100%;
	border: 1px solid #000;
}
.basicInfo .left {
	float: left;
	width: 630px;
	padding-left: 8px;
	text-align: left;
}
form input {
	display: inline-block;
	margin: 15px 4px;
	width: 150px;
	height: 25px;
	border: none;
    /* 底边框 */
	border-bottom: 1px solid #000;
	text-align: center;
    /* 垂直对齐，中轴线对齐,bottom,底线对齐*/
    vertical-align: middle;

    /* 文本下划线,overline上，line-through中，underline下，none无 */
	text-decoration: none;
}
.basicInfo .right {
	float: right;
	width: 150px;
	padding-right: 6px;
	text-align: right;
}
    /* :after和:before是在指定的元素后面加内容, */
    /* 这段代码是为了清除浮动， */
.basicInfo .left:after,
.basicInfo .right:after {
    /* \0020是转义字符的空格表示 */
	content: "\0020";
	display: block;
	height: 0;
    /* 清除浮动 */
	clear: both;
}
.basicInfo .left,
.basicInfo .right {
    /* ie下的浮动，margin重叠等一些问题 */
    /* body中加zoom:0.5可以让整个缩小一半 */
	zoom: 1;
}
.basicInfo .right img {
	margin-top: 20px;
	height: 200px;
	width: 150px;
}
p {
	font-size: 24px;
	font-weight: 700;
	color: #000;
	padding-left: 10px;
}
.eduBack,.projectBack,.socialAct {
	min-height: 200px;
	width: 100%;
	border: 1px solid #000;
	border-top: none;
}
textarea {
	min-height: 180px;
	width: 100%;
	border: none;
	resize: none;
	font-size: 18px;
	color: #000;
}
    /* 一个冒号是伪类，如:hover :focus 
       两个冒号是为元素，如::first-line,::placeholder*/
::placeholder {
	padding-left: 10px;
	font-size: 14px;
    color: #0ea73c;
}
.person-skill {
	min-height: 160px;
	width: 100%;
	border: 1px solid #000;
	border-top: none;
}
.footer {
	width: 100%;
	min-height: 23px;
	border: 1px solid #000;
	border-top: none;
	text-align: center;
	line-height: 23px;
	font-size: 18px;
	color: #abc;
}
.footer a {
	text-decoration: none;
	color: #abc;
}

a:link {
  color: #265301;
}

a:visited {
  color: #437A16;
}

a:focus {
  border-bottom: 1px solid;
  background: #BAE498;
}

a:hover {
  border-bottom: 1px solid;     
  background: #CDFEAA;
}

a:active {
  background: #265301;
  color: #CDFEAA;
}

</style>
