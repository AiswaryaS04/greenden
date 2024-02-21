var sidenav=document.getElementById("sidenav")
var menuicon=document.getElementById("menuicon")
var closenav=document.getElementById("closenav")
menuicon.addEventListener("click",function(){
    sidenav.style.right=0
})
closenav.addEventListener("click",function(){
sidenav.style.right="-50%"
})
//Autocomplete Product Search

var search = document.getElementById('search');
var product_container = document.getElementById('product-container');
var product_list = product_container.querySelectorAll('div');
console.log(product_list);

search.addEventListener("keyup",function(){
    var entered_name = this.value.toUpperCase();
    for(count=0;count<product_list.length;count++){
        var product_name = product_list[count].querySelector('h1').textContent.toUpperCase();
        if(product_name.indexOf(entered_name) == -1){
            product_list[count].style.display = "none";
        }else{
            product_list[count].style.display = "block";
        }
    }
});