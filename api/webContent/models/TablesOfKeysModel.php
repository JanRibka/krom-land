<?php
class TablesOfKeys
{
  public $PaymentMethodts;
  public $ChildArrives;

  public function __construct($paymentMethodts, $childArrives)
  {
    $this->PaymentMethodts = $paymentMethodts;
    $this->ChildArrives = $childArrives;
  }
}
?>
