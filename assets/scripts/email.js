/* jshint esversion: 11, jquery: true */

let emailFeedBack = document.getElementById('feedback-email');

function sendMail(contactForm) {
    if (validateForm(this)) {
        emailjs.send("service_8utwynu", "template_t2x0o52", {
                "from_name": contactForm.name.value,
                "reply_to": contactForm.email.value,
                "subject": contactForm.title.value,
                "message": contactForm.enquiry.value
            })
            .then(
                function (response) {
                    emailFeedBack.innerText = "Email succesfully sent!";
                    contactForm.setAttribute("hidden", true);
                    
                },
                function (error) {
                    console.log("FAILED", error);
                }
            );
        return false;
    } else {
        this.addEventListener('submit', function(event) { 
            event.preventDefault(); 
          }); 
    }
}


// Form validation
function validateForm() {

    let nameInput = document.forms["contact-form"]["name-input"];
    let emailInput = document.forms["contact-form"]["email-input"];
    let subjectInput = document.forms["contact-form"]["subject-input"];
    let enquiryInput = document.forms["contact-form"]["enquiry-input"];

    if (nameInput.value === "") {
        emailFeedBack.innerText = "Please input name";
        nameInput.classList.add("is-invalid");
        return false;
    } else if (emailInput.value === "") {
        emailFeedBack.innerText = "Please input email";
        emailInput.classList.add("is-invalid");
        return false;
    } else if (subjectInput.value === "") {
        emailFeedBack = "Please input a subject to your message";
        subjectInput.classList.add("is-invalid");
        return false;
    } else if (enquiryInput.value === "") {
        emailFeedBack.innerText = "Please input your message";
        enquiryInput.classList.add("is-invalid");
        return false;
    } else {
        return true;
    }
}