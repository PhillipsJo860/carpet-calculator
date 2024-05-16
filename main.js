document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked () {

    //Input
    let num1 = +document.getElementById("length").value;
    let num2 = +document.getElementById("width").value;
    let num3 = +document.getElementById("price").value;
    //Process
    let total = num1 * num2 * num3;

    //Output
    // const formattedPrice = `Total: $${price. toFixed(2)}`
    document.getElementById("output").innerHTML = `Carpet Price (Per sq. ft.): $${total.toFixed(2)}`;
}