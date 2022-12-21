<?php
    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;

    require 'phpmailer/src/Exception.php';
    require 'phpmailer/src/PHPMailer.php';

    $mail = new PHPMailer(true);
    $mail->CharSet = 'UTF-8';
    $mail->setLanguage('ru', 'phpmailer/language/');
    $mail->IsHTML(true);

    $mail->setFrom('mihalkevichartiom@gmail.com', 'Johnny Paso');
    $mail->addAddress('mihalkevichartiom@gmail.com');
    $mail->Subject = 'Запрос клиента Blanchard';

    $body = '<h1>Запрос на телефонный звонок от:</h1>';
    $body.='<p><strong>Имя:</strong> '.$_POST['name'].'</p>';
    $body.='<p><strong>Телефон:</strong> '.$_POST['tel'].'</p>';

    $mail->Body = $body;

    if (!$mail->send()) {
        $message = 'Что-то пошло не так.';
    }
    else {
        $message = 'Ваш запрос отправлен.';
    }
    $response = ['message' => $message];
    header('Content-type: application/json');
    echo json_encode($response);
?>
