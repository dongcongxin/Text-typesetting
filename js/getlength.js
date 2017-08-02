function getLenght(str){
	return str.replace(/[^\x00-xff]/g,"xx").length;
}