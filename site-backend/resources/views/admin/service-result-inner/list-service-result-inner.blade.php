@extends('admin.master')
@section('content')
<!--main content start-->
<section id="main-content">
  <section class="wrapper">
    <div class="page-title">
      <div>
        <h1>Result List</h1>
        <ul class="breadcrumb side">
          <li><a href="{{url('/admin/dashboard')}}"><i class="fa fa-home fa-lg"></i></a></li>
          <li><a href="{{url('/admin/service-result-inner')}}">Result</a></li>
          <li class="active">Result List</li>
        </ul>
      </div>
      <div>
      @if(in_array('1',$permission) || session('useradmin')['super_org_id']=='1')
        <a href="{{url('/admin/add-service-result-inner')}}" class="btn btn-primary">Add Result</a>
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
                  @if(isset($viewlist->result_cat_id))
                  <th>Result Category</th>
                  @endif
                  @if(isset($viewlist->result_service_id))
                  <th>Result Service</th>
                  @endif
                  <th>Result Heading</th>
                  <th>Image</th>
                  <th style="width:15%">Order By</th>
                  <th style="width:15%">Action</th>
                </tr>
              </thead>
              <tbody>
                <!-- Start foreach loop -->
                @foreach($view as $key => $viewlist)
                <tr>                    
                  <td>
                  {{$key + 1}}
                  </td>
                  @if(isset($viewlist->result_cat_id))
                  <td>
                    @foreach($resultcat as $resultcatlist)
                    @if($resultcatlist->res_cat_id==$viewlist->result_cat_id)
                  {{$resultcatlist->name}}
                  @endif
                  @endforeach
                  </td>
                  @endif
                  @if(isset($viewlist->result_service_id))
                  <td>
                  @foreach($resultservice as $resultservicelist)
                    @if($resultservicelist->res_ser_id==$viewlist->result_service_id)
                  {{$resultservicelist->name}}
                  @endif
                  @endforeach
                  </td>
                  @endif
                  <td>
                  {{$viewlist->name}}
                  </td>
                  <td>
                  @if($viewlist->afterimg!='')
                    <img src="{{url('/'.session('useradmin')['site_url'].'backend/service_result/inner/'.$viewlist->afterimg)}}" style="width: 85px;height: 85px;"><br>
                 
                 @else
                    <img src="{{url('/images/no_image.jpg')}}" style="width:85px;height:85px;">
                 
                 @endif
                  
                  </td>
                  <td>
                  @if(in_array('2',$permission) || session('useradmin')['super_org_id']=='1')
                  <input type="text" class="form-control orderby" value="{{$viewlist->order_by}}" id="order_by{{$viewlist->res_inn_id}}" name="order_by">
                  <button class="btn btn-primary btn-lg" onclick="orderby('{{$viewlist->res_inn_id}}')">Save</button>
                  @else
                    {{$viewlist->order_by}}
                  @endif  
                </td>
                  <td>
                  <input type="hidden" name="_token" id="token{{$viewlist->res_inn_id}}" value="{{ csrf_token() }}">
                  @if($viewlist->status=='active')
                  <button type="button" class="btn btn-info btn-lg" onclick="getactive('{{$viewlist->res_inn_id}}','inactive')">Active</button>
                  @else
                  <button type="button" class="btn btn-danger btn-lg" onclick="getactive('{{$viewlist->res_inn_id}}','active')">Inactive</button>
                  @endif
                  
                  @if(in_array('4',$permission) || session('useradmin')['super_org_id']=='1')
                    <a onclick="return confirm('Are you sure you want to delete?')"  href="{{url('/admin/delete_service_result_inner/'.$viewlist->res_inn_id)}}" class="btn btn-danger btn-lg"><i class="fa fa-trash"></i></a>
                 @endif
                    
                     
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
        url : "{{url('/admin/getactive-result-inner')}}",
        type : "post",
       // dataType : "json",
        data : {"id":id,"status" : status,"_token":token},
        success : function(data) {
            location.href= "{{url('/admin/service-result-inner')}}";
        },
    });
   }
   
   function orderby(id){
   var token = $('#token' + id).val();
   var order_by = $('#order_by' + id).val();
      // alert(token);return false;
       $.ajax({
        url : "{{url('/admin/orderby-result-inner')}}",
        type : "post",
       // dataType : "json",
        data : {"id":id,"order_by" : order_by,"_token":token},
        success : function(data) {
           // location.href= "{{url('/admin/service-category')}}";
        },
    });
   }
</script>
<!--main content end-->
@endsection