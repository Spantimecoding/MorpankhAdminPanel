//Query Filter Code - 
const itemCount = document.querySelector(".item-count")
itemCount.textContent = `Showing ${dataset.length} items`


console.log(dataset)

const searchInput = document.querySelector("#searchBox");

// 1️⃣ Restore from URL (on page load)
const params = new URLSearchParams(window.location.search);
const searchFromUrl = params.get("search");
let page = parseInt(params.get("page")) || 1;
document.querySelector(".page-num").textContent = page

if (searchFromUrl) {
  searchInput.value = searchFromUrl;
}

// 2️⃣ On change, redirect
searchInput.addEventListener("change", () => {
  const value = searchInput.value.trim();
  if (!value) return;
  const url = `/admin/products?search=${encodeURIComponent(value)}&page=${page}`;
  // store LAST orders URL
  localStorage.setItem("products_last_url", url);

  window.location.href =
    `/admin/products?page=${page}&search=${encodeURIComponent(value)}`;
});
const next = document.querySelector("#next")

next.addEventListener("click",()=>{
  const params = new URLSearchParams(window.location.search);
  let page = parseInt(params.get("page")) || 1;
  const search = params.get("search") || "";
  page++; // move to next page
  document.querySelector(".page-num").textContent = page
  window.location.href = `/admin/products?page=${page}&search=${encodeURIComponent(search)}`;

})
const prev = document.querySelector("#prev")

prev.addEventListener("click",()=>{
  const params = new URLSearchParams(window.location.search);
  let page = parseInt(params.get("page")) || 1;
  const search = params.get("search") || "";
  if(page == 1){
    window.showAlert("info","You are already on the 1st Page")
    return

  }else{
    page--
      document.querySelector(".page-num").textContent = page
  } // move to next page
  window.location.href = `/admin/products?page=${page}&search=${search}`;

})