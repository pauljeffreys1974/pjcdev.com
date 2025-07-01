<html>
<head>
<title>AEG Check-In</title>
<meta http-equiv="refresh" content="30; url=https://www.pjcdev.com/aeg-checkin/manager.php?hud=<?= $hud ?>&key=<?= $key ?>">
<link rel="stylesheet" href="css/main-styles.css" />
</head>
<body>
<h1>Blob Read</h1>
<?php
	// Open DB Connection
	include("db_connect.php");

	$rs = mysqli_query($link, "SELECT `club`,`result` FROM `sensors`");

	while($row = mysqli_fetch_array($rs))
	{
		echo $row['club'] . ",<br>";
		echo $row['result'] . ",<br><br>";
	}

	// Close DB Connection
	include("db_close.php");
?>
</body>
</html>