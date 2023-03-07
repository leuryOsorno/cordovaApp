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
    clearObj();
    const divAlumnos = document.querySelector('.alumnos');
        listaAlumnos.forEach(alumno =>{
        const{id,nombre,apellido}= alumno;
          const parrafo = document.createElement('p');      parrafo.textContent = `${id} - ${nombre} - ${apellido} - `;      parrafo.dataset.id = id;
          const editarBoton = document.createElement('button');      editarBoton.onclick = () => cargarAlumno(alumno);      editarBoton.textContent = 'Editar';      editarBoton.classList.add('btn', 'btn-editar');      parrafo.append(editarBoton);
          const eliminarBoton = document.createElement('button');      eliminarBoton.onclick = () => eliminarAlumno(id);      eliminarBoton.textContent = 'Eliminar';      eliminarBoton.classList.add('btn', 'btn-eliminar');      parrafo.append(eliminarBoton);
          const hr = document.createElement('hr')
          divAlumnos.appendChild(parrafo)      
          divAlumnos.appendChild(hr)  
          })  
        }

}

clearObj = () => {
    objAlumno.id ='';
    objAlumno.name = '';
    objAlumno.lastName = '';
}


