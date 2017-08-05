/*
  @替换功能
*/
  $("replaceBtn").onclick = function() {
     var oTh = prompt("请输入替换的词语");
     if (oTh) {
         search.innerHTML = $("search_text").value.replace(reg, oTh);
     } else {
         var reg2 = /<span>|<\/span>/g;
         search.innerHTML = $("search_text").value.replace(reg2, " ");
     }
 }