<?php
if (isset($_POST['submit'])) {   
    // Read Data from Form
    $name = filter_input(INPUT_POST, "name");
    $phone = filter_input(INPUT_POST, "phone");
    $email = filter_input(INPUT_POST, "email");
    $course = filter_input(INPUT_POST, "service");
    $location = filter_input(INPUT_POST, "location");
    $email_from = "marketing@digitalwolf.co.in";
    $email_subject = "New Enquiry: Website";

    $email_body = "<table width='100%' border='0' height='150px'>";
    $email_body .= "<tr><td colspan='2' style='text-align:left; color:#FFF' bgcolor='#2D9DCE'>&nbsp;&nbsp;You have received a New Enquiry</td></tr>";
    $email_body .= "<tr><td width='25%' style='text-align:right' bgcolor='#EBF2F6'>Name :</td><td width='75%' style='text-align:left' bgcolor='#FFFFFF'><span>$name</span></td></tr>";
    $email_body .= "<tr><td style='text-align:right' bgcolor='#EBF2F6'>Contact No :</td><td style='text-align:left' bgcolor='#FFFFFF'><span>$phone</span></td></tr>";
    $email_body .= "<tr><td style='text-align:right' bgcolor='#EBF2F6'>Email :</td><td style='text-align:left' bgcolor='#FFFFFF'><span>$email</span></td></tr>";
    $email_body .= "<tr><td style='text-align:right' bgcolor='#EBF2F6'>Service :</td><td style='text-align:left' bgcolor='#FFFFFF'><span>$service</span></td></tr>";
    $email_body .= "<tr><td style='text-align:right' bgcolor='#EBF2F6'>Location :</td><td style='text-align:left' bgcolor='#FFFFFF'><span>$location</span></td></tr>";
    $email_body .= "<tr><td colspan='2' style='text-align:center; color:#FFF' bgcolor='#2D9DCE'>&nbsp;</td></tr>";
    $email_body .= "</table>";

    // Multiple recipients
    $to = "subhadigitalwolf@gmail.com, abhaspandiadigitalwolf@gmail.com"; // Add both emails here

    // Headers
    $headers = "From: $email_from\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/html; charset=UTF-8\r\n";

    // Send email
    if (mail($to, $email_subject, $email_body, $headers)) {
        echo "<script> setTimeout(function () { window.location.href= 'thankyou.html';}, 500); </script>";
    } else {
        echo "<script>alert('Error: Email could not be sent.');</script>";
    }
}
?>
