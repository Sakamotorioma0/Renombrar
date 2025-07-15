
const inputFecha = document.getElementById("date");
const btGenerar = document.getElementById("generar");
const nombDoc = document.getElementById("nombreDocumento");
const inputNombre = document.getElementById("txtProyecto");
const selecTipo = document.getElementById("tipoDoc");

const selectSubTipDoc = document.getElementById("subDoc");
const inputEsp = document.getElementById("inputEspec");
const inputVer = document.getElementById("inputVer");

const editNomb = document.getElementById("optionEditNomb");
const divNomb = document.getElementById("divNombre");

const clickCopiar = document.getElementById("Copi");

const divAddCheck = document.getElementById("check");

const divSubProyecto = document.getElementById("divSubProyecto");

const checkSubProy = document.getElementById("checkSubProyecto");

//cramos el input para editar nombre

const inputNomEdit = document.createElement("input");
inputNomEdit.id = "editNombre";
inputNomEdit.type = "text";
inputNomEdit.setAttribute("Align", "end");

// creamos el label y input de sub Proyecto

const inputSubNomb = document.createElement("input");
inputSubNomb.id = "txtSubProyecto";
inputSubNomb.type = "text";


// creamos el div que contendra las opciones
const opselecSubTipdoc = document.createElement("div");
opselecSubTipdoc.id = "opSubDoc";
// creamos las opciones de Planos
const opArg = document.createElement("option");
const opEst = document.createElement("option");
const opCon = document.createElement("option");
const opIns = document.createElement("option");
const opRen = document.createElement("option");
const opAnt = document.createElement("option");

opArg.value = "1";
opArg.text = "Arquitectonico";
opArg.id = "planos";
opCon.value = "2";
opCon.text = "Constructivo";
opEst.value = "3";
opEst.text = "Estructural";
opIns.value = "4";
opIns.text = "Instalacion";
opRen.value = "5";
opRen.text = "Render";
opAnt.value = "6";
opAnt.text = "Anteproyecto";

// creamos las opciones de Costos
const opPresu = document.createElement("option");
const opCataCon = document.createElement("option");
const opGen = document.createElement("option");

opPresu.value = "1";
opPresu.text = "Presupuestos";
opPresu.id = "costos";
opCataCon.value = "2";
opCataCon.text = "Catalogo_de_Conceptos";
opGen.value = "3";
opGen.text = "Generador";

// creamos las opciones de reportes

const opRepFoto = document.createElement("option");
const opRep = document.createElement("option");

opRepFoto.value = "1";
opRepFoto.text = "Reporte_Fotografco";
opRepFoto.id = "reportes";
opRep.value = "2";
opRep.text = "Actividades";


// se crea el check de folio 
const divcheckFolio = document.createElement("div");
divcheckFolio.className = "form-check form-switch bg-info-subtle ";
divcheckFolio.id = "divcheck";
const inputCheckfolio = document.createElement("input");
inputCheckfolio.className = "form-check-input  ";
inputCheckfolio.type = "checkbox";
inputCheckfolio.role = "switch";
inputCheckfolio.id = "checkIndeterminate";
const labelCheckFolio = document.createElement("label");
labelCheckFolio.className = "form-check-label";
labelCheckFolio.for = "checkIndeterminate";
labelCheckFolio.innerText = "Usa Folio?";

divcheckFolio.appendChild(inputCheckfolio);
divcheckFolio.appendChild(labelCheckFolio);

// creamos el numerador de folio

const inputContFolio = document.createElement("input");
inputContFolio.type = "number";
inputContFolio.id = "inputFolio";
inputContFolio.min = "1";
inputContFolio.max = "99";
inputContFolio.setAttribute("oninput", "formatNumber(this)");
inputContFolio.placeholder = "Ej.01";



//////// funciones
function formatNumber(input) {
    // Convertir el valor a un número entero
    let value = parseInt(input.value, 10);

    // Añadir un cero inicial si es necesario y el valor está entre 1 y 9
    if (value >= 1 && value <= 9) {
        input.value = "0" + value; // Formato de dos dígitos
    } else if (value === 0) {
        input.value = ""; // Puedes decidir limpiar la entrada si es 0
    } else if (value > 99) {
        input.value = 99; // Limitar a 99 si el usuario intenta ir más allá
    }
}

inputNombre.addEventListener("change", function () {
    var indiceNom = inputNombre.value;
    if (indiceNom == "6") {
        divNomb.appendChild(inputNomEdit);


    } else {
        if (document.getElementById("editNombre")) {
            divNomb.removeChild(inputNomEdit);
        }

    }
});

checkSubProy.addEventListener("change", function () {
    if (checkSubProy.checked) {
        divSubProyecto.appendChild(inputSubNomb);
    } else {
        divSubProyecto.removeChild(inputSubNomb);
        inputSubNomb.value = "";
    }
});

inputCheckfolio.addEventListener("change", function () {
    if (inputCheckfolio.checked) {
        console.log('El checkbox está activo.');

        divAddCheck.appendChild(inputContFolio);


    } else {
        console.log('El checkbox no está activo.');
        divAddCheck.removeChild(inputContFolio);
    }
});

selecTipo.addEventListener("change", function () {
    var indice = selecTipo.value;
    switch (indice) {
        case "1":
            if (document.getElementById("opSubDoc")) {

                if (document.getElementById("costos")) {
                    opselecSubTipdoc.removeChild(opPresu);
                    opselecSubTipdoc.removeChild(opGen);
                    opselecSubTipdoc.removeChild(opCataCon);

                    opselecSubTipdoc.appendChild(opArg);
                    opselecSubTipdoc.appendChild(opCon);
                    opselecSubTipdoc.appendChild(opEst);
                    opselecSubTipdoc.appendChild(opIns);
                    opselecSubTipdoc.appendChild(opRen);
                    opselecSubTipdoc.appendChild(opAnt);

                    divAddCheck.appendChild(divcheckFolio);

                };

                if (document.getElementById("reportes")) {
                    opselecSubTipdoc.removeChild(opRepFoto);
                    opselecSubTipdoc.removeChild(opRep);

                    opselecSubTipdoc.appendChild(opArg);
                    opselecSubTipdoc.appendChild(opCon);
                    opselecSubTipdoc.appendChild(opEst);
                    opselecSubTipdoc.appendChild(opIns);
                    opselecSubTipdoc.appendChild(opRen);
                    opselecSubTipdoc.appendChild(opAnt);
                    divAddCheck.appendChild(divcheckFolio);

                };
                if (inputCheckfolio.checked) {
                    console.log('El checkbox está activo.');
                    divAddCheck.appendChild(inputContFolio);

                }

            } else {
                opselecSubTipdoc.appendChild(opArg);
                opselecSubTipdoc.appendChild(opCon);
                opselecSubTipdoc.appendChild(opEst);
                opselecSubTipdoc.appendChild(opIns);
                opselecSubTipdoc.appendChild(opRen);
                opselecSubTipdoc.appendChild(opAnt);


                selectSubTipDoc.appendChild(opselecSubTipdoc);
                divAddCheck.appendChild(divcheckFolio);

            };
            break;
        case "2":
            if (document.getElementById("opSubDoc")) {


                if (document.getElementById("planos")) {

                    opselecSubTipdoc.removeChild(opArg);
                    opselecSubTipdoc.removeChild(opCon);
                    opselecSubTipdoc.removeChild(opEst);
                    opselecSubTipdoc.removeChild(opIns);
                    opselecSubTipdoc.removeChild(opRen);
                    opselecSubTipdoc.removeChild(opAnt);

                    opselecSubTipdoc.appendChild(opPresu);
                    opselecSubTipdoc.appendChild(opGen);
                    opselecSubTipdoc.appendChild(opCataCon);

                    divAddCheck.removeChild(divcheckFolio);
                    if (inputCheckfolio.checked) {
                        console.log('El checkbox está activo.');
                        divAddCheck.removeChild(inputContFolio);

                    }

                };

                if (document.getElementById("reportes")) {
                    opselecSubTipdoc.removeChild(opRepFoto);
                    opselecSubTipdoc.removeChild(opRep);

                    opselecSubTipdoc.appendChild(opPresu);
                    opselecSubTipdoc.appendChild(opGen);
                    opselecSubTipdoc.appendChild(opCataCon);

                };


            } else {
                opselecSubTipdoc.appendChild(opPresu);
                opselecSubTipdoc.appendChild(opGen);
                opselecSubTipdoc.appendChild(opCataCon);

                selectSubTipDoc.appendChild(opselecSubTipdoc);

            };


            break;
        case "3":
            if (document.getElementById("opSubDoc")) {


                if (document.getElementById("planos")) {
                    opselecSubTipdoc.removeChild(opArg);
                    opselecSubTipdoc.removeChild(opCon);
                    opselecSubTipdoc.removeChild(opEst);
                    opselecSubTipdoc.removeChild(opIns);
                    opselecSubTipdoc.removeChild(opRen);
                    opselecSubTipdoc.removeChild(opAnt);

                    opselecSubTipdoc.appendChild(opRepFoto);
                    opselecSubTipdoc.appendChild(opRep);
                    divAddCheck.removeChild(divcheckFolio);
                    if (inputCheckfolio.checked) {
                        console.log('El checkbox está activo.');
                        divAddCheck.removeChild(inputContFolio);

                    }

                };
                if (document.getElementById("costos")) {

                    opselecSubTipdoc.removeChild(opPresu);
                    opselecSubTipdoc.removeChild(opGen);
                    opselecSubTipdoc.removeChild(opCataCon);

                    opselecSubTipdoc.appendChild(opRepFoto);
                    opselecSubTipdoc.appendChild(opRep);

                };


            } else {

                opselecSubTipdoc.appendChild(opRepFoto);
                opselecSubTipdoc.appendChild(opRep);

                selectSubTipDoc.appendChild(opselecSubTipdoc);

            };
            break;

    };
});

btGenerar.addEventListener('click', function () {
    var indice = selecTipo.selectedIndex;
    var opcionSeleccionada = selecTipo.options[indice];

    var indiceSub = selectSubTipDoc.selectedIndex;
    var opcionSeleccionadasub = selectSubTipDoc.options[indiceSub];

    var indiceNom = inputNombre.selectedIndex;
    const opproyecto = inputNombre.options[indiceNom];

    const subproyecto = inputSubNomb.value;
    const especi = inputEsp.value;
    const version = inputVer.value;

    //creamos un comparador parea el valor a leer en caso de que se seleccione la opcion edit en çnombre

    if (inputNombre.value == "6") {
        const proyecto = inputNomEdit.value;
        if (indice == "1") {

            if (checkSubProy.checked) {
                if (inputCheckfolio.checked) {
                    nombDoc.textContent = inputFecha.value + "-" + proyecto.replace(/ /g, "_") + "_" + opcionSeleccionada.text + "_" + subproyecto.replace(/ /g, "_") + "_" + opcionSeleccionadasub.text + "_" + inputContFolio.value + "_" + especi.replace(/ /g, "_") + "_v" + version;
                } else {
                    nombDoc.textContent = inputFecha.value + "-" + proyecto.replace(/ /g, "_") + "_" + opcionSeleccionada.text + "_" + subproyecto.replace(/ /g, "_") + "_" + opcionSeleccionadasub.text + "_" + especi.replace(/ /g, "_") + "_v" + version;
                };

            } else {

                if (inputCheckfolio.checked) {
                    nombDoc.textContent = inputFecha.value + "-" + proyecto.replace(/ /g, "_") + "_" + inputContFolio.value + "_" + opcionSeleccionadasub.text + "_" + especi.replace(/ /g, "_") + "_v" + version;
                } else {
                    nombDoc.textContent = inputFecha.value + "-" + proyecto.replace(/ /g, "_") + "_" + opcionSeleccionada.text + "_" + opcionSeleccionadasub.text + "_" + especi.replace(/ /g, "_") + "_v" + version;
                };

            };




        } else {
            if (checkSubProy.checked) {
                nombDoc.textContent = inputFecha.value + "-" + proyecto.replace(/ /g, "_") + "_" + opcionSeleccionada.text + "_" + subproyecto.replace(/ /g, "_") + "_" + opcionSeleccionadasub.text + "_" + especi.replace(/ /g, "_") + "_v" + version;
            } else {
                nombDoc.textContent = inputFecha.value + "-" + proyecto.replace(/ /g, "_") + "_" + opcionSeleccionada.text + "_" + "_" + opcionSeleccionadasub.text + "_" + especi.replace(/ /g, "_") + "_v" + version;
            };

        };
    } else {
        const proyecto = opproyecto.text;

        if (indice == "1") {

            if (checkSubProy.checked) {
                if (inputCheckfolio.checked) {
                    nombDoc.textContent = inputFecha.value + "-" + proyecto.replace(/ /g, "_") + "_" + opcionSeleccionada.text + "_" + subproyecto.replace(/ /g, "_") + "_" + opcionSeleccionadasub.text + "_" + inputContFolio.value + "_" + especi.replace(/ /g, "_") + "_v" + version;
                } else {
                    nombDoc.textContent = inputFecha.value + "-" + proyecto.replace(/ /g, "_") + "_" + opcionSeleccionada.text + "_" + subproyecto.replace(/ /g, "_") + "_" + opcionSeleccionadasub.text + "_" + especi.replace(/ /g, "_") + "_v" + version;
                };

            } else {

                if (inputCheckfolio.checked) {
                    nombDoc.textContent = inputFecha.value + "-" + proyecto.replace(/ /g, "_") + "_" + inputContFolio.value + "_" + opcionSeleccionadasub.text + "_" + especi.replace(/ /g, "_") + "_v" + version;
                } else {
                    nombDoc.textContent = inputFecha.value + "-" + proyecto.replace(/ /g, "_") + "_" + opcionSeleccionada.text + "_" + opcionSeleccionadasub.text + "_" + especi.replace(/ /g, "_") + "_v" + version;
                };

            };

        } else {
            if (checkSubProy.checked) {
                nombDoc.textContent = inputFecha.value + "-" + proyecto.replace(/ /g, "_") + "_" + opcionSeleccionada.text + "_" + subproyecto.replace(/ /g, "_") + "_" + opcionSeleccionadasub.text + "_" + especi.replace(/ /g, "_") + "_v" + version;
            } else {
                nombDoc.textContent = inputFecha.value + "-" + proyecto.replace(/ /g, "_") + "_" + opcionSeleccionada.text + "_" + "_" + opcionSeleccionadasub.text + "_" + especi.replace(/ /g, "_") + "_v" + version;
            };

        };
    }
});

clickCopiar.addEventListener("click", async () => {

    var txtCopi = nombDoc.innerText;
    try {
        await navigator.clipboard.writeText(txtCopi);
        appendAlert('Texto copiado en portales exitosamente', 'success');


    } catch (err) {

        appendAlert('No se a podido copiar el texto', 'success');


    };

});

//alert de copiado
const alertPlaceholder = document.getElementById('liveAlertPlaceholder')
const appendAlert = (message, type) => {
    const wrapper = document.createElement('div');
    wrapper.innerHTML = [
        `<div class="alert alert-${type} alert-dismissible" role="alert">`,
        `   <div>${message}</div>`,
        '   <button  type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
        '</div>'
    ].join('');



    alertPlaceholder.append(wrapper);
};

