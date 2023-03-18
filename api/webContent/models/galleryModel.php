<?php
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
?>
