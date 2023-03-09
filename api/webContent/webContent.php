<?php
require_once __DIR__ . "/../db/db.php";

class WebContent
{
  public static function getAll()
  {
    $homeId = 0;
    $result = new ResultModel();

    try {
      $homeQuery = dibi::query("SELECT * FROM home WHERE id = %i", $homeId);
      $home = $homeQuery->fetch();

      $result->Home = $home;

      apiResponse(true, "", $result);
    } catch (Exception $ex) {
      apiResponse(false, $ex);
    }
  }
}

class ResultModel
{
  public $Home;
}
?>
