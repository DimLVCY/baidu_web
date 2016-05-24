/*js实现选项卡切换是难点*/
window.onload=function(){
	var lis=document.getElementsByTagName("li");
	var main=document.getElementById("main");
	//先获取main,是为了得到main下的div，而排除整个div
	var divs=main.getElementsByTagName("div");

	for(var n=0;n<lis.length;n++){
	   lis[n].index=n;//这个循环是为了获取所点击的相应标题
	   lis[n].onmouseover=function(){ 
    	for(var i=0;i<lis.length;i++){//此循环设置所有内容隐藏，相当于初始化
    	lis[i].className="";
    	divs[i].className="hide";
    	}
    	this.className="on";//对鼠标划过的内容设置效果显示
    	divs[this.index].className="";
      } 
    }
 }

