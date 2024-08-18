<?php

namespace App\Http\Controllers;

use App\Helpers\Helpers;
use App\Models\FrontMenuModel;
use App\Models\SeoPageModel;
use App\Models\ServiceModel;
use App\Models\VideoServiceModel;
use App\Trait\CategoryTrait;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Facades\File;

class VideoCategoryController extends Controller
{
    public function __construct(Helpers $siteurl)
    {      
       $this->siteurl = $siteurl;
    }
    
    //=======================Service Video Category==================//
    public function indexvideocategory()
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

        $select_table = ['vid_ser_id','parent_id','category_type','service_id', 'name', 'image','banner_image','video_type','video_link','alt_tag','description','title_tag','keyword_tag','description_tag','canonical_tag','url','vid_ser_status','status', 'order_by'];
        $data['view'] = VideoServiceModel::select($select_table)->get();
        return view('admin.video-category.list-video-category')->with($data);
    }

    public function getactive_video_category(Request $request)
    {
        $id = $request->input('id');
        $service = VideoServiceModel::find($id);
        $service->update($request->input());
    }

    public function orderby_video_category(Request $request)
    {
        $id = $request->input('id');
        $service = VideoServiceModel::find($id);
        $service->update($request->input());
    }

    public function add_video_category()
    {
        $data['view'] = VideoServiceModel::find(session('primeid'));
        if(isset($data['view']->url)){
            $data['seotag'] = SeoPageModel::select('title_tag', 'keyword_tag','description_tag','canonical_tag','url')
        ->where('url', $data['view']->url)->where('seo_type', 'video'.$data['view']->category_type)->first();
            }
        return view('admin.video-category.add-video-category')->with($data);
    }

    public function create_video_category(Request $request)
    {
        $destinationPath = 'backend/service_video/category_banner';
        $destinationPathimage = 'backend/service_video/image';

        if (!File::exists($destinationPath)) {
            File::makeDirectory($destinationPath, $mode = 0777, true, true);
        }

        if (!File::exists($destinationPathimage)) {
            File::makeDirectory($destinationPathimage, $mode = 0777, true, true);
        }

        $categorytype = $request->input('category_type');
        if($categorytype=='firstcategory'){
            $redirect_blade = 'admin/video-category-preview';
            $redirect_blade_fail = 'admin/add-service-video-category';
            $redirect_blade_list = 'admin/service-video-category';
        }elseif($categorytype=='secondcategory'){
            $redirect_blade = 'admin/second-video-category-preview';
            $redirect_blade_fail = 'admin/add-second-video-category';
            $redirect_blade_list = 'admin/second-video-category';
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

        if ($request->input('servicecat') != '') {
            $servicecat =   implode(',', $request->input('servicecat'));
        } else {
            $servicecat = null;
        }

        $vid_ser_id = $request->input('vid_ser_id');
        if($vid_ser_id < 1){
            $video = VideoServiceModel::create(array_merge(
            $request->input(),
            [
                'service_cat_id' => $servicecat,
                'banner_image' => $name,
                'image' => $name2,
            ]
        ));
    
    }

        return redirect($redirect_blade_list);
    }


    public function edit_video_category($id)
    {
        Session::put('primeid', $id);
        $data['edit'] = VideoServiceModel::find($id);
        $data['firstcategory'] = VideoServiceModel::select('vid_ser_id','name')->whereNull('parent_id')
        ->where('category_type','firstcategory')->get();

        $data['seotag'] = SeoPageModel::select('title_tag', 'keyword_tag','description_tag','canonical_tag','url')
        ->where('url', $data['edit']->url)->where('seo_type', 'video'.$data['edit']->category_type)->first();

        if($data['edit']->category_type=='firstcategory'){
            $redirect_blade = 'admin.video-category.edit-video-category';
        }elseif($data['edit']->category_type=='secondcategory'){
            $redirect_blade = 'admin.video-category-second.edit-video-category-second';
        }
        // $data['servicecat'] = ServiceCategoryModel::select('ser_cat_id','service_name')->get();
        return view($redirect_blade)->with($data);
    }

    public function SecondVideoIndex()
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
        $select_table = ['vid_ser_id','parent_id', 'category_type', 'video_cat_id','service_id','name','image','banner_image','video_type','video_link','alt_tag','description','title_tag','keyword_tag','description_tag','canonical_tag','url','order_by','vid_ser_status','status'];
        $data['view'] = VideoServiceModel::select($select_table)->whereNull('parent_id')->where('category_type','firstcategory')->get();
        $data['secondcatview'] = VideoServiceModel::select($select_table)->whereNotNull('parent_id')->where('category_type','secondcategory')->get();
        return view('admin.video-category-second.list-video-category-second')->with($data);
    }

    public function SecondVideoAdd()
    {
        $data['firstcategory'] = VideoServiceModel::select('vid_ser_id','name')->whereNull('parent_id')
        ->where('category_type','firstcategory')->get();
        $data['view'] = VideoServiceModel::find(session('primeid'));
        if(isset($data['view']->parent_id)){
            $data['secondsec'] = CategoryTrait::allvideocategorylist($data['view']->parent_id);
        }

        if(isset($data['view']->url)){
            $data['seotag'] = SeoPageModel::select('title_tag', 'keyword_tag','description_tag','canonical_tag','url')
        ->where('url', $data['view']->url)->where('seo_type', 'video'.$data['view']->category_type)->first();
            }

        return view('admin.video-category-second.add-video-category-second')->with($data);
    }



}
