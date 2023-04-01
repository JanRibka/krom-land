<?php
require_once __DIR__ . "/../db/db.php";
require_once __DIR__ . "/../email/email.php";

class Registrations
{
  public static function create()
  {
    $email = new Email();
    $allowed_servers = ["https://ribkavyvoj.kvalitne.cz/akce"];

    if (in_array($_SERVER["HTTP_REFERER"], $allowed_servers)) {
      try {
        $registrationDataEncoded = $_POST["registrationData"];

        // Vytvoření variabilního symbolu
        $actualYear = date("Y");
        $actualMonth = date("m");

        $symbols = dibi::query(
          "SELECT vs.variableSymbol FROM variableSymbols as vs WHERE YEAR(Date) = $actualYear AND MONTH(Date) = $actualMonth"
        )->fetchAll();
        $symbolsCount = count($symbols);
        $variable_symbol =
          $actualYear . $actualMonth . sprintf("%05d", $symbolsCount + 1);

        $arr = [
          "VariableSymbol" => $variable_symbol,
          "Date" => date("Y-m-d H:i:s"),
        ];
        dibi::query("INSERT INTO variableSymbols", $arr);

        $idvariableSymbol = dibi::getInsertId();

        // Uložení registrace do DB
        $registrationDataDecoded = base64_decode($registrationDataEncoded);
        $registrationData = json_decode(urldecode($registrationDataDecoded));

        $id_action = $registrationData->action_id;
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
        $registration_date = date("Y-m-d H:i:s");
        $payed = false;
        $state = 6;
        $action_price = $registrationData->action_price;
        $action_date = $registrationData->action_date;
        $action_place = $registrationData->action_place;

        $auxActionPrice = intval(preg_replace("/\s+/", "", $action_price));

        if (is_numeric($auxActionPrice)) {
          $action_price = $auxActionPrice;
        } else {
          $action_price = 0;
        }

        $arr = [
          "id_action" => $id_action,
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
          "id_variable_symbol" => $idvariableSymbol,
          "action_price" => $action_price,
        ];

        dibi::query("INSERT INTO registrations", $arr);

        // Odeslání emailu zákazníkovi
        $potvrzovaciEmailZakaznik =
          __DIR__ . "/../../emails/PotvrzovaciEmailZakaznik.html";
        $email_body = file_get_contents($potvrzovaciEmailZakaznik);

        $email->sendInternally(
          $user_email,
          "Potvrzení registrace",
          $email_body
        );

        // Odeslání emailu do KROM Land
        $auxFunctions = new AuxFunctions();
        $childArrives = $auxFunctions->getTableOfKeyByGroupKey("CHILD_ARRIVES");
        $paymentMethods = $auxFunctions->getTableOfKeyByGroupKey(
          "PAYMENT_METHOD"
        );

        $other_photos = $other_photos === true ? "Ano" : "Ne";
        $children_arrives_selected = array_filter($childArrives, function (
          $f
        ) use ($other_how_children_arrives) {
          return $f["Id"] === $other_how_children_arrives;
        });

        $children_arrives_selected = reset($children_arrives_selected);
        $other_how_children_arrives = $children_arrives_selected->Name;

        $other_pay_method_selected = array_filter($paymentMethods, function (
          $f
        ) use ($other_pay_method) {
          return $f["Id"] === $other_pay_method;
        });

        $other_pay_method_selected = reset($other_pay_method_selected);
        $other_pay_method = $other_pay_method_selected->Name;

        $potvrzovaciEmailKromLand =
          __DIR__ . "/../../emails/PotvrzovaciEmailKromLand.html";

        ob_start();
        include_once $potvrzovaciEmailKromLand;
        $email_body = ob_get_clean();

        $email_to = dibi::query(
          "SELECT a.EmailKromLand FROM actions AS a WHERE a.Id = %i",
          1
        )->fetchSingle();

        $email->sendInternally($email_to, "Potvrzení registrace", $email_body);

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
