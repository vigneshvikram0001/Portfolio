// 4110f80e-94e6-410c-9970-a98ac582e2d5

function sendEmail() {
  Email.send({
    SecureToken: "4110f80e-94e6-410c-9970-a98ac582e2d5",
    To: "himyselfvignesh@gmail.com",
    From: "iamvigneshvikram@gmail.com",
    Subject: "New Form Submision from Website Contact Form",
    Body: "And this is the body",
  }).then((message) => alert(message));
}