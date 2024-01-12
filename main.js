
//  function addRedBorder()
//  {     // element = document.querySelector("#" + id);
//      element.style.border = "5px solid red"
//  }
const ingressos = [];

function highlightCard(selector){
    var element = document.querySelector(selector);
    element.classList.toggle("card-highLight")
}

function checkKeyboardCode(){
    document.addEventListener('keydown', (event) => {
        var name = event.key;
        var code = event.code;
        alert(`Key pressed ${name} \r\n Key code value: ${code}`);
    }, false);
}
function addKeyboardEventListeners(){
    document.addEventListener('keydown', (event) => {
        var ingresso1 = document.getElementById("quinta");
        var ingresso2 = document.getElementById("sexta");
        var ingresso3 = document.getElementById("sabado");
        var ingresso4 = document.getElementById("domingo");

        var code = event.code;
        if (code == 'Numpad1'){
            ingresso1.classList.toggle("card-highLight");
            ingresso2.classList.remove("card-highLight");
            ingresso3.classList.remove("card-highLight");
            ingresso4.classList.remove("card-highLight");   
        }
        if (code == 'Numpad2'){
            ingresso1.classList.remove("card-highLight");
            ingresso2.classList.toggle("card-highLight");
            ingresso3.classList.remove("card-highLight");
            ingresso4.classList.remove("card-highLight");
        }
        if (code == 'Numpad3'){
            ingresso1.classList.remove("card-highLight");
            ingresso2.classList.remove("card-highLight");
            ingresso3.classList.toggle("card-highLight");
            ingresso4.classList.remove("card-highLight");
        }
        if (code == 'Numpad4'){
            ingresso1.classList.remove("card-highLight");
            ingresso2.classList.remove("card-highLight");
            ingresso3.classList.remove("card-highLight");
            ingresso4.classList.toggle("card-highLight");
        }

    }, false);
}addKeyboardEventListeners()

selectCard = (selector) => {
    var element = document.querySelector(selector);
    element.classList.toggle("card-selected");
    if(ingressos.includes(selector)) ingressos.pop(selector);
    else ingressos.push(selector)
}

showSelectedCards = () =>
{
    if (ingressos.length > 0) alert("Ingresos Selecionados:" + ingressos);
}



// function addKeyboardEventListeners()
// {
//     document.addEventListener('keydown', (event) => {
//         var ingresso1 = document.getElementById("quinta");
//         var ingresso2 = document.getElementById("sexta");
//         var ingresso3 = document.getElementById("sabado");
//         var ingresso4 = document.getElementById("domingo");

//         var code = event.code;
//         if(code== 'Digit1')
//     }
    
// }