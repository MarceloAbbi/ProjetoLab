const firebaseConfig = {
    apiKey: "AIzaSyCLRMI9LvDpl0FSUTkZuPDa6yYBSnEXZSA",
    authDomain: "cadastroform-5e19f.firebaseapp.com",
    databaseURL: "https://cadastroform-5e19f-default-rtdb.firebaseio.com",
    projectId: "cadastroform-5e19f",
    storageBucket: "cadastroform-5e19f.appspot.com",
    messagingSenderId: "211931327880",
    appId: "1:211931327880:web:9f6c3ed7d6bdf8e66f9e3d"
};
  
  firebase.initializeApp(firebaseConfig);
  
  var contactFormDB = firebase.database().ref("contactForm");
  
  document.getElementById("contactForm").addEventListener("submit", submitForm);
  
  function submitForm(e) {
    e.preventDefault();

    var codigo = getElementVal("codigo");
    var nome = getElementVal("nome");
    var email = getElementVal("email");
    var datanasc = getElementVal("datanasc");
    var senha = getElementVal("senha");
  
    saveMessages(codigo, nome, email, datanasc, senha);
  
    document.querySelector(".alert").style.display = "block";
  
    setTimeout(() => {
      document.querySelector(".alert").style.display = "none";
    }, 3000);
  
    document.getElementById("contactForm").reset();
  }
  
  const saveMessages = (codigo, nome, email, datanasc, senha) => {
    var newContactForm = contactFormDB.push();
  
    newContactForm.set({
      codigo: codigo,
      nome: nome,
      email: email,
      datanasc: datanasc,
      senha: senha,
    });
  };
  
  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };