<?php
require_once __DIR__ . "/../../vendor/autoload.php";

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

class Email
{
  public static function send()
  {
    $allowed_servers = [
      "https://ribkavyvoj.kvalitne.cz/kontakt",
      "https://kromland.cz/kontakt",
    ];

    // if (in_array($_SERVER["HTTP_REFERER"], $allowed_servers)) {
    $to_input = $_POST["to"];
    $user_email_input = $_POST["user_email"];
    $user_name_input = $_POST["user_name"];
    $subject_input = $_POST["subject"];
    $message_input = $_POST["message"];

    $to_decoded = base64_decode($to_input);
    $to = urldecode($to_decoded);

    $user_email_decoded = base64_decode($user_email_input);
    $user_email = urldecode($user_email_decoded);

    $user_name_decoded = base64_decode($user_name_input);
    $user_name = urldecode($user_name_decoded);

    $subject_decoded = base64_decode($subject_input);
    $subject = urldecode($subject_decoded);

    $message_decoded = base64_decode($message_input);
    $message = urldecode($message_decoded);

    $mail = new PHPMailer();

    try {
      // Konfigurace
      $mail->CharSet = "UTF-8";
      $mail->ContentType = "text/html; charset=UTF-8";
      $mail->addAddress($to, "KROM Land");
      // $mail->setFrom("info@ribkavyvoj.kvalitne.cz");
      $mail->setFrom("info@kromland.cz");
      $mail->addReplyTo($user_email, $user_name);
      $mail->Subject = $subject;
      $mail->isHTML(true);
      $mail->Body = $message;

      // Odeslání emailu
      $mail->send();

      apiResponse(true, "");
    } catch (Exception $ex) {
      apiResponse(false, $ex->getMessage());
    }
    // } else {
    //   apiResponse(false, "Z tohoto serveru nemůžete odesílat zprávy.");
    // }
  }

  public function sendInternally($to, $subject, $message)
  {
    $mail = new PHPMailer();

    // Konfigurace
    $mail->CharSet = "UTF-8";
    $mail->ContentType = "text/html; charset=UTF-8";
    $mail->addAddress($to);
    // $mail->setFrom("info@ribkavyvoj.kvalitne.cz");
    $mail->setFrom("info@kromland.cz");
    $mail->Subject = $subject;
    $mail->isHTML(true);
    $mail->Body = $message;

    // Odeslání emailu
    $mail->send();
  }
}
?>
