<?php

class ResultModel
{
    public $Home;
    public $Actions;
    public $Gallery;
    public $Contact;
    public $WebSettings;
    public $WebLogos;
    public $Common;

    public function __construct($home, $actions, $gallery, $contact, $webSettings, $webLogos, $common)
    {
        $this->Home = $home;
        $this->Actions = $actions;
        $this->Gallery = $gallery;
        $this->Contact = $contact;
        $this->WebSettings = $webSettings;
        $this->WebLogos = $webLogos;
        $this->Common = $common;
    }
}
