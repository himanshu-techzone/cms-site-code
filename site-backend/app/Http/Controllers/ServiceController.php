<?php

namespace App\Http\Controllers;

use App\Helpers\Helpers;
use App\Models\FrontMenuModel;
use App\Models\SeoPageModel;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
use App\Models\ServiceCategoryModel;
use App\Models\ServiceModel;
use App\Trait\CategoryTrait;
use Illuminate\Support\Facades\Session;
use PhpParser\Node\Expr\Print_;
use Illuminate\Support\Facades\File;

class ServiceController extends Controller
{
    public function __construct(Helpers $siteurl)
    {      
       $this->siteurl = $siteurl;
    }
    
    public function index()
    {

        session()->forget('primeid');
        $uri = request()->segments()[1];
        $uripermission = [];
        $data['permissionoprid'] = [];
        $permissionoprid = [];
        foreach (session('userinfo')['user_operation_permissions'] as $oplist) {
            if ($oplist->op_link == $uri) {
                $uripermission = $oplist->oper_act_id;
                $uripermission = explode(',', $uripermission);
            }
        }
        $data['permission'] = $uripermission;
        if(isset(session('userinfo')['user_category_operation_permissions'][0]['opid'])){
        $permissionoprid = session('userinfo')['user_category_operation_permissions'][0]['opid'];
        $data['permissionoprid'] = explode(',', $permissionoprid);
        }
        
        // $select_table = ['service.*','service_category.service_name as sercatname'];
        $data['view'] = ServiceModel::select('*')->where('category_type','service')->get();

        return view('admin.service.list-service')->with($data);
    }

    public function getactive(Request $request)
    {
        $id = $request->input('id');
        $servicelist = ServiceModel::find($id);
        $servicelist->update($request->input());
    }

    public function orderby_service(Request $request)
    {
        $ser_id = $request->input('id');
        $servicelist = ServiceModel::find($ser_id);
        $servicelist->update($request->input());
    }

    public function add()
    {        
        // Session::put('primeid', '16');
        $data['permissionoprid'] = [];
        if(isset(session('userinfo')['user_category_operation_permissions'][0]['opid'])){
        $permissionoprid = session('userinfo')['user_category_operation_permissions'][0]['opid'];
        $data['permissionoprid'] = explode(',', $permissionoprid);
        }
        $data['firstcategory'] = ServiceModel::select('ser_id', 'service_name')->whereNull('parent_id')
            ->where('category_type', 'firstcategory')->get();

        $data['view'] = ServiceModel::find(session('primeid'));
       
        if (isset($data['view']->parent_id)) {
            $data['secondsec'] = CategoryTrait::allcategorylist($data['view']->parent_id);
        }

        if(isset($data['view']->url)){
            $data['seotag'] = SeoPageModel::select('title_tag', 'keyword_tag','description_tag','canonical_tag','url')
        ->where('url', $data['view']->url)->where('seo_type', 'service')->first();
            }
           
        return view('admin.service.add-service')->with($data);
    }

   
    public function service_change_list(Request $request)
    {
        $id = $request->input('servicecat');
        $select_table = ['ser_id', 'service_name'];
        $data = ServiceModel::select($select_table)->where('parent_id', $id)->get();
        echo "<option value=''>Select Service</option>";
        foreach ($data as $datalist) {
            echo "<option value='{$datalist->ser_id}'>{$datalist->service_name}</option>";
        }
    }

    function change_key( $array, $old_key, $new_key ) {

        if( ! array_key_exists( $old_key, $array ) )
            return $array;
    
        $keys = array_keys( $array );
        $keys[ array_search( $old_key, $keys ) ] = $new_key;
    
        return array_combine( $keys, $array );
    }


    public function create_service(Request $request)
    {
        // print_r($request->input());
        $destinationPath = 'backend/service/image';
        $destinationPathbanner = 'backend/service/banner';
        $destinationPathsection = 'backend/service/section';
        $destinationPathsectionbanner = 'backend/service/section_banner';
        // $destinationPathbgimage = 'backend/service/section';

        if (!File::exists($destinationPath)) {
            File::makeDirectory($destinationPath, $mode = 0777, true, true);
        }

        if (!File::exists($destinationPathbanner)) {
            File::makeDirectory($destinationPathbanner, $mode = 0777, true, true);
        }

        if (!File::exists($destinationPathsection)) {
            File::makeDirectory($destinationPathsection, $mode = 0777, true, true);
        }

        if (!File::exists($destinationPathsectionbanner)) {
            File::makeDirectory($destinationPathsectionbanner, $mode = 0777, true, true);
        }

        if ($request->hasFile('service_image')) {
            $image = $request->file('service_image');
            $name = time() . '_image.' . $image->getClientOriginalExtension();
            $image->move($destinationPath, $name);
        } else {
            $name = $request->input('oldservice_image');;
        }
        
        if ($request->hasFile('service_icon')) {
            $image = $request->file('service_icon');
            $name_icon = time() . '_icon.' . $image->getClientOriginalExtension();
            $image->move($destinationPath, $name_icon);
        } else {
            $name_icon = $request->input('oldservice_icon');;
        }

        if ($request->hasFile('service_banner_image')) {
            $image = $request->file('service_banner_image');
            $name2 = time() . '_banner.' . $image->getClientOriginalExtension();
            $image->move($destinationPathbanner, $name2);
        } else {
            $name2 = $request->input('oldservice_banner_image');;
        }

        if ($request->hasFile('home_banner_image')) {
            $image = $request->file('home_banner_image');
            $name3 = time() . '_home_banner.' . $image->getClientOriginalExtension();
            $image->move($destinationPathbanner, $name3);
        } else {
            $name3 = $request->input('oldhome_banner_image');;
        }
$servicesection = $request->input('servicesection');
                $datalist[] = [
                                    "type"=> "fulltext",
                                    "secorderby"=> null,
                                    "section_heading"=> "Procedure",
                                    "service_heading"=> null,
                                    "service_heading1"=> null,
                                    "button_type"=> "No",
                                    "button_name"=> null,
                                    "button_url"=> null,
                                    "button_style"=> null,
                                    "class_add"=> null,
                                    "appointment_side"=> "upper",
                                    "bg_type"=> "white",
                                    "bgcolor_style"=> null,
                                    "bgimage"=> null,
                                    "tab_type"=> null,
                                    "section1"=> $request->description2,
                                    "section2"=> null,
                                    "image"=> null,
                                    "alttag"=> null,
                                    "threepragraph"=> [
                                            "threeparagraphdata"=> null,
                                            "threedesignstart"=> null,
                                            "orderby"=> null
                                            ],
                                            "tabpragraph"=> [
                                            "tabheadingdata"=> null,
                                            "tabheadingdata2"=> null,
                                            "tabimage"=> null,
                                            "tab_alttag"=> null,
                                            "tabparagraphdata"=> null,
                                            "taborderby"=> null
                                            ]
                                    ];
        $parent_id = null;
        $permissionoprid = session('userinfo')['user_category_operation_permissions'][0]['opid'];
        $permissionoprid = explode(',', $permissionoprid);
    
                    if (in_array('36', $permissionoprid)) {
                        $parent_id = $request->input('second_cat');
                    } else {
                        if (in_array('16', $permissionoprid)) {
                            $parent_id = $request->input('service_cat');
                        }
                    }
               

        if($request->input('show_type')=='outside'){
            $homedescription = $request->input('homedescription');
        }else{
            $homedescription = null;
        }
        $ser_id = $request->input('ser_id');
        if ($ser_id < 1) {
            $service = ServiceModel::create(array_merge(
                $request->input(),
                [
                    'service_type' => 'treatments',
                    'service_image' => $name,
                    'service_icon' => $name_icon,
                    'homedescription' => $homedescription,
                    'service_banner_image' => $name2,
                    'home_banner_image' => $name3,
                    'parent_id' => $parent_id,
                    'section' => json_encode($datalist)
                ]
            ));
        }
        
        return redirect('admin/service');
    }


    public function edit_service($id)
    {
        $permissionoprid = session('userinfo')['user_category_operation_permissions'][0]['opid'];
        $data['permissionoprid'] = explode(',', $permissionoprid);
        Session::put('primeid', $id);
        $data['firstcategory'] = ServiceModel::select('ser_id', 'service_name')->whereNull('parent_id')
            ->where('category_type', 'firstcategory')->get();
        
        $data['edit'] = ServiceModel::find($id);

        $data['seotag'] = SeoPageModel::select('title_tag', 'keyword_tag','description_tag','canonical_tag','url')
        ->where('url', $data['edit']->url)->where('seo_type', 'service')->first();
        $data['secondsec'] = CategoryTrait::allcategorylist($data['edit']->parent_id);
        return view('admin.service.edit-service')->with($data);
    }

    public function delete_service($id)
    {
        $servicelist = ServiceModel::find($id);
        $servicelist->update(['deleted_by' => session('useradmin')['usr_id']]);
        $servicelist->delete();

        return redirect('admin/service');
    }

}
