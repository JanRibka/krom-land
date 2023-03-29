<?php
require_once __DIR__ . "/../db/db.php";

class Registrations
{
  public static function create()
  {
    $allowed_servers = ["https://ribkavyvoj.kvalitne.cz/akce"];

    if (in_array($_SERVER["HTTP_REFERER"], $allowed_servers)) {
      try {
        $registrationDataEncoded = $_POST["registrationData"];

        // Uložení registrace do DB
        $registrationDataDecoded = base64_decode($registrationDataEncoded);
        $registrationData = json_decode(urldecode($registrationDataDecoded));

        $action_name = $registrationData->action_name;
        $user_email = $registrationData->user_email;
        $child_name = $registrationData->child_name;
        $child_last_name = $registrationData->child_last_name;
        $child_birthday = $registrationData->child_birthday;
        $first_representative_name =
          $registrationData->first_representative_name;
        $first_representative_last_name =
          $registrationData->first_representative_last_name;
        $first_representative_phone_number =
          $registrationData->first_representative_phone_number;
        $second_representative_name =
          $registrationData->second_representative_name;
        $second_representative_last_name =
          $registrationData->second_representative_last_name;
        $second_representative_phone_number =
          $registrationData->second_representative_phone_number;
        $address_name = $registrationData->address_name;
        $address_last_name = $registrationData->address_last_name;
        $address_street_cp = $registrationData->address_street_cp;
        $address_city = $registrationData->address_city;
        $address_psc = $registrationData->address_psc;
        $other_hendicap = $registrationData->other_hendicap;
        $other_photos = $registrationData->other_photos;
        $other_how_children_arrives =
          $registrationData->other_how_children_arrives;
        $other_pickup_person = $registrationData->other_pickup_person;
        $other_pay_method = $registrationData->other_pay_method;
        $other_other_info = $registrationData->other_other_info;
        $registration_date = date("d.m.Y");
        $payed = false;
        $state = "";

        $arr = [
          "action_name" => $action_name,
          "user_email" => $user_email,
          "child_name" => $child_name,
          "child_last_name" => $child_last_name,
          "child_birthday" => $child_birthday,
          "first_representative_name" => $first_representative_name,
          "first_representative_last_name" => $first_representative_last_name,
          "first_representative_phone_number" => $first_representative_phone_number,
          "second_representative_name" => $second_representative_name,
          "second_representative_last_name" => $second_representative_last_name,
          "second_representative_phone_number" => $second_representative_phone_number,
          "address_name" => $address_name,
          "address_last_name" => $address_last_name,
          "address_street_cp" => $address_street_cp,
          "address_city" => $address_city,
          "address_psc" => $address_psc,
          "other_hendicap" => $other_hendicap,
          "other_photos" => $other_photos,
          "other_how_children_arrives" => $other_how_children_arrives,
          "other_pickup_person" => $other_pickup_person,
          "other_pay_method" => $other_pay_method,
          "other_other_info" => $other_other_info,
          "registration_date" => $registration_date,
          "payed" => $payed,
          "state" => $state,
        ];

        dibi::query("INSERT INTO registrations", $arr);

        // Odeslání emailu zákazníkovi

        // Odeslání emailu do KROM Land

        apiResponse(true, "");
      } catch (Exception $ex) {
        apiResponse(false, $ex->getMessage());
      }
    } else {
      apiResponse(false, "Z tohoto serveru nemůžete vytvářet registrace.");
    }
  }
}
?>
