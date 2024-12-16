<?php
// Check if the form has been submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $password = $_POST['password'];

    // Check if the password is correct
    if ($password == "crystalpalace") {
        // Redirect to the protected page or link
        header("Location: project1.html");
        exit;
    } else {
        // Show an error message if the password is incorrect
        $error = "Incorrect password!";
    }
}
?>
