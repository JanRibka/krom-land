<?php
require_once __DIR__ . "/../db/db.php";

class WebContent
{
  public static function getAll()
  {
    $result = dibi::query("SELECT * FROM test");

    if (!$result) {
      apiResponse(true, "GetAll - chyba", $result);
    } else {
      apiResponse(true, "GetAll - ok", $result);
    }
  }
}
?>
