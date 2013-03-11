function validate(){
    var func_name = document.forms["input_form"]["f_name"].value;
    if(func_name==null || func_name==""){
	alert("Please Enter Function Name");
	return false;
    }
    var class_name = document.forms["input_form"]["c_name"].value;
    if(class_name==null || class_name==""){
	alert("Please Enter Class Name For Java");
	return false;
    }
    var func_arg_count = document.forms["input_form"]["input_args"].value;
    if(func_arg_count==null || func_arg_count==""){
	alert("Please enter the number of arguments.");
        return false;
    }
    if(func_arg_count!=null || func_arg_count!="" || func_arg_count!=0){
	for(var i=0; i<func_arg_count;i++){
	    var arg_name = document.forms["input_form"]["arg_name_"+i].value;
	    var arg_type = document.forms["input_form"]["arg_type_"+i].value;
            var arg_dim = document.forms["input_form"]["arg_dim_"+i].value;
	    if(arg_name==null || arg_type==null || arg_dim==null || arg_name=="" || arg_type=="" || arg_dim==""){
		alert("Seems you have not given complete details of argument number "+(i+1));
		return false;
	    }
	}
    }
}

function suggestion_validate(){
	var arg_count = document.forms["suggestion"]["nargs"].value;
	var c_ret_type = document.forms["suggestion"]["c_func_ret_types"].value;
	var java_ret_type = document.forms["suggestion"]["java_func_ret_types"].value;
	if(c_ret_type.indexOf("Select Return Type")!==-1) {
		alert("Please select return type of C function.");
		return false;
	}
	if(java_ret_type.indexOf("Select Return Type")!==-1) {
		alert("Please select return type of Java function.");
		return false;
	}
	for(var i=0; i<arg_count; i++){
		var c_arg = document.forms["suggestion"]["c_arg_"+i].value;
		if(c_arg.indexOf("Select Argument")!==-1){
			alert("Please select C function argument "+(i+1));
			return false;
		}
		var java_arg = document.forms["suggestion"]["java_arg_"+i].value;
		if(java_arg.indexOf("Select Argument")!==-1){
			alert("Please select Java function argument "+(i+1));
			return false;
		}
	}
}

