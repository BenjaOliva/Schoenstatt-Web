const url1 = document.getElementById('misaUrl1');
const url2 = document.getElementById('misaUrl2');
const url3 = document.getElementById('misaUrl3');

const Donaciones = document.getElementById('Donaciones');
const Santeria = document.getElementById('Santeria');
const Confesiones = document.getElementById('Confesiones');
const Domingo = document.getElementById('Domingo');
const LunesSabado = document.getElementById('LunesSabado');

var setSanteria = fireBase.database().ref('Santeria');
var setConfesiones = fireBase.database().ref('Confesiones');
var setDonaciones = fireBase.database().ref('Donaciones');
var setUrl = firebase.database().ref('url');
var setDomingo = firebase.database().ref('Domingo');
var setLunesSabado = firebase.database().ref('LunesSabado');

setLunesSabado.on('value', function(snapshot){
  LunesSabado.innerHTML = '<b>De Lunes a Sabado:</b> ' + snapshot.val();
});

setDomingo.on('value', function(snapshot){
  Domingo.innerHTML = '<b>Domingo:</b> ' + snapshot.val();
});

setConfesiones.on('value', function(snapshot){
  Confesiones.innerHTML = snapshot.val();
});

setSanteria.on('value', function(snapshot){
  Santeria.innerHTML = snapshot.val();
});

setDonaciones.on('value', function(snapshot){
  console.log(snapshot.val());
  Donaciones.innerHTML = snapshot.val();
});

setUrl.on('value', function (snapshot) {
    console.log(snapshot.val());
  
    url1.href = snapshot.val();
    url2.href = snapshot.val();
    url3.href = snapshot.val();

  });
