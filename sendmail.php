<?php

    $name = $_POST["name"];
    $tel = $_POST["tel"];

    require 'phpmailer/src/Exception.php';
    require 'phpmailer/src/SMTP.php';
    require 'phpmailer/src/PHPMailer.php';

    use PHPMailer/PHPMailer/PHPMailer;
    use PHPMailer/PHPMailer/SMTP;
    use PHPMailer/PHPMailer/Exception;

    $mail = new PHPMailer(true);

    $mail->isSMTP();
    $mail->SMTPAuth = true;

    $mail->Host = "smtp.example.com";
    $mail->SMTPS = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port = 587;

    $mail->Username = "you@example.com";
    $mail->Password = "password";

    $mail->SetFrom($email, $name);
    $mail->addAddress("mihalkevichartiom@gmail.com");

    $mail->Subject = "Запрос клиента Blanchard";
    $mail->Body = $name;

    $mail->send();
?>
