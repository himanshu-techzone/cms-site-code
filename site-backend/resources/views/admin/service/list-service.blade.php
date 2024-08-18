@extends('admin.master')
@section('content')
<!--main content start-->
<section id="main-content">
  <section class="wrapper">
    <div class="page-title">
      <div>
        <h1>List Services</h1>
        <ul class="breadcrumb side">
          <li><a href="{{url('/admin/dashboard')}}"><i class="fa fa-home fa-lg"></i></a></li>
          <li><a href="{{url('/admin/service-category')}}">Services</a></li>
          <li class="active">Services List</li>
        </ul>
      </div>
      <div>
        @if(in_array('1',$permission) || session('useradmin')['super_org_id']=='1')
        <a href="{{url('/admin/add-service')}}" class="btn btn-primary">Add Service</a>
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
                  <th>Sr. No.</th>
                  <th>Service Category</th>
                  <th>Service Name</th>
                  <th style="width:15%">Order By</th>
                  <th style="width:15%">Action</th>
                </tr>
              </thead>
              <tbody>
                <!-- Start foreach loop -->
                @foreach($view as $key => $viewlist)
                <?php
                  $secondsec = App\Trait\CategoryTrait::allcategorylist($viewlist->parent_id);
                ?>
                <tr>
                  <td>
                    {{$key + 1}}
                  </td>

                  <td>
                  @if(in_array('39',$permissionoprid))
                  @if(isset($secondsec['fifservice_name']))
                  {{$secondsec['fifservice_name']}}
                  @endif
                  @else
                  @if(in_array('38',$permissionoprid))
                  @if(isset($secondsec['fourservice_name']))
                    {{$secondsec['fourservice_name']}}
                    @endif
                    @else
                    @if(in_array('37',$permissionoprid))
                    @if(isset($secondsec['threeservice_name']))
                    {{$secondsec['threeservice_name']}}
                    @endif
                    @else
                    @if(in_array('36',$permissionoprid))
                    @if(isset($secondsec['secservice_name']))
                    {{$secondsec['secservice_name']}}
                    @endif
                    @else
                    @if(in_array('16',$permissionoprid))
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
                    {{$viewlist->service_name}}
                  </td>
                  <td>
                    @if(in_array('2',$permission) || session('useradmin')['super_org_id']=='1')
                    <input type="text" class="form-control orderby" value="{{$viewlist->order_by}}" id="order_by{{$viewlist->ser_id}}" name="order_by">
                    <button class="btn btn-primary btn-lg" onclick="orderby('{{$viewlist->ser_id}}')">Save</button>
                    @else
                    {{$viewlist->order_by}}
                    @endif
                  </td>
                  <td>
                    <input type="hidden" name="_token" id="token{{$viewlist->ser_id}}" value="{{ csrf_token() }}">
                    @if($viewlist->status=='active')
                    <button type="button" class="btn btn-info btn-lg" onclick="getactive('{{$viewlist->ser_id}}','inactive')">Active</button>
                    @else
                    <button type="button" class="btn btn-danger btn-lg" onclick="getactive('{{$viewlist->ser_id}}','active')">Inactive</button>
                    @endif
                    
                    @if(in_array('4',$permission) || session('useradmin')['super_org_id']=='1')
                    @if($viewlist->service_name != 'General')
                    <a onclick="return confirm('Are you sure you want to delete?')" href="{{url('/admin/delete_service/'.$viewlist->ser_id)}}" class="btn btn-danger btn-lg"><i class="fa fa-trash"></i></a>
                    @endif
                    @endif
                    <!-- Modal -->
                   
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
  function getactive(id, status) {
    var token = $('#token' + id).val();
    // alert(token);return false;
    $.ajax({
      url: "{{url('/admin/getactive-service')}}",
      type: "post",
      // dataType : "json",
      data: {
        "id": id,
        "status": status,
        "_token": token
      },
      success: function(data) {
        location.href = "{{url('/admin/service')}}";
      },
    });
  }

  function orderby(id) {
    var token = $('#token' + id).val();
    var order_by = $('#order_by' + id).val();
    // alert(token);return false;
    $.ajax({
      url: "{{url('/admin/orderby-service')}}",
      type: "post",
      // dataType : "json",
      data: {
        "id": id,
        "order_by": order_by,
        "_token": token
      },
      success: function(data) {
        // location.href= "{{url('/admin/service-category')}}";
      },
    });
  }
</script>
<!--main content end-->
@endsection