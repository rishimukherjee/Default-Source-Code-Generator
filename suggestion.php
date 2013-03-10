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

$java_type_map = array();
$java_type_map['int'] = 'Integer';

$java_class_list = array('ArrayList', 'Vector', 'Set', 'List');

$java_dim_array_type = array('', '[]', '[][]');
$java_types = array('int');

/*This array stores all arguments suggestion as an arrays inside this array.
So, the 0th index will contain an array with suggestion for 0th argument*/

$c_all_arg_sug = array();
$c_all_return_type_with_name = array();
$java_all_return_type_with_name = array();
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

function java_one_arg_sug_generator($arg_name, $arg_type, $arg_dim){
	global $java_type_map, $java_class_list;
	$this_sug_store = array();
	if($arg_dim==0){
		array_push($this_sug_store, $arg_type.' '.$arg_name);
	}
	elseif($arg_dim==1){
		array_push($this_sug_store, $arg_type.' '.$arg_name.'[]');
		foreach($java_class_list as $i){
			array_push($this_sug_store, $i."<".$java_type_map[$arg_type]."> ".$arg_name);
		}
	}
	elseif($arg_dim==2){
		array_push($this_sug_store, $arg_type.' '.$arg_name.'[][]');
		foreach($java_class_list as $i){
			array_push($this_sug_store, $i."<".$i."<".$java_type_map[$arg_type].">> ".$arg_name);
		}
	}
	return $this_sug_store;
}

function java_suggestor($inp){
	global $java_all_arg_sug, $java_dim_array_type, $java_types, $java_all_return_type_with_name, $java_class_list, $java_type_map;
	$arg_size = $inp['input_args'];
	for($i=0; $i<$arg_size; $i++){
		$name = $inp['arg_name_'.$i];
		$type = strtolower($inp['arg_type_'.$i]);
		$dim = $inp['arg_dim_'.$i];
		array_push($java_all_arg_sug, java_one_arg_sug_generator($name, $type, $dim));
	}
	foreach ($java_types as $one_type){
		foreach ($java_dim_array_type as $dim) {
			array_push($java_all_return_type_with_name, $one_type.' '.$inp['f_name'].$dim);
		}
	}
	foreach ($java_class_list as $one_type){
		foreach ($java_types as $this_type){
			array_push($java_all_return_type_with_name, $one_type.'<'.$java_type_map[$this_type].'> '.$inp['f_name']);
		}
	}
	foreach ($java_class_list as $one_type){
		foreach ($java_class_list as $one_type_2){
			foreach ($java_types as $this_type){
			array_push($java_all_return_type_with_name, $one_type.'<'.$one_type_2.'<'.$java_type_map[$this_type].'>> '.$inp['f_name']);
			}
		}
	}
}


function all_lang_suggestor($inp){
	c_suggestor($inp);
	java_suggestor($inp);
}

all_lang_suggestor($inp);

?>

<form action="backend.php">
<?php 
	echo "<input type='hidden' name='cname' value='".$inp['c_name']."'>";
	echo "<input type='hidden' name='nargs' value='".$inp['input_args']."'>";
?>
<h2>C <i>Suggestions</i></h2>
<div id='c_div'>
<select name='c_func_ret_types'>
<?php 
foreach ($c_all_return_type_with_name as $i):?>
  <option value='<?= $i?>'><?= $i?></option>
<?php endforeach;?>

</select>
<?php 
$count = 0;
foreach ($c_all_arg_sug as $i):?>
	<select name='<?= "c_arg_" . $count ?>'>
	<? $count++;
	foreach ($i as $j):?>
		<option value='<?= $j?>'><?= $j?></option>
	<?php endforeach;?>
	</select>
<?php endforeach;?>
</div>
<br/>
<h2>Java <i>Suggestions</i></h2>
<div id='java_div'>
<select name='java_func_ret_types'>
<?php 
foreach ($java_all_return_type_with_name as $i):?>
  <option value='<?= htmlentities($i)?>'><?= htmlentities($i)?></option>
<?php endforeach;?>

</select>
<?php 
$count = 0;
foreach ($java_all_arg_sug as $i):?>
	<select name='<?= "java_arg_" . $count ?>'>
	<? $count++;
	foreach ($i as $j):?>
		<option value='<?= htmlentities($j)?>'><?= htmlentities($j)?></option>
	<?php endforeach;?>
	</select>
<?php endforeach;?>
</div>
<br/>
<br/>
<input type='submit' value='Submit'>
</form>
	
</body>
</html>