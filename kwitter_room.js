const firebaseConfig = {
    apiKey: "AIzaSyCeeDPBO7Ux-NQT1z-c1KXGDy25qa_eUpU",
    authDomain: "kwitter-471b5.firebaseapp.com",
    projectId: "kwitter-471b5",
    storageBucket: "kwitter-471b5.appspot.com",
    messagingSenderId: "259017258748",
    appId: "1:259017258748:web:33c8cec7e5c7ea8b200979",
    measurementId: "G-5G046X8NLQ"
  };
  function addRoom()
{

Room_name=document.getElementById("room_name").value;

firebase.database().ref("/").child("room_name").update({
      purpose:"adding room name"

});
 localStorage.setItem("room_name",room_name);

 window.location="kwitter_page.html";
}
function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;
//Start code
Room_names=childKey;
      console.log("Room Name -"+Room_names);
      row="<div class='room_name'id=+Room_name+"
      onclick='redirectToRoomName(this.id)'>#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML+=row;
//End code
});});}
