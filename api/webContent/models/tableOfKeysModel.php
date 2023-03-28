<?php
class TableOfKeysModel
{
  public $Id;
  public $GroupKey;
  public $Key;
  public $Name;
  public $Enabled;

  public function __construct($id, $groupKey, $key, $name, $enabled)
  {
    $this->Id = $id;
    $this->GroupKey = $groupKey;
    $this->Key = $key;
    $this->Name = $name;
    $this->Enabled = $enabled;
  }
}
?>
