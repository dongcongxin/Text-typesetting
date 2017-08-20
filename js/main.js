 /*
        @修复了敏感词只替换一个的问题
        @修复了排版不会换行的问题
        @修复文字溢出不会出现滚动条的情况
        @匹配非乱码未解决
        @增加样式
        @增加自动加伪原创功能
   */
   var $ = function(id) {
       return document.getElementById(id);
   }
   var search = $("layer");

   function _main() {
     
     function addListener(target, type, handler){
     	
     	if (target.addEventListener) {
     		target.addEventListener(type, handler , false);
     	} else if (target.attachEvent) {
     		target.attachEvent("on" + type, handler);
     	} else {
     		target["on" + type] = handler;
     	}
     }
     
     // 记录输入XXX个字符
     function recordCharacter() {
     	 var math_length = 0;
         math_length = getLenght(this.value);
         
           
         if ($("search_text").value !== "") {
               $("length").innerHTML = "小仙女总共输入" + parseInt(math_length) + "个字符";
               $("length").style.display = "block";
           } else {
               $("length").style.display = "none";
           }	
     }
     
     // 清除内容
    function clearCharacter() {
    	 $("search_text").value = "";
           $("length").innerHTML = "";
           $("tip_text").style.display = "block";
    }
    
     // 表单获取焦点触发事件
    function isFocus() {
    	 $("tip_text").style.display = "none";
    }
    
    // 清除文字
    function clearText() {
    	 search.innerHTML = "";
         $("len").innerHTML = "";
    }

    addListener($("search_text"), "keyup", recordCharacter);
    addListener($("clearfix"), "click", clearCharacter);   
    addListener($("search_text"), "focus", isFocus);
    addListener($("clearfix"), 'dbclick', clearText);

     }
   
   _main();



   