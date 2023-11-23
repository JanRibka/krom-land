<?php

require_once __DIR__ . "/../db/db.php";
require_once __DIR__ . "/../email/email.php";
require_once __DIR__ . '/../auxFunctions/auxFunctions.php';

class Vouchers
{
    public static function create()
    {
        $emailService = new Email();

        try {
            $voucherDataEncoded = $_POST["voucherData"];

            // Uložení voucheru do DB
            $voucherDataDecoded = base64_decode($voucherDataEncoded);
            $voucherData = json_decode(urldecode($voucherDataDecoded));
            $voucher_name = dibi::query("SELECT tok.Name FROM tableOfKeys as tok WHERE tok.Id = %i", $voucherData->voucher_type)->fetchSingle();
            ;

            $email = $voucherData->email;
            $first_name = $voucherData->first_name;
            $last_name = $voucherData->last_name;
            $street_hn = $voucherData->street_hn;
            $city = $voucherData->city;
            $zip_code = $voucherData->zip_code;

            $arr = [
                "voucher_name" => $voucher_name ?? "",
                "email" => $email,
                "first_name" => $first_name,
                "last_name" => $last_name,
                "street_hn" => $street_hn,
                "city" => $city,
                "zip_code" => $zip_code,
                "timestamp" => date("Y-m-d H:i:s")
            ];

            dibi::query("INSERT INTO vouchers", $arr);

            // Odeslání emailu do KROMLand
            $poukazEmailKromLand =
                __DIR__ . "/../../emails/PoukazEmailKromLand.html";

            ob_start();
            include_once $poukazEmailKromLand;
            $email_body = ob_get_clean();

            $email_to = dibi::query(
                "SELECT a.EmailKromLand FROM actions AS a WHERE a.Id = %i",
                1
            )->fetchSingle();

            $emailService->sendInternally($email_to, "Dárkový poukaz", $email_body);

            apiResponse(true, "");
        } catch (Exception $ex) {
            apiResponse(false, $ex->getMessage());
        }
    }
}
