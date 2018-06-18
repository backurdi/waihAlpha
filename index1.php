<!DOCTYPE html>
<html>
<head>
    <title>MySQL file upload example</title>
    <meta http-equiv="content-type" content="text/html; charset=UTF-8">
</head>
<body>
    <form action="upload.php" method="post" enctype="multipart/form-data">
        <input type="file" name="uploaded_file" required><br>
        <select name="show_name" id="show_name">
            <option value="">-</option>
            <option value="upToDate">Up to date</option>
            <option value="toppenAfIsbjerget">Toppen af isbjerget</option>
            <option value="turMedKultur">En  tur med Kultur</option>
            <option value="samfundsdebatten">Samfundsdebatten</option>
            <option value="apropos">Apropos</option>
            <option value="aktivister">Aktivister</option>
            <option value="enFamilieTing">En familie ting</option>
        </select>
        <select name="show_host" id="show_name">
            <option value="">-</option>
            <option value="Johannes">Johannes</option>
            <option value="Abu Karim">Abu Karim</option>
            <option value="Elias">Elias</option>
            <option value="Zainab">Zainab</option>
            <option value="Haisam">Haisam</option>
            <option value="Aisha">Aisha</option>
        </select>
        <input type="text" name="show_guest" id="show_guest" placeholder="Gæstens navn" required>
        <textarea name="description" id="description" placeholder="Kort beskrivelse"> </textarea>

        <input type="submit" value="Upload file">
    </form>
</body>
</html>