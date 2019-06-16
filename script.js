const color1           = document.querySelector(".color1");
const color2           = document.querySelector('.color2');
const CSSCode          = document.querySelector('.CSSCode');
const body             = document.querySelector('.background');

const changeBackgroundColor = () =>{

    /*  If user sets the gradient to be completely black,
        change the text color to white to ensure readability
    */
    if((color1.value === '#000000') || (color2.value === '#000000')){

        body.style.color = '#ffffff';
    } else {

        body.style.color = '#000000';
    }

    body.style.background  = `linear-gradient(to right,${color1.value},${color2.value})`;
    CSSCode.textContent    = `background: linear-gradient(to right, ${color1.value}, ${color2.value});`;
}

color1.addEventListener('input',changeBackgroundColor);
color2.addEventListener('input',changeBackgroundColor);

