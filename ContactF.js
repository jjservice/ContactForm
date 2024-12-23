 // Your web app's Firebase configuration
 const firebaseConfig = {
    apiKey: "AIzaSyDkDAlr0Enb82wO12_fhLpQzouPFXaF858",
    authDomain: "contactform2-b31e9.firebaseapp.com",
    projectId: "contactform2-b31e9",
    storageBucket: "contactform2-b31e9.firebasestorage.app",
    messagingSenderId: "20818416475",
    appId: "1:20818416475:web:015e196f24f6723853007e"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  
    // reference your database
    var contactFormDB = firebase.database().ref("contactForm");
    
    document.getElementById("contactForm").addEventListener("submit", submitForm);
    
    function submitForm(e) {
      e.preventDefault();
    
      var name = getElementVal("name");
      var emailid = getElementVal("emailid");
      var msgContent = getElementVal("msgContent");
    
      saveMessages(name, emailid, msgContent);
    
      //   enable alert
      document.querySelector(".alert").style.display = "block";
    
      //   remove the alert
      setTimeout(() => {
        document.querySelector(".alert").style.display = "none";
      }, 3000);
    
      //   reset the form
      document.getElementById("contactForm").reset();
    }
    
    const saveMessages = (name, emailid, msgContent) => {
      var newContactForm = contactFormDB.push();
    
      newContactForm.set({
        name: name,
        emailid: emailid,
        msgContent: msgContent,
      });
    };
    
    const getElementVal = (id) => {
      return document.getElementById(id).value;
    };