<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = $_POST['name'];
  $email = $_POST['email'];
  $subject = $_POST['subject'];
  $message = $_POST['message'];

  // Set up the recipient's email address
  $to = "al8435@nyu.edu";

  // Set up the email headers
  $headers = "From: $name <$email>" . "\r\n";
  $headers .= "Reply-To: $email" . "\r\n";
  
  // Send the email
  $mailSent = mail($to, $subject, $message, $headers);

  if ($mailSent) {
    echo "Thank you for your message. We will get back to you soon!";
  } else {
    echo "Sorry, there was an error sending your message. Please try again.";
  }
}
?>
