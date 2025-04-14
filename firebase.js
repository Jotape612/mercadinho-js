const { initializeApp } = require('firebase/app');
const { getFirestore } = require('firebase/firestore');

const firebaseConfig = {
    apiKey: "AIzaSyBpckKVsQP4dmgLyCsNZWu8vVPr59LszOw",
    authDomain: "mercadinho-jest.firebaseapp.com",
    projectId: "mercadinho-jest",
    storageBucket: "mercadinho-jest.firebasestorage.app",
    messagingSenderId: "405246397401",
    appId: "1:405246397401:web:ba9a6d9e6d189ca4ece7c8"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

module.exports = db; //Esse aqui tá exportando o objeto DB "objeto database", ele quem tem a propriedade necessario
//pro projeto em JS interagir com o Firestore
 