function login(){
    // input $ value
    let inpElement = document.querySelector('input');
    console.log(inpElement);
    let inpValue = inpElement.value;
    console.log(inpValue);
    // h1 $ span
    let helloName = document.querySelector('h1 > span')
    console.log(helloName);
    helloName.innerHTML= inpValue;
}
   