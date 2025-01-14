
// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyDDNgYos7xGSQ8MQncADmywY0iTtBN6E-A",
  authDomain: "contact-two-23a71.firebaseapp.com",
  databaseURL: "https://contact-two-23a71-default-rtdb.firebaseio.com",
  projectId: "contact-two-23a71",
  storageBucket: "contact-two-23a71.firebasestorage.app",
  messagingSenderId: "587610995045",
  appId: "1:587610995045:web:e8e7e341cb84603eae498c"
};

 // Initialize Firebase
 firebase.initializeApp(firebaseConfig);
  
 // Reference your database
 var contactFormDB = firebase.database().ref("contact-Form");
 
 document.getElementById("contact-Form").addEventListener("submit", submitForm);
 
 function submitForm(e) {
   e.preventDefault();
 
   var name = getElementVal("name");
   var emailid = getElementVal("emailid");
   var msgContent = getElementVal("msgContent");
   var phone = getElementVal("phone");
 
   saveMessages(name, emailid, msgContent, phone);
 
   // Enable alert
   document.querySelector(".alert").style.display = "block";
 
   // Remove the alert after 3 seconds
   setTimeout(() => {
     document.querySelector(".alert").style.display = "none";
   }, 3000);
 
   // Redirect to another page after the form submission
   setTimeout(() => {
     window.location.href = "https://jjservice.github.io/L2/1.html";  // Replace with your desired URL
   }, 3000); // Delay to allow alert to disappear before redirecting
 
   // Reset the form
   document.getElementById("contact-Form").reset();
 }
 
 const saveMessages = (name, emailid, msgContent, phone) => {
   var newContactForm = contactFormDB.push();
 
   newContactForm.set({
     name: name,
     emailid: emailid,
     msgContent: msgContent,
     phone: phone,
   });
 };
 
 const getElementVal = (id) => {
   return document.getElementById(id).value;
 };
 



 ////Light Section/////

 function toggleLight(){
   const body = document.querySelector('body');
   body.classList.toggle('light');
 }