<?php

namespace App\Http\Middleware;

use Illuminate\Foundation\Http\Middleware\VerifyCsrfToken as Middleware;

class VerifyCsrfToken extends Middleware
{
    /**
     * The URIs that should be excluded from CSRF verification.
     *
     * @var array
     */
    protected $except = [
        'admin/create_service_category',
        'admin/update_service_category',
        'admin/service-change',
        'admin/getactive',
        'admin/create-contact-mail',
        'admin/create-appointment-mail',
        'admin/service-list',
        'admin/update_service',
        'admin/addpressmedia',
        'admin/video-change',
        'admin/exclusive-list',
        'admin/bridal-list',
        'admin/result-servicelist',
        'admin/video-servicelist',
        'admin/service-section-delete',
        'admin/service-section-order',
        'admin/permission-menulists',
        'googlecaptcha',
    ];
}
