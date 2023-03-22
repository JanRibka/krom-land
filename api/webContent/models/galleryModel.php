<?php
class GalleryModel
{
  public $Id;
  public $Title;
  public $Description;
  public $MainImage;
  public $Images;

  public function __construct($id, $title, $description, $mainImage, $images)
  {
    $this->Id = $id;
    $this->Images = $images;
    $this->Title = $title;
    $this->Description = $description;
    $this->MainImage = $mainImage;
  }
}
?>
