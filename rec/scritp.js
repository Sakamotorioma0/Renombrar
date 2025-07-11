

const inputFecha = document.getElementById("date");
const btGenerar = document.getElementById("generar");
const nombDoc = document.getElementById("nombreDocumento");
const inputNombre = document.getElementById("txtProyecto");
const selecTipo = document.getElementById("tipoDoc");
const inputSubNomb = document.getElementById("txtSubProyecto");
const selecSubDoc = document.getElementById("labelSubdoc");

const selectSubTipDoc = document.getElementById("subDoc");
const inputEsp = document.getElementById("inputEspec");
const inputVer = document.getElementById("inputVer");

const clickCopiar= document.getElementById("Copi");


/* Delcaro los select y las option  

// inicio declarando las opciones de Planos
const selectSubTipoPlanos = document.createElement("select");
selectSubTipoPlanos.id = "SubDocPlanos";

const opArg = document.createElement("option");
const opEst = document.createElement("option");
const opCon = document.createElement("option");
const opIns = document.createElement("option");
const opRen= document.createElement("option");

opArg.value = "1";
opArg.text = "Arquitectonico";
opCon.value = "2";
opCon.text = "Constructivo";
opEst.value = "3";
opEst.text = "Estructural";
opIns.value = "4";
opIns.text = "Instalacion";
opRen.value= "5";
opRen.text="Render";

//Declaracion de select y  option de 

const selectSubTipoCostos=document.createElement("Select");
selectSubTipoCostos.id = "SubDocCostos";

const opPresu=document.createElement("option");
const opCataCon=document.createElement("option");
const opGen=document.createElement("option");

opPresu.value="1";
opPresu.text="Presupuestos";
opCataCon.value="2";
opCataCon.text="Catalogo_de_Conceptos";
opGen.value="3";
opGen.text="Generador";

/* termina declaracion */

/*selecTipo.addEventListener("click", function (event) {
     var indice = selecTipo.selectedIndex;

    if (indice == "1") {
        

        if (document.getElementById("SubDocPlanos")) {
            var indicePlan = selectSubTipoPlanos.selectedIndex;
            opSubTipoDoc = selectSubTipoPlanos.options[indicePlan];

        } else {
            selectSubTipoPlanos.appendChild(opArg);
            selectSubTipoPlanos.appendChild(opCon);
            selectSubTipoPlanos.appendChild(opEst);
            selectSubTipoPlanos.appendChild(opIns);
            selectSubTipoPlanos.appendChild(opRen);

            selecSubDoc.appendChild(selectSubTipoPlanos);
            

        };


    };
    if (indice == "2"){

        
        if(document.getElementById("SubDocCostos")){
            var indiceCos = selectSubTipoCostos.selectedIndex;
            opSubTipoDoc = selectSubTipoCostos.options[indiceCos];

        }else{
           
            selectSubTipoCostos.appendChild(opPresu);
            selectSubTipoCostos.appendChild(opCataCon);
            selectSubTipoCostos.appendChild(opGen);

            selecSubDoc.appendChild(selectSubTipoCostos);

        };
    };
    

});*/

// creamos el div que contendra las opciones
const opselecSubTipdoc = document.createElement("div");
opselecSubTipdoc.id = "opSubDoc";
// creamos las opciones de Planos
const opArg = document.createElement("option");
const opEst = document.createElement("option");
const opCon = document.createElement("option");
const opIns = document.createElement("option");
const opRen = document.createElement("option");

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
opRep.text = "Reportes";


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

                };

                if (document.getElementById("reportes")) {
                    opselecSubTipdoc.removeChild(opRepFoto);
                    opselecSubTipdoc.removeChild(opRep);

                    opselecSubTipdoc.appendChild(opArg);
                    opselecSubTipdoc.appendChild(opCon);
                    opselecSubTipdoc.appendChild(opEst);
                    opselecSubTipdoc.appendChild(opIns);
                    opselecSubTipdoc.appendChild(opRen);

                };

            } else {
                opselecSubTipdoc.appendChild(opArg);
                opselecSubTipdoc.appendChild(opCon);
                opselecSubTipdoc.appendChild(opEst);
                opselecSubTipdoc.appendChild(opIns);
                opselecSubTipdoc.appendChild(opRen);

                selectSubTipDoc.appendChild(opselecSubTipdoc);

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

                    opselecSubTipdoc.appendChild(opPresu);
                    opselecSubTipdoc.appendChild(opGen);
                    opselecSubTipdoc.appendChild(opCataCon);



                };

                if (document.getElementById("reportes")) {
                    opselecSubTipdoc.removeChild(opRepFoto);
                    opselecSubTipdoc.removeChild(opRep);

                    opselecSubTipdoc.appendChild(opPresu);
                    opselecSubTipdoc.appendChild(opGen);
                    opselecSubTipdoc.appendChild(opCataCon);

                };


                opselecSubTipdoc.appendChild(opPresu);
                opselecSubTipdoc.appendChild(opGen);
                opselecSubTipdoc.appendChild(opCataCon);

                selectSubTipDoc.appendChild(opselecSubTipdoc);

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

                    opselecSubTipdoc.appendChild(opRepFoto);
                    opselecSubTipdoc.appendChild(opRep);

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


    const proyecto = inputNombre.value;
    const subproyecto = inputSubNomb.value;
    const especi = inputEsp.value;
    const version = inputVer.value;


    nombDoc.textContent = inputFecha.value + "-" + proyecto.replace(/ /g, "_") + "_" + opcionSeleccionada.text + "_" + subproyecto.replace(/ /g, "_") +"_"+ opcionSeleccionadasub.text + "_" + especi.replace(/ /g, "_") + "_v" + version;

});

clickCopiar.addEventListener("click", async()=>{

    var txtCopi = nombDoc.innerText;
    try{
        await navigator.clipboard.writeText(txtCopi);

    }catch (err){

    };

});