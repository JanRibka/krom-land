<?php

class common
{
    public static function getTShirtSizes()
    {
        try {
            $tShirtSizes = dibi::query('SELECT * FROM tShirtSizes')->fetchAll();

            apiResponse(true, "", $tShirtSizes);
        } catch (Exception $ex) {
            apiResponse(false, $ex->getMessage());
        }
    }
}