const update = document.querySelector(".update")
const order = document.querySelector("#order")
const payment = document.querySelector("#payment")
const updateObject = {
    orderStatus : order.value,
    orderTotal : window.orderTotal,
    orderID : window.orderID,
    paymentStatus : payment.value,
    prevPayment : window.prevPayment,
    prePaid : true,
    pstsChange : false,
    ostsChange : false,
    paymentRemain : window.paymentRemain
}
order.addEventListener("change",()=>{
    updateObject.orderStatus = order.value
    updateObject.ostsChange = true
    
})
payment.addEventListener("change",()=>{
    if(payment.value == "paid"){
        updateObject.paymentStatus = payment.value
        updateObject.prePaid = false
        updateObject.pstsChange = true

    }
    

})
update.addEventListener("click",()=>{
    async function updateStatus(){
                try {
                    const response = await fetch(`/admin/orders/updateStatus`, {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(updateObject)
                    });
                    const result = await response.json()
                    if(!response.ok){
                        throw new Error("Order failed");
                    }
                    window.showAlert("success","Order Status Successfully Updated")


                } catch(err) {
                    console.log("Error:", err)
                    window.showAlert("danger","Order Status Updation Failed")
                }
            }
            updateStatus()
})