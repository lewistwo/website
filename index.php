<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Password Protected Page</title>
    <style>
        /* General Page Styling */
        body {
            margin: 0;
            padding: 0;
            font-family: Helvetica, sans-serif;
            background-color: #f9f9f9;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
        }

        .container {
            text-align: center;
            padding: 20px;
            background: white;
            border-radius: 10px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            max-width: 400px;
            width: 100%;
        }

        .submit-wrapper {
            display: grid;
            grid-template-columns: 1fr 40px;
            align-items: center;
            border-radius: 100px;
            border: 1px solid rgba(0, 0, 0, 0.75);
            background: #fff;
            padding: 5px;
        }

        input[type="password"] {
            border: none;
            padding: 10px 20px;
            font-size: 18px;
            font-family: Helvetica, sans-serif;
            font-weight: 400;
            line-height: 21px;
            letter-spacing: -0.004em;
            text-align: left;
            width: 100%;
            background-color: transparent;
            color: rgba(0, 0, 0, 0.75);
            outline: none;
        }

        input[type="password"]::placeholder {
            color: rgba(0, 0, 0, 0.5);
        }

        .button-area {
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
        }

        .submit-button {
            display: block;
            width: 36px;
            height: 36px;
            border-radius: 50%;
            background: #000;
            background-image: url("data:image/svg+xml,%3Csvg width='21' height='19' viewBox='0 0 21 19' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11.8438 1.9375L19.3438 9.4375L11.8438 16.9375' stroke='%23fff' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M19.3437 9.4375L1.40625 9.4375' stroke='%23fff' stroke-width='2.5' stroke-linecap='round'/%3E%3C/svg%3E%0A");
            background-position: center;
            background-repeat: no-repeat;
            background-size: 17px 17px;
            pointer-events: auto;
            cursor: pointer;
        }

        .submit-button:active {
            opacity: 0.7;
        }

        .error {
            margin-top: 10px;
            color: red;
            font-size: 14px;
        }
    </style>
</head>
<body>
    <div class="holding-page">
        <div class="container">
            <form action="verify-password.php" method="POST">
                <div class="submit-wrapper">
                    <input type="password" name="password" placeholder="Enter Password" required>
                    <div class="button-area">
                        <button type="submit" class="submit-button"></button>
                    </div>
                </div>
            </form>
            <?php
            session_start();
            if (isset($_SESSION['error'])) {
                echo "<div class='error'>{$_SESSION['error']}</div>";
                unset($_SESSION['error']); // Clear the error after displaying
            }
            ?>
        </div>
    </div>
</body>
</html>