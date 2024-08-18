<?php

use App\Http\Controllers\AboutController;
use App\Http\Controllers\AppointmentController;
use App\Http\Controllers\RegisterController;
use App\Http\Controllers\BlogController;
use App\Http\Controllers\BridalDermatologyFaqController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\DoctorCertificateController;
use App\Http\Controllers\DoctorController;
use App\Http\Controllers\FaqController;
use App\Http\Controllers\FromController;
use App\Http\Controllers\FrontMenuController;
use App\Http\Controllers\GalleryController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\GoogleRecaptchaController;
use App\Http\Controllers\RedirectUrlController;
use App\Http\Controllers\ResultCategoryController;
use App\Http\Controllers\SeoController;
use App\Http\Controllers\ServicecategoryController;
use App\Http\Controllers\ServiceController;
use App\Http\Controllers\ServiceResultController;
use App\Http\Controllers\ServiceVideoController;
use App\Http\Controllers\TestimonialController;
use App\Http\Controllers\TestimonialVideoController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\VideoCategoryController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::get('/', [LoginController::class, 'index']);
// Route::get('/admin/', [UserController::class, 'index']);
Route::get('/admin/login', [LoginController::class, 'index']);
Route::post('/admin/user-login', [LoginController::class, 'login']);
Route::get('verkopen/{id}/{usr_id}/{super_org_id}', [UserController::class, 'index']);
Route::get('/admin/logout', function () {
    session()->forget('userinfo');
    session()->forget('isLogin');
    session()->forget('user_type');
    session()->forget('useradmin');
    return redirect('/admin/login');
});
    Route::get('/no-authorization', [AppLaunchController::class, 'NoAuthorization']);
    Route::get('/',  [AppLaunchController::class, 'appLaunch']);
    // Route::group(['middleware' => ['checksubscription']], function(){
    
    
    // });
    Route::get('/mailcheck',  [AppointmentController::class, 'mailcheck']);
    Route::get('/mailcheckclient',  [AppointmentController::class, 'mailcheckclient']);
    Route::get('/contactmailclient',  [AppointmentController::class, 'contactmailclient']);
    
Route::group(['middleware' => ['login']], function(){
    Route::get('/admin/dashboard', [UserController::class, 'Dashboard']);
       //-----------Register---------------// 
    Route::get('/admin/user', [RegisterController::class, 'RegistrationView']);
Route::get('/admin/add-register', [RegisterController::class, 'RegistrationForm']);
Route::post('/admin/user-register-save', [RegisterController::class, 'UserRegisterSave']);
Route::get('/admin/edit-register/{id}', [RegisterController::class, 'UserRegisterEdit']);
Route::post('/admin/user-register-update/{id}', [RegisterController::class, 'UserRegisterUpdate']);
Route::get('/admin/delete-user-register/{id}', [RegisterController::class, 'UserRegisterDelete']);


/************************Service category section*********************/    
Route::get('/admin/admin/service-faq', [ServicecategoryController::class, 'index']);
Route::get('/admin/service-category', [ServicecategoryController::class, 'index']);
Route::post('/admin/getactive-service-category', [ServicecategoryController::class, 'getactive']);
Route::post('/admin/orderby-service-category', [ServicecategoryController::class, 'orderby_service_category']);
Route::get('/admin/add-service-category', [ServicecategoryController::class, 'add']);
Route::post('/admin/create_service_category', [ServicecategoryController::class, 'create_service']);
Route::get('/admin/service-category-preview', [ServicecategoryController::class, 'service_category_preview']);
Route::get('/admin/service_category_publish/{id}', [ServicecategoryController::class, 'service_category_publish']);
Route::get('/admin/edit_service_category/{id}', [ServicecategoryController::class, 'edit_service']);
Route::post('/admin/update_service_category/{id}', [ServicecategoryController::class, 'update_service']);
Route::get('/admin/delete_service_category/{id}', [ServicecategoryController::class, 'delete_service']);

/**************************second category section*********************/
Route::get('/admin/second-category', [ServicecategoryController::class, 'SecondIndex']);
Route::get('/admin/add-second-service-category', [ServicecategoryController::class, 'SecondAdd']);
Route::get('/admin/second-category-preview', [ServicecategoryController::class, 'service_category_preview']);

/****************************service section***************************/
Route::get('/admin/service', [ServiceController::class, 'index']);
Route::post('/admin/getactive-service', [ServiceController::class, 'getactive']);
Route::post('/admin/orderby-service', [ServiceController::class, 'orderby_service']);
Route::get('/admin/add-service', [ServiceController::class, 'add']);
Route::post('/admin/create_service', [ServiceController::class, 'create_service']);
Route::get('/admin/edit_service/{id}', [ServiceController::class, 'edit_service']);
Route::post('/admin/update_service/{id}', [ServiceController::class, 'update_service']);
Route::post('/admin/service-removesec', [ServiceController::class, 'ServiceRemovesec']);
Route::get('/admin/delete_service/{id}', [ServiceController::class, 'delete_service']);

/***************************first result category Section**************************/
Route::get('/admin/service-result-category', [ResultCategoryController::class, 'indexcategory']);
Route::post('/admin/getactive-result-category', [ResultCategoryController::class, 'getactive_result_category']);
Route::post('/admin/orderby-result-category', [ResultCategoryController::class, 'orderby_result_category']);
Route::get('/admin/add-service-result-category', [ResultCategoryController::class, 'add_result_category']);
Route::get('/admin/result-category-preview', [ResultCategoryController::class, 'result_category_preview']);
Route::get('/admin/result_category_publish/{id}', [ResultCategoryController::class, 'result_category_publish']);
Route::post('/admin/create_service_result_category', [ResultCategoryController::class, 'create_service_category']);
Route::get('/admin/edit_service_result_category/{id}', [ResultCategoryController::class, 'edit_service_category']);
Route::post('/admin/update_service_result_category/{id}', [ResultCategoryController::class, 'update_service_category']);
Route::get('/admin/delete_service_result_category/{id}', [ResultCategoryController::class, 'delete_service_category']);

/******************************second result category Section**************************/
Route::get('/admin/second-result-category', [ResultCategoryController::class, 'SecondResultIndex']);
Route::get('/admin/add-second-result-category', [ResultCategoryController::class, 'SecondResultAdd']);
Route::get('/admin/second-result-category-preview', [ResultCategoryController::class, 'result_category_preview']);

/***************************result service Section*******************************/
Route::get('/admin/result-service', [ServiceResultController::class, 'indexresultservice']);
Route::post('/admin/getactive-result-service', [ServiceResultController::class, 'getactive_result_service']);
Route::post('/admin/orderby-result-service', [ServiceResultController::class, 'orderby_result_service']);
Route::get('/admin/add-result-service', [ServiceResultController::class, 'add_result_service']);
Route::get('/admin/result-service-preview', [ServiceResultController::class, 'result_service_preview']);
Route::get('/admin/result_service_publish/{id}', [ServiceResultController::class, 'result_service_publish']);
Route::post('/admin/result-servicelist', [ServiceResultController::class, 'result_servicelist']);
Route::post('/admin/create_result_service', [ServiceResultController::class, 'create_result_service']);
Route::get('/admin/edit_result_service/{id}', [ServiceResultController::class, 'edit_result_service']);
Route::post('/admin/update_result_service/{id}', [ServiceResultController::class, 'update_result_service']);
Route::get('/admin/delete_result_service/{id}', [ServiceResultController::class, 'delete_result_service']);

/****************************Result Inner Section******************************/
Route::get('/admin/service-result-inner', [ServiceResultController::class, 'index']);
Route::post('/admin/getactive-result-inner', [ServiceResultController::class, 'getactive']);
Route::post('/admin/orderby-result-inner', [ServiceResultController::class, 'orderby']);
Route::get('/admin/add-service-result-inner', [ServiceResultController::class, 'add']);
Route::get('/admin/result-inner-preview', [ServiceResultController::class, 'result_inner_preview']);
Route::get('/admin/result_inner_publish/{id}', [ServiceResultController::class, 'result_inner_publish']);
Route::post('/admin/service-change', [ServiceResultController::class, 'service_change']);
Route::post('/admin/create_service_result_inner', [ServiceResultController::class, 'create_service']);
Route::get('/admin/edit_service_result_inner/{id}', [ServiceResultController::class, 'edit_service']);
Route::post('/admin/update_service_result_inner/{id}', [ServiceResultController::class, 'update_service']);
Route::get('/admin/delete_service_result_inner/{id}', [ServiceResultController::class, 'delete_service']);

/*****************************First Video category Section*****************************/
Route::get('/admin/service-video-category', [VideoCategoryController::class, 'indexvideocategory']);
Route::post('/admin/getactive-video-category', [VideoCategoryController::class, 'getactive_video_category']);
Route::post('/admin/orderby-video-category', [VideoCategoryController::class, 'orderby_video_category']);
Route::get('/admin/add-service-video-category', [VideoCategoryController::class, 'add_video_category']);
Route::get('/admin/video-category-preview', [VideoCategoryController::class, 'video_category_preview']);
Route::get('/admin/video_category_publish/{id}', [VideoCategoryController::class, 'video_category_publish']);
Route::post('/admin/create_service_video_category', [VideoCategoryController::class, 'create_video_category']);
Route::get('/admin/edit_service_video_category/{id}', [VideoCategoryController::class, 'edit_video_category']);
Route::post('/admin/update_service_video_category/{id}', [VideoCategoryController::class, 'update_video_category']);
Route::get('/admin/delete_service_video_category/{id}', [VideoCategoryController::class, 'delete_video_category']);

/**************************second video category Section*********************/
Route::get('/admin/second-video-category', [VideoCategoryController::class, 'SecondVideoIndex']);
Route::get('/admin/add-second-video-category', [VideoCategoryController::class, 'SecondVideoAdd']);
Route::get('/admin/second-video-category-preview', [VideoCategoryController::class, 'video_category_preview']);

/********************************Video service Section*********************/
Route::get('/admin/video-service', [ServiceVideoController::class, 'indexvideoservice']);
Route::post('/admin/getactive-video-service', [ServiceVideoController::class, 'getactive_video_service']);
Route::post('/admin/orderby-video-service', [ServiceVideoController::class, 'orderby_video_service']);
Route::get('/admin/add-video-service', [ServiceVideoController::class, 'add_video_service']);
Route::get('/admin/video-service-preview', [ServiceVideoController::class, 'video_service_preview']);
Route::get('/admin/video_service_publish/{id}', [ServiceVideoController::class, 'video_service_publish']);
Route::post('/admin/video-servicelist', [ServiceVideoController::class, 'video_servicelist']);
Route::post('/admin/create_video_service', [ServiceVideoController::class, 'create_video_service']);
Route::get('/admin/edit_video_service/{id}', [ServiceVideoController::class, 'edit_video_service']);
Route::post('/admin/update_video_service/{id}', [ServiceVideoController::class, 'update_video_service']);
Route::get('/admin/delete_video_service/{id}', [ServiceVideoController::class, 'delete_video_service']);

/*********************Video Inner Section*********************/
Route::get('/admin/service-video-inner', [ServiceVideoController::class, 'index']);
Route::post('/admin/getactive-video-inner', [ServiceVideoController::class, 'getactive']);
Route::post('/admin/orderby-video-inner', [ServiceVideoController::class, 'orderby']);
Route::get('/admin/add-service-video-inner', [ServiceVideoController::class, 'add']);
Route::get('/admin/video-inner-preview', [ServiceVideoController::class, 'video_inner_preview']);
Route::get('/admin/video_inner_publish/{id}', [ServiceVideoController::class, 'video_inner_publish']);
Route::post('/admin/video-change', [ServiceVideoController::class, 'video_change']);
Route::post('/admin/create_service_video_inner', [ServiceVideoController::class, 'create_service']);
Route::get('/admin/edit_service_video_inner/{id}', [ServiceVideoController::class, 'edit_service']);
Route::get('/admin/show-video-link-inner', [ServiceVideoController::class, 'show_video_link']);
Route::post('/admin/update_service_video_inner/{id}', [ServiceVideoController::class, 'update_service']);
Route::get('/admin/delete_service_video_inner/{id}', [ServiceVideoController::class, 'delete_service']);

/*********************Testimonial Section*********************/
Route::get('/admin/testimonials', [TestimonialController::class, 'index']);
Route::post('/admin/getactive-testimonials', [TestimonialController::class, 'getactive']);
Route::get('/admin/add-testimonials', [TestimonialController::class, 'add']);
Route::get('/admin/testimonials-preview', [TestimonialController::class, 'testimonials_preview']);
Route::post('/admin/create_testimonials', [TestimonialController::class, 'create_testimonials']);
Route::get('/admin/create_test_publish/{id}', [TestimonialController::class, 'create_test_publish']);
Route::get('/admin/edit_testimonials/{id}', [TestimonialController::class, 'edit_testimonials']);
Route::post('/admin/update_testimonials/{id}', [TestimonialController::class, 'update_testimonials']);
Route::get('/admin/delete_testimonials/{id}', [TestimonialController::class, 'delete_testimonials']);

/*********************Testimonial Video Section*********************/
Route::get('/admin/video-testimonials', [TestimonialVideoController::class, 'index']);
Route::post('/admin/getactive-video-testimonials', [TestimonialVideoController::class, 'getactive']);
Route::get('/admin/add-video-testimonials', [TestimonialVideoController::class, 'add']);
// Route::get('/admin/video-testimonials-preview', [TestimonialVideoController::class, 'VideoTestimonialsPreview']);
Route::post('/admin/create_video_testimonials', [TestimonialVideoController::class, 'CreateVideoTestimonials']);
// Route::get('/admin/create_video_test_publish/{id}', [TestimonialVideoController::class, 'CreateVideoTestPublish']);
Route::get('/admin/edit_video_testimonials/{id}', [TestimonialVideoController::class, 'EditVideoTestimonials']);
// Route::post('/admin/update_video_testimonials/{id}', [TestimonialVideoController::class, 'UpdateVideoTestimonials']);
Route::get('/admin/delete_video_testimonials/{id}', [TestimonialVideoController::class, 'DeleteVideoTestimonials']);

/*********************Blog Section*********************/
Route::get('/admin/blogs', [BlogController::class, 'index']);
Route::post('/admin/getactive-blog', [BlogController::class, 'getactive']);
Route::get('/admin/add-blogs', [BlogController::class, 'add']);
Route::post('/admin/create_blogs', [BlogController::class, 'create_blogs']);
Route::get('/admin/blogs-preview', [BlogController::class, 'blogs_preview']);
Route::get('/admin/create_blog_publish/{id}', [BlogController::class, 'create_blog_publish']);
Route::get('/admin/edit_blogs/{id}', [BlogController::class, 'edit_blogs']);
Route::post('/admin/update_blogs/{id}', [BlogController::class, 'update_blogs']);
Route::get('/admin/delete_blogs/{id}', [BlogController::class, 'delete_blogs']);

/*********************Appointment Section***********************/
Route::get('/admin/appointment', [AppointmentController::class, 'index']);
Route::get('/admin/call-back-form', [AppointmentController::class, 'call_back_form']);
Route::get('/admin/getaquotes', [AppointmentController::class, 'getaquote']);
Route::post('/admin/create-appointment-mail', [FromController::class, 'create_appointment_mail']);
Route::get('/admin/add-appointment-mail', [AppointmentController::class, 'add_appointment_mail']);

/*********************Gallery Section***********************/
Route::get('/admin/gallery', [GalleryController::class, 'index']);
Route::get('/admin/add-gallery', [GalleryController::class, 'add']);
Route::get('/admin/gallery-preview', [GalleryController::class, 'gallery_preview']);
Route::get('/admin/gallery_publish/{id}', [GalleryController::class, 'gallery_publish']);
Route::get('/admin/edit_gallery/{id}', [GalleryController::class, 'edit_gallery']);
Route::post('/admin/create_gallery', [GalleryController::class, 'create_gallery']);
Route::post('/admin/update_gallery/{id}', [GalleryController::class, 'update_gallery']);
Route::get('/admin/delete_gallery/{id}', [GalleryController::class, 'delete_gallery']);

/*********************Contact Us Section***********************/
Route::get('/admin/contact', [ContactController::class, 'index']);
Route::post('/admin/create-contact-mail', [FromController::class, 'create_contact_mail']);
Route::get('/admin/sendmail', [FromController::class, 'sendmail']);

/*********************Contact Us Section***********************/
// Route::get('/admin/contact-detail', [ContactController::class, 'contact_detail']);


});

    