<?php
// Check if the form is submitted
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Get form data
    $name = htmlspecialchars(trim($_POST['name']));
    $email = htmlspecialchars(trim($_POST['email']));
    $reason = htmlspecialchars(trim($_POST['reason']));
    $message = htmlspecialchars(trim($_POST['message']));

    // Validate the email
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        die("Invalid email address");
    }

    // Email settings
    $to = "your_email@example.com"; // Replace with your email address
    $subject = "New Contact Form Submission: $reason";
    $body = "You have received a new message from your website contact form:\n\n" .
            "Name: $name\n" .
            "Email: $email\n" .
            "Reason: $reason\n\n" .
            "Message:\n$message";

    $headers = "From: $email";

    // Send the email
    if (mail($to, $subject, $body, $headers)) {
        echo "Your message has been sent successfully!";
    } else {
        echo "Sorry, there was an error sending your message.";
    }
} else {
    echo "Invalid request method.";
}
?>
