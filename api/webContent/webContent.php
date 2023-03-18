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
      // Home
      $homeQuery = dibi::query(
        "SELECT * FROM home as h WHERE h.Id = %i",
        $homeId
      );
      $home = $homeQuery->fetch();

      $teamMembers = dibi::query("SELECT * FROM teamMembers as tm");

      $home = new HomeModel(
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
        $teamMembers->fetchAll()
      );

      // Actions
      $actinsQuery = dibi::query(
        "SELECT * FROM actions as a WHERE a.Id = %i",
        $actionsId
      );
      $actions = $actinsQuery->fetch();

      $actinDeatilsQuery = dibi::query(
        "SELECT ad.* FROM actions as a JOIN actionDeatil as ad on a.Id = ad.ActionsId WHERE a.Id = %i ORDER BY ad.ActionOrder",
        $actionsId
      );

      $documentsToDownloadQuery = dibi::query(
        "SELECT * FROM documentsToDownload as dtd"
      );

      $actions = new ActionsModel(
        $actions->Id,
        $actions->Title,
        $actions->Description,
        $actions->MainImagePath,
        $actions->MainImageAlt,
        $actinDeatilsQuery->fetchAll(),
        $documentsToDownloadQuery->fetchAll()
      );

      // Gallery
      $galleryQuery = dibi::query(
        "SELECT * FROM gallery as g WHERE g.Id = %i",
        $galleryId
      );

      $gallery = $galleryQuery->fetch();

      $galleryImageQuery = dibi::query(
        "SELECT gi.* FROM gallery as g JOIN galleryImage as gi on g.Id = gi.GalleryId WHERE g.Id = %i",
        $galleryId
      );

      $gallery = new GalleryModel(
        $gallery->Id,
        $gallery->Title,
        $gallery->Description,
        $gallery->MainImagePath,
        $gallery->MainImageAlt,
        $galleryImageQuery->fetchAll()
      );

      // Contact
      $contactQuery = dibi::query(
        "SELECT * FROM contact as c WHERE c.Id = %i",
        $contactId
      );

      $contact = $contactQuery->fetch();

      // Result
      $result = new ResultModel($home, $actions, $gallery, $contact);

      apiResponse(true, "", $result);
    } catch (Exception $ex) {
      apiResponse(false, $ex);
    }
  }
}
?>
