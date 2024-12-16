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
<!DOCTYPE html>
<html>
<head>
    <title>Password Protected Page</title>
</head>
<body>
    <h2>Enter Password to Access Link</h2>
    <form method="post">
        <input type="password" name="password" />
        <button type="submit">Submit</button>
    </form>
    <?php 
    // Display the error message if there is one
    if (isset($error)) { 
        echo "<p style='color:red;'>$error</p>"; 
    } 
    ?>
</body>
</html>
