<?php
require_once __DIR__ . "/../db/db.php";

class WebContent
{
  public static function getHome()
  {
    $result = dibi::query("SELECT * FROM test");
    $all = $result->fetchAll();

    if (!$result) {
      apiResponse(true, "GetAll - chyba", $all);
    } else {
      apiResponse(true, "GetAll - ok", $all);
    }
  }
}
?>
