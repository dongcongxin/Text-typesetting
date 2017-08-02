 /*
        @修复了敏感词只替换一个的问题
        @修复了排版不会换行的问题
        @修复文字溢出不会出现滚动条的情况
        @匹配非乱码未解决
        @增加样式
        @增加自动加伪原创功能
   */
    var $ = function(id){
        return document.getElementById(id);
     }

    var search = $("layer");

    function _main(){
     
       $("search_text").onkeyup = function(){
        var math_length = 0;
        math_length = getLenght(this.value);
        if($("search_text").value!==""){
            $("length").innerHTML = "小仙女总共输入"+parseInt(math_length)+"个字符";
            $("length").style.display = "block";
        }else{
            $("length").style.display = "none";
        }

        /*清除内容*/
        $("clearfix").onclick = function(){
            $("search_text").value = "";
            $("length").innerHTML = "";
        }
    }
  }
_main();