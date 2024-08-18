@extends('admin.master')
@section('content')
<!--main content start-->
<section id="main-content">
  <section class="wrapper">
    <div class="page-title">
      <div>
        <h1>Video Service List</h1>
        <ul class="breadcrumb side">
          <li><a href="{{url('/admin/dashboard')}}"><i class="fa fa-home fa-lg"></i></a></li>
          <li><a href="{{url('/admin/video-service')}}">Video</a></li>
          <li class="active">Video Service List</li>
        </ul>
      </div>
      <div>
      @if(in_array('1',$permission) || session('useradmin')['super_org_id']=='1')
        <a href="{{url('/admin/add-video-service')}}" class="btn btn-primary">Add Video Service</a>
        @endif
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <div class="card">
          <div class="card-body">
            <table class="table table-hover table-bordered" id="sampleTable">
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Service Category</th>
                  <th>Service Name</th>
                  <th style="width:15%">Order By</th>
                  <th style="width:15%">Action</th>
                </tr>
              </thead>
              <tbody>
                <!-- Start foreach loop -->
                @foreach($view as $viewlist)
                <?php
                $secondsec = App\Trait\CategoryTrait::allvideocategorylist($viewlist->parent_id);
                ?>
                <tr>                    
                  <td>
                   {{$viewlist->vid_ser_id}}
                  </td>
                  <td>
                  @if(in_array('47',$permissionoprid))
                  @if(isset($secondsec['fifservice_name']))
                  {{$secondsec['fifservice_name']}}
                  @endif
                  @else
                  @if(in_array('46',$permissionoprid))
                  @if(isset($secondsec['fourservice_name']))
                    {{$secondsec['fourservice_name']}}
                    @endif
                    @else
                    @if(in_array('45',$permissionoprid))
                    @if(isset($secondsec['threeservice_name']))
                    {{$secondsec['threeservice_name']}}
                    @endif
                    @else
                    @if(in_array('44',$permissionoprid))
                    @if(isset($secondsec['secservice_name']))
                    {{$secondsec['secservice_name']}}
                    @endif
                    @else
                    @if(in_array('22',$permissionoprid))
                    @if(isset($secondsec['firstservice_name']))
                    {{$secondsec['firstservice_name']}}
                    @endif
                    @endif
                    @endif
                    @endif
                    @endif
                    @endif
                  </td>
                  <td>
                  {{$viewlist->name}}
                  </td>
                  <td>
                  @if(in_array('2',$permission) || session('useradmin')['super_org_id']=='1')
                  <input type="text" class="form-control orderby" value="{{$viewlist->order_by}}" id="order_by{{$viewlist->vid_ser_id}}" name="order_by">
                  <button class="btn btn-primary btn-lg" onclick="orderby('{{$viewlist->vid_ser_id}}')">Save</button>
                  @else
                    {{$viewlist->order_by}}
                  @endif  
                </td>
                  <td>
                  <input type="hidden" name="_token" id="token{{$viewlist->vid_ser_id}}" value="{{ csrf_token() }}">
                  @if($viewlist->status=='active')
                  <button type="button" class="btn btn-info btn-lg" onclick="getactive('{{$viewlist->vid_ser_id}}','inactive')">Active</button>
                  @else
                  <button type="button" class="btn btn-danger btn-lg" onclick="getactive('{{$viewlist->vid_ser_id}}','active')">Inactive</button>
                  @endif
                  
                  @if(in_array('4',$permission) || session('useradmin')['super_org_id']=='1')
                    <a onclick="return confirm('Are you sure you want to delete?')"  href="{{url('/admin/delete_video_service/'.$viewlist->vid_ser_id)}}" class="btn btn-danger btn-lg"><i class="fa fa-trash"></i></a>
                 @endif
                     <!-- Modal -->
<div id="video{{$viewlist->vid_ser_id}}" class="modal fade" role="dialog">
  <div class="modal-dialog">
    <!-- Modal content-->
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal">&times;</button>
        <h4 class="modal-title">{{$viewlist->name}}</h4>
      </div>
      <div class="modal-body">
      <table class="table table-hover table-bordered" id="sampleTable">
              <tbody>
                <tr>
                  <td>Id</td>
                  <td>{{$viewlist->vid_ser_id}}</td>
                </tr>
                <tr>
                  <td style="width: 20%;">Category Name</td>
                  <td>
                  @if(in_array('47',$permissionoprid))
                  @if(isset($secondsec['fifservice_name']))
                  {{$secondsec['fifservice_name']}}
                  @endif
                  @else
                  @if(in_array('46',$permissionoprid))
                  @if(isset($secondsec['fourservice_name']))
                    {{$secondsec['fourservice_name']}}
                    @endif
                    @else
                    @if(in_array('45',$permissionoprid))
                    @if(isset($secondsec['threeservice_name']))
                    {{$secondsec['threeservice_name']}}
                    @endif
                    @else
                    @if(in_array('44',$permissionoprid))
                    @if(isset($secondsec['secservice_name']))
                    {{$secondsec['secservice_name']}}
                    @endif
                    @else
                    @if(in_array('22',$permissionoprid))
                    @if(isset($secondsec['firstservice_name']))
                    {{$secondsec['firstservice_name']}}
                    @endif
                    @endif
                    @endif
                    @endif
                    @endif
                    @endif
                  </td>
                </tr>
                <tr>
                  <td style="width: 20%;">Name</td>
                  <td>{{$viewlist->name}}</td>
                </tr>
                <tr>
                  <td style="width: 20%;">Description</td>
                  <td>{!! $viewlist->description !!}</td>
                </tr>
                <tr>
                  <td style="width: 20%;">Banner Type</td>
                  <td>{{$viewlist->video_type}}</td>
                </tr>
                <tr>
                  <td style="width: 20%;">Image</td>
                  <td><img src="{{url('/'.session('useradmin')['site_url'].'backend/service_video/service/'.$viewlist->image)}}" class="imgwidth"></td>
                </tr>
                <tr>
                  @if($viewlist->video_type=='image')
                  <td style="width: 20%;">Banner Image</td>
                  <td><img src="{{url('/'.session('useradmin')['site_url'].'backend/service_video/service_banner/'.$viewlist->banner_image)}}" class="imgwidth"></td>
                  @else
                  <td style="width: 20%;">Videolink</td>
                  <td>{{ $viewlist->video_link}}</td>
                  @endif
                </tr>
                <tr>
                  <td style="width: 20%;">Alt Tag</td>
                  <td>{{ $viewlist->alt_tag}}</td>
                </tr>
                <tr>
                  <td style="width: 20%;">Title Tag</td>
                  <td>{{ $viewlist->title_tag}}</td>
                </tr>
                <tr>
                  <td style="width: 20%;">Keyword Tag</td>
                  <td>{{$viewlist->keyword_tag}}</td>
                </tr>
                <tr>
                  <td style="width: 20%;">Description Tag</td>
                  <td>{{$viewlist->description_tag}}</td>
                </tr>
                <tr>
                  <td style="width: 20%;">Canonical</td>
                  <td>{{$viewlist->canonical_tag}}</td>
                </tr>
                <tr>
                  <td style="width: 20%;">Url</td>
                  <td>{{$viewlist->url}}</td>
                </tr>
              </tbody>
                  </td>
                </tr> 
            </table>
      </div>
     
    </div>

  </div>
</div>
                  </td>
                </tr> 
               @endforeach
                <!-- End foreach loop -->
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </section>
</section>
<script>
 function getactive(id,status){
   var token = $('#token' + id).val();
      // alert(token);return false;
       $.ajax({
        url : "{{url('getactive-video-service')}}",
        type : "post",
       // dataType : "json",
        data : {"id":id,"status" : status,"_token":token},
        success : function(data) {
            location.href= "{{url('video-service')}}";
        },
    });
   }
   
   function orderby(id){
   var token = $('#token' + id).val();
   var order_by = $('#order_by' + id).val();
      // alert(token);return false;
       $.ajax({
        url : "{{url('orderby-video-service')}}",
        type : "post",
       // dataType : "json",
        data : {"id":id,"order_by" : order_by,"_token":token},
        success : function(data) {
           // location.href= "{{url('service-category')}}";
        },
    });
   }
</script>
<!--main content end-->
@endsection