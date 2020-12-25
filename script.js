
selectType = (form) => {
     let checkout = form.checkout;
     let city = form.city;
     let streetAddress = form['street-address'];
     let flat = form.flat;
     let floor = form.floor;
     let storeAddress = form['store-address'];
     let message1 = form.message1;
     let message2 = form.message2;
    if(checkout.value === "pickup"){
        document.querySelector(".address-container").style.display ="flex";
        document.querySelector(".address-container").style.justifyContent="space-around";
        document.querySelector("#store-address").style.width="15rem";
        document.querySelector(".customer-address").style.display = "none";
        document.getElementById("message1").innerHTML = "";
        document.getElementById("message2").innerHTML = "";
    }
    if(checkout.value === "courier"){
        document.querySelector(".customer-address").style.display = "flex";
        document.querySelector(".customer-address").style.justifyContent="space-around";
        document.querySelector(".entry input").style.width = "15rem";
        document.querySelector(".address-container").style.display = "none";
        document.getElementById("message1").innerHTML = "";
        document.getElementById("message2").innerHTML = "";
    }


}

checkValues = (form) => {
    let checkout = form.checkout;
    let city = document.getElementById("city");
    let streetAddress = document.getElementById("street-address");
    let flat = document.getElementById("flat");
    let floor = document.getElementById("floor");
    let storeAddress = document.getElementById("store-address");
    let message1 = document.getElementById("message1");
    let message2 = document.getElementById("message2");

    if(!checkout.value){
            alert("Please select delivery type");
            return false;
        }
    if(checkout.value === "pickup"){
        if(storeAddress.value === "Studencheskaya, 42"){
            document.getElementById("message1").innerHTML = "You can pickup your order at " + storeAddress.value;
            return false;
        }
        if(storeAddress.value === "Pesochnaya, 15"){
            document.getElementById("message1").innerHTML = "You can pickup your order at " + storeAddress.value;
            return false;
        }
        if(storeAddress.value === "Pushkinskaya, 68"){
            document.getElementById("message1").innerHTML = "You can pickup your order at " + storeAddress.value;
            return false;
        }
        return false;
}

    if(checkout.value === "courier"){
    if(city.value === ""){
        alert("Please enter city");
        return false;
    }
    if(streetAddress.value === ""){
        alert("Please enter street address");
        return false;
    }
    if(!floor.value){
        alert("please select floor");
        return false;
    }
    if(floor.value < 1 || floor.value > 100){
        alert("invalid floor number");
        return false;
    }
    document.getElementById("message2").innerHTML = "Your order will arrive soon!"
    return false;
}

}