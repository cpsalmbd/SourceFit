<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\API\BaseController;
use App\Http\Resources\ProductResource;
use App\Services\APIHelpers;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Fluent;

class ProductController extends BaseController
{
    protected $apiHelper;

    public function __construct()
    {
        $this->apiHelper = new APIHelpers;
    }

    public function index(Request $request): JsonResponse
    {
        return
            $this->sendResponse(
                $this->apiHelper->fetch(
                    config('api.products').
                    $this->apiHelper
                        ->convertToQueryParams(
                            new Fluent(
                                $request->only([
                                    'search',
                                    'limit',
                                    'offset',
                                    'select'
                                ])
                            )
                        ),
                    'GET'
                ),
                'Product fetched successfully.'
            );
    }
}
