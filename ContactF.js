
// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyA0U3G2RBMyW6HTbLkg4hvqyuse5ZzzKy8",
  authDomain: "contact-four.firebaseapp.com",
  databaseURL: "https://contact-four-default-rtdb.firebaseio.com",
  projectId: "contact-four",
  storageBucket: "contact-four.firebasestorage.app",
  messagingSenderId: "150547775720",
  appId: "1:150547775720:web:bc83725737019bd937095d"
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
 
   saveMessages(name, emailid, msgContent);
 
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
 



 ////Light Section/////

 function toggleLight(){
   const body = document.querySelector('body');
   body.classList.toggle('light');
 }