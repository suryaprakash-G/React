<?php
$usr=$_POST['usr'];//user name
$pas=$_POST['pas'];//password
$db_pass_admin='adminpassword';
$db_pass_delivery='deliverypassword';
if(($usr=='admin')&&($pas==$db_pass_admin)){
    $cookie_name = "shop";
    $cookie_value = "admin";
    setcookie($cookie_name, $cookie_value, time() + (86400 * 30), "/"); // 86400 = 1 day
}elseif(($usr=='delivery')&&($pas==$db_pass_delivery)){
    $cookie_name = "shop";
    $cookie_value = "deliver";
    setcookie($cookie_name, $cookie_value, time() + (86400 * 30), "/"); // 86400 = 1 day
}else{
    echo "cr";//credeltial error
}
?>
