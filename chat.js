// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE

const firebaseConfig = {
    apiKey: "AIzaSyAc8qwE5Q25TBuW3GLHpIK5RhkLfM0nMAg",
    authDomain: "chat-app-ee90b.firebaseapp.com",
    databaseURL: "https://chat-app-ee90b-default-rtdb.firebaseio.com",
    projectId: "chat-app-ee90b",
    storageBucket: "chat-app-ee90b.appspot.com",
    messagingSenderId: "983171822141",
    appId: "1:983171822141:web:4505104fcc677ad3fa3054"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
    
}

function addRoom()
{
    room_name = document.getElementById("room_name").value ; 
    firebase.database().ref("/").child_name(room_name).update({
        purpose :"adding room name"
    }) ;
    localStorage.setItem("romm_name",room_name) ;
    window.location = "kwitter_page.html" ;
}

function redirectToRoomName()
{
    console.log(name) ;
    localStorage.setItem("room_name",name) ;
    window.location = "kwitter_page.html" ;
}

function send()
{
    msg = document.getElementById("msg").value ;
    firebase.database().ref(room_name).push ; 
    ({
        name:user_name ,
        message:msg ,
        like:0
    });
    document.getElementById("msg").value = "" ;
}
