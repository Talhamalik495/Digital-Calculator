const val = (b) => {
    document.getElementById("input_plus_past").value += b;
}


const solve = () => {
    let a = document.getElementById("input_plus_past").value
    let c = eval(a)
    document.getElementById("input_plus_past").value = c;
}
const clr = () => {
    document.getElementById("input_plus_past").value = " ";
}
