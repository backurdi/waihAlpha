<?php
/**
 * Created by IntelliJ IDEA.
 * User: muneebashraf
 * Date: 19/08/2017
 * Time: 17.04
 */


$dbLink = new mysqli('mysql21.unoeuro.com', 'waih_dk', 'W0rkhardforjannah', 'waih_dk_db');
if(mysqli_connect_errno()) {
    die("MySQL connection failed: ". mysqli_connect_error());
}


$show_name = $_GET['show_name'];
$offset = $_GET['offset'];
$limit = $_GET['limit'];


$query = "SELECT * FROM Podcasts WHERE show_name = '{$show_name}' LIMIT {$offset}, {$limit}";


$result = $dbLink->query($query);


if($result) {

    // Make sure there are some files in there
    if($result->num_rows == 0) {
        echo 0;
    }
    else {
        echo $result->num_rows;

    }


    // Free the result
    $result->free();
}
else
{
    echo 'Error! SQL query failed:';
    echo "<pre>{$dbLink->error}</pre>";
}

// Close the mysql connection
$dbLink->close();
