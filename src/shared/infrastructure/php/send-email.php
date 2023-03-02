<?php
$allowed_methods = ["send"];

class Email
{
  public static function Send()
  {
    if (isset($_POST["submit"])) {
      $to = $_POST["to"];
      $subject = $_POST["subject"];
      $message = $_POST["message"];
      $headers = $_POST["headers"];

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
