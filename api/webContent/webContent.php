<?php
require_once __DIR__ . "/../db/db.php";

class WebContent
{
  public static function getAll()
  {
    $homeId = 1;
    $actionsId = 1;

    try {
      $homeQuery = dibi::query(
        "SELECT * FROM home as h WHERE h.id = %i",
        $homeId
      );
      $home = $homeQuery->fetch();

      $actinsQuery = dibi::query(
        "SELECT * FROM actions as a WHERE a.id = %i",
        $actionsId
      );
      $actions = $actinsQuery->fetch();

      $actinDeatilsQuery = dibi::query(
        "SELECT ad.* FROM actions as a JOIN actionDeatil as ad on a.id = ad.ActionsId WHERE a.id = %i ORDER BY ad.ActionOrder",
        $actionsId
      );
      // TODO: Bude se tu t59dit detail akce podle poradi. Nebo to dělat pri mapovani v FE
      $actions = new ActionsModel(
        $actions->Id,
        $actions->Title,
        $actions->Description,
        $actions->MainImagePath,
        $actions->MainImageAlt,
        $actinDeatilsQuery->fetchAll()
      );

      $result = new ResultModel($home, $actions);

      apiResponse(true, "", $result);
    } catch (Exception $ex) {
      apiResponse(false, $ex);
    }
  }
}

class ActionsModel
{
  public $Id;
  public $Title;
  public $Description;
  public $MainImagePath;
  public $MainImageAlt;
  public $ActionDetails;

  public function __construct(
    $id,
    $title,
    $description,
    $mainImagePath,
    $mainImageAlt,
    $actionDetails
  ) {
    $this->Id = $id;
    $this->Title = $title;
    $this->Description = $description;
    $this->MainImagePath = $mainImagePath;
    $this->MainImageAlt = $mainImageAlt;
    $this->ActionDetails = $actionDetails;
  }
}
class ResultModel
{
  public $Home;
  public $Actions;

  public function __construct($home, $actions)
  {
    $this->Home = $home;
    $this->Actions = $actions;
  }
}
?>
