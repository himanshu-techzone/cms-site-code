<?php

namespace App\Http\Controllers;

use App\Jobs\SendEmailJob;
use App\Mail\OwnerMail;
use App\Mail\ContactUsMail;
use App\Mail\UserMail;
use App\Models\AppointmentModel;
use App\Models\captchaModel;
use App\Models\ContactUsModel;
use App\Models\GetAQuotesModel;
use App\Models\CallBackModel;
use App\Models\GoogleRecaptchaModel;
use App\Models\MasterOrgModel;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Session;


class AppointmentController extends Controller
{
    public function index()
    {
        $select_table = ['app_id', 'name', 'email', 'phone', 'date', 'request_url', 'referral_url', 'source_type', 'message', 'created_at'];
        $data = AppointmentModel::select($select_table)->orderBy('app_id','DESC')->get();
        return view('admin.appointment.list-appointment', ['view' => $data]);
    }

    public function call_back_form()
    {
        $select_table = ['id', 'name', 'mobile', 'request_url', 'referral_url', 'source_type', 'created_at'];
        $data = CallBackModel::select($select_table)->orderBy('id','desc')->get();
        return view('admin.appointment.list-call-back', ['view' => $data]);
    }

    public function getaquote()
    {
        $select_table = ['quotes_id', 'name', 'email', 'phone', 'message', 'service_name','quotes', 'created_at'];
        $data = GetAQuotesModel::select($select_table)->orderBy('quotes_id','desc')->get();
        return view('admin.appointment.list-getaqoute', ['view' => $data]);
    }

    public function add_appointment_mail()
    {
        return view('admin.appointment.add-appointment');
    }

	public function appointmentsave(Request $request){
// 	          echo    Session::get('favcolor');
// dd(session()->all());
// die('sss');

        $validator = Validator::make($request->input(), [
            'name' => 'required',
            'mobile' => 'required',
            'email' => 'required',
            'startDate' => 'required',
            'captcha_cp' => 'required',
        ]);

        //Will get redirected if validator is not matched
        if ($validator->fails()) {
            return response()->json(['success' => false, 'data' => []], 400);
        }
        $cap = $request->input('captcha_cp');
        $capuid = $request->input('Uniqid');

        $cp = CaptchaModel::where('capchacode',$cap)->where('uid',$capuid);

        if($cp->count() < 1){
            return response()->json(['success' => false, 'data' => []], 401);
        }

        //new data will be create in menu table
        AppointmentModel::create([
            'name' => $request->input('name'),
            'email' => $request->input('email'),
            'phone' => $request->input('mobile'),
            'date' => date('d-m-Y',strtotime($request->input('startDate'))),
            'message' => $request->input('message'),
            'treatment' => $request->input('treatment'),
            'request_url' => $request->input('request_url'),
            'referral_url' => $request->input('referral_url'),
            'source_type' => $request->input('source_type'),
        ]);

        $url = url('/');
        $backendurl = env('BACK_FRONT');

        $detailsowner = [
            'name' =>  $request->input('name'),
            'orgname' =>  'Aestiva Centre',
            'clientphone' =>  $request->input('mobile'),
            'clientemail' =>  $request->input('email'),
            'date' => date('d-m-Y',strtotime($request->input('startDate'))),
            'treatment' => $request->input('treatment'),
            'page' => 'appointment-owner',
            'request_url' => $request->input('request_url'),
            'referral_url' => $request->input('referral_url'),
            'message' => $request->input('message'),
        ];
        $detailsuser = [
            'name' =>  $request->input('name'),
            'orgname' =>  'Aestiva Centre',
            'primarycountrycode' => '91',
            'primaryphone' =>  '8447652698',
            'secondaryphone' =>  null,
            'secondarycountrycode' => null,
            'email' =>  $request->input('email'),
            'url' => $url,
            'page' => 'appointment-user',
            'logo' => ''
        ];
        // if($siteview->count() > 0){
        // Mail::to($request->input('email'))->send(new UserMail($detailsuser));

        // Mail::to('info@aestiva.in')->send(new OwnerMail($detailsowner));

        dispatch(new SendEmailJob($detailsuser));
        dispatch(new SendEmailJob($detailsowner));
        // }
        return response()->json(['success' => true], 200);
    }

    public function contactussave(Request $request){

        $validator = Validator::make($request->input(), [
            'name' => 'required',
            'mobile' => 'required',
            'email' => 'required',
            'captcha_cp' => 'required',
        ]);

        //Will get redirected if validator is not matched
        if ($validator->fails()) {
            return "false";
        }

        $cap = $request->input('captcha_cp');
        $capuid = $request->input('Uniqid');

        $cp = CaptchaModel::where('capchacode',$cap)->where('uid',$capuid);

        if($cp->count() < 1){
            return response()->json(['success' => false, 'data' => []], 401);
        }

        //new data will be create in menu table
        ContactUsModel::create([
            'name' => $request->input('name'),
            'email' => $request->input('email'),
            'phone' => $request->input('mobile'),
            'message' => $request->input('message'),
        ]);

        // $org = MasterOrgModel::find($request->input('org_id'));
        $url = url('/');
        $backendurl = env('BACK_FRONT');

        $detailsowner = [
            'name' =>  $request->input('name'),
            'orgname' =>  'Aestiva Centre',
            'clientphone' =>  $request->input('mobile'),
            'clientemail' =>  $request->input('email'),
            'date' => $request->input('date'),
            'page' => 'contact-owner',
            'message' => $request->input('message'),
        ];
        $detailsuser = [
            'name' =>  $request->input('name'),
            'orgname' =>  'Aestiva Centre',
            'primarycountrycode' => '91',
            'primaryphone' =>  '8447652698',
            'secondaryphone' =>  null,
            'secondarycountrycode' => null,
            'email' =>  $request->input('email'),
            'url' => $url,
            'page' => 'appointment-user',
            'logo' => ''
        ];

        // Mail::to($request->input('email'))->send(new UserMail($detailsuser));

        // Mail::to('info@aestiva.in')->send(new OwnerMail($detailsowner));

        dispatch(new SendEmailJob($detailsuser));
        dispatch(new SendEmailJob($detailsowner));

        return response()->json(['success' => true], 200);
    }

    public function callbacksave(Request $request){

        $validator = Validator::make($request->input(), [
            'name' => 'required',
            'mobile' => 'required',
        ]);

        if ($validator->fails()) {
            return '1';
        }

        $cap = $request->input('captcha_cp');
        $capuid = $request->input('Uniqid');
        $cp = CaptchaModel::where('capchacode',$cap)->where('uid',$capuid);

        if($cp->count() < 1){
            return response()->json(['success' => false, 'data' => []], 401);
        }

        //new data will be create in menu table
        CallBackModel::create($request->input());

        // $org = MasterOrgModel::find($request->input('org_id'));
        $url = url('/');
        $backendurl = env('BACK_FRONT');

        $detailsowner = [
            'name' =>  $request->input('name'),
            'orgname' =>  'Aestiva Centre',
            'clientphone' =>  $request->input('mobile'),
            'request_url' => $request->input('request_url'),
            'referral_url' => $request->input('referral_url'),
            'page' => 'quotes-owner',
        ];

        dispatch(new SendEmailJob($detailsowner));
        // Mail::to('info@aestiva.in')->send(new OwnerMail($detailsowner));
        return response()->json(['success' => true], 200);
    }

    public function appointmentlpsave(Request $request){
        // 	          echo    Session::get('favcolor');
        // dd(session()->all());
        // die('sss');
        
                $validator = Validator::make($request->input(), [
                    'name' => 'required',
                    'mobile' => 'required',
                    'email' => 'required',
                    'startDate' => 'required',
                    'captcha_cp' => 'required',
                ]);
        
                //Will get redirected if validator is not matched
                if ($validator->fails()) {
                    return response()->json(['success' => false, 'data' => []], 400);
                }

                $cap = $request->input('captcha_cp');
                $capuid = $request->input('Uniqid');

                $cp = CaptchaModel::where('capchacode',$cap)->where('uid',$capuid);

                if($cp->count() < 1){
                    return response()->json(['success' => false, 'data' => []], 401);
                }
        
                //new data will be create in menu table
                AppointmentModel::create([
                    'name' => $request->input('name'),
                    'email' => $request->input('email'),
                    'phone' => $request->input('mobile'),
                    'date' => date('d-m-Y',strtotime($request->input('startDate'))),
                    'message' => $request->input('message'),
                    'treatment' => $request->input('treatment'),
                    'request_url' => $request->input('request_url'),
                    'referral_url' => $request->input('referral_url'),
                    'source_type' => $request->input('source_type'),
                ]);
        
                $url = url('/');
                $backendurl = env('BACK_FRONT');
        
                $detailsowner = [
                    'name' =>  $request->input('name'),
                    'orgname' =>  'Aestiva Centre',
                    'clientphone' =>  $request->input('mobile'),
                    'clientemail' =>  $request->input('email'),
                    'date' => date('d-m-Y',strtotime($request->input('startDate'))),
                    'treatment' => $request->input('treatment'),
                    'page' => 'appointment-owner',
                    'request_url' => $request->input('request_url'),
                    'referral_url' => $request->input('referral_url'),
                    'message' => $request->input('message'),
                ];
                $detailsuser = [
                    'name' =>  $request->input('name'),
                    'orgname' =>  'Aestiva Centre',
                    'primarycountrycode' => '91',
                    'primaryphone' =>  '8447652698',
                    'secondaryphone' =>  null,
                    'secondarycountrycode' => null,
                    'email' =>  $request->input('email'),
                    'url' => $url,
                    'page' => 'appointment-user',
                    'logo' => ''
                ];
                // if($siteview->count() > 0){
                // Mail::to($request->input('email'))->send(new UserMail($detailsuser));
        
                // Mail::to('info@aestiva.in')->send(new OwnerMail($detailsowner));
        
                dispatch(new SendEmailJob($detailsuser));
                dispatch(new SendEmailJob($detailsowner));
                // }
                return response()->json(['success' => true], 200);
            }

            public function callbacklpsave(Request $request){

                $validator = Validator::make($request->input(), [
                    'name' => 'required',
                    'mobile' => 'required',
                ]);
        
                if ($validator->fails()) {
                    return response()->json(['success' => false, 'data' => []], 401);
                }
        
                //new data will be create in menu table
                CallBackModel::create($request->input());
        
                // $org = MasterOrgModel::find($request->input('org_id'));
                $url = url('/');
                $backendurl = env('BACK_FRONT');
        
                $detailsowner = [
                    'name' =>  $request->input('name'),
                    'orgname' =>  'Aestiva Centre',
                    'clientphone' =>  $request->input('mobile'),
                    'request_url' => $request->input('request_url'),
                    'referral_url' => $request->input('referral_url'),
                    'page' => 'quotes-owner',
                ];
        
                dispatch(new SendEmailJob($detailsowner));
                // Mail::to('info@aestiva.in')->send(new OwnerMail($detailsowner));
                return response()->json(['success' => true], 200);
            }

    public function mailcheck()
    {
        // print_r(url('/'));
        //print_r(session('userorginfo'));
        // $org = MasterUsersModel::find(1);
        $url = url('/');
        $backendurl = env('BACK_FRONT');
        $details = [
            'name' =>  'Test',
            'orgname' =>  'Test',
            'primarycountrycode' => '91',
            'primaryphone' =>  '9654451152',
            'secondaryphone' =>  '+91',
            'secondarycountrycode' => '9654451155',
            'email' =>  $request->input('email'),
            'url' => $url,
            'page' => 'appointment-user',
            'logo' => $backendurl.'images/orgnization/',
        ];
        Mail::to('info@aestiva.in')->send(new UserMail($details));

        return view('mail.appointment-user-mail', ['details' => $details]);
    }

}
