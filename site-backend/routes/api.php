<?php

use App\Http\Controllers\ApiController;
use App\Http\Controllers\AppointmentController;
use App\Http\Controllers\GoogleRecaptchaController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
Route::get('/googlecaptcha',  [GoogleRecaptchaController::class, 'CustomCaptcha']);
Route::get('/home-details', [ApiController::class, 'home_details']);
Route::get('/real-result-desk', [ApiController::class, 'result_desk']);
Route::get('/real-result-mob', [ApiController::class, 'result_mob']);
Route::get('/pressmedia-category', [ApiController::class, 'pressmedia_category']);
Route::get('/pressmedia/{name}', [ApiController::class, 'pressmedia']);
Route::get('/pressmediadetail/{name}', [ApiController::class, 'pressmediadetail']);
Route::get('/testimonials', [ApiController::class, 'testimonials']);
Route::get('/gallery', [ApiController::class, 'gallery']);
Route::get('/results', [ApiController::class, 'results']);
Route::get('/service-name', [ApiController::class, 'service_name']);
Route::get('/result-details/{name}', [ApiController::class, 'result_details']);
Route::get('/videos', [ApiController::class, 'videos']);
Route::get('/video-testimonial', [ApiController::class, 'video_testimonials']);
Route::get('/video-details/{name}', [ApiController::class, 'video_details']);
Route::get('/service', [ApiController::class, 'service']);
Route::get('/service-category/{name}', [ApiController::class, 'service_category']);
Route::get('/service-category-icon', [ApiController::class, 'service_category_icon']);
Route::get('/service-details/{name}', [ApiController::class, 'service_details']);
Route::get('/service-faq/{name}', [ApiController::class, 'service_faq']);
Route::get('/technology', [ApiController::class, 'technology']);
Route::get('/technology-detail/{name}', [ApiController::class, 'technology_detail']);
Route::get('/doctor-detail/{name}', [ApiController::class, 'doctor_detail']);
Route::get('/blog', [ApiController::class, 'blog']);
Route::get('/blog-detail/{name}', [ApiController::class, 'blog_detail']);
Route::get('/blog-post', [ApiController::class, 'blog_post']);
Route::get('/seo-tag/{name}', [ApiController::class, 'seo']);
Route::post('/contacts', [AppointmentController::class, 'contactussave']);
Route::post('/appointment', [AppointmentController::class, 'appointmentsave']);
Route::post('/callback', [AppointmentController::class, 'callbacksave']);
Route::post('/appointment_lp', [AppointmentController::class, 'appointmentlpsave']);
Route::post('/callbacklp', [AppointmentController::class, 'callbacklpsave']);