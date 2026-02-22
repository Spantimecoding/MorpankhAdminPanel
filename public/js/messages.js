const messageType = document.querySelector("#messageType")

messageType.addEventListener("change",()=>{
    if(messageType.value == "single"){
        const groupBox = document.querySelector("#group-box-message")
        const clientBox = document.querySelector("#client-box")
        groupBox.querySelector("select").disabled = true
        groupBox.classList.add("hide")
        clientBox.classList.remove("hide")
        clientBox.querySelector("input").disabled = false
    }else{
        const groupBox = document.querySelector("#group-box-message")
        const clientBox = document.querySelector("#client-box")
        clientBox.classList.add("hide")
        clientBox.querySelector("input").disabled = true
        groupBox.querySelector("select").disabled = false
        groupBox.classList.remove("hide")
    }
})
const messageSend = document.querySelector("#message-send")
messageSend.addEventListener("click",()=>{
    const blurBox = document.querySelector(".group-and-message")
    blurBox.classList.add("blur")
    const confirmBox = document.querySelector(".confirm-box")
    confirmBox.style.display = "block"
})
document.querySelector(".confirm").addEventListener("click",()=>{
    document.querySelector(".client-add-form").submit()
})
document.querySelector(".back").addEventListener("click",()=>{
    const blurBox = document.querySelector(".group-and-message")
    blurBox.classList.remove("blur")
    const confirmBox = document.querySelector(".confirm-box")
    confirmBox.style.display = "none"

})