let emailFeedBack = document.getElementById('feedback-email');

function sendMail(contactForm) {
    emailjs.send("service_8utwynu", "template_t2x0o52", {
        "from_name": contactForm.name.value,
        "reply_to": contactForm.email.value,
        "subject" : contactForm.title.value,
        "message": contactForm.enquiry.value
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
            emailFeedBack.innerText = "Email succesfully sent!";
        },
        function(error) {
            console.log("FAILED", error);
            emailFeedBack.innerText = "Email failed";
        }
    );
    return false;  // To block from loading a new page
}