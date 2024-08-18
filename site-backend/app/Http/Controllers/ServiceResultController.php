<?php

namespace App\Http\Controllers;

use App\Helpers\Helpers;
use App\Models\FrontMenuModel;
use App\Models\ResultInnerModel;
use App\Models\ResultServiceModel;
use App\Models\SeoPageModel;
use App\Models\ServiceModel;
use App\Trait\CategoryTrait;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Facades\File;

class ServiceResultController extends Controller
{
    public function __construct(Helpers $siteurl)
    {      
       $this->siteurl = $siteurl;
    }

    //=======================Service Result==================//
    public function indexresultservice()
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
        $permissionoprid = session('userinfo')['user_category_operation_permissions'][0]['opid'];
        $data['permissionoprid'] = explode(',', $permissionoprid);
        
        $data['view'] = ResultServiceModel::select('*')->where('category_type','service')->get();
        return view('admin.service-result.list-service-result')->with($data);
    }

    public function getactive_result_service(Request $request)
    {
        $id = $request->input('id');
        $service = ResultServiceModel::find($id);
        $service->update($request->input());
    }

    public function orderby_result_service(Request $request)
    {
        $id = $request->input('id');
        $service = ResultServiceModel::find($id);
        $service->update($request->input());
    }

    public function add_result_service()
    {
        $permissionoprid = session('userinfo')['user_category_operation_permissions'][0]['opid'];
        $data['permissionoprid'] = explode(',', $permissionoprid);
        
        $data['firstcategory'] = ResultServiceModel::select('res_ser_id', 'name')->whereNull('parent_id')
            ->where('category_type', 'firstcategory')->get();

        $data['view'] = ResultServiceModel::find(session('primeid'));
       
        if (isset($data['view']->parent_id)) {
            $data['secondsec'] = CategoryTrait::allresultcategorylist($data['view']->parent_id);
        }

        if(isset($data['view']->url)){
            $data['seotag'] = SeoPageModel::select('title_tag', 'keyword_tag','description_tag','canonical_tag','url')
        ->where('url', $data['view']->url)->where('seo_type', 'resultdetail')->first();
            }
       
        return view('admin.service-result.add-service-result')->with($data);
    }
    public function result_servicelist(Request $request)
    {
        $serviceid = $request->input('servicelist');
        //   exit;
        
    }
    public function create_result_service(Request $request)
    {
        $destinationPath = 'backend/service_result/service';
        $destinationPathbanner = 'backend/service_result/service_banner';

        if (!File::exists($destinationPath)) {
            File::makeDirectory($destinationPath, $mode = 0777, true, true);
        }

        if (!File::exists($destinationPathbanner)) {
            File::makeDirectory($destinationPathbanner, $mode = 0777, true, true);
        }

        if ($request->hasFile('image')) {
            $image = $request->file('image');
            $name = time() . '.' . $image->getClientOriginalExtension();
            $image->move($destinationPath, $name);
        } else {
            $name = $request->input('oldimage');
        }

        if ($request->hasFile('banner_image')) {
            $image = $request->file('banner_image');
            $name2 = time() . '_banner.' . $image->getClientOriginalExtension();
            $image->move($destinationPathbanner, $name2);
        } else {
            $name2 = $request->input('oldbanner_image');
        }

        if ($request->input('video_type') == 'image') {
            $video_link = null;
        } else {
            $video_link = $request->input('video_link');
        }
        $parent_id = null;
        $permissionoprid = session('userinfo')['user_category_operation_permissions'][0]['opid'];
        $permissionoprid = explode(',', $permissionoprid);
        if (in_array('43', $permissionoprid)) {
            $parent_id = $request->input('fifth_cat');
        } else {
            if (in_array('42', $permissionoprid)) {
                $parent_id = $request->input('fourt_cat');
            } else {
                if (in_array('41', $permissionoprid)) {
                    $parent_id = $request->input('third_cat');
                } else {
                    if (in_array('40', $permissionoprid)) {
                        $parent_id = $request->input('second_cat');
                    } else {
                        if (in_array('19', $permissionoprid)) {
                            $parent_id = $request->input('service_cat');
                        }
                    }
                }
            }
        }

        $res_ser_id = $request->input('res_ser_id');
        if($res_ser_id < 1){
        $videoser = ResultServiceModel::create(array_merge(
            $request->input(),
            [
                'image' => $name,
                'banner_image' => $name2,
                'video_link' => $video_link,
                'parent_id' => $parent_id
            ]
        ));
        Session::put('primeid', $videoser->res_ser_id);
    }else{
            $video = ResultServiceModel::find($res_ser_id);
            $video->update(array_merge($request->input(),
                [
                    'result_key' => $video->result_key,
                    'image' => $name,
                    'banner_image' => $name2,
                    'video_link' => $video_link,
                    'parent_id' => $parent_id
                ]
            ));
            }

    }

    public function edit_result_service($id)
    {
        Session::put('primeid', $id);
        $data['edit'] = ResultServiceModel::find($id);

        $permissionoprid = session('userinfo')['user_category_operation_permissions'][0]['opid'];
        $data['permissionoprid'] = explode(',', $permissionoprid);

        $data['firstcategory'] = ResultServiceModel::select('res_ser_id', 'name')->whereNull('parent_id')
            ->where('category_type', 'firstcategory')->get();

        $data['seotag'] = SeoPageModel::select('title_tag', 'keyword_tag','description_tag','canonical_tag','url')
        ->where('url', $data['edit']->url)->where('seo_type', 'resultdetail')->first();

        // $data['view'] = ResultServiceModel::find(session('primeid'));
       
        if (isset($data['edit']->parent_id)) {
            $data['secondsec'] = CategoryTrait::allresultcategorylist($data['edit']->parent_id);
        }

        return view('admin.service-result.edit-service-result')->with($data);
    }

    public function delete_result_service($id)
    {
        $service = ResultServiceModel::find($id);
        $service->update(['deleted_by' => session('useradmin')['usr_id']]);
        $service->delete();
        return redirect('admin/result-service');
    }
    ///=============Service Result ====================//
    ///=============Service Result Inner ====================//

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

        $permissionoprid = session('userinfo')['user_category_operation_permissions'][0]['opid'];
        $data['permissionoprid'] = explode(',', $permissionoprid);
        // die();
        $data['view'] = ResultInnerModel::select('*')->get();
        $data['resultservice'] = ResultServiceModel::select('res_ser_id','name')->get();
        return view('admin.service-result-inner.list-service-result-inner')->with($data);
    }

    public function getactive(Request $request)
    {
        $id = $request->input('id');
        $service = ResultInnerModel::find($id);
        $service->update($request->input());
    }

    public function orderby(Request $request)
    {
        $id = $request->input('id');
        $service = ResultInnerModel::find($id);
        $service->update($request->input());
    }

    public function add()
    {
        $data['view'] = ResultInnerModel::find(session('primeid'));
        $permissionoprid = session('userinfo')['user_category_operation_permissions'][0]['opid'];
        $data['permissionoprid'] = explode(',', $permissionoprid);
        // print_r($data['permissionoprid']);
        // die();
        $data['firstcategory'] = ResultServiceModel::select('res_ser_id', 'name')->whereNull('parent_id')
            ->where('category_type', 'firstcategory')->get();
            $data['servicedata'] = ServiceModel::where('category_type', 'service')->get();
        if(isset($data['view']->result_service_id)){
            $data['service'] = ResultServiceModel::select('res_ser_id', 'name')
        ->where('res_ser_id',$data['view']->result_service_id)->where('status','active')->first();
        $data['secondsec'] = CategoryTrait::allresultcategorylist($data['view']->result_service_id);
        }
       
        return view('admin.service-result-inner.add-service-result-inner')->with($data);
    }
    public function service_change(Request $request)
    {
        $id = $request->input('servicecat');
        $data = ResultServiceModel::select('res_ser_id','name')
            ->where('result_cat_id', $id)->get();
        echo "<option value=''>Select Service</option>";
        foreach ($data as $datalist) {
            echo "<option value='{$datalist->res_ser_id}'>{$datalist->name}</option>";
        }
    }

    public function create_service(Request $request)
    {
        $destinationPath = 'backend/service_result/inner';

        if (!File::exists($destinationPath)) {
            File::makeDirectory($destinationPath, $mode = 0777, true, true);
        }

        $permissionoprid = session('userinfo')['user_category_operation_permissions'][0]['opid'];
        $permissionoprid = explode(',', $permissionoprid);

        if ($request->input('image_type') == 'slide') {
            if ($request->hasFile('before_image')) {
                $image = $request->file('before_image');
                $name = time() . '_before.' . $image->getClientOriginalExtension();
                $image->move($destinationPath, $name);
            }else{
                $name = $request->input('oldbeforeimage');
            }

            if ($request->hasFile('after_image')) {
                $image = $request->file('after_image');
                $name2 = time() . '_after.' . $image->getClientOriginalExtension();
                $image->move($destinationPath, $name2);
            }else{
                $name2 = $request->input('oldafterimage');
            }
        } else {
            if ($request->hasFile('before_image')) {
                $image = $request->file('before_image');
                $name = time() . '_single.' . $image->getClientOriginalExtension();
                $image->move($destinationPath, $name);
            }else{
                $name = $request->input('oldbeforeimage');
            }

            if ($request->hasFile('after_image')) {
                $image = $request->file('after_image');
                $name2 = time() . '_popup.' . $image->getClientOriginalExtension();
                $image->move($destinationPath, $name2);
            }else{
                $name2 = $request->input('oldafterimage');
            }
        }

        $parent_id = $request->input('result_service_id');
        if(!isset($parent_id)){
           
                        if (in_array('40', $permissionoprid)) {
                            $parent_id = $request->input('second_cat');
                        } else {
                            if (in_array('19', $permissionoprid)) {
                                $parent_id = $request->input('service_cat');
                            }
                        }
                   
        }
//         echo $parent_id;
// die();
        $res_inn_id = $request->input('res_inn_id');
        if($res_inn_id < 1){
        $video = ResultInnerModel::create(array_merge(
            $request->input(),
            [
                'beforeimg' => $name,
                'afterimg' => $name2,
                'result_service_id' => $parent_id,
            ]
        ));
    }
        return redirect('admin/service-result-inner');
    }

    public function edit_service($id)
    {
        Session::put('primeid', $id);
        $data['edit'] = ResultInnerModel::find($id);
        $service_id = $data['edit']->service_id;

        $permissionoprid = session('userinfo')['user_category_operation_permissions'][0]['opid'];
        $data['permissionoprid'] = explode(',', $permissionoprid);

        $data['firstcategory'] = ResultServiceModel::select('res_ser_id', 'name')->whereNull('parent_id')
            ->where('category_type', 'firstcategory')->get();
            $data['servicedata'] = ServiceModel::where('category_type', 'service')->get();
        if(isset($data['edit']->result_service_id)){
            $data['service'] = ResultServiceModel::select('res_ser_id', 'name')
        ->where('res_ser_id',$data['edit']->result_service_id)->where('status','active')->first();
        $data['secondsec'] = CategoryTrait::allresultcategorylist($data['edit']->result_service_id);
        }
    
        return view('admin.service-result-inner.edit-service-result-inner')->with($data);
    }

    public function delete_service($id)
    {
        $service = ResultInnerModel::find($id);
        $service->update(['deleted_by' => session('useradmin')['usr_id']]);
        $service->delete();
        return redirect('admin/service-result-inner');
    }
    ///=============Service Result Inner End ====================//
}
