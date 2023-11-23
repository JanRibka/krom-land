<?php
class TablesOfKeys
{
  public $PaymentMethodts;
  public $ChildArrives;

  public $Vouchers;

  public function __construct($paymentMethodts, $childArrives, $vouchers)
  {
    $this->PaymentMethodts = $paymentMethodts;
    $this->ChildArrives = $childArrives;
    $this->Vouchers = $vouchers;
  }
}
?>