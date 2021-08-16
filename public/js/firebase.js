let firebaseConfig = {
    apiKey: "AIzaSyC1n-QXuHd68HqhMsu-qYueGtbXVDLbZf4",
    authDomain: "bloggin-website.firebaseapp.com",
    projectId: "bloggin-website",
    storageBucket: "bloggin-website.appspot.com",
    messagingSenderId: "416105310756",
    appId: "1:416105310756:web:0fc09398db3614306a46b1"
};

firebase.initializeApp(firebaseConfig);

let db = firebase.firestore();