/**
 * aqiData，存储用户输入的空气指数数据
 * 示例格式：
 * aqiData = {
 *    "北京": 90,
 *    "上海": 40
 * };
 */

var aqiData = {};

/**
 * 从用户输入中获取数据，向aqiData中增加一条数据
 * 然后渲染aqi-list列表，增加新增的数据
 */
function addAqiData() {
	var name1=document.getElementById("aqi-city-input").value;
	var num1=document.getElementById("aqi-value-input").value;
	aqiData[name1]=num1;
}

/**
 * 渲染aqi-table表格
 */
function renderAqiList() {
	var str="<tr><td>城市</td><td>空气质量</td><td>操作</td></tr>";
	for(name in aqiData){
	str +="<tr><td>"+name+"</td><td>"+aqiData[name]+"</td><td><button data-name='"+name+"'>删除</button></td></tr>";}
	document.getElementById("aqi-table").innerHTML=str;
}

/**
 * 点击add-btn时的处理逻辑
 * 获取用户输入，更新数据，并进行页面呈现的更新
 */
function addBtnHandle() {
  addAqiData();
  renderAqiList();
}

/**
 * 点击各个删除按钮的时候的处理逻辑
 * 获取哪个城市数据被删，删除数据，更新表格显示
 */
function delBtnHandle(name) {
  // do sth.
  delete aqiData[name]
  renderAqiList();
}

function init() {

  // 在这下面给add-btn绑定一个点击事件，点击时触发addBtnHandle函数
   document.getElementById("add-btn").onclick=function(){
   	addBtnHandle();
   };

  /* var e=document.getElementsByName("a");
  // 想办法给aqi-table中的所有删除按钮绑定事件，触发delBtnHandle函数
  for (var i = e.length - 1; i >= 0; i--) {
  	if(e[i].title in aqiData)
  	delete aqiData[e.title];

  }*/
  document.getElementById("aqi-table").addEventListener("click", function(event){
        if(event.target.nodeName.toLowerCase() === 'button') delBtnHandle.call(null, event.target.dataset.name);
    });
 
}

init();
