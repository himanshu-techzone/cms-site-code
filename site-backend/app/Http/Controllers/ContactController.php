<?php

namespace App\Http\Controllers;


use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Carbon;
use App\Models\ContactUsModel;

class ContactController extends Controller
{

    public function index(Request $request)
    { 
        
        $select_table_contact = ['contactus_id as app_id', 'name', 'email', 'phone',  'message', 'created_at'];
      
       
        
            $data = ContactUsModel::select($select_table_contact)->get();
           
        
           
        return view('admin.contact_us.list-contact_us', ['view' => $data]);
    }

    

    public function getactive(Request $request)
    {
        $id = $request->input('id');
        $bloglist = ContactDetailModel::find($id);
        $bloglist->update($request->input());
    }

    

   
    // public function contact_detail()
    // {
    //     $select_table = ['contact_id', 'name', 'address', 'email_id', 'phone', 'timings'];
    //     $data['view'] = ContactDetailModel::select($select_table)->first();
    //     $data['count'] = ContactDetailModel::select($select_table)->count();
    //     return view('admin.contact-detail.add-contact-detail')->with($data);
    // }

    public function addphone()
    {
        $data['country'] = CountryModel::get();
        return view('admin.contact-detail.add-phone')->with($data);
    }

   




   
}
