<?php
require_once __DIR__ . "/../db/db.php";

class AuxFunctions
{
  public static function getTableOfKeyByGroupKey($groupKey)
  {
    $result = dibi::query(
      "SELECT * FROM tableOfKeys as tok WHERE tok.GroupKey = %s",
      $groupKey
    )->fetchAll();

    return $result;
  }
}
?>
