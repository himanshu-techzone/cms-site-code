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
                    <h1>Add Service</h1>
                    <ul class="breadcrumb side">
                        <li><a href="{{url('/Admin/dashboard')}}"><i class="fa fa-home fa-lg"></i></a></li>
                        <li><a href="{{url('/service')}}">Services</a></li>
                        <li><a href="{{url('/service')}}">Services List</a></li>
                        <li class="active">Add Service</li>
                    </ul>
                </div>
            </div>
        </div>
        <!-- Start form here -->
        <form action="{{URL::to('/admin/create_service')}}" id="myForm" enctype="multipart/form-data" method="post" accept-charset="utf-8">
            <input type="hidden" name="site_id" value="{{session('useradmin')['site_id']}}">
            <input type="hidden" name="org_id" value="{{session('useradmin')['org_id']}}">
            <input type="hidden" name="created_by" value="{{session('useradmin')['usr_id']}}">
            <input type="hidden" name="_token" id="token" value="{{ csrf_token() }}">
            <input type="hidden" name="ser_id" id="ser_id" value="@if(isset($primeid)){{$primeid}}@else 0 @endif">
            <input type="hidden" name="category_type" value="service">
            <div class="card">
                <div class="card-body">
                <?php //echo '<pre>';print_r(session('userinfo')); echo '</pre>';
                ?>
                    <div class="row">
                    <div class="form-group col-md-4">
                            <label class="control-label">Show Type</label>
                            <select class="form-control" name="show_type" id="showtype" required onclick="serviceshowtype()">
                                <option value="">Select Type</option>
                                <option value="inside" @if(isset($view->show_type))@if($view->show_type=='inside') selected @endif @else selected @endif>Inside</option>
                                <option value="outside" @if(isset($view->show_type))@if($view->show_type=='outside') selected @endif @endif>Outside</option>
                            </select>
                        </div>
                    <div class="form-group col-md-4">
                                <label class="control-label">Select Design Type</label>
                                <select class="form-control" id="design_type" name="design_type">
                                    <option value="">Select Design Type</option>
                                    <option value="left" @if(isset($view->design_type))@if($view->design_type=='left') selected @endif @else selected @endif>Left Side Image</option>
                                    <option value="right" @if(isset($view->design_type))@if($view->design_type=='right') selected @endif @endif>Right Side Image</option>
                                </select>
                            </div>
                     @if(in_array('16',$permissionoprid))
                        <div class="form-group col-md-4">
                            <label class="control-label">Service Category</label>
                            <select class="form-control" name="service_cat" id="servicecategory" onchange="ServiceCategory()">
                                <option value="">Select Category</option>
                                 @foreach($firstcategory as $firstcategorylist)
                                <option value="@if(isset($firstcategorylist->ser_id)){{$firstcategorylist->ser_id}}@endif" @if(isset($view->ser_id))@if($firstcategorylist->ser_id == $secondsec['firstser_id']) selected @endif @endif>{{$firstcategorylist->service_name}}</option>
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
                        <div class="form-group col-md-4">
                            <label class="control-label">Service Name</label>
                            <input class="form-control" name="service_name" value="@if(isset($view->service_name)) {{$view->service_name}} @endif" type="text" required>
                        </div>
                        <div class="form-group col-md-4">
                            <label class="control-label">Service Name Description</label>
                            <input class="form-control" name="name_desc" value="@if(isset($view->name_desc)) {{$view->name_desc}} @endif" type="text" required>
                        </div>
                        <div class="form-group  col-md-4">
                            <!-- <label class="control-label">Service Image</label>
                            <input class="form-control" name="service_image" type="file"> -->
                            @if(isset($view->service_image))
                            @if($view->service_image!='')
                            <img src="{{url('/'.session('useradmin')['site_url'].'backend/service/image/'.$view->service_image)}}" style="width: 85px;height: 85px;"><br>
                            @else
                            <img src="{{url('/images/no_image.jpg')}}" style="width:85px;height:85px;">
                            @endif
                            @else
                            <img src="{{url('/images/no_image.jpg')}}" style="width:85px;height:85px;"><br>
                            @endif
                            <div class="form-group">
                                <label class="control-label">Image</label>
                                <input class="form-control" name="service_image" type="file">
                                <input class="form-control" name="oldservice_image" value="@if(isset($view->service_image)){{$view->service_image}}@endif" type="hidden">
                            </div>
                        </div>
                        
                        
                        <div class="form-group  col-md-4">
                            <!-- <label class="control-label">Service Image</label>
                            <input class="form-control" name="service_image" type="file"> -->
                            @if(isset($view->service_icon))
                            @if($view->service_icon!='')
                            <img src="{{url('/'.session('useradmin')['site_url'].'backend/service/image/'.$view->service_icon)}}" style="width: 85px;height: 85px;"><br>
                            @else
                            <img src="{{url('/images/no_image.jpg')}}" style="width:85px;height:85px;">
                            @endif
                            @else
                            <img src="{{url('/images/no_image.jpg')}}" style="width:85px;height:85px;"><br>
                            @endif
                            <div class="form-group">
                                <label class="control-label">Service Icon</label>
                                <input class="form-control" name="service_icon" type="file">
                                <input class="form-control" name="oldservice_icon" value="@if(isset($view->service_icon)){{$view->service_icon}}@endif" type="hidden">
                            </div>
                        </div>
                        

                        <div class="form-group col-md-4">
                            <label class="control-label">Service Banner Type</label>
                            <select class="form-control" name="video_type" required id="video_type" onchange="servicetype()">
                                <option value="">Select Type</option>
                                <option value="image" @if(isset($view->video_type))@if($view->video_type=='image') selected @endif @else selected @endif>Image</option>
                                <option value="link" @if(isset($view->video_type))@if($view->video_type=='link') selected @endif @endif>Youtube Link</option>
                            </select>
                        </div>
                        <div class="form-group col-md-4">
                            @if(isset($view->service_banner_image))
                            @if($view->service_banner_image!='')
                            <img src="{{url('/'.session('useradmin')['site_url'].'backend/service/banner/'.$view->service_banner_image)}}" style="width: 85px;height: 85px;"><br>
                            @else
                            <img src="{{url('/images/no_image.jpg')}}" style="width:85px;height:85px;">
                            @endif
                            @else
                            <img src="{{url('/images/no_image.jpg')}}" style="width:85px;height:85px;">
                            @endif
                            <div class="form-group">
                                @if(isset($view->video_type))
                                @if($view->video_type=='image')
                                <label class="control-label videoupload">Banner Image</label>
                                <label class="control-label videolink" style="display:none;">Banner Thumbnail Image</label>
                                @else
                                <label class="control-label videoupload">Banner Image</label>
                                <label class="control-label videolink" style="display:none;">Banner Thumbnail Image</label>
                                @endif
                                @else
                                <label class="control-label videoupload">Banner Image</label>
                                <label class="control-label videolink" style="display:none;">Banner Thumbnail Image</label>
                                @endif
                                <input class="form-control" name="service_banner_image" type="file">
                                <input class="form-control" name="oldservice_banner_image" value="@if(isset($view->service_banner_image)) {{$view->service_banner_image}} @endif" type="hidden">
                            </div>
                        </div>
                        <!-- <div class="form-group col-md-4 videolink" style="display:none;">
                            <label class="control-label">Service Youtube Link</label>
                            <input class="form-control" name="video_link" type="text">
                        </div> -->

                        @if(isset($view->video_type))
                        @if($view->video_type=='link')
                        <div class="col-sm-4 videolink">
                            @if($view->video_link!='')
                            <iframe width="100%" height="76" src="{{$view->video_link}}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            @else
                            <img src="{{url('/images/no_image.jpg')}}" style="width:85px;height:85px;">
                            @endif
                            <div class="form-group">
                                <label class="control-label">Service Youtube Link</label>
                                <input class="form-control" name="video_link" value="@if(isset($view->video_link)){{$view->video_link}}@endif" type="text">
                            </div>
                        </div>
                        @else
                        <div class="form-group col-md-4 videolink" style="display:none;">
                            <label class="control-label">Service Youtube Link</label>
                            <input class="form-control" name="video_link" value="@if(isset($view->video_link)) {{$view->video_link}} @endif" type="text">
                        </div>
                        @endif
                        @endif

                        <div class="form-group  col-md-4">
                            <label class="control-label">Image Alt Tag</label>
                            <input class="form-control" name="alt_tag" value="@if(isset($view->alt_tag)) {{$view->alt_tag}} @endif" type="text">
                        </div>
                        <div class="form-group  col-md-12">
                            <label class="control-label">Short Description</label>
                            <textarea class="form-control ckeditor" name="short_desc" rows="3">@if(isset($view->short_desc)) {{$view->short_desc}} @endif</textarea>
                            <span class="help-block"></span>
                        </div>
                        <div class="form-group col-md-12">
                            <label class="control-label">Description</label>
                            <textarea class="form-control ckeditor" name="description" rows="3">@if(isset($view->description)) {{$view->description}} @endif</textarea>
                            <span class="help-block"></span>
                        </div>

                        <div class="form-group col-md-12">
                            <label class="control-label">Description 2</label>
                            <textarea class="form-control ckeditor" name="description2" rows="3">@if(isset($view->description2)) {{$view->description2}} @endif</textarea>
                            <span class="help-block"></span>
                        </div>
                        
                        
                        
                    </div>
                   
                    <div class="row">
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
                            <label class="control-label">Url</label>
                            <input class="form-control" name="url" value="@if(isset($seotag->url)) {{$seotag->url}} @endif" type="text">
                            <input class="form-control" value="@if(isset($view->url)){{$view->url}}@endif" type="hidden" name="oldurl">
                        </div>

                        <div class="col-sm-12 marginT30">
                            <button type="submit" class="btn btn-primary icon-btn" onclick="validatesec()">
                                <i class="fa fa-fw fa-lg fa-check-circle"></i>Preview
                            </button>&nbsp;&nbsp;&nbsp;
                            <a class="btn btn-default icon-btn" href="{{url('/service')}}">
                                <i class="fa fa-fw fa-lg fa-times-circle"></i>Cancel
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </form>
        <!-- End form -->
        <?php
        if (isset($view->ser_id))
            $ser_id = $view->ser_id;
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