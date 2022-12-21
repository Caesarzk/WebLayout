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

    // $title = 'Тема письма';


    // $mail->CharSet = 'UTF-8';
    // $mail->setLanguage('ru', 'phpmailer/language/');
    // $mail->IsHTML(true);

    // $mail->setFrom('mihalkevichartiom@gmail.com', 'Johnny Paso');
    // $mail->addAddress('mihalkevichartiom@gmail.com');
    // $mail->Subject = 'Запрос клиента Blanchard';

    // $body = '<h1>Запрос на телефонный звонок от:</h1>';
    // $body.='<p><strong>Имя:</strong> '.$_POST['name'].'</p>';
    // $body.='<p><strong>Телефон:</strong> '.$_POST['tel'].'</p>';

    // $mail->Body = $body;

    // if (!$mail->send()) {
    //     $message = 'Что-то пошло не так.';
    // }
    // else {
    //     $message = 'Ваш запрос отправлен.';
    // }
    // $response = ['message' => $message];
    // header('Content-type: application/json');
    // echo json_encode($response);
?>
