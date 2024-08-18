
<?php
ini_set('max_execution_time', 300);

//?heck that we have a file
if((!empty($_FILES["uploaded_file"])) && ($_FILES['uploaded_file']['error'] == 0)) {
  //Check if the file is JPEG image and it's size is less than 350Kb
  $filename = basename($_FILES['uploaded_file']['name']);
  
  $ext = substr($filename, strrpos($filename, '.') + 1);
  if ($_FILES["uploaded_file"]["type"] == "application/vnd.ms-excel")
    {
    //Determine the path to which we want to save this file
      $newname = dirname(__FILE__).'/'.$filename;
      //Check if the file with the same name is already exists on the server
      if (!file_exists($newname)) {
		  
		  
		  
        //Attempt to move the uploaded file to it's new place
        if ((move_uploaded_file($_FILES['uploaded_file']['tmp_name'],$newname))) {
           //echo "<h1>It's done! The file has been saved as: ".$newname."</h1>";
		   
		   
		   include 'excel_reader.php';     // include the class

// creates an object instance of the class, and read the excel file data
$excel = new PhpExcelReader;
$excel->read($filename);

// Excel file data is stored in $sheets property, an Array of worksheets
/*
The data is stored in 'cells' and the meta-data is stored in an array called 'cellsInfo'

Example (firt_sheet - index 0, second_sheet - index 1, ...):

$sheets[0]  -->  'cells'  -->  row --> column --> Interpreted value
         -->  'cellsInfo' --> row --> column --> 'type' (Can be 'date', 'number', or 'unknown')
                                            --> 'raw' (The raw data that Excel stores for that data cell)
*/

// this function creates and returns a HTML table with excel rows and columns data
// Parameter - array with excel worksheet data
function sheetData($sheet) {
  $re = '<table>';     // starts html table

  $x = 2;
  while($x <= $sheet['numRows']) {
   // $re .= "<tr>\n";

   $email = isset($sheet['cells'][$x][1]) ? $sheet['cells'][$x][1] : '';
	$first_name = isset($sheet['cells'][$x][2]) ? $sheet['cells'][$x][2] : '';
	 $secand_name = isset($sheet['cells'][$x][3]) ? $sheet['cells'][$x][3] : '';
	   
	   $date = isset($sheet['cells'][$x][4]) ? $sheet['cells'][$x][4] : '';
	 $cell_trim=trim($email," ");
	 /************************function************************************/
	 
	 
	 function mail_attachment($filename, $path, $mailto, $from_mail, $from_name, $replyto, $subject, $message) {
    $file = $path.$filename;
    $file_size = filesize($file);
    $handle = fopen($file, "r");
    $content = fread($handle, $file_size);
    fclose($handle);
    $content = chunk_split(base64_encode($content));
    $uid = md5(uniqid(time()));
	$headers  = 'MIME-Version: 1.0' . "\r\n";
$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
	
    $header = "From: ".$from_name." <".$from_mail.">\r\n";
    $header .= "Reply-To: ".$replyto."\r\n";
    $header .= "MIME-Version: 1.0\r\n";
	
    $header .= "Content-Type: multipart/mixed; boundary=\"".$uid."\"\r\n\r\n";
    $header .= "This is a multi-part message in MIME format.\r\n";
    $header .= "--".$uid."\r\n";
   
	
$header .= "Content-type:text/html; charset=iso-8859-1\r\n";
    $header .= "Content-Transfer-Encoding: 7bit\r\n\r\n";
    $header .= $message."\r\n\r\n";
    $header .= "--".$uid."\r\n";
    $header .= "Content-Type:application/pdf; name=\"".$filename."\"\r\n"; 
	
    $header .= "Content-Transfer-Encoding: base64\r\n";
    $header .= "Content-Disposition: attachment; filename=\"".$filename."\"\r\n\r\n";
    $header .= $content."\r\n\r\n";
    $header .= "--".$uid."--";


	
    if (mail($mailto, $subject, $message, $header)) {
        echo "mail send ... OK"; // or use booleans here
    } else {
        echo "mail send ... ERROR!";
    }
}
	 
	 
	 /*************************mail**********************************/
	 $to = $cell_trim;
	 $cell_trim=trim($email," ");
	 $my_file = "DigiLantern.pdf";
$my_path = "";
$my_name = "Digilantern";
$my_mail = "info@digilantern.com";
$my_replyto = "info@digilantern.com";
$my_subject = "Accelerating Business through Digitalization @DigiLantern";
$my_message = "";
	 
	 /***********************mail************************************/
	 
	 
	  
	  if(mail(mail_attachment($my_file, $my_path, $to, $my_mail, $my_name, $my_replyto, $my_subject, $my_message))
	 
	 {  $re .= " <td>$cell_trim-<font color='green'>Send</font></td> \n"; }else{
	  
      $re .= " <td>$cell_trim-<font color='red'>Not Send</font></td>\n"; 
     }	  
	  
      
    $re .= "</tr>\n";
    $x++;
  }

  return $re .'</table>';     // ends and returns the html table
}

$nr_sheets = count($excel->sheets);       // gets the number of sheets
$excel_data = '';              // to store the the html tables with data of each sheet

// traverses the number of sheets and sets html table with each sheet data in $excel_data
for($i=0; $i<$nr_sheets; $i++) {
  $excel_data .= '<h4>Sheet '. ($i + 1) .' (<em>'. $excel->boundsheets[$i]['name'] .'</em>)</h4>'. sheetData($excel->sheets[$i]) .'<br/>';  
}
?>
<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />

<style type="text/css">
table {
 border-collapse: collapse;
}        
td {
 border: 1px solid black;
 padding: 0 0.5em;
}        
</style>
</head>
<body>

<?php
// displays tables with excel file data
echo $excel_data;
?>    

</body>
</html>
<?php
		   
		   
		   
		   
		   
		   
		   
		   
		   
		   
        } else {
           echo "<h1>Error: A problem occurred during file upload!</h1>";
        }
      } else {
         echo "<h1>Error: File ".$_FILES["uploaded_file"]["name"]." already exists</h1>";
      }
  } else {
     echo "<h1>Error: Only .xls file  are accepted for upload</h1>";
  }
} else {
?>

<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8" />
        <title>Al3xis</title>
        
        <!-- The stylesheet -->
        <link rel="stylesheet" href="assets/css/styles.css" />
		<script src="ckeditor/ckeditor.js"></script>
        
        <!--[if lt IE 9]>
          <script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
        <![endif]-->
    </head>
    
    <body>

        <div id="main">
        	
        	<h1>    Choose a file to upload:</h1>
        	
          <form enctype="multipart/form-data" action="" method="post">
		  
		  <h3>  Excel File Format should be</h3>
		  <h5>Example</h2>
		  <table border='1px' style="margin-left: 46px;
    margin-top: 19px;"><tr>
		  <td>Email</td>
		  <td>First-Name</td>
		  <td>Last-Name</td>
		  <td>Date</td>
		  </tr>
		  <tr>
		  <td>example@gmail.com</td>
		  <td>rama</td>
		  <td>nath</td>
		  <td>24 jan,2015</td>
		  </tr>
		  
		  </table>
    <input  type="hidden" name="MAX_FILE_SIZE" value="1000000" />
     <input style="margin-top: 102px;" name="uploaded_file" id="email" type="file" />
	<!-- <textarea name="editor1" id="editor1" rows="10" cols="80">
               past ur style or content
            </textarea>
            <script>
                // Replace the <textarea id="editor1"> with a CKEditor
                // instance, using default configuration.
                CKEDITOR.replace( 'editor1' );
            </script-->
    <input type="submit" value="Upload" />
  </form> 
        </div>
        
        <footer>
	        
            <a class="al3xis"> a form with password meter and pass validation </a>
        </footer>
        
        <!-- JavaScript includes - jQuery, the complexify plugin and our own script.js -->
		<script src="http://code.jquery.com/jquery-1.7.2.min.js"></script>

		     
    </body>
</html>




<?php
}
?>












<style type="text/css">


/*-------------------------
	Simple reset
--------------------------*/


*{
	margin:0;
	padding:0;
}


/*-------------------------
	General Styles
--------------------------*/


html{
	background:url('http://i34.tinypic.com/m922bk.jpg') repeat center top #826e79;
}


body{
	font:14px/1.3 'Segoe UI', 'Arial', sans-serif;
}

a, a:visited {
	outline:none;
	color:#1c4f64;
}

a:hover{
	text-decoration:none;
}

section, footer, header{
	display: block;
}


/*----------------------------
	The Header
-----------------------------*/


h1{
	font:bold 36px Cambria, "Hoefler Text",serif;
	margin-bottom:50px;
	color:#71564b;
	text-shadow:1px 1px 0 rgba(255,255,255,0.4);
}


/*----------------------------
	The Form
-----------------------------*/


#main{
	width:440px;
	margin:80px auto 120px;
	position:relative;
	text-align:center;
}

#main form{
	width:440px;
	height:450px;
	background:url('http://i33.tinypic.com/24eng8x.png') no-repeat;
	padding-top: 50px;
}

#main form .row{
	position:relative;
}

#main form .row.error:after,
#main form .row.success:after{
	content:'';
	
	position:absolute;
	right: 60px;
    top: 8px;
	width:32px;
	height:32px;
	background:url('http://i38.tinypic.com/33c4s9c.png') no-repeat;
}

#main form .row.error:after{
	background-position: 0 -79px;
}

#main form input[type=text],
#main form input[type=password]{

	border:none;
	background:url('http://i34.tinypic.com/2qm0ndc.png') no-repeat top left;
	font:14px 'Segoe UI','Arial',sans-serif;
	color:#888;
	
	outline:none;
	
    height: 48px;
    margin: 0 auto 22px;
    padding: 0 10px 0 50px;
    width: 278px;
}

#main form input[disabled]{
	opacity: 0.5;
}

#main form .email input{
	background-position:0 0;
}

#main form .email input:focus{
	background-position:0 -48px;
}

#main form .pass input{
	background-position:0 -96px;
}

#main form .pass input:focus{
	background-position:0 -144px;
}


/*----------------------------
	The Submit Button
-----------------------------*/


#main form input[type=submit]{
	
	border: 1px solid #004C9B;
    border-radius: 3px 3px 3px 3px;
    box-shadow: 0 1px 0 rgba(255, 255, 255, 0.3) inset, 0 1px 1px rgba(0, 0, 0, 0.3);
    color: #D3EBFF;
    cursor: pointer;
    display: block;
    font: bold 24px Cambria,"Hoefler Text",serif;
    margin: 230px auto 0;
    padding: 10px;
    text-shadow: 0 -1px 0 #444444;
    width: 410px;
    
	background-color:#0496DA;
	
	background-image: linear-gradient(top, #0496DA 0%, #0067CD 100%);
	background-image: -o-linear-gradient(top, #0496DA 0%, #0067CD 100%);
	background-image: -moz-linear-gradient(top, #0496DA 0%, #0067CD 100%);
	background-image: -webkit-linear-gradient(top, #0496DA 0%, #0067CD 100%);
	background-image: -ms-linear-gradient(top, #0496DA 0%, #0067CD 100%);
}

#main form input[type=submit]:hover{
	
	background-color:#0383d3;
	
	background-image: linear-gradient(top, #0383d3 0%, #004c9b 100%);
	background-image: -o-linear-gradient(top, #0383d3 0%, #004c9b 100%);
	background-image: -moz-linear-gradient(top, #0383d3 0%, #004c9b 100%);
	background-image: -webkit-linear-gradient(top, #0383d3 0%, #004c9b 100%);
	background-image: -ms-linear-gradient(top, #0383d3 0%, #004c9b 100%);
}

#main form input[type=submit]:active{
	
	background-color:#026fcb;
	
	background-image: linear-gradient(top, #026fcb 0%, #004c9b 100%);
	background-image: -o-linear-gradient(top, #026fcb 0%, #004c9b 100%);
	background-image: -moz-linear-gradient(top, #026fcb 0%, #004c9b 100%);
	background-image: -webkit-linear-gradient(top, #026fcb 0%, #004c9b 100%);
	background-image: -ms-linear-gradient(top, #026fcb 0%, #004c9b 100%);
}


/*----------------------------
	The Arrow
-----------------------------*/


#main form .arrow{
    background: url("http://i33.tinypic.com/14txydw.jpg") no-repeat -10px 0;
    height: 120px;
    left: 214px;
    position: absolute;
    top: 392px;
    width: 11px;
    
   	/* Defining a smooth CSS3 animation for turning the arrow */
    
    -moz-transition:0.3s;
    -webkit-transition:0.3s;
    -o-transition:0.3s;
    -ms-transition:0.3s;
    transition:0.3s;
    
    /* Putting the arrow in its initial position */
    
	-moz-transform: rotate(-134deg);
	-webkit-transform: rotate(-134deg);
	-o-transform: rotate(-134deg);
	-ms-transform: rotate(-134deg);
	transform: rotate(-134deg);
}

#main form .arrowCap{
	background: url("http://i33.tinypic.com/14txydw.jpg") no-repeat -43px 0;
	height: 20px;
	left: 208px;
	position: absolute;
	top: 443px;
	width: 20px;
	z-index: 10;
}

#main form .meterText{
	color: #575757;
	font-size: 10px;
	left: 189px;
	line-height: 1.1;
	position: absolute;
	top: 485px;
	width: 60px;
}


/*----------------------------
	The Footer
-----------------------------*/


footer{
	font:14px/1.3 'Segoe UI',Arial, sans-serif;
	background-color: #111111;
	bottom: 0;
	box-shadow: 0 -1px 2px rgba(0,0,0,0.4);
	height: 45px;
	left: 0;
	position: fixed;
	width: 100%;
	z-index: 100000;
}

footer h2{
	color: #EEEEEE;
	font-size: 14px;
	font-weight: normal;
	left: 50%;
	margin-left: -400px;
	padding: 13px 0 0;
	position: absolute;
	width: 540px;
}

footer h2 i{
	font-style:normal;
	color:#888;
}

footer a.al3xis,a.al3xis:visited{
	color: #999999;
	font-size: 12px;
	left: 50%;
	margin: 16px 0 0 110px;
	position: absolute;
	text-decoration: none;
	top: 0;
}

footer a i{
	color:#ccc;
	font-style: normal;
}

footer a i b{
	color:#c92020;
	font-weight: normal;
}

</style>