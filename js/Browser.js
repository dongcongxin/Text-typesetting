/*
   检测浏览量
*/
function browser(element) {
    if (localStorage.pagecount) {
        localStorage.pagecount = Number(localStorage.pagecount) + 1;
    } else {
        localStorage.pagecount = 1;
    }

    element.innerHTML = localStorage.pagecount;
}
/*在帮助页面中检测浏览器*/
var badge =document.getElementById("badge");
browser(badge);