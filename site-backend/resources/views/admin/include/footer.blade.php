<script type="text/javascript" src="{{ url('/admin/js/plugins/jquery.dataTables.min.js')}}"></script>
<script type="text/javascript" src="{{ url('/admin/js/plugins/dataTables.bootstrap.min.js')}}"></script>
<script src="{{ url('/admin/js/bootstrap.js')}}"></script>
<script src="{{ url('/admin/js/jquery.dcjqaccordion.2.7.js')}}"></script>
<script src="{{ url('/admin/js/scripts.js')}}"></script>
<script src="{{ url('/admin/js/jquery.slimscroll.js')}}"></script>
<script src="{{ url('/admin/js/jquery.nicescroll.js')}}"></script>

<script type="text/javascript">$('#sampleTable').DataTable();</script>
<script src="{{ url('/admin/js/plugins/pace.min.js')}}"></script>
<script src="{{ url('/admin/js/main.js')}}"></script>
<script type="text/javascript" src="{{ url('/admin/js/plugins/bootstrap-datepicker.min.js')}}"></script>
<script type="text/javascript" src="{{ url('/admin/js/plugins/select2.min.js')}}"></script>
<script type="text/javascript" src="{{ url('/admin/js/plugins/bootstrap-datepicker.min.js')}}"></script>
<script type="text/javascript" src="{{ url('/admin/js/jquery.table2excel.js')}}"></script>


 
<?php 
$permissionoprid = [];
if(isset(session('userinfo')['user_category_operation_permissions'][0]['opid'])){
$permissionoprid = session('userinfo')['user_category_operation_permissions'][0]['opid'];
$permissionoprid = explode(',', $permissionoprid);
}
                ?>
<script type="text/javascript">
      $('#sl').click(function(){
        $('#tl').loadingBtn();
        $('#tb').loadingBtn({ text : "Signing In"});
      });
      
      $('#el').click(function(){
        $('#tl').loadingBtnComplete();
        $('#tb').loadingBtnComplete({ html : "Sign In"});
      });
      
      $('#demoDate').datepicker({
        format: "dd/mm/yyyy",
        autoclose: true,
        todayHighlight: true
      });
      $('#demoSelect').select2();

      function validatesec() {
        $("#myForm").validate();
    }
    </script>
    <script>
    // ClassicEditor
    //     .create( document.querySelector( '#editor' ) )
    //     .catch( error => {
    //         console.error( error );
    //     } );
    
</script>

    <!-- Reset Value of form -->
    <script>
      function myFunction() {
          document.getElementById("myForm").reset();
        }

    //     function servicecategory(){
    //   var servicecat = $("#servicecat").val();
    // //   alert(servicecat)
    // $.ajax({
    //     type: "post",
    //     // cache: false,
    //     // async: false,
    //     url:   "{{url('/service-change')}}",
    //     data: {'servicecat': servicecat},
    //     success: function (result)
    //     {   
    //         $("#service").html(result);  
    //     },
    //     complete: function () {
    //     },
    // });
    // }

    function servicetype(){
        var video_type = $('#video_type').val();
        // alert(video_type);
        if(video_type=='image'){
            $('.videoupload').show();
            $('.videolink').hide();
        }else if(video_type=='link'){
            $('.videoupload').hide();
            $('.videolink').show();
        }
    }

    function serviceshowtype(){
        var showtype = $('#showtype').val();
        // alert(video_type);
        if(showtype=='inside'){
            $('.homeservice').hide();
        }else if(showtype=='outside'){
            $('.homeservice').show();
        }
    }

    // function ServiceCategory() {
    //     var servicecategory = $("#servicecategory").val();
    //     // alert(servicecategory);
    //     var token = $("#token").val();
    //     $.ajax({
    //         type: "post",
    //         url: "{{url('/admin/secondcategory')}}",
    //         data: {
    //             'servicecategory': servicecategory,'_token': token
    //         },
    //         success: function(result) {
    //             $("#secondcategory").empty();
    //             $("#thirdcategory").empty();
                
    //             $.each(result.data,function(index,firstvalue){
    //                 if(firstvalue.ser_id==servicecategory){
    //                             // console.log(firstvalue.children);
    //                             // $("#secondcategory").append('<option value='+firstvalue.secser_id+'>'+firstvalue.secservice_name+'</option>');
    //                 }
    //                 $.each(firstvalue.children,function(index,secondvalue){
    //                     if(secondvalue.parent_id==servicecategory && secondvalue.ser_status=='publish'){
    //                     $("#secondcategory").append('<option value='+secondvalue.ser_id+'>'+secondvalue.service_name+'</option>');
    //                     }
    //                     $.each(secondvalue.children,function(index,thirdvalue){
    //                         // console.log(secondvalue.children);
    //                         if(thirdvalue.parent_id==secondvalue.ser_id && thirdvalue.ser_status=='publish'){
    //                     $("#thirdcategory").append('<option value='+thirdvalue.ser_id+'>'+thirdvalue.service_name+'</option>');
    //                     }

    //                     $.each(thirdvalue.children,function(index,fourthvalue){
    //                         console.log(thirdvalue.children);
    //                         if(fourthvalue.parent_id==secondvalue.ser_id && fourthvalue.ser_status=='publish'){
    //                     $("#servicesec").append('<option value='+fourthvalue.ser_id+'>'+fourthvalue.service_name+'</option>');
    //                     }
                        
    //             });
                        
    //             });
    //         });
    //         });
    //             // $("#secondcategory").html(result);
    //         },
    //         complete: function() {},
    //     });
    // }
/////////////////service category////////////////
    function ServiceCategory() {
        var servicecategory = $("#servicecategory").val();
        // alert(servicecategory);
        var token = $("#token").val();
        $.ajax({
            type: "post",
            url: "{{url('/admin/secondcategory')}}",
            data: {
                'servicecategory': servicecategory,'_token': token
            },
            success: function(result) {
                <?php 
                if(in_array('36',$permissionoprid)){  ?>
                    $("#secondcategory").html(result);
                <?php } 
                 if(in_array('16',$permissionoprid)){  ?>
                     $("#servicesec").html(result);
                 <?php } ?>
                

               // $("#secondcategory").html(result);
            },
            complete: function() {},
        });
    }

    function SecondCategory() {
        var secondcategory = $("#secondcategory").val();
        var token = $("#token").val();
        $.ajax({
            type: "post",
            url: "{{url('/admin/thirdcategory')}}",
            data: {
                'secondcategory': secondcategory,'_token': token
            },
            success: function(result) {
                <?php 
                if(in_array('37',$permissionoprid)){  ?>
                    $("#thirdcategory").html(result);
                <?php } 
                if(in_array('36',$permissionoprid)){  ?>
                   $("#servicesec").html(result);
                <?php } ?>
                //$("#thirdcategory").html(result);
            },
            complete: function() {},
        });
    }
  ////////////////////result category////////////////////////
  function ResultCategory() {
        var servicecategory = $("#servicecategory").val();
        // alert(servicecategory);
        var token = $("#token").val();
        $.ajax({
            type: "post",
            url: "{{url('/admin/secondresultcategory')}}",
            data: {
                'servicecategory': servicecategory,'_token': token
            },
            success: function(result) {
                <?php 
                if(in_array('40',$permissionoprid)){  ?>
                    $("#secondcategory").html(result);
                <?php } 
                 if(in_array('19',$permissionoprid)){  ?>
                     $("#servicesec").html(result);
                 <?php } ?>
                

               // $("#secondcategory").html(result);
            },
            complete: function() {},
        });
    }

    function SecondResultCategory() {
        var secondcategory = $("#secondcategory").val();
        var token = $("#token").val();
        $.ajax({
            type: "post",
            url: "{{url('/admin/thirdresultcategory ')}}",
            data: {
                'secondcategory': secondcategory,'_token': token
            },
            success: function(result) {
                <?php 
                if(in_array('41',$permissionoprid)){  ?>
                    $("#thirdcategory").html(result);
                <?php } 
                if(in_array('40',$permissionoprid)){  ?>
                   $("#servicesec").html(result);
                <?php } ?>
                //$("#thirdcategory").html(result);
            },
            complete: function() {},
        });
    }

    ////////////////////video category////////////////////////
  function VideoCategory() {
        var servicecategory = $("#servicecategory").val();
        // alert(servicecategory);
        var token = $("#token").val();
        $.ajax({
            type: "post",
            url: "{{url('/admin/secondvideocategory')}}",
            data: {
                'servicecategory': servicecategory,'_token': token
            },
            success: function(result) {
                <?php 
                if(in_array('44',$permissionoprid)){  ?>
                    $("#secondcategory").html(result);
                <?php } 
                 if(in_array('22',$permissionoprid)){  ?>
                     $("#servicesec").html(result);
                 <?php } ?>
                

               // $("#secondcategory").html(result);
            },
            complete: function() {},
        });
    }

    function SecondVideoCategory() {
        var secondcategory = $("#secondcategory").val();
        var token = $("#token").val();
        $.ajax({
            type: "post",
            url: "{{url('/admin/thirdvideocategory ')}}",
            data: {
                'secondcategory': secondcategory,'_token': token
            },
            success: function(result) {
                <?php 
                if(in_array('45',$permissionoprid)){  ?>
                    $("#thirdcategory").html(result);
                <?php } 
                if(in_array('44',$permissionoprid)){  ?>
                   $("#servicesec").html(result);
                <?php } ?>
                //$("#thirdcategory").html(result);
            },
            complete: function() {},
        });
    }
  
    </script>
</body>
</html>