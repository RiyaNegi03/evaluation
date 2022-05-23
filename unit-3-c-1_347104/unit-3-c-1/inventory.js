var data= JSON.parse(localStorage.getItem("products")) || []
var all_products= document.getElementById("all_products")



data.forEach(function(el,index){

var container=document.createElement("div")
container.setAttribute("id","container")

var image=document.createElement("img")
image.src= el.image

var type1=document.createElement("p")
type1.innerText=el.type

var desc1=document.createElement("p")
desc1.innerText=el.desc

var price1=document.createElement("p")
price1.innerText=el.price

// var btn=document.getElementById("remove_product")
// btn.innerText="Remove"
var btn=document.createElement("button")
btn.setAttribute("id","remove_product")
btn.innerText="Remove"
btn.addEventListener("click",function(){
    remove_prod(el,index)
})

container.append(image,type1,desc1,price1,btn)

all_products.append(container)

})

function remove_prod(el,index){
data.splice(index,1)
localStorage.setItem("products",JSON.stringify(data))
window.location.reload()

}



function addMoreProd(){
  window.location.href="index.html"
}