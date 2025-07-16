<?php
include 'db.php';
$show_query = "select name , St_asgeojson(st_transform(geom,3857)) as geom from allcities";
$resultArray = pg_fetch_all(pg_query($dbconnection,$show_query));
echo json_encode($resultArray)
?>