<?php
// Check if a file has been uploaded

if(isset($_FILES['uploaded_file'])) {
    // Make sure the file was sent without errors
    if($_FILES['uploaded_file']['error'] == 0) {
        // Connect to the database
        $dbLink = new mysqli('localhost', 'root', 'root', 'waih_dk_db');
        if(mysqli_connect_errno()) {
            die("MySQL connection failed: ". mysqli_connect_error());
        }
 
        // Gather all required data
        $name = $dbLink->real_escape_string($_FILES['uploaded_file']['name']);
        $mime = $dbLink->real_escape_string($_FILES['uploaded_file']['type']);
        $data = (file_get_contents($_FILES  ['uploaded_file']['tmp_name']));
        $description = $_POST['description'];
        $show_name = $_POST['show_name'];
        $show_host = $_POST['show_host'];
        $show_guest = $_POST['show_guest'];

        $path = "audio/" . $name ;
        file_put_contents($path ,$data);

        // Create the SQL query
        $query = "
            INSERT INTO `Podcasts` (
                `name`, `mime`, `description`, `show_name`, `show_host`, `show_guest`, `path` 
            )
            VALUES (
                '{$name}', '{$mime}', '{$description}','{$show_name}','{$show_host}', '{$show_guest}', '{$path}'
            )";
 
        // Execute the query
        $result = $dbLink->query($query);
 
        // Check if it was successfull
        if($result) {
            echo 'Success! Your file was successfully added!';
        }
        else {
            echo 'Error! Failed to insert the file'
               . "<pre>{$dbLink->error}</pre>";
        }
    }
    else {
        echo 'An error accured while the file was being uploaded. '
           . 'Error code: '. intval($_FILES['uploaded_file']['error']);
    }
 
    // Close the mysql connection
    $dbLink->close();
}
else {
    echo 'Error! A file was not sent!';
}
 
// Echo a link back to the main page
echo '<p>Click <a href="index1.php">here</a> to go back</p>';
?>