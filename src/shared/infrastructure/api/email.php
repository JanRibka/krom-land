<?php
$allowed_methods = ["send"];

class Email
{
  public static function Send()
  {
    $to = $_POST["to"];
    $user_email = $_POST["user_email"];
    $user_name = $_POST["user_name"];
    $message = $_POST["message"];

    $subject = "Zpráva z KromLand.cz";
    $headers = "From: " . base64_decode($user_email) . "\r\n";
    $headers .= "Reply-To: " . base64_decode($user_email) . "\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/html; charset=UTF-8\r\n";

    $start_html = "<html><body>";
    $end_html = "</body></html>";
    $message_body =
      "<b>Od odesílatele:</b> " .
      base64_decode($user_email) .
      "<br /><br /><b>Jméno:</b> " .
      base64_decode($user_name) .
      "<br /><br /><b>Obsah zprávy:</b> " .
      base64_decode($message) .
      "";

    // Send the email using the mail() function
    if (
      mail(
        base64_decode($to),
        $subject,
        $start_html . "" . $message_body . "" . $end_html,
        $headers
      )
    ) {
      echo "Odeslano";
    } else {
      echo "Chyba";
    }
  }
}
?>
