var colorList = [
	{
		color:"red"
	},{
		color:"green"
	},{
		color:"blue"
	}
];
var elements = [];

function createBox(data){
	var that=this;
	this.num=0;
	this.ele = document.createElement("div");
	this.eleNum=document.createElement("div");
	this.eleNum.innerHTML=this.num;
	
	this.ele.style.backgroundColor = data.color;
	
	this.ele.style.width = "200px";
	this.ele.style.height = "100px";
	this.ele.style.color = "white";
	this.ele.style.fontSize = "18px";
	this.ele.style.textAlign = "center";
	this.ele.style.position = "relative";
	this.ele.style.borderRadius = "10px";
	this.ele.style.lineHeight= this.ele.style.height;
	this.ele.addEventListener("click",function(){
		that.increaseNum();
	})
	this.ele.style.userSelect= "none";
	//I added the no-user-select part for fun, to not look annoying when clicked a bunch of times.
	this.ele.appendChild(this.eleNum);
	document.body.appendChild(this.ele);
}

createBox.prototype.increaseNum = function(){
	this.num=this.num+1;
	this.eleNum.innerHTML=this.num;
}

for(var ii=0; ii<colorList.length; ii++){
	elements.push(new createBox(colorList[ii]));
}