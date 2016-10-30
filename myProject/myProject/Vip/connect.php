<?php
header("Content-Type:text/html;charset='utf8'");
include "config.php";

@$link = new mysqli(DB_HOST,DB_USER,DB_PASSWORD,DB_DATABASE);


 mysqli_set_charset($link,DB_CHARSET);

?>