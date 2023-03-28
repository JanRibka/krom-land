<?php
class CommonModel
{
  public $Conditions;
  public $TablesOfKeys = [];

  public function __construct($conditions, $tablesOfKeys)
  {
    $this->Conditions = $conditions;
    $this->TablesOfKeys = $tablesOfKeys;
  }
}
?>
