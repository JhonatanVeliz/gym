// Valores para las variables
// buttom
const btnSubmit = document.querySelector('#btn-submit');

//form
const form = document.querySelector('#form');

// Alert

let userAlert = document.querySelector('#alert');

// Inputs
const userName = document.querySelector('#name');
const userPhone = document.querySelector('#phone');
const userSelect = document.querySelector('#plan');

// Delcaración de funciones

const valido = () => {

    const tel = 50250670910;
    let userN = userName.value;
    let userP = userPhone.value;
    let userS = userSelect.options[userSelect.selectedIndex].text;

    const url = `https://api.whatsapp.com/send?phone=${tel}&text=
        *_${userN} desea inscribirse a ENERGYM_*%0A
        *_Nombre:_*%0A
        ${userN}%0A%0A
        *Celular:*%0A
        ${userP}%0A%0A
        *_PlAN ELEGIDO_:*%0A
        ${userS}%0A`;

    window.open(url);

    setTimeout( ()=> {
        form.reset();
    },1000);
};

const noValido = () => {
    userAlert.innerHTML = 'Porfavor ! Llenar todos los campos';
    userAlert.classList.add('resultSee');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
    });
};

// Invocación de las funciones 
// activa la validación del formulario
btnSubmit.addEventListener('click', () => {
    if(userName.value === '' || userPhone.value === '' || userSelect=== ''){
        noValido();
    }else{
        valido();
    };
});
// README PLASE !!!
// intente usar un foreach para ejecutar la condición y asi mejorar el performance del codigo pero no se por que me aparecia un bug que consistia en volver a ejecutar el foreach sin que yo le diera click, y como el form se reseteaba, el foreach ejecutaba otra vez y esta vez caida a la condición donde se cumplia el input vacío...