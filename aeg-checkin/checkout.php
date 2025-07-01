<?php
	include("db_connect.php");

	$hrago = time() - 5400;
	$name = $_GET['name'];
	$name = str_replace("%20"," ",$name);

	mysqli_query($link, "DELETE FROM `checklog` WHERE `name` = '$name' AND `timestamp` > '$hrago'");

	include("db_close.php");
?>