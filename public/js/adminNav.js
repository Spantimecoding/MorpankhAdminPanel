const topbar_text = document.querySelector(".topbar-text")
const nav_text = document.querySelectorAll("a")
topbar_text.insertAdjacentHTML("beforeend", localStorage.getItem("display"))
const topbar = document.querySelector(".topbar")
lucide.createIcons()

function showAlert(type, message,size=350) {
  const alertDiv = document.createElement("div")
  alertDiv.className = "alert"
  if(type == "success"){
    alertDiv.innerHTML = `<i data-lucide="circle-check" class = "alert-icon"></i><span class = "alert-txt">${message}</span>`
    alertDiv.style.background = "var(--alert-success-bg)"
    alertDiv.style.color = "var(--alert-success-text)"
    alertDiv.style.border = "var(--alert-success-border)"
    if(size != 350){
      if(size == "large"){
        alertDiv.style.width = "400"
        
      }
    }

  }else if(type == "info"){
    alertDiv.innerHTML = `<i data-lucide="info" class = "alert-icon"></i><span class = "alert-txt">${message}</span>`
    alertDiv.style.background = "var(--alert-info-bg)"
    alertDiv.style.color = "var(--alert-info-text)"
    alertDiv.style.border = "var(--alert-info-border)"
    if(size != 350){
      if(size == "large"){
        alertDiv.style.width = "400"
        
      }
    }
  }
  else if(type == "danger"){
    alertDiv.innerHTML = `<i data-lucide="circle-x" class = "alert-icon"></i><span class = "alert-txt">${message}</span>`
    alertDiv.style.background = "var(--alert-danger-bg)"
    alertDiv.style.color = "var(--alert-danger-text)"
    alertDiv.style.border = "var(--alert-danger-border)"
    if(size !== 350){
      if(size == "large"){
        alertDiv.style.width = "450"
        
      }
    }
  }
  else if(type == "warning"){
    alertDiv.innerHTML = `<i data-lucide="circle-alert" class = "alert-icon"></i><span class = "alert-txt">${message}</span>`
    alertDiv.style.background = "var(--alert-warning-bg)"
    alertDiv.style.color = "var(--alert-warning-text)"
    alertDiv.style.border = "var(--alert-warning-border)"
    if(size !== 350){
      if(size == "large"){
        alertDiv.style.width = "450"
        
      }
    }
  }

  topbar.appendChild(alertDiv)
  lucide.createIcons({ root: alertDiv })
  
setTimeout(() => {
  alertDiv.classList.add("show")
}, 10)

  setTimeout(() => {
    alertDiv.remove()
  }, 2000)
}
window.showAlert = showAlert
const orders = document.querySelector(".orders")
orders.addEventListener("click",(e)=>{
  e.preventDefault();
   const lastOrdersUrl =
    localStorage.getItem("orders_last_url") || "/admin/orders";
    console.log(lastOrdersUrl)

  window.location.href = lastOrdersUrl;


})
const products = document.querySelector(".products")
products.addEventListener("click",(e)=>{
  e.preventDefault();
   const lastProductsUrl =
    localStorage.getItem("products_last_url") || "/admin/products/allProducts";

  window.location.href = lastProductsUrl;


})


