<!DOCTYPE html>
<html>
<head>
<title>Suggested Form</title>
</head>
<body>
<?php
$inp = $_GET;
$c_code = $inp['c_func_ret_types'].'(';
for($i=0; $i<$inp['nargs']-1; $i++){
	$c_code .= ' '.$inp['c_arg_'.$i].',';
}
$c_code .= ' '.$inp['c_arg_'.($inp['nargs']-1)];
$c_code .= ') {&#10;';
$c_code .= '&#09;//Your code goes here..&#10;';
$c_code .= '}';
echo "<h2>C template</h2><br>";
echo "<textarea name='c_code' rows=3 cols=100 readonly='true'>". $c_code ."</textarea>";
echo "<br/>";
echo "<h2>Java template</h2><br>";
$java_code = "public class ".$inp['cname']."{&#10;";
$java_code .= "&#09; public ".$inp['java_func_ret_types'].'(';
for($i=0; $i<$inp['nargs']-1; $i++){
	$java_code .= ' '.$inp['java_arg_'.$i].',';
}
$java_code .= ' '.$inp['java_arg_'.($inp['nargs']-1)];
$java_code .= ') {&#10;';
$java_code .= '&#09; //Your code goes here..&#10;';
$java_code .= '&#09;}&#10;';
$java_code .= '}';
echo "<textarea name='java_code' rows=5 cols=130 readonly='true'>". $java_code ."</textarea>";
?>
</body>
</html>
