const { validateProjectName } = require("cordova-android/lib/create");

let listaAlumnos = [];
const objAlumno = {
    id: 0,
    name: '',
    lastName: ''
}

let is_edit = false;
const formulario = document.querySelector('#froml');
const nameText = document.querySelector('#name');
const lastNameText = document.querySelector('#lastName');
const btnsabe = document.querySelector('#saveData');

formulario.addEventListener('submint',
    valiteForm
)

validateForm = (e) => {
    e.preventDefault();
    if (nameText.value === '' || lastNameText.value === '') {
        alert('Los campos son obligatorios');
        return;
    }
    if (is_edit) {
        alumnsEdit();
        is_edit = false;
    } else {
        objAlumno.id = Date.now().getTime();
        objAlumno.name = nameText.value;
        objAlumno.lastName = lastNameText.value;
        addAlumns();
    }
}

addAlumns = () => {
    listaAlumnos.push({ ...objAlumno });
    showAlumns();
    formulario.reset();
    clearObj();
}

showAlumns = () => {

}
clearObj = () => {
    objAlumno.id ='';
    objAlumno.name = '';
    objAlumno.lastName = '';
}