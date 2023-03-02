<?php
$allowed_methods = ["send"];

class Email
{
  public static function Send()
  {
    if (isset($_POST["submit"])) {
      $to = $_POST["to"];
      $headers = $_POST["headers"];
      $subject = $_POST["subject"];
      $message = $_POST["message"];

      // Send the email using yhe mail() function
      if (mail($to, $subject, $message, $headers)) {
        echo true;
      } else {
        echo false;
      }
    }
  }
}
?>
