<!DOCTYPE html>
<html>
<body>
<?php
$inp = $_POST;

$c_dim_mapper = array();
$c_dim_mapper[0] = array('');
$c_dim_mapper[1] = array('*', '[]');
$c_dim_mapper[2] = array('**', '[][]');
$c_return_types = array('int', 'int*', 'void');

/*This array stores all arguments suggestion as an arrays inside this array.
So, the 0th index will contain an array with suggestion for 0th argument*/

$c_all_arg_sug = array();
$c_all_return_type_with_name = array();
$java_all_arg_sug = array();

function c_one_arg_sug_generator($arg_name, $arg_type, $arg_dim){
   global $c_dim_mapper;
   $this_sug_store = array();
   if($arg_dim==0) array_push($this_sug_store, $arg_type . ' ' . $c_dim_mapper[0][0] . $arg_name);
   elseif($arg_dim==1){
      for($i=0; $i<sizeof($c_dim_mapper[1]); $i++){
      	if(substr_count($c_dim_mapper[1][$i], '*')) 
      		array_push($this_sug_store, $arg_type . ' ' . $c_dim_mapper[1][$i] . $arg_name);
      	else array_push($this_sug_store, $arg_type . ' ' . $arg_name . $c_dim_mapper[1][$i]);
      }
   }
   elseif($arg_dim==2){
      for($i=0; $i<sizeof($c_dim_mapper[2]); $i++){
      	if(substr_count($c_dim_mapper[2][$i], '*'))
      		array_push($this_sug_store, $arg_type . ' ' . $c_dim_mapper[2][$i] . $arg_name);
      	else array_push($this_sug_store, $arg_type . ' ' . $arg_name . $c_dim_mapper[2][$i]);
      }
   }
   return $this_sug_store;
}

function c_suggestor($inp){
   global $c_all_arg_sug, $c_return_types, $c_all_return_type_with_name;
   $arg_size = $inp['input_args'];
   for($i=0; $i<$arg_size; $i++){
      $name = $inp['arg_name_'.$i];
      $type = strtolower($inp['arg_type_'.$i]);
      $dim = $inp['arg_dim_'.$i];
      array_push($c_all_arg_sug, c_one_arg_sug_generator($name, $type, $dim));
   }
   for($i=0; $i<sizeof($c_return_types); $i++){
      array_push($c_all_return_type_with_name, $c_return_types[$i] . ' ' . $inp['f_name']);
   }
}

c_suggestor($inp);
echo "<form action=''>";
echo "<select name='func_ret_types'>";
foreach ($c_all_return_type_with_name as $i){
   echo "<option value='" . $i . "'>" . $i . "</option>";
}
echo "</select>";
$count = 0;
foreach ($c_all_arg_sug as $i){
	echo "<select name='" . "arg" . $count . "'>";
	$count++;
	foreach ($i as $j){
		echo "<option value='" . $j . "'>" . $j . "</option>";
	}
	echo "</select>";
}
echo "</form>";
?>
</body>
</html>