<!DOCTYPE html>
<html>

<head>
    <meta http-equiv="content-type" content="text/html; charset=utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>

<body>
    <?php
    if (isset($_POST['name']) && isset($_POST['email'])) {

        $name = $_POST['name'];
        $phoneNumber    = $_POST['phoneNumber'];
        $email   = $_POST['email'];
        $message     = $_POST['message'];


        $to = 'iamvigneshvikram@gmail.com';
        $subject = "Vignesh Vikram Contant Form New Submission";
        $body = '<html>
                <body>
                    <h2>Vignesh Vikram Contact Form</h2>
                    <p>Name :' . $name . '</p>
                    <p>Phone Number :' . $phoneNumber . '</p>
                    <p>Email :' . $email . '</p>
                    <p>Message :' . $message . '</p>
                  </body>
            </html>';


        //headers
        $headers = "From: " . $name . " " . $phoneNumber . " " . $email . " \r\n";
        $headers = "Reply-To: " . $email . "\r\n";
        $headers = "MIME-Version: 1.0\r\n";
        $headers = "Content-type: text/html; charset-utf-8";

        //send
        $send = mail($to, $subject, $body, $headers);
        if ($send) {
            echo '<br>';
        } else {
            echo 'Error.';
        }
    }
    ?>

    <script>
        window.location.href = './';
    </script>

</body>

</html>