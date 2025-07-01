<?php
	include("db_connect.php");

	$time = time();
	$name = $_GET['name'];
	$name = str_replace("%20"," ",$name);
	$club = $_GET['club'];
	$role = $_GET['role'];

if (!empty($role) && !empty($name)) {
	mysqli_query($link, "INSERT INTO `checklog` VALUES (NULL,'$club','$role','$name','$time')");
}

	include("db_close.php");
?>
