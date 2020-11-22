<?php

	session_start();
	
	if ((isset($_SESSION['zalogowany'])) && ($_SESSION['zalogowany']==true))
	{
		header('Location: admin.php');
		exit();
	}

?>

<!DOCTYPE html>
<html lang="PL">

<head>
	<meta charset="utf-8" />
	<title>Mainsoft Sp. z o.o.</title>
	<link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">
	<script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
	<meta name="description"
		content="Mainsoft - Działamy w sektorze medycznym, handlowym oraz w administracji samorządowej i rządowej. Świadczymy usługi outsourcingu IT, administracji bezpieczeństwem informacji, instalacyjne i wdrożeniowe. Zajmujemy się również dostarczaniem sprzętu oraz oprogramowania." />
	<link rel="stylesheet" type="text/css" href="css/style.css" />
	<link href="../css/fontawesome/css/all.min.css" rel="stylesheet">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="apple-touch-icon" sizes="180x180" href="../apple-touch-icon.png">
	<link rel="icon" type="image/png" sizes="32x32" href="../favicon-32x32.png">
	<link rel="icon" type="image/png" sizes="16x16" href="../favicon-16x16.png">
	<link rel="manifest" href="../site.webmanifest">
	<link rel="mask-icon" href="../safari-pinned-tab.svg" color="#00708f">
	<meta name="msapplication-TileColor" content="#2b5797">
	<meta name="theme-color" content="#ffffff">
	<meta name="keywords" content="Mainsoft, mainsoft.pl, mainsoft usługi informatyczne" />
</head>

<body>

	<div class="holder" style="margin: auto; width: 500px; text-align: center;">

	<form action="zaloguj.php" class="form_bar" method="post">
	
		<input type="text" placeholder="Login" name="login" class="loginInput" /><br>
		<input type="password" placeholder="Password" name="haslo" class="passwordInput" /> <br>
		<input type="submit" value="Zaloguj się" class="loginBtn" />
	
	</form>

	</div>

	<div class="footer_low_bar">
		<p>Mainsoft &copy 2020</p>
	</div>

	</footer>

<?php
	if(isset($_SESSION['blad']))	echo $_SESSION['blad'];
?>

</body>
<script src="../js/main.js"></script>

</html>