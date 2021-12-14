function _class(name){
  return document.getElementsByClassName(name);
}
 
let tabPanes = _class("tab-header")[0].getElementsByClassName("head_tab");
 
for(let i=0;i<tabPanes.length;i++){
  tabPanes[i].addEventListener("click",function(){
    _class("tab-header")[0].getElementsByClassName("active")[0].classList.remove("active");
    tabPanes[i].classList.add("active");
    
    _class("tab-content")[0].getElementsByClassName("active")[0].classList.remove("active");
    _class("tab-content")[0].getElementsByClassName("product_list_content")[i].classList.add("active");
    
  });
}

let tabPanesm = _class("tab-headerm")[0].getElementsByClassName("head_tabm");
 
for(let i=0;i<tabPanesm.length;i++){
  tabPanesm[i].addEventListener("click",function(){
    _class("tab-headerm")[0].getElementsByClassName("active")[0].classList.remove("active");
    tabPanesm[i].classList.add("active");
    
    _class("tab-contentm")[0].getElementsByClassName("active")[0].classList.remove("active");
    _class("tab-contentm")[0].getElementsByClassName("product_list_contentm")[i].classList.add("active");
    
  });
}

$(".dropdown-content div p").click(function () {

  $("#nav_about_mobile div.dropbtn span").html($(this).text());

});
