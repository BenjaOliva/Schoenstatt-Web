
const submit = document.getElementById('submit');
var rootRef = database.ref()

const url = document.getElementById('url');
const MisaLS = document.getElementById('MisaLS');
const MisaD = document.getElementById('MisaD');
const Donaciones = document.getElementById('Donaciones');
const Santeria = document.getElementById('Santeria');
const Confesiones = document.getElementById('Confesiones');

const cancel = document.getElementById('cancel');
const ejemplo = document.getElementById('ejemplo');


var ref = firebase.database().ref();
ref.once('value')
    .then(function(snapshot){
        Donaciones.value = snapshot.child('Donaciones').val();
        url.value = snapshot.child('url').val();
        Santeria.value = snapshot.child('Santeria').val();
        MisaLS.value = snapshot.child('LunesSabado').val();
        MisaD.value = snapshot.child('Domingo').val();
        Confesiones.value = snapshot.child('Confesiones').val();
    });

//Prevent refresh
var form = document.getElementById("myForm");
function handleForm(event) { event.preventDefault(); } 
form.addEventListener('submit', handleForm);

//Login task
$('#loginForm').submit(
    function(event){
        event.preventDefault();
        login();
        document.getElementById("loginForm").reset();
});


firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        // User is signed in.
        console.log('Sesion Iniciada')
        $('#modalForm').modal('show')
    } else {
        // No user is signed in.
        console.log('Sin sesion')
    }
});

function login() {

    var userEmail = document.getElementById("email_field").value;
    var userPass = document.getElementById("password_field").value;

    firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;

        //window.alert("Error : " + errorMessage);
        toastr.options = {
            "closeButton": true,
            "debug": false,
            "newestOnTop": false,
            "progressBar": true,
            "positionClass": "toast-top-center",
            "preventDuplicates": true,
            "onclick": null,
            "showDuration": "300",
            "hideDuration": "1000",
            "timeOut": "5000",
            "extendedTimeOut": "1000",
            "showEasing": "swing",
            "hideEasing": "linear",
            "showMethod": "fadeIn",
            "hideMethod": "fadeOut"
        }

        toastr["error"]("El usuario que ingreso no esta autorizado.", "Error de Usuario!")


    });

}

function logout() {
    firebase.auth().signOut();

    document.getElementById("email_field").value = "";
    document.getElementById("password_field").value = "";

}

function Update(){
    

    const newdata = {
        url: url.value,
        Confesiones: Confesiones.value,
        Domingo: MisaD.value,
        LunesSabado: MisaLS.value,
        Santeria: Santeria.value,
        Donaciones: Donaciones.value
    }

    console.log(newdata);

    rootRef.update(newdata).then(() => {
        toastr.options = {
            "closeButton": true,
            "debug": false,
            "newestOnTop": true,
            "progressBar": true,
            "positionClass": "toast-top-center",
            "preventDuplicates": true,
            "onclick": function(){window.open("https://shoenstattcerroweb.web.app/#info")},
            "showDuration": "300",
            "hideDuration": "1000",
            "timeOut": "9000",
            "extendedTimeOut": "1000",
            "showEasing": "swing",
            "hideEasing": "linear",
            "showMethod": "fadeIn",
            "hideMethod": "fadeOut"
          }
          toastr["success"]("Los Datos de Informacion fueron actualizados con exito, Click aqui para ver.", "Datos Actualizados!")
        
        }).catch((error) => {
        toastr.options = {
            "closeButton": true,
            "debug": false,
            "newestOnTop": false,
            "progressBar": true,
            "positionClass": "toast-top-center",
            "preventDuplicates": true,
            "onclick": null,
            "showDuration": "300",
            "hideDuration": "1000",
            "timeOut": "5000",
            "extendedTimeOut": "1000",
            "showEasing": "swing",
            "hideEasing": "linear",
            "showMethod": "fadeIn",
            "hideMethod": "fadeOut"
        }
        toastr["error"]("El error puede deberse a un problema de permisos en Firebase con su Usuario.", "Error en la Carga!")
    });

    $('#modalForm').modal('hide')
    logout()
}

cancel.addEventListener('click', function () {

    logout()

    toastr.options = {
        "closeButton": true,
        "debug": false,
        "newestOnTop": true,
        "progressBar": true,
        "positionClass": "toast-top-center",
        "preventDuplicates": true,
        "onclick": null,
        "showDuration": "300",
        "hideDuration": "1000",
        "timeOut": "5000",
        "extendedTimeOut": "1000",
        "showEasing": "swing",
        "hideEasing": "linear",
        "showMethod": "fadeIn",
        "hideMethod": "fadeOut"
    }

    toastr["info"]("Se cerro su sesion y los cambios no fueron guardados.", "Sesion Cerrada")

})

