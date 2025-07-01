<?
/* connect to the db */
$link = mysqli_connect('mysql.pjcdev.com', 'aeg_myadmin', 'aegCheck1nSQL25');
if (!$link) {
    die('Could not connect: ' . mysqli_error());
}
mysqli_select_db($link, 'aegcheck1n1') or die('Cannot select the DB');
?>