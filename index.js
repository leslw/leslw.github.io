const submit = document.getElementsByClassName('form-contact')[0];

submit.addEventListener('submit', (e) => {
    e.preventDefault();
    Email.send({
        SecureToken: "3968d0fd-bbd5-4fa5-b6b3-7bf25cb24eab",
        To: "lewiswilson.leslie@gmail.com",
        From: "lewiswilson.leslie@gmail.com",
        Subject: "New Contact Form Submission",
        Body: "Name: " + document.getElementById("firstName").value + " " + document.getElementById("lastName").value
        + "<br> Email: " + document.getElementById("emailInfo").value
        + "<br> Phone: " + document.getElementById("phoneNumber").value
        + "<br> Message: " + document.getElementById("commentArea").value
    }).then(
        (message) => {
            alert('Message sent successfully!');
            window.location.href = "./thankYou.html";
        }
    );
});
