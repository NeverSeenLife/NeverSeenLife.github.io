<?php
function test_input($data) {
	$data = trim($data);
	$data = stripslashes($data);
	$data = htmlspecialchars($data);
	return $data;
}
if (isset($_POST['submit'])) {
	$email = $_POST['email'];
	$name = $_POST['name'];
	$message = $_POST['message'];
	$email = test_input($email);
	$name = test_input($name);
	$message = test_input($message);

	$to = "kontakt@mainsoft.pl";
	$subject = "Wiadomość kontaktowa. email: $email - imię $name";
	$from = 'kontakt@mainsoft.pl';
	$body = "Treść wiadomości od $name<br/>: $message";

	$headers = "Content-Type: text/html; charset=UTF-8\r\n";
	$headers .= 'MIME-Version: 1.0' . "\r\n";
	$headers .= 'From: kontakt@mainsoft.pl' . "\r\n";


	mail($to, $subject, $body, $headers, '-fkontakt@mainsoft.pl');
	header("Location: https://mainsoft.pl/kontakt?sent=true", true, 303);
	die();
}
?>
<!DOCTYPE html>
<html lang="PL">

<head>
	<meta charset="utf-8" />
	<title>Mainsoft Sp. z o.o.</title>
	<meta name="description" content="Mainsoft - Działamy w sektorze medycznym, handlowym oraz w administracji samorządowej i rządowej. Świadczymy usługi outsourcingu IT, administracji bezpieczeństwem informacji, instalacyjne i wdrożeniowe. Zajmujemy się również dostarczaniem sprzętu oraz oprogramowania." />
	<link rel="stylesheet" type="text/css" href="../css/style.css" />
	<link rel="stylesheet" type="text/css" href="../css/kontakt.css" />
	<link rel="stylesheet" type="text/css" href="../css/onas.css">
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

	<header class="header">
		<nav class="headerBar">

			<div class="menuBtn">
				<button class="hamburger"></button>
			</div>
			<ul class="nav">
				<img src="../img/logo.png" alt="Mainsoft Logo" class="logoImg" onclick="location.href='https://mainsoft.pl/'">
				<li class="nav--list"><a class="nav--Btn" href="https://mainsoft.pl/">Start</a></li>
				<li class="nav--list"><a class="nav--Btn" href="../aktualnosci">Aktualności</a></li>
				<li class="nav--list"><a class="nav--Btn" href="../uslugi/">Usługi</a></li>
				<li class="nav--list"><a class="nav--Btn" href="../produkty">Produkty</a></li>
				<li class="nav--list"><a class="nav--Btn" href="../aboutus/">O nas</a></li>
				<li class="nav--list"><a class="nav--Btn" href="../kontakt/">Kontakt</a></li>
			</ul>
		</nav>
		<h1 class="main--text">KONTAKT</h1>
		<a href="#content" class="btn--check">Napisz do nas</a>
	</header>

	<section class="content" id="content">

		<h2 class="content--title">SKONTAKTUJ SIĘ</h2>

		<form class="contactForm" method="POST">

			<div class="inputHolder">
				<input type="text" name="name" placeholder="Imię" class="inputContactForm" required>
				<input type="email" name="email" placeholder="Email" class="inputContactForm" required>
			</div>

			<textarea name="message" id="textAreaContact" placeholder="Wiadomość" cols="60" rows="5" required></textarea>

			<input type="submit" name="submit" class="inputTextSubmit" value="Wyślij wiadomość">
<?php if($_GET['sent'] == "true") { print("Wysłano wiadomość"); } ?>
			<div class="link1"><a class="mailto" href="mailto:kontakt@mainsoft.pl"><i class="far fa-envelope"></i>kontakt@mainsoft.pl</a>

			</div>
			<a href="../aboutus/" class="btn--check btn--check-more">Więcej informacji</a>
		</form>

		<div class="malbork">
			<a class="big--header-text2" data-aos="fade-right">ODDZIAŁ W MALBORKU:</a>
			<a class="low--header-text2" data-aos="fade-left">ul. Stare Miasto 27/6 - 82-200 Malbork</a>
		</div>

		<div class="text_container">

			<h1 class="textCenter">Kontakt do Malborka</h1>

			<p class="text1 textCenter">
				Anna Skowron tel. 510 750 199, e-mail: <a href="mailto:askowron@mainsoft.pl">askowron@mainsoft.pl</a><br>

				Łukasz Mielnik tel. 600 017 262, e-mail: <a href="mailto:lmielnik@mainsoft.pl">lmielnik@mainsoft.pl</a><br>

				Szymon Gajewski tel. 505 7184 80, e-mail: <a href="mailto:sgajewski@mainsoft.pl">sgajewski@mainsoft.pl</a><br>
			</p>
			<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d828.4204896200124!2d19.025026036683016!3d54.03601447400439!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46fd74dcc3ba3fc3%3A0x628ed9c5d06714df!2sMAINSOFT%20Sp.%20z%20o.o.!5e0!3m2!1spl!2spl!4v1601989669919!5m2!1spl!2spl" width="100%" height="300" frameborder="0" style="border:1px solid #ccc;border-radius:6px;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>

		</div>



		<div class="slupsk">
			<a class="big--header-text2" data-aos="fade-right">ODDZIAŁ W SŁUPSKU:</a>
			<a class="low--header-text2" data-aos="fade-left">ul. Bohaterów Westerplatte 23/1- 76-200 Słupsk</a>
		</div>

		<div class="text_container">

			<h1 class="textCenter">Kontakt do Słupska</h1>

			<p class="text1 textCenter">
				Biuro tel: +48 351 324 723<br>

				Sylwia Szwarc tel. +48 572 324 411, e-mail: <a href="mailto:sszwarc@mainsoft.pl">sszwarc@mainsoft.pl</a><br>

				Rafał Glazer tel. +48 606 964 782, e-mail: <a href="mailto:rglazer@mainsoft.pl">rglazer@mainsoft.pl</a><br>

				Piotr Szumko tel. +48 604 403 496, e-mail: <a href="mailto:pszumko@mainsoft.pl">pszumko@mainsoft.pl</a><br>

				Konrad Janowicz tel. +48 696 946 353, e-mail: <a href="mailto:kjanowicz@mainsoft.pl">kjanowicz@mainsoft.pl</a><br>

			</p>
			<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1429.0901472144487!2d17.055241059316064!3d54.46008629462881!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46fe11d3d0ec00cb%3A0xebc202dfff6dacbf!2sLokale%20W-23!5e1!3m2!1spl!2spl!4v1601991574428!5m2!1spl!2spl" width="100%" height="300" frameborder="0" style="border:1px solid #ccc;border-radius:6px;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
		</div>

		<div class="big--header big--header-mail">
			<a href="../kontakt/" class="big--header-text2">KONTAKT</a>
			<a href="../kontakt/" class="low--header-text2">Skontaktuj się z nami</a>
		</div>

	</section>

	<footer class="footer">

		<div class="footer_high_bar">
			<div class="footer_links">
				<div class="link1">
					<p class="phonenumber"><i class="fas fa-phone-alt"></i>
						+48 600 017 262</p>
				</div>

				<div class="link1"><a class="mailto" href="mailto:kontakt@mainsoft.pl"><i class="far fa-envelope"></i>kontakt@mainsoft.pl</a></div>

				<div class="link1 linkAdress">
					<i class="fas fa-map-marker-alt"></i>

					<div class="holder_footer">
						<p>Stare Miasto 27/6</p>
						<p>82-200 Malbork</p>
					</div>
				</div>

			</div>
		</div>

		<div class="footer_low_bar">
			<p>Mainsoft &copy 2020</p>
		</div>

	</footer>

	<div class="arrow-up">
		<a href="#"><button class="arrow-up-button"><i class="up"></i></button></a>
	</div>

</body>
<script src="../js/main.js"></script>

</html>
