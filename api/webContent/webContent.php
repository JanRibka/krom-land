<?php
require_once __DIR__ . "/../db/db.php";
require_once __DIR__ . "/./models/actionsModel.php";
require_once __DIR__ . "/./models/galleryModel.php";
require_once __DIR__ . "/./models/resultModel.php";
require_once __DIR__ . "/./models/homeModel.php";

class WebContent
{
  public static function getAll()
  {
    $homeId = 1;
    $actionsId = 1;
    $galleryId = 1;
    $contactId = 1;

    try {
      // Get Home, Actions, Gallery, and Contact details in separate queries
      $home = dibi::query(
        "SELECT * FROM home as h WHERE h.Id = %i",
        $homeId
      )->fetch();

      $teamMembers = dibi::query("SELECT * FROM teamMembers as tm")->fetchAll();

      $actions = dibi::query(
        "SELECT * FROM actions as a WHERE a.Id = %i",
        $actionsId
      )->fetch();

      $actionDetails = dibi::query(
        "SELECT ad.* FROM actions as a JOIN actionDetails as ad on a.Id = ad.ActionsId WHERE a.Id = %i ORDER BY ad.ActionOrder",
        $actionsId
      )->fetchAll();

      $documentsToDownload = dibi::query(
        "SELECT * FROM documentsToDownload as dtd"
      )->fetchAll();

      $gallery = dibi::query(
        "SELECT * FROM gallery as g WHERE g.Id = %i",
        $galleryId
      )->fetch();

      $galleryImages = dibi::query(
        "SELECT gi.* FROM gallery as g JOIN galleryImage as gi on g.Id = gi.GalleryId WHERE g.Id = %i",
        $galleryId
      )->fetchAll();

      $contact = dibi::query(
        "SELECT * FROM contact as c WHERE c.Id = %i",
        $contactId
      )->fetch();

      // Create models using data fetched from queries
      $homeModel = new HomeModel(
        $home->Id,
        $home->Title,
        $home->Description,
        $home->PageHeaderTextMain,
        $home->PageHeaderTextMainColor,
        $home->PageHeaderTextSecondary,
        $home->PageHeaderTextSecondaryColor,
        $home->MainImage,
        $home->AboutUs,
        $home->AboutUsImage,
        $home->PeopleSay1Text,
        $home->PeopleSay1Name,
        $home->PeopleSay2Text,
        $home->PeopleSay2Name,
        $home->PeopleSay3Text,
        $home->PeopleSay3Name,
        $teamMembers
      );

      $actionsModel = new ActionsModel(
        $actions->Id,
        $actions->Title,
        $actions->Description,
        $actions->PageHeaderTextMain,
        $actions->PageHeaderTextMainColor,
        $actions->MainImage,
        $actionDetails,
        $documentsToDownload
      );

      $galleryModel = new GalleryModel(
        $gallery->Id,
        $gallery->Title,
        $gallery->Description,
        $gallery->PageHeaderTextMain,
        $gallery->PageHeaderTextMainColor,
        $gallery->MainImage,
        $galleryImages
      );

      // Create Result model using above models
      $result = new ResultModel(
        $homeModel,
        $actionsModel,
        $galleryModel,
        $contact
      );

      apiResponse(true, "", $result);
    } catch (Exception $ex) {
      apiResponse(false, $ex);
    }
  }
}
?>
