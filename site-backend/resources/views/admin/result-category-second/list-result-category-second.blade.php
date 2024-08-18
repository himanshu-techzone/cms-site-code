@extends('admin.master')
@section('content')
<!--main content start-->
<section id="main-content">
  <section class="wrapper">
    <div class="page-title">
      <div>
        <h1>List Second Result Category</h1>
        <ul class="breadcrumb side">
        <li><a href="{{url('/admin/dashboard')}}"><i class="fa fa-home fa-lg"></i></a></li>
          <li><a href="{{url('/admin/second-result-category')}}">Result</a></li>
          <li class="active">List Second Result Category</li>
        </ul>
      </div>
      <div>
      @if(in_array('1',$permission) || session('useradmin')['super_org_id']=='1')
        <a href="{{url('/admin/add-second-result-category')}}" class="btn btn-primary">Add Second Result Category</a>
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
                  <th>Category Name</th>
                  <th>Second Category Name</th>
                  <th style="width:15%">Order By</th>
                  <th style="width:15%">Action</th>
                </tr>
              </thead>
              <tbody>
              @foreach($view as $viewlist)
              @foreach($secondcatview as $key => $secondcatviewlist)
              @if($secondcatviewlist->parent_id == $viewlist->res_ser_id)
                <tr>
                  <td>
                    {{$key + 1 }}
                  </td>
                  <td>
                    {{$viewlist->name}}
                  </td>
                  <td>
                    {{$secondcatviewlist->name}}
                  </td>
                  <td>
                    @if(in_array('2',$permission) || session('useradmin')['super_org_id']=='1')
                    <input type="text" class="form-control orderby" value="{{$secondcatviewlist->order_by}}" id="order_by{{$secondcatviewlist->res_ser_id}}" name="order_by">
                    <button class="btn btn-primary btn-lg" onclick="orderby('{{$secondcatviewlist->res_ser_id}}')">Save</button>
                    @else
                    {{$secondcatviewlist->order_by}}
                    @endif
                  </td>
                  <td>
                    <input type="hidden" name="_token" id="token{{$secondcatviewlist->res_ser_id}}" value="{{ csrf_token() }}">
                    @if($secondcatviewlist->status=='active')
                    <button type="button" class="btn btn-info btn-lg" onclick="getactive('{{$secondcatviewlist->res_ser_id}}','inactive')">Active</button>
                    @else
                    <button type="button" class="btn btn-danger btn-lg" onclick="getactive('{{$secondcatviewlist->res_ser_id}}','active')">Inactive</button>
                    @endif
                    
                    @if(in_array('4',$permission) || session('useradmin')['super_org_id']=='1')
                    <a onclick="return confirm('Are you sure you want to delete?')" href="{{url('/admin/delete_service_result_category/'.$secondcatviewlist->res_ser_id)}}" class="btn btn-danger btn-lg"><i class="fa fa-trash"></i></a>
                    @endif
       
                  
    </td>
    </tr>
    @endif
    @endforeach
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
      url: "{{url('/admin/getactive-service-category')}}",
      type: "post",
      // dataType : "json",
      data: {
        "id": id,
        "status": status,
        "_token": token
      },
      success: function(data) {
        location.href = "{{url('/admin/service-category')}}";
      },
    });
  }

  function orderby(id) {
    var token = $('#token' + id).val();
    var order_by = $('#order_by' + id).val();
    // alert(token);return false;
    $.ajax({
      url: "{{url('/admin/orderby-service-category')}}",
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