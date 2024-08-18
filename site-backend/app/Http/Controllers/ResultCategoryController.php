<?php

namespace App\Http\Controllers;

use App\Helpers\Helpers;
use App\Models\FrontMenuModel;
use App\Models\ResultInnerModel;
use App\Models\ResultServiceModel;
use App\Models\SeoPageModel;
use App\Models\ServiceModel;
use App\Trait\CategoryTrait;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Facades\File;

class ResultCategoryController extends Controller
{

    public function __construct(Helpers $siteurl)
    {      
       $this->siteurl = $siteurl;
    }
        //=======================Service Result Category==================//
    public function indexcategory()
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

        $select_table = ['res_ser_id','parent_id', 'category_type', 'result_cat_id','service_id','name','image','banner_image','video_type','video_link','alt_tag','description','title_tag','keyword_tag','description_tag','canonical_tag','url','order_by','result_status','status'];
        $data['view'] = ResultServiceModel::select($select_table)->get();
        return view('admin.result-category.list-result-category')->with($data);
    }

    public function getactive_result_category(Request $request)
    {
        $id = $request->input('id');
        $service = ResultServiceModel::find($id);
        $service->update($request->input());
    }

    public function orderby_result_category(Request $request)
    {
        $id = $request->input('id');
        $service = ResultServiceModel::find($id);
        $service->update($request->input());
    }

    public function add_result_category()
    {
        $data['view'] = ResultServiceModel::find(session('primeid'));
        if(isset($data['view']->url)){
            $data['seotag'] = SeoPageModel::select('title_tag', 'keyword_tag','description_tag','canonical_tag','url')
        ->where('url', $data['view']->url)->where('seo_type', 'result'.$data['view']->category_type)->first();
            }
        return view('admin.result-category.add-result-category')->with($data);
    }

    public function create_service_category(Request $request)
    {
        $destinationPath = 'backend/service_result/category_banner';
        $destinationPathimage = 'backend/service_result/image';

        if (!File::exists($destinationPath)) {
            File::makeDirectory($destinationPath, $mode = 0777, true, true);
        }

        if (!File::exists($destinationPathimage)) {
            File::makeDirectory($destinationPathimage, $mode = 0777, true, true);
        }

        $categorytype = $request->input('category_type');
        if($categorytype=='firstcategory'){
            $redirect_blade = 'admin/result-category-preview';
            $redirect_blade_fail = 'admin/add-service-result-category';
            $redirect_blade_list = 'admin/add-service-result-category';
            $redirect_blade_list = 'admin/service-result-category';
        }elseif($categorytype=='secondcategory'){
            $redirect_blade = 'admin/second-result-category-preview';
            $redirect_blade_fail = 'admin/add-second-result-category';
            $redirect_blade_list = 'admin/second-result-category';
        }
        //this is assign plan required field
        $validator = Validator::make($request->input(), [
            'name' => 'required',
        ]);
        //Will get redirected if validator is not matched
        if ($validator->fails()) {
            return redirect($redirect_blade_fail);
        }

        if ($request->hasFile('banner_image')) {
            $image = $request->file('banner_image');
            $name = time() . '_banner.' . $image->getClientOriginalExtension();
            $image->move($destinationPath, $name);
        } else {
            $name = $request->input('oldbanner_image');
        }

        if ($request->hasFile('image')) {
            $image = $request->file('image');
            $name2 = time() . '.' . $image->getClientOriginalExtension();
            $image->move($destinationPathimage, $name2);
        } else {
            $name2 = $request->input('oldimage');
        }

        if ($request->input('video_type') == 'image') {
            $video_link = null;
        } else {
            $video_link = $request->input('video_link');
        }

        $res_ser_id = $request->input('res_ser_id');
        if($res_ser_id < 1){
            $video = ResultServiceModel::create(array_merge(
            $request->input(),
            [
                'banner_image' => $name,
                'image' => $name2,
                'video_link' => $video_link,
            ]
        ));
        Session::put('primeid', $video->res_ser_id);
    }else{
        $videodata = ResultServiceModel::find($res_ser_id);
        $videodata->update(array_merge($request->input(),
            [
                'result_key' => $videodata->result_key,
                'banner_image' => $name,
                'image' => $name2,
                'video_link' => $video_link,
            ]
        ));
        }

        
        return redirect($redirect_blade_list);
    }


    public function edit_service_category($id)
    {
        Session::put('primeid', $id);
        $data['edit'] = ResultServiceModel::find($id);
        $data['firstcategory'] = ResultServiceModel::select('res_ser_id','name')->whereNull('parent_id')
        ->where('category_type','firstcategory')->get();

        $data['seotag'] = SeoPageModel::select('title_tag', 'keyword_tag','description_tag','canonical_tag','url')
        ->where('url', $data['edit']->url)->where('seo_type', 'result'.$data['edit']->category_type)->first();

        if($data['edit']->category_type=='firstcategory'){
            $redirect_blade = 'admin.result-category.edit-result-category';
        }elseif($data['edit']->category_type=='secondcategory'){
            $redirect_blade = 'admin.result-category-second.edit-result-category-second';
        }
        // $data['servicecat'] = ServiceCategoryModel::select('ser_cat_id','service_name')->get();
        return view($redirect_blade)->with($data);
    }

    public function SecondResultIndex()
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
        $select_table = ['res_ser_id','parent_id', 'category_type', 'result_cat_id','service_id','name','image','banner_image','video_type','video_link','alt_tag','description','title_tag','keyword_tag','description_tag','canonical_tag','url','order_by','result_status','status'];
        $data['view'] = ResultServiceModel::select($select_table)->whereNull('parent_id')->where('category_type','firstcategory')->get();
        $data['secondcatview'] = ResultServiceModel::select($select_table)->whereNotNull('parent_id')->where('category_type','secondcategory')->get();
        return view('admin.result-category-second.list-result-category-second')->with($data);
    }

    public function SecondResultAdd()
    {
        $data['firstcategory'] = ResultServiceModel::select('res_ser_id','name')->whereNull('parent_id')
        ->where('category_type','firstcategory')->get();
        $data['view'] = ResultServiceModel::find(session('primeid'));
        if(isset($data['view']->parent_id)){
            $data['secondsec'] = CategoryTrait::allresultcategorylist($data['view']->parent_id);
        }
        if(isset($data['view']->url)){
            $data['seotag'] = SeoPageModel::select('title_tag', 'keyword_tag','description_tag','canonical_tag','url')
        ->where('url', $data['view']->url)->where('seo_type', 'result'.$data['view']->category_type)->first();
            }
        return view('admin.result-category-second.add-result-category-second')->with($data);
    }

}
