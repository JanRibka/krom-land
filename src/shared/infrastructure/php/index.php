<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Content-Type: application/json");
require __DIR__ . "/core.php";
require __DIR__ . "/send-email.php";

if (!isset($_GET["action"])) {
  apiError("No method specified!");
}

if (!in_array($_GET["type"], $allowed_methods)) {
  apiError("That method is not allowed!");
}

if (!isset($_GET["type"])) {
  apiError("Either action is missing or is not allowed");
}

$action = $_GET["action"];
$type = $_GET["type"];

try {
  call_user_func(camelcase($action) . "::" . camelcase($type));
} catch (Exception $ex) {
  apiError("Method doen't exist!");
}

?>
