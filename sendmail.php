<?php

    $name = $_POST["name"];
    $tel = $_POST["tel"];

    require 'phpmailer/src/Exception.php';
    require 'phpmailer/src/SMTP.php';
    require 'phpmailer/src/PHPMailer.php';

    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\SMTP;
    use PHPMailer\PHPMailer\Exception;

    $mail = new PHPMailer(true);

    $mail->isSMTP();
    $mail->SMTPAuth = true;

    $mail->Host = "smtp.example.com";
    $mail->SMTPS = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port = 587;

    $mail->Username = "testovichtester47@gmail.com";
    $mail->Password = "Koreniz2";

    $mail->SetFrom("testovichtester47@gmail.com", "Johnny Paso");
    $mail->addAddress("testovichtester47@gmail.com");

    $mail->Subject = "Запрос клиента Blanchard";
    $mail->Body = $name;

    $mail->send();
    echo "email sent";
?>
