<?php

header("Access-Control-Allow-Origin: *");

if(isset($_POST["name"])){
    $name        = $_POST["name"];
    $email       = $_POST["email"];
    $phone       = $_POST["phone"];
    $userMessage = $_POST["message"];

    $to      = "danmoffat@gmail.com";
    $subject = "Contact Form Message From ".$name;
    
    $message = '<strong>From '.$name.' (<a href="mailto:'.$email.'">'.$email.'</a>';
    if($phone != ""){
        $message .= ' | <a href="tel:'.$phone.'">'.$phone.'</a>';
    };
    $message .= ')</strong>';
    $message .= '<br /><br />';
    $message .= $userMessage;
    $message = stripslashes($message);
    $headers = 'From: test@testicles.com'."\r\n";
    $headers .= 'Reply-To: '.$email."\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";
    if(mail($to, $subject, $message, $headers)){
        // Success!
    }else{
        // Failure!
    };
};

?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Email Sender</title>
</head>

<body>
    <h1>Will it work?</h1>
</body>

</html>