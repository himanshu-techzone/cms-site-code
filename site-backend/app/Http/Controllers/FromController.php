<?php

namespace App\Http\Controllers;

use App\Models\AppointmentModel;
use App\Models\ContactUsModel;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

class FromController extends Controller
{
        public function send_mail($from_name,$from_email,$to_email,$subject,$message,$bcc)
        {
            $subjectsec = $subject;

    		$mail = new PHPMailer(true);

    try {
        //Server settings
        //$mail->SMTPDebug = SMTP::DEBUG_SERVER;                      // Enable verbose debug output
        $mail->isSMTP();                                            // Send using SMTP
        $mail->Host       = 'smtp.gmail.com';                    // Set the SMTP server to send through
        $mail->SMTPAuth   = true;                                   // Enable SMTP authentication
        $mail->Username   = '';                     // SMTP username
        $mail->Password   = 'owsxlabqdxjyfpez';                               // SMTP password
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;         // Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` encouraged
        $mail->Port       = 587;                                    // TCP port to connect to, use 465 for `PHPMailer::ENCRYPTION_SMTPS` above

        //Recipients
        $mail->setFrom($from_email, $from_name);
        $mail->addAddress($to_email);     // Add a recipient
        // $mail->addAddress('info@aestiva.in');               // Name is optional
        //$mail->addReplyTo($from_email);
        $mail->addCC($bcc);
        // $mail->addBCC('bcc@example.com');

        // Attachments
       // $mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
       // $mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name

        // Content
        $mail->isHTML(true);                                  // Set email format to HTML
        // $mail->Subject = $subject;
        // $mail->Body    = $message;
        $mail->Subject = $subjectsec;
        $mail->Body    = $message;
        //$mail->AltBody = 'This is the body in plain text for non-HTML mail clients';

       // exit;
        $mail->send();
        //echo 'Message has been sent';
    } catch (Exception $e) {
       //echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
    }

        } 

    // public function send_mail($from_name, $from_email, $to_email, $subject, $message, $bcc)
    // {
    //     $to = $to_email;
    //     // $subject = $from_name;

    //     $header = "From: <'$from_email'>" . "\r\n";
    //     $header .= "MIME-Version: 1.0\r\n";
    //     $header .= "Content-type: text/html\r\n";
    //     //print_r($message_owner);//exit;
    //     $retval = mail($to, $subject, $message, $header);

    //     // if( $retval == true ) {
    //     //    echo "Message sent successfully...";
    //     // }else {
    //     //    echo "Message could not be sent...";
    //     // }

    // }

    public function create_appointment_mail(Request $req)
    {
        $name = $req->input('name');
        $email = $req->input('email');
        $phone = $req->input('phone');
        $message = $req->input('message');
        $treatment = $req->input('treatment');
        // print_r($req->input());
        // exit;
        if ($req->input('date')) {
            $date = $req->input('date');
            $date = date('d-m-Y', strtotime($date));
        } else {
            $date = null;
        }
        //$date = $req->input('concerndate');
        $concern = $req->input('concern');
        if ($_SERVER['REQUEST_METHOD'] === 'POST' && $req['recaptcha'] !== '') {
            // 	// Build POST request:
            $recaptcha_url = 'https://www.google.com/recaptcha/api/siteverify';
            $recaptcha_secret = '6LdzUIsaAAAAAPaji7iMocxCPXOFd0q39Uf1pQLl';
            $recaptcha_response = $req['recaptcha'];

            // 	// Make and decode POST request:
            $recaptcha = file_get_contents($recaptcha_url . '?secret=' . $recaptcha_secret . '&response=' . $recaptcha_response);
            $recaptcha = json_decode($recaptcha);
            // print_r($recaptcha);exit;
            // 	// Take action based on the score returned:
            if ($recaptcha->success != 1) {
                return ["save"];
                // redirect($web_link.'thank-you');
            } else {
                $update = AppointmentModel::create(
                    [
                        'name' => $name,
                        'email' => $email,
                        'phone' => $phone,
                        'address' => $concern,
                        'date' => $date,
                        'comment' => $message,
                        'service_name' => $treatment,
                    ]); 
                // $id = DB::getPdo()->lastInsertId();

                // if($id){


                /*Owner Message Start******************************/
                $message_owner = "<table style='border:1px;text-align:left;' ><tr><th>Name:</th><td>" . ucwords($name) . "</td></tr><tr><th >Phone:</th><td>" . $phone . "</td></tr><tr><th >Email:</th><td>" . $email . "</td></tr><tr><th >Concern:</th><td>" . $concern . "</td></tr><tr><th >Date:</th><td>" . date('d-m-Y', strtotime($date)) . "</td></tr><tr><th >Message:</th><td>" . $message . "</td></tr></table>";
                $emailper = 'info@drniveditadadu.com';
                $this->send_mail('Dr Niren Rao', 'info@delhiurologyhospital.com', $emailper, 'New Appointment Details', $message_owner, 'info@delhiurologyhospital.com;satish.kumar@digilantern.in');
                // print_r($message_owner);//exit;
                // $mobile='9034911353';
                // $msg = "New Contact Details: Name- ".$data['name'].", Email- ".$data['email'].",Phone- ".$data['phone'];
                // $msgc = rawurlencode($msg);
                // $this->sms_fn($mobile,$msgc);

                // return $req->input();
                // exit;

                /************************Owner Message End******************************/


                /**********************User Message Start******************************/
                $message_user = "<table class='email-container' style='margin: auto;' role='presentation' border='0' width='600' cellspacing='0' cellpadding='0' align='center'>
        <tbody>
        <tr>
        <td style='padding: 10px 0; text-align: center;'><img style='height: 100; font-family: sans-serif; font-size: 15px; line-height: 20px; color: #555555;' src='http://dadumedicalcentre.com/assets/images/home-logo.png' alt='alt_text' border='0' /></td>
        </tr>
        </tbody>
        </table>
        <!-- Email Header : END -->
        <p>&nbsp;</p>
        <!-- Email Body : BEGIN -->
        <table class='email-container' style='margin: auto;' role='presentation' border='0' width='600' cellspacing='0' cellpadding='0' align='center'><!-- Hero Image, Flush : BEGIN --> <!-- Hero Image, Flush : END --> <!-- 1 Column Text + Button : BEGIN -->
        <tbody>
        <tr>
        <td style='padding: 40px 40px 20px; text-align: center;' bgcolor='#ffffff'>
        <h1 style='margin: 0; font-family: sans-serif; font-size: 24px; line-height: 27px; color: #333333; font-weight: normal;'>Thank you for Booking an Appointment</h1>
        </td>
        </tr>
        <tr>
        <td style='font-family: sans-serif; font-size: 15px; line-height: 24px; color: #555555; text-align: center;' bgcolor='#ffffff'>
        <p style='margin: 0;'>One of our team members shall get in touch with you shortly. If you would like to speak with someone immediately, connect with us on: <a href='tel:+91-+91-9810939319'>91-981-093-9319</a>, <a href='tel:+91-+91-9667721501'>+91-966-772-1501</a> <a href='mailto:info@drniveditadadu.com'>info@drniveditadadu.com</a></p>
        </td>
        </tr>
        <tr>
        <td style='padding: 0 40px 40px; font-family: sans-serif; font-size: 15px; line-height: 20px; color: #555555; text-align: center;' bgcolor='#ffffff'>
        <p style='margin: 0;'>Stay connected with us for updates!</p>
        </td>
        </tr>
        <tr>
        <td style='padding: 0 40px 40px; font-family: sans-serif; font-size: 15px; line-height: 20px; color: #555555;' bgcolor='#ffffff'>
        <table style='margin: auto; margin-top: -24px;' role='presentation' border='0' cellspacing='0' cellpadding='0' align='center'>
        <tbody>
        <tr>
        <td class='button-td' style='border-radius: 3px; background: #000; text-align: center;'><a class='button-a' style='background: #000; border: 15px solid #000; font-family: sans-serif; font-size: 13px; line-height: 1.1; text-align: center; text-decoration: none; display: block; border-radius: 3px; font-weight: bold;' href='http://dadumedicalcentre.com/' target='_blank' rel='noopener'> &nbsp;&nbsp;&nbsp;&nbsp;<span style='color: #ffffff;'>Go to Website</span>&nbsp;&nbsp;&nbsp;&nbsp; </a></td>
        </tr>
        </tbody>
        </table>
        <!-- Button : END --></td>
        </tr>
        <!-- 1 Column Text + Button : END --></tbody>
        </table>";


                // print_r($message_user);

                // $this->send_mail('Dadu Medical Centre', 'info@drniveditadadu.com', $email, 'Thank you for your enquiry', $message_user, 'clientsappointments@digilantern.in');

                /************************User Message End******************************/

                return ["save"];
            }
        } else {
            return ["not save"];
        }
    }

    public function create_contact_mail(Request $req)
    {
        $name = $req->input('name');
        $email = $req->input('email');
        $phone = $req->input('phone');
        $message = $req->input('message');
        if ($_SERVER['REQUEST_METHOD'] === 'POST' && $req['recaptcha'] !== '') {
            // 	// Build POST request:
            $recaptcha_url = 'https://www.google.com/recaptcha/api/siteverify';
            $recaptcha_secret = '6LdzUIsaAAAAAPaji7iMocxCPXOFd0q39Uf1pQLl';
            $recaptcha_response = $req['recaptcha'];

            // 	// Make and decode POST request:
            $recaptcha = file_get_contents($recaptcha_url . '?secret=' . $recaptcha_secret . '&response=' . $recaptcha_response);
            $recaptcha = json_decode($recaptcha);
            // print_r($recaptcha);exit;
            // 	// Take action based on the score returned:
            if ($recaptcha->success != 1) {
                return ["save"];
                // redirect($web_link.'thank-you');
            } else {
                $update = ContactUsModel::create([
                        'name' => $name,
                        'email' => $email,
                        'phone' => $phone,
                        'message' => $message,
                    ]
                );
                // $id = DB::getPdo()->lastInsertId();;

                // if($id){
                /*Owner Message Start******************************/
                $message_owner = "<table style='border:1px'><tr><th>Name:</th><td>" . $name . "</td></tr><tr><th >Phone:</th><td>" . $phone . "</td></tr><tr><th >Email:</th><td>" . $email . "</td></tr><tr><th >Message:</th><td>" . $message . "</td></tr></table>";
                // $emailper = 'info@drniveditadadu.com';
                // $this->send_mail('Dadu Medical Centre', 'info@drniveditadadu.com', $emailper, 'New Contact Details', $message_owner, 'clientsappointments@digilantern.in');
                // print_r($message_owner);//exit;
                // $mobile='9034911353';
                // $msg = "New Contact Details: Name- ".$data['name'].", Email- ".$data['email'].",Phone- ".$data['phone'];
                // $msgc = rawurlencode($msg);
                // $this->sms_fn($mobile,$msgc);



                /************************Owner Message End******************************/


                /**********************User Message Start******************************/
                $message_user = "<table role='presentation' cellspacing='0' cellpadding='0' border='0' align='center' width='600' style='margin: auto;' class='email-container'>
			<tr>
				<td style='padding: 10px 0; text-align: center;'>
					<img src='http://dadumedicalcentre.com/assets/images/home-logo.png'  alt='alt_text' border='0' style='height: 100; font-family: sans-serif; font-size: 15px; line-height: 20px; color: #555555;'>
				</td>
			</tr>
		</table>
		<!-- Email Header : END -->

		<!-- Email Body : BEGIN -->
		<table role='presentation' cellspacing='0' cellpadding='0' border='0' align='center' width='600' style='    margin: auto;' class='email-container'>

			<!-- Hero Image, Flush : BEGIN -->
			
			<!-- Hero Image, Flush : END -->

			<!-- 1 Column Text + Button : BEGIN -->
			<tr>
				<td bgcolor='#ffffff' style='padding: 40px 40px 20px; text-align: center;'>
					<h1 style='margin: 0; font-family: sans-serif; font-size: 24px; line-height: 27px; color: #333333; font-weight: normal;'>Thank you for Contacts us</h1>
				</td>
			</tr>
			<tr>
				<td bgcolor='#ffffff' style=' font-family: sans-serif; font-size: 15px; line-height: 20px; color: #555555; text-align: center;'>
					<p style='margin: 0;'>One of our team members shall get in touch with you shortly. If you would like to speak with someone immediately, connect with us on: <a href='tel:+91-+91-9810939319'>+91-981-093-9319</a>, <a href='tel:+91-+91-9667721501'>+91-966-772-1501</a> <a href='mailto:info@drniveditadadu.com' ><i class='fa fa-envelope-o'></i>info@drniveditadadu.com

</a></p>
				</td> 
				
			</tr>
			<tr>
				<td bgcolor='#ffffff' style='padding: 0 40px 40px; font-family: sans-serif; font-size: 15px; line-height: 20px; color: #555555; text-align: center;'>
					<p style='margin: 0;'>Stay connected with us for updates!</p>
				</td>
			</tr>
			<tr>
				<td bgcolor='#ffffff' style='padding: 0 40px 40px; font-family: sans-serif; font-size: 15px; line-height: 20px; color: #555555;'>
					<table role='presentation' cellspacing='0' cellpadding='0' border='0' align='center' style='margin: auto;margin-top: -24px; '>
						<tr>
							<td style='border-radius: 3px; background: #000; text-align: center;' class='button-td'>
								<a href='http://dadumedicalcentre.com/' style='background: #000; border: 15px solid #000; font-family: sans-serif; font-size: 13px; line-height: 1.1; text-align: center; text-decoration: none; display: block; border-radius: 3px; font-weight: bold;' class='button-a' target='_blank'>
									&nbsp;&nbsp;&nbsp;&nbsp;<span style='color:#ffffff;' >Go to Website</span>&nbsp;&nbsp;&nbsp;&nbsp;
								</a>
							</td>
						</tr>
					</table>
					<!-- Button : END -->
				</td>
			</tr>
			<!-- 1 Column Text + Button : END -->
	</table>";


                // print_r($message_user);

                // $this->send_mail('Dadu Medical Centre', 'info@drniveditadadu.com1', $email, 'Thank you for your enquiry', $message_user, 'clientsappointments@digilantern.in');

                /************************User Message End******************************/
                return ["save1"];
            }
        } else {
            return ["not save"];
        }
    }
}
