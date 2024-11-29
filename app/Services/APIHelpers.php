<?php

namespace App\Services;

use Illuminate\Support\Fluent;
use stdClass;

class APIHelpers{

    public function fetch(string $url, string $method): stdClass
    {
        $curl = curl_init();

        curl_setopt_array($curl, array(
            CURLOPT_URL => $url,
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_ENCODING => '',
            CURLOPT_MAXREDIRS => 10,
            CURLOPT_TIMEOUT => 0,
            CURLOPT_FOLLOWLOCATION => true,
            CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
            CURLOPT_CUSTOMREQUEST => $method,
            CURLOPT_FAILONERROR => true
        ));

        $response = curl_exec($curl);

        return json_decode($response);
    }

    public function convertToQueryParams(Fluent $params): string
    {
        $limit = $params->limit ? $params->limit : 10;
        $search = $params->search ? $params->search : "";
        $offset = $params->offset ? $params->offset : 0;
        $selection = $params->select ? $params->select : "";

        return $search
            ? "/search?q=$search&limit=$limit&skip=$offset&select=$selection"
            : "?limit=$limit&skip=$offset&select=$selection";
    }
}
