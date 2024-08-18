@extends('admin.master')
@section('content')
@php
$primeid = session('primeid');
$rand = rand(9999, 99999);
@endphp
<style>
.sectionservice{
    display: inline-block;
    width: 100%;
    border: 2px solid #4444445c;
    padding-top: 20px;
    padding-bottom: 20px;
    margin-bottom: 20px;
    border-radius: 8px;
}
.showsection{
    padding-left: 15px;
    margin-bottom: 12px;
    font-size: 13px;
    font-weight: bold;
    color: red;
}
.orderbyser{
    width: 49px;
    float: left;
    margin-top: 38px;
    font-size: 11px;
}
.deletebut{
    padding: 8px;
    padding-left: 12px;
    padding-right: 12px;
}
.width100{
    width: 100%;
    display: inline-block;
}
    </style>


<section id="main-content">
    <section class="wrapper">
        <div class="card cardsec">
            <div class="card-body">
                <div class="page-title pagetitle">
                    <h1>Edit Service</h1>
                    <ul class="breadcrumb side">
                        <li><a href="{{url('/admin/dashboard')}}"><i class="fa fa-home fa-lg"></i></a></li>
                        <li><a href="{{url('/admin/service')}}">Services</a></li>
                        <li><a href="{{url('/admin/service')}}">Services List</a></li>
                        <li class="active">Edit Service</li>
                    </ul>
                </div>
            </div>
        </div>
        <form action="{{URL::to('/admin/create_service')}}" id="myForm" enctype="multipart/form-data" method="post" accept-charset="utf-8">
            <div class="card">
                <input type="hidden" name="updated_by" value="{{session('useradmin')['usr_id']}}">
                <input type="hidden" name="_token" id="token" value="{{ csrf_token() }}">
                <input type="hidden" name="ser_id" id="ser_id" value="@if(isset($primeid)){{$primeid}}@else 0 @endif">
                <input type="hidden" name="category_type" value="service">
                <div class="card-body">
                    <div class="row">
                        <div class="col-sm-6">
                        <div class="form-group col-md-6 paddingL0">
                            <label class="control-label">Show Type</label>
                            <select class="form-control" name="show_type" id="showtype" required onclick="serviceshowtype()">
                                <option value="">Select Type</option>
                                <option value="inside" @if(isset($edit->show_type))@if($edit->show_type=='inside') selected @endif @else selected @endif>Inside</option>
                                <option value="outside" @if(isset($edit->show_type))@if($edit->show_type=='outside') selected @endif @endif>Outside</option>
                            </select>
                        </div>
                        <div class="form-group col-md-6">
                                <label class="control-label">Select Design Type</label>
                                <select class="form-control" id="design_type" name="design_type">
                                    <option value="">Select Design Type</option>
                                    <option value="left" @if(isset($edit->design_type))@if($edit->design_type=='left') selected @endif @endif>Left Side Image</option>
                                    <option value="right" @if(isset($edit->design_type))@if($edit->design_type=='right') selected @endif @endif>Right Side Image</option>
                                </select>
                            </div>
                            @if(in_array('16',$permissionoprid))
                        <div class="form-group col-md-4">
                            <label class="control-label">Service Category</label>
                            <select class="form-control" name="service_cat" id="servicecategory" onchange="ServiceCategory()">
                                <option value="">Select Category</option>
                                 @foreach($firstcategory as $firstcategorylist)
                                <option value="@if(isset($firstcategorylist->ser_id)){{$firstcategorylist->ser_id}}@endif" @if(isset($edit->ser_id))@if($firstcategorylist->ser_id == $secondsec['firstser_id']) selected @endif @endif>{{$firstcategorylist->service_name}}</option>
                                @endforeach
                               
                            </select>
                        </div>
                        @if(in_array('36',$permissionoprid))
                    <div class="form-group col-md-4">
                            <label class="control-label">Second Category</label>
                            <select class="form-control" name="second_cat" id="secondcategory" onchange="SecondCategory()">
                                <option value="">Select Category</option>
                                @if(isset($secondsec['secservice_name']))
                                <option value="{{$secondsec['secser_id']}}" selected>{{$secondsec['secservice_name']}}</option>
                                @endif
                            </select>
                        </div>
                        
                        @endif
                        @endif
                            <div class="form-group col-sm-6 paddingL0">
                                <label>Service Name</label>
                                <input class="form-control" value="{{$edit->service_name}}" name="service_name" type="text">
                            </div>
                            <div class="form-group col-md-4">
                            <label class="control-label">Service Name Description</label>
                            <input class="form-control" name="name_desc" value="@if(isset($edit->name_desc)) {{$edit->name_desc}} @endif" type="text" required>
                        </div>
                            <div class="form-group col-md-6">
                                <label class="control-label">Service Video Type</label>
                                <select class="form-control" name="video_type" required id="video_type" onchange="servicetype()">
                                    <option value="">Select Type</option>
                                    <option value="image" @if($edit->video_type=='image') selected @endif>Image</option>
                                    <option value="link" @if($edit->video_type=='link') selected @endif>Youtube Link</option>
                                </select>
                            </div>
                            <div class="form-group col-sm-6 videolink" style="display:none;">
                                <label>Service Youtube Link</label>
                                <input class="form-control" value="{{$edit->video_link}}" name="video_link" type="text">
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="col-sm-6">
                                @if($edit->service_image==NULL || $edit->service_image=='')
                                <img src="{{url('/images/no_image.jpg')}}" style="width:85px;height:85px;">
                                @else
                                <img src="{{url('/'.session('useradmin')['site_url'].'backend/service/image/'.$edit->service_image)}}" style="width: 85px;height: 85px;"><br>
                                @endif
                                <div class="form-group">
                                    <label class="control-label">Service Image</label>
                                    <input class="form-control" name="service_image" type="file">
                                    <input class="form-control" name="oldservice_image" value="{{$edit->service_image}}" type="hidden">
                                </div>
                            </div>
                            
                            <div class="col-sm-6">
                                @if($edit->service_icon==NULL || $edit->service_icon=='')
                                <img src="{{url('/images/no_image.jpg')}}" style="width:85px;height:85px;">
                                @else
                                <img src="{{url('/'.session('useradmin')['site_url'].'backend/service/image/'.$edit->service_icon)}}" style="width: 85px;height: 85px;"><br>
                                @endif
                                <div class="form-group">
                                    <label class="control-label">Service Icon</label>
                                    <input class="form-control" name="service_icon" type="file">
                                    <input class="form-control" name="oldservice_icon" value="{{$edit->service_icon}}" type="hidden">
                                </div>
                            </div>
                            
                            <div class="form-group col-sm-6">
                                <div id="videosec">
                                    @if($edit->service_banner_image=='' || $edit->service_banner_image==NULL)
                                    <img src="{{url('/images/no_image.jpg')}}" style="width:85px;height:85px;">
                                    @else
                                    <img src="{{url('/'.session('useradmin')['site_url'].'backend/service/banner/'.$edit->service_banner_image)}}" style="width: 85px;height: 85px;">
                                    @endif
                                    <div class="form-group">
                                        <label class="control-label videoupload">Banner Image</label>
                                        <label class="control-label videolink" style="display:none;">Banner Thumbnail Image</label>
                                        <input class="form-control" name="service_banner_image" type="file">
                                        <input class="form-control" name="oldservice_banner_image" value="{{$edit->service_banner_image}}" type="hidden">
                                    </div>
                                </div>
                            </div>



                        </div>
                    </div>
                    <div class="row">

                        <div class="form-group col-sm-12">
                            <label>Sort Descrition</label>
                            <textarea class="form-control ckeditor" name="short_desc" rows="3">{{$edit->short_desc}}</textarea>
                            <span class="help-block"></span>
                        </div>

                        <div class="form-group col-sm-12">
                            <label>Descrition</label>
                            <textarea class="form-control ckeditor" name="description" rows="3">{{$edit->description}}</textarea>
                            <span class="help-block"></span>
                        </div>

                        <div class="form-group col-md-12">
                            <label class="control-label">Description 2</label>
                            <textarea class="form-control ckeditor" name="description2" rows="3">@if(isset($edit->description2)) {{$edit->description2}} @endif</textarea>
                            <span class="help-block"></span>
                        </div>
                       

                    </div>
                    
                    <div class="row">
                        
                        <div class="form-group col-sm-4">
                            <label>Image Alt Tag</label>
                            <input class="form-control" value="{{$edit->alt_tag}}" name="alt_tag" type="text">
                        </div>
                        <div class="form-group col-sm-4">
                            <label>Title Tags</label>
                            <input class="form-control" name="title_tag" value="@if(isset($seotag->title_tag)) {{$seotag->title_tag}} @endif" type="text">
                        </div>

                        <div class="form-group col-sm-4">
                            <label>Keyword Tag</label>
                            <input class="form-control" name="keyword_tag" value="@if(isset($seotag->keyword_tag)) {{$seotag->keyword_tag}} @endif" type="text">
                        </div>

                        <div class="form-group col-sm-4">
                            <label>Description Tag</label>
                            <input class="form-control" name="description_tag" value="@if(isset($seotag->description_tag)) {{$seotag->description_tag}} @endif" type="text">
                        </div>

                        <div class="form-group col-sm-4">
                            <label>Canonical</label>
                            <input class="form-control" name="canonical_tag" value="@if(isset($seotag->canonical_tag)) {{$seotag->canonical_tag}} @endif" type="text">
                        </div> 

                        <div class="form-group col-sm-4">
                            <label>Url</label>
                            <input class="form-control" value="{{$seotag->url}}" type="text" name="url">
                            <input class="form-control" name="oldurl" value="{{$edit->url}}" type="hidden">
                        </div>

                        <div class="col-sm-12 marginT30">
                            <button type="submit" class="btn btn-primary icon-btn" onclick="validatesec()"><i class="fa fa-fw fa-lg fa-check-circle"></i>Preview</button>&nbsp;&nbsp;&nbsp;
                            <a class="btn btn-default icon-btn" href="{{url('/admin/service')}}"><i class="fa fa-fw fa-lg fa-times-circle"></i>Cancel</a>
                        </div>

                    </div>
                </div>
            </div>
        </form>
        <?php
        if (isset($edit->ser_id))
            $ser_id = $edit->ser_id;
        else
            $ser_id = '';
        ?>
    </section>
</section>
<script>
    CKEDITOR.replace('textArea');

    function servicetype() {
        var video_type = $('#video_type').val();
        if (video_type == 'video') {
            $('#videoupload').show();
            $('#videolink').hide();
        } else if (video_type == 'link') {
            $('#videoupload').hide();
            $('#videolink').show();
        }
    }
function getUnique(array){
        var uniqueArray = [];
        
        // Loop through array values
        for(var value of array){
            if(uniqueArray.indexOf(value) === -1){
                uniqueArray.push(value);
            }
        }
        return uniqueArray;
    }
    

    function buttontype(rand) {
        var button_type = $('#button_type' +rand).val();
        // alert(button_type);
        if (button_type == 'Yes') {
            $('.showtype'+rand).show();
        } else if (button_type == 'No') {
            $('.showtype'+rand).hide();
        }
    }

    function bgtypeimage(rand){
        var bg_type = $('#bg_type'+rand).val();
        // alert(button_type);
        if (bg_type == 'bgcolor') {
            $('.bgcolor'+rand).show();
            $('.bgimagetype'+rand).hide();
        } else if (bg_type == 'bgimage') {
            $('.bgcolor'+rand).hide();
            $('.bgimagetype'+rand).show();
        } else if (bg_type == 'white') {
            $('.bgcolor'+rand).hide();
            $('.bgimagetype'+rand).hide();
        }
    }
</script>

@endsection