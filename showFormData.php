<!DOCTYPE html>
<html>
<head>
	<title></title>
	<style type="text/css">
	body{background-color: powderblue;}
	
	
		div{
			padding-left: 80px;
			padding-right: 80px;
			padding-top: 10px;
			padding-bottom: 10px;
			font-size: 25px;
			border: 3px dashed black;
			margin: 100px 450px 0px 420px;
		}
		table,td {
          border: 1px solid black;
           }
	</style>
</head>
<body>
	<div>
		<?php
if (isset($_POST['submit'])) {
   $first_name = $_POST['first_name'];
   $last_name = $_POST['last_name'];
    $email = $_POST['email'];
     $gender = $_POST['gender'];
      $state = $_POST['state'];

   echo "<p>"."<strong>This is your information</strong>"."</p>";
  
   echo"<table>";
   
   
   echo"<tr>";
   echo "<td>"."<strong>First Name</strong>"."</td>";
   echo "<td>".$first_name."</td>";
   echo"</tr>";

   echo"<tr>";
   echo "<td>"."<strong>Last Name</strong>"."</td>";
   echo "<td>".$last_name."</td>";
   echo"</tr>";

   echo"<tr>";
   echo "<td>"."<strong>Email</strong>"."</td>";
   echo "<td>".$email."</td>";
   echo"</tr>";

   echo"<tr>";
   echo "<td>"."<strong>Gender</strong>"."</td>";
   echo "<td>".$gender."</td>";
   echo"</tr>";

   echo"<tr>";
   echo "<td>"."<strong>State</strong>"."</td>";
   echo "<td>".$state."</td>";
   echo"</tr>";
   echo"</table>";
}
?>
<ul>
	<a href="registration-form.html">Go back main page</a>
</ul>
	</div>
</body>
</html>