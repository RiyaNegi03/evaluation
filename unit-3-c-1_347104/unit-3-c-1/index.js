let form= document.getElementById("products").addEventListener("click", function(e){
    e.preventDefault()
  })
   
function addprod(){
  var type= products.type.value;
 var desc=products.desc.value;
 var price= products.price.value;
 var image=products.image.value
 
 
   var det= new details(type,desc,price,image)
//   form.innerHtml=null
var data= JSON.parse(localStorage.getItem("products")) || []

data.push(det)


localStorage.setItem("products",JSON.stringify(data))
console.log(data)


}



function showProd(){
  window.location.href="inventory.html"
}


function details(t,d,p,i){
this.type=t,
this.desc=d,
this.price=p,
this.image=i
}