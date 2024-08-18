<?php

namespace App\Http\Controllers;

use App\Helpers\Helpers;
use App\Models\FrontMenuModel;
use App\Models\SeoPageModel;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
use App\Models\ServiceModel;
use App\Trait\CategoryTrait;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Facades\File;

class ServicecategoryController extends Controller
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
        foreach(session('userinfo')['user_operation_permissions'] as $oplist){
           if($oplist->op_link == $uri){
            $uripermission = $oplist->oper_act_id;
            $uripermission = explode(',',$uripermission);
           }
        }
        $data['permission'] = $uripermission;
        $select_table = ['ser_id','parent_id','video_type','service_type', 'service_name','service_image','service_banner_image','video_link','alt_tag','description','short_desc','title_tag','keyword_tag','description_tag','canonical_tag','url', 'order_by', 'status','ser_status'];
        $data['view'] = ServiceModel::select($select_table)->whereNull('parent_id')->get();
        return view('admin.service-category.list-service-category')->with($data);
    }

    public function getactive(Request $request)
    {
        $id = $request->input('id');
        $servicelist = ServiceModel::find($id);
        $servicelist->update($request->input());
    }

    public function orderby_service_category(Request $request)
    {
        $id = $request->input('id');
        $servicelist = ServiceModel::find($id);
        $servicelist->update($request->input());
    }

    public function add()
    {
        $data['view'] = ServiceModel::find(session('primeid'));
        if(isset($data['view']->url)){
            $data['seotag'] = SeoPageModel::select('title_tag', 'keyword_tag','description_tag','canonical_tag','url')
        ->where('url', $data['view']->url)->where('seo_type', 'service'.$data['view']->category_type)->first();
            }
        return view('admin.service-category.add-service-category')->with($data);
    }

    public function create_service(Request $request)
    {
        $destinationPath = 'backend/service/image';
        $destinationPathbanner = 'backend/service/banner';

        if (!File::exists($destinationPath)) {
            File::makeDirectory($destinationPath, $mode = 0777, true, true);
        }

        if (!File::exists($destinationPathbanner)) {
            File::makeDirectory($destinationPathbanner, $mode = 0777, true, true);
        }

        $categorytype = $request->input('category_type');
        if($categorytype=='firstcategory'){
            $redirect_blade = 'admin/service-category-preview';
            $redirect_blade_fail = 'admin/add-service-category';
            $redirect_blade_list = 'admin/service-category';
        }elseif($categorytype=='secondcategory'){
            $redirect_blade = 'admin/second-category-preview';
            $redirect_blade_fail = 'admin/add-second-service-category';
            $redirect_blade_list = 'admin/second-category';
        }

        //this is assign plan required field
        $validator = Validator::make($request->input(), [
            'service_name' => 'required',
        ]);
        //Will get redirected if validator is not matched
        if ($validator->fails()) {
            return redirect($redirect_blade_fail);
        }
        
        if ($request->hasFile('service_image')) {
            $image = $request->file('service_image');
            $name = $categorytype.'_image_'.time().'.'. $image->getClientOriginalExtension();
            $image->move($destinationPath, $name);
        } else {
            $name = $request->input('oldservice_image');
        }
        
        if ($request->hasFile('service_icon')) {
            $image = $request->file('service_icon');
            $name_icon = $categorytype.'_image_icon_'.time().'.'. $image->getClientOriginalExtension();
            $image->move($destinationPath, $name_icon);
        } else {
            $name_icon = $request->input('oldservice_icon');
        }

        if ($request->hasFile('service_banner_image')) {
            $image = $request->file('service_banner_image');
            $name2 = $categorytype.'_banner_'.time().'.'. $image->getClientOriginalExtension();
            $image->move($destinationPathbanner, $name2);
        } else {
            $name2 = $request->input('oldservice_banner_image');
        }

        $ser_id = $request->input('ser_id');
        if($ser_id < 1){
            $service = ServiceModel::create(array_merge(
            $request->input(),
            [
                'service_image' => $name,
                'service_banner_image' => $name2,
                'service_icon' => $name_icon,
            ]
        ));
        Session::put('primeid', $service->ser_id);
    }else{
        $servicedata = ServiceModel::find($ser_id);
        $servicedata->update(array_merge($request->input(),
            [
                'ser_key' => $servicedata->ser_key,
                'service_image' => $name,
                'service_banner_image' => $name2,
                'service_icon' => $name_icon,
            ]
        ));
        }

       
        return redirect($redirect_blade_list);
    }

    public function edit_service($id)
    {
        Session::put('primeid', $id);
        $data['edit'] = ServiceModel::find($id);
        $data['firstcategory'] = ServiceModel::select('ser_id','service_name')->whereNull('parent_id')
        ->where('category_type','firstcategory')->get();

        $data['seotag'] = SeoPageModel::select('title_tag', 'keyword_tag','description_tag','canonical_tag','url')
        ->where('url', $data['edit']->url)->where('seo_type', 'service'.$data['edit']->category_type)->first();
            
        if($data['edit']->category_type=='firstcategory'){
            $redirect_blade = 'admin.service-category.edit-service-category';
        }elseif($data['edit']->category_type=='secondcategory'){
            $redirect_blade = 'admin.service-category-second.edit-service-category-second';
        }
      
        return view($redirect_blade)->with($data);
    }

    public function SecondIndex()
    {
        session()->forget('primeid');
        $uri = request()->segments()[1];
        $uripermission = [];
        foreach(session('userinfo')['user_operation_permissions'] as $oplist){
           if($oplist->op_link == $uri){
            $uripermission = $oplist->oper_act_id;
            $uripermission = explode(',',$uripermission);
           }
        }
        $data['permission'] = $uripermission;
        $select_table = ['ser_id','parent_id','video_type','service_type', 'service_name','service_image','service_banner_image','video_link','alt_tag','description','short_desc','title_tag','keyword_tag','description_tag','canonical_tag','url', 'order_by', 'status','ser_status'];
        $data['view'] = ServiceModel::select($select_table)->whereNull('parent_id')->where('category_type','firstcategory')->get();
        $data['secondcatview'] = ServiceModel::select($select_table)->whereNotNull('parent_id')->where('category_type','secondcategory')->get();
        
        return view('admin.service-category-second.list-service-category-second')->with($data);
    }

    public function SecondCategory(Request $request)
    {
        $ser_id = $request->input('servicecategory');
        $select_table = ['ser_id', 'service_name'];
        $data = ServiceModel::select($select_table)->where('parent_id', $ser_id)->get();
        echo "<option value=''>Select Service</option>";
        foreach ($data as $datalist) {
            echo "<option value='{$datalist->ser_id}'>{$datalist->service_name}</option>";
        }
    }

    public function SecondAdd()
    {
        $data['firstcategory'] = ServiceModel::select('ser_id','service_name')->whereNull('parent_id')
        ->where('category_type','firstcategory')->get();
        $data['view'] = ServiceModel::find(session('primeid'));
        if(isset($data['view']->url)){
            $data['seotag'] = SeoPageModel::select('title_tag', 'keyword_tag','description_tag','canonical_tag','url')
            ->where('url', $data['view']->url)->where('seo_type', 'service'.$data['view']->category_type)->first();
            }
        return view('admin.service-category-second.add-service-category-second')->with($data);
    }

}
