<?php
class ResultModel
{
  public $Home;
  public $Actions;
  public $Gallery;
  public $Contact;
  public $Common;

  public function __construct($home, $actions, $gallery, $contact, $common)
  {
    $this->Home = $home;
    $this->Actions = $actions;
    $this->Gallery = $gallery;
    $this->Contact = $contact;
    $this->Common = $common;
  }
}
?>
