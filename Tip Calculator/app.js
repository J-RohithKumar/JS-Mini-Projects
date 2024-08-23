let bill_amount = document.getElementById("billAmount");
let percentage_tip = document.getElementById("percentageTip");
let tip_amount = document.getElementById("tipAmount");
let total_amount = document.getElementById("totalAmount");
let error_msg = document.getElementById("errorMessage");

function myfunction() {
    let a = bill_amount.value;
    let b = percentage_tip.value;
    if (a === "" || b === "") {
        error_msg.textContent = "Please Enter a Valid Input.";
    } else {
        let x = (parseInt(b) / 100) * parseInt(a);
        tip_amount.value = x;
        console.log(tip_amount.value);
        total_amount.value = parseInt(a) + x;
        error_msg.textContent = "";
    }
}