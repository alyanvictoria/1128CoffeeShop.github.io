function customizeNow() {
    var Name = document.getElementById("name").value;
    var Address = document.getElementById("address").value;
    var Drink = document.getElementById("drink").value;
    var sweetnessLevel = document.getElementById("sweetness-level").value;
    var addons = document.getElementById("addons").value;
    var result = `<strong>Name:</strong> ${Name}<br>`;
    result += `<strong>Address:</strong> ${Address}<br>`;
    result += `<strong> Drink:</strong> ${Drink}<br>`;
    result += `<strong>Sweetness Level:</strong> ${sweetnessLevel}<br>`;
    if (addons) {
        result += `<strong>Add-ons:</strong> ${addons}`;
    } else {
        result += "<strong>No Add-ons</strong>";
    }
    document.getElementById("result").innerHTML = result;
    document.getElementById("orderButton").style.display = "block";
}

document.getElementById("orderButton").onclick = function() {
    alert("Your order has been placed! Enjoy your customized milk tea!");
};
