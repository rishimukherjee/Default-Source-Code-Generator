function c_validate_and_process(){
      var result = document.input_form.c_input_args.value;
      if(result!=0 && Math.round(result)!=result) return false;
      var argument_form = "<h3>C Function Arguments</h3><table id='c_arg_inp'><tr><th>Name of Variable</th><th>Type of Variable</th><th>Dimension of Variable</th></tr>";
      var count_checkbox = Math.min(document.input_form.java_input_args.value, document.input_form.c_input_args.value);
      for(var i=0; i<result;i++){
    	 if(count_checkbox <= 0) argument_form += "<tr><td><input type='text' size='20' name='c_arg_name_"+i+"'></td>";
    	 else {
    		 argument_form += "<tr><td><input type='text' size='20' id='c_arg_name_"+i+"' name='c_arg_name_"+i+"'><input type='checkbox' onclick='c_checkbox_clicked("+i+", this)' name='c_check_"+i+"'></td>";
    		 document.getElementById("check_box_details").innerHTML="<b>Use check box to copy ith variable name of Java to ith variable name of C.</b>";
    	 }	 
    	 argument_form += "<td align='center'><select name='c_arg_type_"+i+"'><option value='int'>int</option></select></td>";
         argument_form += "<td align='center'><select name='c_arg_dim_"+i+"'><option value='0'>0</option><option value='1'>1</option><option value='2'>2</option></select></td>";
         argument_form += "</tr>";
         count_checkbox--;
      }
      temp_argument_form = "<table id='c_arg_inp'>";
      temp_argument_form += "<tr><th>Function return type</th><th>Function return Dimension</th></tr>";
      temp_argument_form += "<tr><td align='center'><select name='c_arg_ret_type'><option value='int'>int</option><option value='void'>void</option></select></td>";
      temp_argument_form += "<td align='center'><select name='c_arg_ret_dim'><option value='0'>0</option><option value='1'>1</option><option value='2'>2</option></select></td></tr>";
      if(result!=0) document.getElementById("c_args").innerHTML=argument_form+temp_argument_form+"</table>";
      else document.getElementById("c_args").innerHTML=temp_argument_form+"</table>";
}

function java_validate_and_process(){
	var result = document.input_form.java_input_args.value;
	if(result!=0 && Math.round(result)!=result) return false;
	var argument_form = "<h3>Java Function Arguments</h3><table id='java_arg_inp'><tr><th>Name of Variable</th><th>Type of Variable</th><th>Dimension of Variable</th></tr>";
	var count_checkbox = Math.min(document.input_form.java_input_args.value, document.input_form.c_input_args.value);
	for(var i=0; i<result;i++){
		if(count_checkbox <= 0) argument_form += "<tr><td><input type='text' size='20' name='java_arg_name_"+i+"'></td>";
		else {
			argument_form += "<tr><td><input type='text' size='20' id='java_arg_name_"+i+"' name='java_arg_name_"+i+"'><input type='checkbox' onclick='java_checkbox_clicked("+i+", this)' name='java_check_"+i+"'></td>";
			document.getElementById("check_box_details").innerHTML="<b>Use check box to copy ith variable name of C to ith variable name of Java.</b>";  		
		}
		argument_form += "<td align='center'><select name='java_arg_type_"+i+"'><option value='int'>int</option></select></td>";
        argument_form += "<td align='center'><select name='java_arg_dim_"+i+"'><option value='0'>0</option><option value='1'>1</option><option value='2'>2</option></select></td>";
        argument_form += "</tr>";
        count_checkbox--;
     }
	temp_argument_form = "<table id='c_arg_inp'>";
	temp_argument_form += "<tr><th>Function return type</th><th>Function return Dimension</th></tr>";
    temp_argument_form += "<tr><td align='center'><select name='java_arg_ret_type'><option value='int'>int</option><option value='void'>void</option></select></td>";
    temp_argument_form += "<td align='center'><select name='java_arg_ret_dim'><option value='0'>0</option><option value='1'>1</option><option value='2'>2</option></select></td></tr>";
	if(result!=0)
	    document.getElementById("java_args").innerHTML=argument_form+temp_argument_form+"</table><input type='submit' value='submit'>";
	else
	    document.getElementById("java_args").innerHTML=temp_argument_form+"</table>"+"<input type='submit' value='submit'>";
}

function java_checkbox_clicked(var_name, bf){
	if(bf.checked)
		var c_input_text = document.forms["input_form"]["c_arg_name_"+var_name].value;
	else var c_input_text = '';
	document.getElementById("java_arg_name_"+var_name).value = c_input_text;
}

function c_checkbox_clicked(var_name, bf){
	if(bf.checked)
		var java_input_text = document.forms["input_form"]["java_arg_name_"+var_name].value;
	else var java_input_text = '';
	document.getElementById("c_arg_name_"+var_name).value = java_input_text;
}