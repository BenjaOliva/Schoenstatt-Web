var fireBase = fireBase || firebase;
var hasInit = false;
var name1, email, photoUrl, uid, emailVerified;

var config = {
    apiKey: "AIzaSyDLQ2thhfnQT99495qVm4Uhv5OQ7H3zTd4",
    authDomain: "shoenstattcerroweb.firebaseapp.com",
    projectId: "shoenstattcerroweb",
    storageBucket: "shoenstattcerroweb.appspot.com",
    messagingSenderId: "818172799174",
    appId: "1:818172799174:web:e8488c17f910d6742acfc7"
};
if (!hasInit) {
  firebase.initializeApp(config);
  hasInit = true;
  // Get a reference to the database service
  var database = firebase.database();

}


