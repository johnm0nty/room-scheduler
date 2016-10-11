<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

$conn = new mysqli("localhost", "dba", "123", "room_scheduler");

$result = $conn->query("SELECT ID,NAME FROM ROOMS");

$outp = "";
while($rs = $result->fetch_array(MYSQLI_ASSOC)) {
    if ($outp != "") {$outp .= ",";}
    $outp .= '{"ID":"'  . $rs["ID"] . '",';
    $outp .= '"name":"'   . $rs["NAME"]        . '"}';
}
$outp ='{"records":['.$outp.']}';
// $outp = '{"records":[{"ID":1,"name":"test"},{"ID":2,"name":"test2"}]}';
$conn->close();
echo($outp);
?>
