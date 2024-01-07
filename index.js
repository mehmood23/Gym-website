//document.querySelector("btn") = onclick();

var cart = [];

function addtoCart(item, qty) {
    var magenicVendor = cart.find(vendor => vendor['item'] === item); //checking if the item is already present
    if (magenicVendor) {
        cart.map((cit, index) => {
            if (cit.item === item) {
                cart[index].Quantity = cit.Quantity + qty;  //updating the cart item value
            }
        });
    }
    else {
        cart.push({ "item": item, "Quantity": qty });  //adding to cart
    }
    alert("Your " + item + " added successfully to cart !");
    document.getElementById("Total_Items").innerText = cart.length;
    localStorage.setItem("CartData", JSON.stringify(cart));  //setting the item in String as the data need to be stored in local storage.

}
function cartDetails() {
    var cartDetails=localStorage.getItem("CartData");
    cartDetails=JSON.parse(cartDetails)  //converting data from string to original form
    var table = document.createElement('table');
    var tr = document.createElement('tr');

        var td1 = document.createElement('td');
        var td2 = document.createElement('td');

        var text1 = document.createTextNode("Description");
        var text2 = document.createTextNode("Quantity");

        td1.appendChild(text1); 
        td2.appendChild(text2);
        tr.appendChild(td1);
        tr.appendChild(td2);

        table.appendChild(tr);
    for (var i = 0; i < cartDetails.length-1; i++) {
        var tr = document.createElement('tr');

        var td1 = document.createElement('td');
        var td2 = document.createElement('td');

        var text1 = document.createTextNode(cartDetails[i].item);
        var text2 = document.createTextNode(cartDetails[i].Quantity);

        td1.appendChild(text1);
        td2.appendChild(text2);
        tr.appendChild(td1);
        tr.appendChild(td2);

        table.appendChild(tr);
    }
    document.getElementById('cart_details').appendChild(table);
}