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

// ----- Order Status Change -----
order.addEventListener("change",()=>{
    updateObject.orderStatus = order.value

    if(order.value !== updateObject.orderStatus){
        updateObject.ostsChange = true
    } else {
        updateObject.ostsChange = true
    }
})

// ----- Payment Status Change -----
payment.addEventListener("change",()=>{
    updateObject.paymentStatus = payment.value

    if(payment.value !== updateObject.prevPayment){
        updateObject.pstsChange = true
    } else {
        updateObject.pstsChange = false
    }

    if(payment.value === "paid"){
        updateObject.prePaid = false
    }
})

// ----- Update Click -----
update.addEventListener("click",()=>{

    if(update.disabled) return
    update.disabled = true

    async function updateStatus(){
        try {

            const response = await fetch(`/admin/orders/updateStatus`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(updateObject)
            })

            const result = await response.json()

            if(!response.ok){
                throw new Error(result.message || "Order failed")
            }

            window.showAlert("success","Order Status Successfully Updated")

        } catch(err) {

            console.log("Error:", err)
            window.showAlert("danger","Order Status Updation Failed")

        } finally {
            update.disabled = false
        }
    }

    updateStatus()
})
