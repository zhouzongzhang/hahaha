<?php
header("content-type:text/html;charset='utf8'");
include "connect.php";
    if($_POST){
        $username = $_POST['username'];
        $password = $_POST['password'];
        $sql1 = "select password from user where username='$username'";
        $result1 = mysqli_query($link,$sql1);
        $userPAS = mysqli_fetch_assoc($result1)['password'];
        if($password == $userPAS){
            echo "<script>location.href ='vip.html';</script>";
        }else{
            echo "登录失败";
        }
    }

?>