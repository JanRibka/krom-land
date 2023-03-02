<?php
function JSON($arr = [])
{
  return @json_encode($arr, 128);
}

function apiError($msg)
{
  echo JSON([
    "error" => true,
    "reason" => "No method specified",
  ]);
}

function camelcase(string $str, string $delimeter = "_")
{
  return str_replace($delimeter, "", ucwords($str, $delimeter));
}
?>
