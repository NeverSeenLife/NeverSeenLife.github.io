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

		<h1>Dodaj artykuł</h1>

		<form action="" method="POST">

			<input type="text" name="zmien1" class="inputTitle" placeholder="Tytył:" minlength="3" maxlength="64" required> <br>

			<input type="date" name="zmien2" clas="inputDate" value="<?php echo date('Y-m-d'); ?>" required/><br>

			<textarea name="zmien3" id="inputTextArea" cols="40" rows="10" minlength="3" maxlength="230" required></textarea><br>

			<input type="file" id="zmien4" name="myfile" required/><br>

			<input type="submit" name="zmien5" value="Dodaj">

		</form>

		<a href="logout.php">Wyloguj się</a>

	</div>

	<div class="footer_low_bar">
		<p>Mainsoft &copy 2020</p>
	</div>

	</footer>

</body>
<script src="../js/main.js"></script>

</html>