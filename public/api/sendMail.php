<?php

//REMOVE FOR PRODUCTION!!!
header("Access-Control-Allow-Origin: *");

if(isset($_POST["name"]) && isset($_POST["email"]) && isset($_POST["message"])){
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
    // $headers = 'From: contactform@harrisonjack.co.uk'."\r\n";
    $headers = 'From: contactform@danmoffat.rf.gd'."\r\n";
    $headers .= 'Reply-To: '.$email."\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";
    if(mail($to, $subject, $message, $headers)){
        header("HTTP/1.1 200 OK");
    }else{
        header("HTTP/1.1 500 Internal Server Error");
    };
} else {
    header("HTTP/1.1 401 Unauthorized");
};

?>