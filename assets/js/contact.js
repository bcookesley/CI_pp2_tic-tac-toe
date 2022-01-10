 /**
  * Code snippet taken from EmailJS - instructions are in the site for this
  */
 
 window.onload = function () {
     document.getElementById('contact-form').addEventListener('submit', function (event) {
         event.preventDefault();
         // these IDs from the previous steps
         emailjs.init('user_e9YcwY3enVlaEkAqKTrG4');
         emailjs.sendForm('service_ahguzk1', 'contact_form', this)
             .then(function () {
                 console.log('SUCCESS!');
             }, function (error) {
                 console.log('FAILED...', error);
             });
             messageSent();
     });
 }

 /**
  * Add HTML when message is sent 
  */

 function messageSent() {
     let html = `
                <div id="container">
                <h2>Thanks for your message!</h2>
                </div>
                <div id="back-btn">
                <a href="./index.html">Back to Game</a>
                </div>
                `
     document.getElementById('container').innerHTML = html;
 }