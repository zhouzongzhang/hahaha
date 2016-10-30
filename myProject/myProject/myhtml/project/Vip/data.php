<?php
include "connect.php";
header("content-type:text/html;charset='utf8'");

  if($_GET){
    $data = $_GET['data'];
    if($data == ''){
      echo "用户名不能为空!";
      }else{
          //根据输入的用户名查询是否已经存在id;
          $sql = "select id from user where username = '$data'";
          $result = mysqli_query($link,$sql);
          $mess = mysqli_fetch_assoc($result)['id'];
          if(isset($mess)){
             echo '用户名已存在';
          }else{
             echo '此用户名可用';
          }

      }
  }
  if($_POST){
             $user = $_POST['username'];
             $pwd = $_POST['password'];
             $repwd = $_POST['repassword'];
             if($pwd == $repwd){
                    $createtime = time();
                    $time = date("Y-m-d H:i:s",$createtime);
                    $sql1 = "insert into user(username,password,time) values('$user','$pwd','$time')";
                    $result = mysqli_query($link,$sql1);
                    if($result){
                        echo '<script>alert("注册成功");</script>';
                        echo "<script>location.href='denlu.html';</script>";
                    }else{
                       exit;
                    }
             }else{
                   echo "<script>alert('两次输入的密码不一致');</script>";
                   echo "<script>location.href='".$_SERVER["HTTP_REFERER"]."';</script>";
             }
             mysqli_close($link);
          }
?>





