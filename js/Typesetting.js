 /*
    @自动排版
 */
 $("btn").onclick = function() {

    search.style.textIndent = "22px";
    search.style.lineHeight = "1.8";
    getReplace(/。/g, "。<br/><br/>&nbsp;&nbsp");

}