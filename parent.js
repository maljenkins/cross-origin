const childIframe = document.getElementById("pardotIframe");
const parentInput = document.getElementById("parentInput");




parentInput.addEventListener("input", sendMessage);

function sendMessage() {
    let parentInputValue = parentInput.value;
    let win = childIframe.contentWindow;
    let message = { email: parentInputValue };
    let sendIt = win.postMessage(message, '*');
}






// childIframe.onload = () => {
//     parentInput.addEventListener("change", sendMessage);
// }


// function sendMessage(e) {
//     let message = { email: parentInputValue };
//     childIframe.postMessage(message, '*');
// }