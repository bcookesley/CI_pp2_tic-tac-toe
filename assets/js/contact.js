 window.onload = function() {
            document.getElementById('contact-form').addEventListener('submit', function(event) {
                event.preventDefault();
                // these IDs from the previous steps
                emailjs.init('user_e9YcwY3enVlaEkAqKTrG4');
                emailjs.sendForm('service_ahguzk1', 'contact_form', this)
                    .then(function() {
                        console.log('SUCCESS!');
                    }, function(error) {
                        console.log('FAILED...', error);
                    });
                    
            });
        }

        function messageSent() {
            let html = `
                    `
            document.getElementById('container').innerHTML = html;
        }

        