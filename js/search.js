 
/*
   @查找功能
*/
 $("findBtn").onclick = function() {
     oCz = prompt("请输人查找的词语");
     reg = new RegExp(oCz, "g");
     searchs = $("search_text");

     search.innerHTML = searchs.value.replace(reg, "<span>" + oCz + "</span>");
     //统计高亮的数量
     var lens = searchs.value.match(reg).length;

     $("len").innerHTML = "<i class='Reminder_icon'></i>温馨提示个数为:" + lens;
     $("len").style.display = "block";

 }