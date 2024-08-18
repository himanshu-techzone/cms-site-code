<?php
namespace App\Http\Controllers;

use App\Models\GalleryModel;
use App\Models\ServiceModel;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;

class ApiController extends Controller
{

        public function home_details()
        {
            $data = DB::table('testimonial')->select('*')->where('status', 'active')->where('test_show_type','outside')->where('deleted_at', NULL)->orderBy('test_id', 'DESC')->limit('4')->get();
            $result = DB::table('result_inner')->select('*')->where('status', 'active')->where('deleted_at', NULL)->orderBy('res_inn_id', 'DESC')->limit('2')->get();
            $blog = DB::table('blog')->select('*')->where('status', 'active')->where('deleted_at', NULL)->orderBy('date', 'DESC')->limit('3')->get();
            $video =DB::table('video_inner')->select('*')->where('status', 'active')->where('deleted_at', NULL)->orderBy('vid_inn_id', 'DESC')->limit('3')->get();
            $seolist = DB::table('seo_page')->select('*')->where('seo_type','home')->where('url', '/')->first();

            $videolist = [];
            $testimoniallist = [];
            $resultlist = [];
            $bloglist = [];
                        $seoslist = array(
                           'id' => $seolist->seo_id,
                           'page_name' => $seolist->page_name,
                           'title_tag' => $seolist->title_tag,
                           'keyword_tag' => $seolist->keyword_tag,
                           'description_tag' => $seolist->description_tag,
                           'canonical_tag' => $seolist->canonical_tag,
                           'url' => $seolist->url,
                        );
                foreach($data as $datalist){
                        $testimoniallist[] = array(
                           'id' => $datalist->test_id,
                           'name' => $datalist->name,
                           'designation' => $datalist->designation,
                           'source' => $datalist->source,
                           'description' => $datalist->description,
                           'short_name' => $datalist->short_name,
                           'rating' => $datalist->rating,
                        );
                }
                foreach($result as $servicelist){
                        $resultlist[] = array(
                        'id' => $servicelist->res_inn_id,
                        'category_id' => $servicelist->result_cat_id,
                        'image' => $servicelist->afterimg,
                        'alt_tag' => $servicelist->alt_img,
                        );
                }
                foreach($blog as $datalist){
                        $bloglist[] = array(
                           'id' => $datalist->blg_id,
                           'blog_type' => $datalist->blog_type,
                           'dr_name' => $datalist->name,
                           'blog_name' => $datalist->blog_name,
                           'short_desc' => substr($datalist->short_desc,0,150).'...',
                           'image' => $datalist->blog_image,
                           'date' => date("d M Y", strtotime($datalist->date)),
                           'alt_tag' => $datalist->alt_image_name,
                           'url' => $datalist->url,
                        );
                }
                foreach($video as $servicelist){
                        $videolist[] = array(
                        'id' => $servicelist->vid_inn_id,
                        'name' => $servicelist->name,
                        'image' => $servicelist->image,
                        'video' => $servicelist->video,
                        'alt_tag' => $servicelist->alt_img,
                        );
                }
                $dataresult = array(
                     'title' => "Success",
                     'testimonial' => $testimoniallist,
                     'result' => $resultlist,
                     'blog' => $bloglist,
                     'video' => $videolist,
                     'seo' => $seoslist,
                );
                return $dataresult;
        }

        public function result_desk(){

            $result = DB::table('result_inner')->select('*')->where('status', 'active')->where('deleted_at', NULL)->orderBy('res_inn_id', 'DESC')->limit('3')->get();
            foreach($result as $servicelist){
                        $resultlist[] = array(
                        'id' => $servicelist->res_inn_id,
                        'category_id' => $servicelist->result_cat_id,
                        'image' => $servicelist->afterimg,
                        'alt_tag' => $servicelist->alt_img,
                        );
                }

                $dataresult = array(
                     'result' => $resultlist,
                );
                return $dataresult;
        }

        public function result_mob(){

            $result = DB::table('result_inner')->select('*')->where('status', 'active')->where('deleted_at', NULL)->orderBy('res_inn_id', 'DESC')->limit('2')->get();
            foreach($result as $servicelist){
                        $resultlist[] = array(
                        'id' => $servicelist->res_inn_id,
                        'category_id' => $servicelist->result_cat_id,
                        'image' => $servicelist->afterimg,
                        'alt_tag' => $servicelist->alt_img,
                        );
                }

                $dataresult = array(
                     'result' => $resultlist,
                );
                return $dataresult;
        }

        public function pressmedia_category(){
                $data =DB::table('press_media_category')->select('*')->where('status', 'active')->where('deleted_at', NULL)->orderBy('order_by', 'ASC')->get();

                $resultlist = [];
                foreach($data as $datalist){
                        // print_r($datalist);
                        $resultlist[] = array(
                           'id' => $datalist->id,
                           'name' => $datalist->name,
                           'description' => $datalist->description,
                           'image' => $datalist->image,
                           'logo' => $datalist->logo,
                           'alt_tag' => $datalist->alt_tag,
                           'videolink' => $datalist->videolink,
                           'url' => $datalist->url,
                        );
                }
                $dataresult = array(
                     'title' => "Success",
                     'data' => $resultlist,
                );
                return $dataresult;
        }

        public function pressmedia($name){

                $dataid =DB::table('press_media_category')->select('*')->where('url', $name)->where('deleted_at', NULL)->orderBy('order_by', 'ASC')->first();

                $data =DB::table('press_media')
                ->select('press_media.*','press_media_category.name as category_name')
                ->join('press_media_category', 'press_media_category.id', '=', 'press_media.press_cat_id')
                ->where('press_media.press_cat_id', $dataid->id)
                ->where('press_media.status', 'active')
                ->where('press_media.deleted_at', NULL)
                ->orderBy('press_media.date', 'DESC')
                ->get();



                $resultlist = [];
                foreach($data as $datalist){

                        $resultlist[] = array(
                           'id' => $datalist->id,
                           'category_name' => $datalist->category_name,
                           'name' => $datalist->name,
                           'dr_name' => $datalist->dr_name,
                           'short_desc' => $datalist->short_desc,
                           'date' => $datalist->date,
                           'image' => $datalist->image,
                           'alt_tag' => $datalist->alt_tag,
                           'url' => $datalist->url,
                        );
                }

                $resultcategory = array(
                        'id' => $dataid->id,
                        'category' => $dataid->name,
                        'title_tag' => $dataid->title_tag,
                        'keyword_tag' => $dataid->keyword_tag,
                        'description_tag' => $dataid->description_tag,
                        'canonical_tag' => $dataid->canonical,
                        'url' => $dataid->url,
                        'categorylist' => $resultlist,
                     );

              //  print_r($resultlist);
                $dataresult = array(
                     'title' => "Success",
                //      'category' => $resultcategory,
                     'data' => $resultcategory,
                );
                return $dataresult;
        }

        public function service_name()
        {
            $select_table = ['ser_id','service_name'];
                $datalists = ServiceModel::select($select_table)->where('status','active')->where('parent_id','!=','1')->get();
                $resultlist2 = [];
                foreach($datalists as $servicelist){
                        $resultlist2[] = array(
                        'id' => $servicelist->ser_id,
                        'name' => $servicelist->service_name,
                        );
                }

                $dataresult = array(
                     'title' => "Success",
                     'data' => $resultlist2,
                );
                return $dataresult;


        }

        public function pressmediadetail($name){

                $datalist =DB::table('press_media')
                ->select('press_media.*','press_media_category.name as category_name','press_media_category.url as categoryurl')
                ->join('press_media_category', 'press_media_category.id', '=', 'press_media.press_cat_id')
                ->where('press_media.url', $name)
                ->where('press_media.status', 'active')
                ->where('press_media.deleted_at', NULL)
                ->first();
                // print_r($datalist);
                // $resultlist = [];
                $allimage = $datalist->all_image;
                if($datalist->all_image==null || $datalist->all_image==''){
                        $allimage = null;
                }
                $list = "Success";
                // foreach($data as $datalist){
                        // print_r($datalist);
                        $resultlist = array(
                           'id' => $datalist->id,
                           'category_name' => $datalist->category_name,
                           'categoryurl' => $datalist->categoryurl,
                           'name' => $datalist->name,
                           'dr_name' => $datalist->dr_name,
                           'dr_description' => $datalist->dr_description,
                           'description' => $datalist->description,
                           'date' => $datalist->date,
                           'reference' => $datalist->reference,
                           'facebook' => $datalist->facebook,
                           'twitter' => $datalist->twitter,
                           'pinterest' => $datalist->pinterest,
                           'banner_image' => $datalist->banner_image,
                           'allimage' => $allimage,
                           'alt_tag' => $datalist->alt_tag,
                           'title_tag' => $datalist->title_tag,
                           'keyword_tag' => $datalist->keyword_tag,
                           'description_tag' => $datalist->description_tag,
                           'canonical_tag' => $datalist->canonical,
                           'url' => $datalist->url,

                        );
                // }
                $dataresult = array(
                     'title' => "Success",
                     'data' => $resultlist,
                );
                return $dataresult;
        }

        public function testimonials(){
                // $limit = '2';
                // $page = $_GET['page']*2;
                $data =DB::table('testimonial')
                ->select('*')
                ->where('status', 'active')
                ->where('deleted_at', NULL)
                ->orderBy('created_at', 'DESC')
                // ->skip($page)
                // ->limit($limit)
                ->get();
                $seolist = DB::table('seo_page')->select('*')->where('url', 'testimonials')->first();
            if($seolist){
                $seoslist = array(
                    'id' => $seolist->seo_id,
                    'page_name' => $seolist->page_name,
                    'title_tag' => $seolist->title_tag,
                    'keyword_tag' => $seolist->keyword_tag,
                    'description_tag' => $seolist->description_tag,
                    'canonical_tag' => $seolist->canonical_tag,
                    'url' => $seolist->url,
                 );
                }else{
                    $seoslist = '';
                }
                // print_r($datalist);exit;
                $resultlist = [];
                foreach($data as $datalist){
                        // print_r($datalist);
                        $resultlist[] = array(
                           'id' => $datalist->test_id,
                           'name' => $datalist->name,
                           'designation' => $datalist->designation,
                           'source' => $datalist->source,
                           'description' => $datalist->description,
                           'short_name' => $datalist->short_name,
                           'rating' => $datalist->rating,
                        );
                }
                $dataresult = array(
                     'title' => "Success",
                     'data' => $resultlist,
                     'length' => 200,
                     'seo' => $seoslist

                );
                return $dataresult;
        }

        public function gallery(){

                $data =GalleryModel::get();
                $seolist = DB::table('seo_page')->select('*')->where('url', 'clinic-images')->first();
            if($seolist){
                $seoslist = array(
                    'id' => $seolist->seo_id,
                    'page_name' => $seolist->page_name,
                    'title_tag' => $seolist->title_tag,
                    'keyword_tag' => $seolist->keyword_tag,
                    'description_tag' => $seolist->description_tag,
                    'canonical_tag' => $seolist->canonical_tag,
                    'url' => $seolist->url,
                 );
                }else{
                    $seoslist = '';
                }
                $resultlist = [];
                foreach($data as $datalist){
                        $resultlist[] = array(
                           'id' => $datalist->gallery_id,
                           'gallery_image' => $datalist->gallery_image,
                           'full_image' => $datalist->full_image,
                           'alt_tag' => $datalist->alt_tag,
                        );
                }
                $dataresult = array(
                     'title' => "Success",
                     'data' => $resultlist,
                     'seo' => $seoslist
                );
                return $dataresult;
        }

        public function results(){
                $data =DB::table('result_service')->select('*')->where('status', 'active')->where('deleted_at', NULL)->orderBy('order_by', 'ASC')->get();
                $seolist = DB::table('seo_page')->select('*')->where('url', 'real-results')->first();
                if($seolist){
                        $seoslist = array(
                        'id' => $seolist->seo_id,
                        'page_name' => $seolist->page_name,
                        'title_tag' => $seolist->title_tag,
                        'keyword_tag' => $seolist->keyword_tag,
                        'description_tag' => $seolist->description_tag,
                        'canonical_tag' => $seolist->canonical_tag,
                        'url' => $seolist->url,
                        );
                }else{
                    $seoslist = '';
                }
                $resultlist = [];

                foreach($data as $datalist){
                        $resultlist[] = array(
                           'id' => $datalist->res_ser_id,
                           'name' => $datalist->name,
                           'image' => $datalist->image,
                           'alt_tag' => $datalist->alt_tag,
                           'title_tag' => $datalist->title_tag,
                           'keyword_tag' => $datalist->keyword_tag,
                           'description_tag' => $datalist->description_tag,
                           'canonical_tag' => $datalist->canonical_tag,
                           'url' => $datalist->url,
                        );
                }
                $dataresult = array(
                     'title' => "Success",
                     'data' => $resultlist,
                     'seo' => $seoslist
                //      'servicelist' => $resultlist2

                );
                return $dataresult;
        }

        public function result_category($name){
                $datalist =DB::table('result_category')->select('*')->where('url', $name)->where('status', 'active')->where('deleted_at', NULL)->first();
                $service =DB::table('result_service')->select('*')->where('result_cat_id', $datalist->id)->where('status', 'active')->where('deleted_at', NULL)->orderBy('order_by', 'ASC')->get();
                $resultlist2 = [];
                $seolist = DB::table('seo_page')->select('*')->where('url', $name)->first();
                if($seolist){
                        $seoslist = array(
                        'id' => $seolist->seo_id,
                        'page_name' => $seolist->page_name,
                        'title_tag' => $seolist->title_tag,
                        'keyword_tag' => $seolist->keyword_tag,
                        'description_tag' => $seolist->description_tag,
                        'canonical_tag' => $seolist->canonical_tag,
                        'url' => $seolist->url,
                        );
                }else{
                    $seoslist = '';
                }
                foreach($service as $servicelist){
                        $resultlist2[] = array(
                        'id' => $servicelist->id,
                        'category_id' => $servicelist->result_cat_id,
                        'name' => $servicelist->name,
                        'image' => $servicelist->image,
                        'alt_tag' => $servicelist->alt_tag,
                        'url' => $servicelist->url,
                        );
                }

                        $resultlist = array(
                           'id' => $datalist->id,
                           'name' => $datalist->name,
                           'banner_image' => $datalist->banner_image,
                           'video_type' => $datalist->video_type,
                           'video_link' => $datalist->video_link,
                           'description' => $datalist->description,
                           'alt_tag' => $datalist->alt_tag,
                           'title_tag' => $datalist->title_tag,
                           'keyword_tag' => $datalist->keyword_tag,
                           'description_tag' => $datalist->description_tag,
                           'canonical_tag' => $datalist->canonical_tag,
                           'url' => $datalist->url,
                           'servicelist' => $resultlist2,
                        );

                $dataresult = array(
                     'title' => "Success",
                     'data' => $resultlist,
                     'seo' => $seoslist
                //      'servicelist' => $resultlist2

                );
                return $dataresult;
        }

        public function result_details($name){
                $datalist =DB::table('result_service')->select('*')->where('url', $name)->where('deleted_at', NULL)->first();
                if($datalist){
                $service =DB::table('result_inner')->select('*')->where('result_service_id', $datalist->res_ser_id)->where('status', 'active')->where('deleted_at', NULL)->orderBy('order_by', 'ASC')->get();
                $resultlist2 = [];
                $seolist = DB::table('seo_page')->select('*')->where('url', $name)->first();
                if($seolist){
                        $seoslist = array(
                        'id' => $seolist->seo_id,
                        'page_name' => $seolist->page_name,
                        'title_tag' => $seolist->title_tag,
                        'keyword_tag' => $seolist->keyword_tag,
                        'description_tag' => $seolist->description_tag,
                        'canonical_tag' => $seolist->canonical_tag,
                        'url' => $seolist->url,
                        );
                }else{
                    $seoslist = '';
                }

                // print_r($service);
                foreach($service as $servicelist){
                        $resultlist2[] = array(
                        'id' => $servicelist->res_inn_id,
                        'service_id' => $servicelist->result_service_id,
                        'name' => $servicelist->name,
                        'image_type' => $servicelist->image_type,
                        'beforeimg' => $servicelist->beforeimg,
                        'afterimg' => $servicelist->afterimg,
                        'alt_tag' => $servicelist->alt_img,
                        );
                }

                        $resultlist = array(
                           'id' => $datalist->res_ser_id,
                           'name' => $datalist->name,
                           'banner_image' => $datalist->banner_image,
                           'video_type' => $datalist->video_type,
                           'video_link' => $datalist->video_link,
                           'description' => $datalist->description,
                           'alt_tag' => $datalist->alt_tag,
                           'title_tag' => $datalist->title_tag,
                           'keyword_tag' => $datalist->keyword_tag,
                           'description_tag' => $datalist->description_tag,
                           'canonical_tag' => $datalist->canonical_tag,
                           'url' => $datalist->url,
                           'servicelist' => $resultlist2,
                        );

                $dataresult = array(
                     'title' => "Success",
                     'data' => $resultlist,
                     'result' => $resultlist2,
                     'seo' => $seoslist

                );
                return response()->json(['success' => true, 'data' => $resultlist, 'result' => $resultlist2, 'seo'=>$seoslist], 200);
                }else{
                    return  response()->json(['success' => false, 'data' => []], 404);
                }
        }

        public function videos(){
                $data =DB::table('video_service')->select('*')->where('status', 'active')->where('deleted_at', NULL)->orderBy('order_by', 'ASC')->get();

                $resultlist = [];

                foreach($data as $datalist){
                        $resultlist[] = array(
                           'id' => $datalist->vid_ser_id,
                           'name' => $datalist->name,
                           'image' => $datalist->image,
                           'alt_tag' => $datalist->alt_tag,
                           'title_tag' => $datalist->title_tag,
                           'keyword_tag' => $datalist->keyword_tag,
                           'description_tag' => $datalist->description_tag,
                           'canonical_tag' => $datalist->canonical_tag,
                           'url' => $datalist->url,
                        );
                }
                $dataresult = array(
                     'title' => "Success",
                     'data' => $resultlist,
                //      'servicelist' => $resultlist2

                );
                return $dataresult;
        }

        public function video_testimonials(){
                $data =DB::table('testimonial_video')->select('*')->where('status', 'active')->where('deleted_at', NULL)->orderBy('order_by', 'DESC')->get();

                $resultlist = [];
                $seolist = DB::table('seo_page')->select('*')->where('url', 'testimonials')->first();
                if($seolist){
                        $seoslist = array(
                        'id' => $seolist->seo_id,
                        'page_name' => $seolist->page_name,
                        'title_tag' => $seolist->title_tag,
                        'keyword_tag' => $seolist->keyword_tag,
                        'description_tag' => $seolist->description_tag,
                        'canonical_tag' => $seolist->canonical_tag,
                        'url' => $seolist->url,
                        );
                }else{
                    $seoslist = '';
                }

                foreach($data as $datalist){
                        $resultlist[] = array(
                           'id' => $datalist->test_video_id,
                           'name' => $datalist->name,
                           'image' => $datalist->image,
                           'video' => $datalist->video,
                           'alt_tag' => $datalist->alt_img,
                        );
                }
                $dataresult = array(
                     'title' => "Success",
                     'data' => $resultlist,
                     'seo' => $seoslist
                //      'servicelist' => $resultlist2

                );
                return $dataresult;
        }

        public function video_category($name){
                $datalist =DB::table('video_category')->select('*')->where('url', $name)->where('deleted_at', NULL)->first();
               //echo $datalist->id;
        //        print_r($datalist);
                // exit;
                $service =DB::table('video_service')->select('*')->where('video_cat_id', $datalist->id)->where('status', 'active')->where('deleted_at', NULL)->orderBy('order_by', 'ASC')->get();
                $resultlist2 = [];

                foreach($service as $servicelist){
                        $resultlist2[] = array(
                        'id' => $servicelist->id,
                        'category_id' => $servicelist->video_cat_id,
                        'name' => $servicelist->name,
                        'image' => $servicelist->image,
                        'alt_tag' => $servicelist->alt_tag,
                        'url' => $servicelist->url,
                        );
                }

                        $resultlist = array(
                           'id' => $datalist->id,
                           'name' => $datalist->name,
                           'banner_image' => $datalist->banner_image,
                           'video_type' => $datalist->video_type,
                           'video_link' => $datalist->video_link,
                           'description' => $datalist->description,
                           'alt_tag' => $datalist->alt_tag,
                           'title_tag' => $datalist->title_tag,
                           'keyword_tag' => $datalist->keyword_tag,
                           'description_tag' => $datalist->description_tag,
                           'canonical_tag' => $datalist->canonical_tag,
                           'url' => $datalist->url,
                           'servicelist' => $resultlist2,
                        );

                $dataresult = array(
                     'title' => "Success",
                     'data' => $resultlist,
                //      'servicelist' => $resultlist2

                );
                return $dataresult;
        }

        public function video_details($name){
                $datalist =DB::table('video_service')->select('*')->where('url', $name)->where('deleted_at', NULL)->first();
                if($datalist){
                $service =DB::table('video_inner')->select('*')->where('video_cat_id', $datalist->vid_ser_id)->where('status', 'active')->where('deleted_at', NULL)->orderBy('order_by', 'ASC')->get();
                $resultlist2 = [];

                $seolist = DB::table('seo_page')->select('*')->where('url', '$name')->first();
            if($seolist){
                $seoslist = array(
                    'id' => $seolist->seo_id,
                    'page_name' => $seolist->page_name,
                    'title_tag' => $seolist->title_tag,
                    'keyword_tag' => $seolist->keyword_tag,
                    'description_tag' => $seolist->description_tag,
                    'canonical_tag' => $seolist->canonical_tag,
                    'url' => $seolist->url,
                 );
                }else{
                    $seoslist = '';
                }
                foreach($service as $servicelist){
                        $resultlist2[] = array(
                        'id' => $servicelist->vid_inn_id,
                        'service_id' => $servicelist->video_service_id,
                        'name' => $servicelist->name,
                        'image' => $servicelist->image,
                        'video' => $servicelist->video,
                        'alt_tag' => $servicelist->alt_img,
                        );
                }

                            $resultlist = array(
                           'id' => $datalist->vid_ser_id,
                           'name' => $datalist->name,
                           'banner_image' => $datalist->banner_image,
                           'video_type' => $datalist->video_type,
                           'video_link' => $datalist->video_link,
                           'description' => $datalist->description,
                           'alt_tag' => $datalist->alt_tag,
                           'title_tag' => $datalist->title_tag,
                           'keyword_tag' => $datalist->keyword_tag,
                           'description_tag' => $datalist->description_tag,
                           'canonical_tag' => $datalist->canonical_tag,
                           'url' => $datalist->url,
                           'servicelist' => $resultlist2,
                        );

                $dataresult = array(
                     'title' => "Success",
                     'data' => $resultlist,
                     'video' => $resultlist2,
                     'seo' => $seoslist

                );
                return response()->json(['success' => true, 'data' => $resultlist, 'video' => $resultlist2,'seo'=>$seoslist], 200);
                }else{
                    return  response()->json(['success' => false, 'data' => []], 404);
                }
        }

        public function service(){
                $select_table = ['ser_id','design_type','video_type','service_cat_id','service_type','service_name','service_image','alt_tag','short_desc','url'];
        $firstcategory = ServiceModel::select($select_table)->whereNull('parent_id')->where('status','active')->where('service_name','!=','General')->first();
        $select_table = ['ser_id','design_type','video_type','service_cat_id','service_type','service_name','service_image','alt_tag','short_desc','url'];
        $data = ServiceModel::select($select_table)->where('parent_id','1')->where('status','active')->where('service_name','!=','General')->get();
        $seolist = DB::table('seo_page')->select('*')->where('url', 'services')->first();
                $resultlist = [];
            if($seolist){
                $seoslist = array(
                    'id' => $seolist->seo_id,
                    'page_name' => $seolist->page_name,
                    'title_tag' => $seolist->title_tag,
                    'keyword_tag' => $seolist->keyword_tag,
                    'description_tag' => $seolist->description_tag,
                    'canonical_tag' => $seolist->canonical_tag,
                    'url' => $seolist->url,
                 );
                }else{
                    $seoslist = '';
                }

                foreach($data as $datalist){
                        $resultlist[] = array(
                           'id' => $datalist->ser_id,
                           'name' => $datalist->service_name,
                           'image' => $datalist->service_image,
                           'short_desc' => $datalist->short_desc,
                        //    'alt_tag' => $datalist->alt_tag,
                        //    'title_tag' => $datalist->title_tag,
                        //    'keyword_tag' => $datalist->keyword_tag,
                        //    'description_tag' => $datalist->description_tag,
                        //    'canonical_tag' => $datalist->canonical_tag,
                           'url' => $datalist->url,
                        );
                }
                $dataresult = array(
                     'title' => "Success",
                     'data' => $resultlist,
                     'seo' => $seoslist

                );
                return $dataresult;
        }

        public function service_category($name){
                $select_table = ['ser_id','design_type','video_type','service_cat_id','service_type','service_name','description','service_banner_image','service_image','alt_tag','short_desc','url'];
                $datalist = ServiceModel::select($select_table)->where('url',$name)->where('status','active')->first();
                if($datalist){
                    $select_table = ['ser_id','design_type','video_type','service_cat_id','service_type','description','service_name','service_image','alt_tag','short_desc','url'];
                    $data = ServiceModel::select($select_table)->where('parent_id',$datalist->ser_id)->where('status','active')->where('service_name','!=','General')->get();
                    // $datalist =DB::table('service_category')->select('*')->where('url', $name)->where('deleted_at', NULL)->first();
                    // $service =DB::table('service')->select('*')->where('service_cat_id', $datalist->id)->where('service_type', 'treatments')->where('status', 'active')->where('deleted_at', NULL)->orderBy('order_by', 'ASC')->get();
                    $resultlist2 = [];
                    $seolist = DB::table('seo_page')->select('*')->where('seo_type','servicecategory')->where('url', $name)->first();

                            $seoslist = array(
                               'id' => $seolist->seo_id,
                               'page_name' => $seolist->page_name,
                               'title_tag' => $seolist->title_tag,
                               'keyword_tag' => $seolist->keyword_tag,
                               'description_tag' => $seolist->description_tag,
                               'canonical_tag' => $seolist->canonical_tag,
                               'url' => $seolist->url,
                            );

                    foreach($data as $servicelist){
                            $resultlist2[] = array(
                            'ser_id' => $servicelist->ser_id,
                            'parent_id' => $servicelist->parent_id,
                            'service_name' => $servicelist->service_name,
                            'short_desc' => substr($servicelist->short_desc, 0, 150).'...',
                            'service_image' => $servicelist->service_image,
                            'alt_tag' => $servicelist->alt_tag,
                            'url' => $servicelist->url,
                            );
                    }

                            $resultlist = array(
                               'ser_id' => $datalist->ser_id,
                               'service_name' => $datalist->service_name,
                               'banner_image' => $datalist->service_banner_image,
                               'video_type' => $datalist->video_type,
                               'video_link' => $datalist->service_video,
                               'description' => $datalist->description,
                               'alt_tag' => $datalist->alt_tag,
                               'title_tag' => $datalist->title_tag,
                               'keyword_tag' => $datalist->keyword_tag,
                               'description_tag' => $datalist->description_tag,
                               'canonical_tag' => $datalist->canonical_tag,
                               'url' => $datalist->url,
                               'servicelist' => $resultlist2,
                            );

                        $dataresult = array(
                             'title' => "Success",
                             'data' => $resultlist,
                             'seo' => $seoslist
                        );
                        return response()->json(['success' => true, 'data' => $resultlist, 'seo' => $seoslist], 200);
                }else{
                    return  response()->json(['success' => false, 'data' => []], 404);
                }


        }

        public function service_category_icon(){
                $select_table = ['ser_id','design_type','video_type','service_cat_id','service_icon','service_name','description','service_image','alt_tag','short_desc','url'];
                $datalist = ServiceModel::select($select_table)->where('parent_id','1')->where('status','active')->get();
                // $resultlist2 = [];
                $resultlist = [];
                foreach($datalist as $key => $servicelist){
                    $select_table = ['ser_id','service_cat_id','service_name','service_icon','alt_tag','url'];
                    $data = ServiceModel::select($select_table)->where('parent_id',$servicelist->ser_id)->where('status','active')->where('service_name','!=','General')->get();
                    $resultlist2 = [];
                    foreach($data as $subservice){
                        $resultlist2[] = array(
                        'ser_id' => $subservice->ser_id,
                        'service_name' => $subservice->service_name,
                        'service_icon' => $subservice->service_icon,
                        'url' => $subservice->url,
                        'alt_tag' => $subservice->alt_tag,
                        );
                    }

                        $resultlist[] = array(
                        'id' => $servicelist->ser_id,
                        'service_name' => $servicelist->service_name,
                        'service_icon' => $servicelist->service_icon,
                        'url' => $servicelist->url,
                        'sub' => $resultlist2,
                        );
                }




                $dataresult = array(
                     'title' => "Success",
                     'data' => $resultlist,
                );
                return $dataresult;
        }

        public function service_details($url){
                // $datalist =DB::table('service')->select('*')->where('url', $name)->where('status', 'active')->where('deleted_at', NULL)->first();
                // $service =DB::table('service_section')->select('*')->where('service_id', $datalist->id)->where('deleted_at', NULL)->get();

                $select_table = ['ser_id','service_name','banner_show','name_desc','description2','video_type','video_link','short_desc','description','service_image','service_banner_image','section','title_tag','keyword_tag','description_tag','canonical_tag'];
                $datalists = ServiceModel::select($select_table)->where('status','active')
                ->where('url',$url);
                if($datalists->count() != 0){
                $datalist = $datalists->first();
                $service =DB::table('service_faq')->select('*')->where('service_id', $datalist->ser_id)->where('status', 'active')->where('deleted_at', NULL)->orderBy('order_by', 'ASC')->get();
                $real = DB::table('result_inner')->select('*')->where('service_id', $datalist->ser_id)->where('status', 'active')->where('deleted_at', NULL);
                $video = DB::table('video_inner')->select('*')->where('service_id', $datalist->ser_id)->where('status', 'active')->where('deleted_at', NULL);
                $videolist = [];
                $resultlist2 = [];
                $realresult = [];
                $resultlist3 = [];
                $seolist = DB::table('seo_page')->select('*')->where('seo_type','service')->where('url', $url)->first();
                $real_cat = $real->first();
                if($real_cat){
                    $real_cat = DB::table('result_service')->select('url')->where('res_ser_id', $real_cat->result_service_id)->where('deleted_at', NULL)->first();
                    // Real Result
                        foreach($real->limit(3)->orderBy('order_by', 'ASC')->get() as $result){
                            $realresult[] = array(
                                'id' => $result->res_inn_id,
                                'service' =>  $result->service_id,
                                'image' => $result->afterimg,
                                'alt_tag' => $result->alt_img
                                );
                        }
                }else{
                    $realresult = array();
                    $real_cat = array();
                }

                $video_cat = $video->first();
                if($video_cat){
                    $video_cat = DB::table('video_service')->select('url')->where('vid_ser_id', $video_cat->video_cat_id)->where('deleted_at', NULL)->first();
                    // Real Result
                        foreach($video->limit(3)->orderBy('order_by', 'ASC')->get() as $video){
                            $videolist[] = array(
                                'id' => $video->vid_inn_id,
                                'service' =>  $video->service_id,
                                'image' => $video->image,
                                'video' => $video->video,
                                'alt_tag' => $video->alt_img
                                );
                        }
                }else{
                    $videolist = array();
                    $video_cat = array();
                }

                        if($seolist){
                        $seoslist = array(
                           'id' => $seolist->seo_id,
                           'page_name' => $seolist->page_name,
                           'title_tag' => $seolist->title_tag,
                           'keyword_tag' => $seolist->keyword_tag,
                           'description_tag' => $seolist->description_tag,
                           'canonical_tag' => $seolist->canonical_tag,
                           'seo_schema' => $seolist->seo_schema,
                           'url' => $seolist->url,
                        );
                        }else{
                                $seoslist = [];
                        }


                        // Service
                        $resultlist = array(
                           'id' => $datalist->ser_id,
                           'service_name' => $datalist->service_name,
                           'name_desc' => $datalist->name_desc,
                           'description2' => $datalist->description2,
                           'service_image' => $datalist->service_image,
                           'service_banner_image' => $datalist->service_banner_image,
                           'video_type' => $datalist->video_type,
                           'video_link' => $datalist->video_link,
                           'description' => $datalist->description,
                           'section' => json_decode($datalist->section),
                           'alt_tag' => $datalist->alt_tag,
                           'title_tag' => $datalist->title_tag,
                           'keyword_tag' => $datalist->keyword_tag,
                           'description_tag' => $datalist->description_tag,
                           'canonical_tag' => $datalist->canonical_tag,
                           'url' => $datalist->url,
                           'servicelist' => $resultlist2,
                        );
                        // Service



                        // Faq
                        foreach($service as $key => $servicelist){
                        $sunmenu = array(
                            'answer' => $servicelist->answer,
                        );

                        if($key == '0'){
                                $active = true;
                        }else{
                                $active = false;
                        }

                        $resultlist3[] = array(
                        'id' => $servicelist->ser_faq_id,
                        'service_name' => $datalist->service_name,
                        'active' => $active,
                        'question' => $servicelist->question,
                        // 'submenu' => array($sunmenu)
                        'answer' => $servicelist->answer,
                        );
                }
                // Faq


                $dataresult = array(
                     'title' => "Success",
                     'data' => $resultlist,
                     'faq' => $resultlist3,
                     'seo' => $seoslist,
                     'result' => $realresult,
                     'result_cat' => $real_cat,
                     'video' => $videolist,
                     'video_cat' => $video_cat

                );
                return response()->json(['success' => true, 'data' => $resultlist, 'seo' => $seoslist, 'faq' => $resultlist3, 'result' => $realresult, 'result_cat' => $real_cat, 'video' => $videolist, 'video_cat' => $video_cat], 200);
                }else{
                    return  response()->json(['success' => false, 'data' => []], 404);
                }
        }

        public function service_faq($name){
                $datalist =DB::table('service')->select('*')->where('url', $name)->where('deleted_at', NULL)->first();
                $service =DB::table('service_faq')->select('*')->where('service_id', $datalist->ser_id)->where('status', 'active')->where('deleted_at', NULL)->orderBy('order_by', 'ASC')->get();
                $resultlist = [];
                $sunmenu = [];


                foreach($service as $key => $servicelist){
                        $sunmenu = array(
                            'answer' => $servicelist->answer,
                        );

                        if($key == '0'){
                                $active = true;
                        }else{
                                $active = false;
                        }

                        $resultlist[] = array(
                        'id' => $servicelist->ser_faq_id,
                        'service_name' => $datalist->service_name,
                        'active' => $active,
                        'question' => $servicelist->question,
                        // 'submenu' => array($sunmenu)
                        'answer' => $servicelist->answer,
                        );
                }


                $dataresult = array(
                     'title' => "Success",
                     'faq' => 'test',
                );
                return $dataresult;
        }

        public function doctor_detail($name){
                $datalist =DB::table('doctor_list')->select('*')->where('url', $name)->where('status', 'active')->where('deleted_at', NULL)->first();

                        // print_r($datalist);
                        $resultlist = array(
                           'id' => $datalist->id,
                           'name' => $datalist->name,
                           'description' => $datalist->description,
                           'banner_image' => $datalist->banner_image,
                           'alt_tag' => $datalist->alt_tag,
                           'title_tag' => $datalist->title_tag,
                           'keyword_tag' => $datalist->keyword_tag,
                           'description_tag' => $datalist->description_tag,
                           'url' => $datalist->url,
                        );

                $dataresult = array(
                     'title' => "Success",
                     'data' => $resultlist,
                );
                return $dataresult;
        }

        public function blog(){
                $data =DB::table('blog')->select('*')->where('status', 'active')->where('deleted_at', NULL)->orderBy('date', 'DESC')->get();
                $seolist = DB::table('seo_page')->select('*')->where('url', 'blog')->first();
                if($seolist){
                        $seoslist = array(
                        'id' => $seolist->seo_id,
                        'page_name' => $seolist->page_name,
                        'title_tag' => $seolist->title_tag,
                        'keyword_tag' => $seolist->keyword_tag,
                        'description_tag' => $seolist->description_tag,
                        'canonical_tag' => $seolist->canonical_tag,
                        'url' => $seolist->url,
                        );
                }else{
                    $seoslist = '';
                }
                $resultlist = [];
                foreach($data as $datalist){
                        // print_r($datalist);
                        $resultlist[] = array(
                           'id' => $datalist->blg_id,
                           'blog_type' => $datalist->blog_type,
                           'dr_name' => $datalist->name,
                           'blog_name' => $datalist->blog_name,
                           'short_desc' => substr($datalist->short_desc, 0, 150).'...',
                           'image' => $datalist->blog_image,
                           'date' => date("d M Y", strtotime($datalist->date)),
                           'alt_tag' => $datalist->alt_image_name,
                           'url' => $datalist->url,
                        );
                }
                $dataresult = array(
                     'title' => "Success",
                     'data' => $resultlist,
                     'seo' => $seoslist,
                );
                return $dataresult;
        }

        public function blog_detail($name){
                $datalist =DB::table('blog')->select('*')->where('url', $name)->where('status', 'active')->where('deleted_at', NULL)->first();
                if($datalist){
                $rec = DB::table('blog')->select('blog_name','date','blog_image','alt_image_name','url')->where('status', 'active')->where('deleted_at', NULL)->orderby('date','desc')->limit('3')->get();
                $prev = DB::table('blog')->select('url')->where('blg_id', '<', $datalist->blg_id)->orderBy('blg_id','DESC')->limit(1)->first();
                $seolist = DB::table('seo_page')->select('*')->where('seo_type','blogcategory')->where('url', $name)->first();

                if($prev){
                    $pr = $prev->url;
                }else{
                    $pr = '';
                }
                $next = DB::table('blog')->select('url')->where('blg_id', '>', $datalist->blg_id)->limit(1)->first();

                if($next){
                    $nxt = $next->url;
                }else{
                    $nxt = '';
                }

                $recentlist = [];
                 foreach($rec as $blog){
                        // print_r($datalist);
                        $recentlist[] = array(
                           'blog_name' => $blog->blog_name,
                           'blog_image' => $blog->blog_image,
                           'date' => date("d M Y", strtotime($blog->date)),
                           'alt_tag' => $blog->alt_image_name,
                           'url' => $blog->url,
                        );
                }

                        // print_r($datalist);
                        $resultlist = array(
                                'id' => $datalist->blg_id,
                                'blog_type' => $datalist->blog_type,
                                'dr_name' => $datalist->name,
                                'dr_description' => $datalist->dr_description,
                                'blog_name' => $datalist->blog_name,
                                'blog_description' => $datalist->blog_description,
                                'blog_image_inner' => $datalist->blog_image_inner,
                                'date' => date("d M Y", strtotime($datalist->date)),
                                'alt_tag' => $datalist->alt_image_name,
                                'title_tag' => $datalist->title_tag,
                                'keyword_tag' => $datalist->keyword_tag,
                                'description_tag' => $datalist->description_tag,
                                'canonical_tag' => $datalist->canonical,
                                'url' => $datalist->url,
                        );

                        $seoslist = array(
                           'id' => $seolist->seo_id,
                           'page_name' => $seolist->page_name,
                           'title_tag' => $seolist->title_tag,
                           'keyword_tag' => $seolist->keyword_tag,
                           'description_tag' => $seolist->description_tag,
                           'canonical_tag' => $seolist->canonical_tag,
                           'url' => $seolist->url,
                        );

                $dataresult = array(
                     'title' => "Success",
                     'data' => $resultlist,
                     'recent' => $recentlist,
                     'prev_url' => $pr,
                     'next_url' => $nxt,
                     'seo' => $seolist
                );
                return response()->json(['success' => true, 'data' => $resultlist, 'seo' => $seoslist, 'recent' => $recentlist, 'prev_url' => $pr, 'next_url' => $nxt], 200);
                }else{
                    return  response()->json(['success' => false, 'data' => []], 404);
                }
        }

        public function seo($name){
                // echo $name;exit;
                if($name=='/'){
                   $url = 'home';
                }
                $datalist =DB::table('seo_page')->select('*')->where('url', $name)->first();
                if($datalist){
                        $seolist = array(
                           'id' => $datalist->seo_id,
                           'page_name' => $datalist->page_name,
                           'title_tag' => $datalist->title_tag,
                           'keyword_tag' => $datalist->keyword_tag,
                           'description_tag' => $datalist->description_tag,
                           'canonical_tag' => $datalist->canonical_tag,
                           'url' => $datalist->url,
                        );

                $dataresult = array(
                     'title' => "Success",
                     'seo' => $seolist,
                );
        }else{
                $dataresult = array(
                        'title' => "Success",
                        'seo' => array('page_name' =>$name)
                   );
        }
                return $dataresult;
        }
}
