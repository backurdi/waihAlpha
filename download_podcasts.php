
<?php
/**
 * Created by PhpStorm.
 * User: muneebashraf
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
        return '<script>console.log("ingen podcasts registreret")</script>';

    }
    else {
        // Print the top of a table
        while($row = $result->fetch_assoc()) {

            $name = preg_replace('/\\.[^.\\s]{3,4}$/', '', $row['name']);
            echo "
                    <div class='playerContainer'>
                    <p>{$name}</p>
                    <p>{$row['show_host']}</p>
                    <p>Gæst: {$row['show_guest']}</p>
                    <p>{$row['description']}</p>
                        <audio controls> 
                        <source src= {$row['path']} type={$row['mime']}> 
                        </audio>
                    </div>
                   
                ";
        }

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



