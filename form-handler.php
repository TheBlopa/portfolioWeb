<?php
$name = $_POST['name'];
$email = $_POST['email'];
$subject = $_POST['subject'];
$message = $_POST['message'];

$email_from = 'info@thestreetportfolio.com';
$email_subject = 'Contacto desde el portfolio';

$email_body = "Name: $name.\n".
                "Email: $email.\n".
                "Subject: $subject.\n".
                "Message: $message.";
     
$to = 'p.garcial@outlook.es';

$headers = "From: $email_from \r\n";

$headers .= "replay-to: $email \r\n";

mail($to, $subject, $email_body, $headers);
header("Location: index.html");
?>