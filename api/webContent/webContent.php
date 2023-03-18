<?php
require_once __DIR__ . "/../db/db.php";

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

class ActionsModel
{
  public $Id;
  public $Title;
  public $Description;
  public $MainImagePath;
  public $MainImageAlt;
  public $ActionDetails;
  public $DocumentsToDownload;

  public function __construct(
    $id,
    $title,
    $description,
    $mainImagePath,
    $mainImageAlt,
    $actionDetails,
    $documentsToDownload
  ) {
    $this->Id = $id;
    $this->Title = $title;
    $this->Description = $description;
    $this->MainImagePath = $mainImagePath;
    $this->MainImageAlt = $mainImageAlt;
    $this->ActionDetails = $actionDetails;
    $this->DocumentsToDownload = $documentsToDownload;
  }
}

class GalleryModel
{
  public $Id;
  public $Title;
  public $Description;
  public $MainImagePath;
  public $MainImageAlt;
  public $Images;

  public function __construct(
    $id,
    $title,
    $description,
    $mainImagePath,
    $mainImageAlt,
    $images
  ) {
    $this->Id = $id;
    $this->Images = $images;
    $this->Title = $title;
    $this->Description = $description;
    $this->MainImagePath = $mainImagePath;
    $this->MainImageAlt = $mainImageAlt;
  }
}
class ResultModel
{
  public $Home;
  public $Actions;
  public $Gallery;
  public $Contact;

  public function __construct($home, $actions, $gallery, $contact)
  {
    $this->Home = $home;
    $this->Actions = $actions;
    $this->Gallery = $gallery;
    $this->Contact = $contact;
  }
}
?>
