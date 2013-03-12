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
    var c_func_arg_count = document.forms["input_form"]["c_input_args"].value;
    if(c_func_arg_count==null || c_func_arg_count==""){
    	alert("Please enter the number of C arguments.");
        return false;
    }
    if(c_func_arg_count!=null || c_func_arg_count!="" || c_func_arg_count!=0){
    	for(var i=0; i<c_func_arg_count;i++){
    		var c_arg_name = document.forms["input_form"]["c_arg_name_"+i].value;
    		var c_arg_type = document.forms["input_form"]["c_arg_type_"+i].value;
            var c_arg_dim = document.forms["input_form"]["c_arg_dim_"+i].value;
            if(c_arg_name==null || c_arg_type==null || c_arg_dim==null || c_arg_name=="" || c_arg_type=="" || c_arg_dim==""){
            	alert("Seems you have not given complete details of C function argument number "+(i+1));
            	return false;
            }
    	}
    }
    var java_func_arg_count = document.forms["input_form"]["java_input_args"].value;
    if(java_func_arg_count==null || java_func_arg_count==""){
    	alert("Please enter the number of arguments Java.");
        return false;
    }
    if(java_func_arg_count!=null || java_func_arg_count!="" || java_func_arg_count!=0){
    	for(var i=0; i<java_func_arg_count;i++){
    		var java_arg_name = document.forms["input_form"]["java_arg_name_"+i].value;
    		var java_arg_type = document.forms["input_form"]["java_arg_type_"+i].value;
            var java_arg_dim = document.forms["input_form"]["java_arg_dim_"+i].value;
            if(java_arg_name==null || java_arg_type==null || java_arg_dim==null || java_arg_name=="" || java_arg_type=="" || java_arg_dim==""){
            	alert("Seems you have not given complete details of Java function argument number "+(i+1));
            	return false;
            }
    	}
    }
    var c_func_ret_type = document.forms["input_form"]["c_arg_ret_type"].value;
    var c_func_ret_dim = document.forms["input_form"]["c_arg_ret_dim"].value;
    var java_func_ret_type = document.forms["input_form"]["java_arg_ret_type"].value;
    var java_func_ret_dim = document.forms["input_form"]["java_arg_ret_dim"].value;
    if(c_func_ret_dim>1){
    	alert("Given dimension return type not allowed in C.");
    	return false;
    }
    if(c_func_ret_type=='void' && c_func_ret_dim>0){
    	alert("Impossible C function return type void with dimension "+c_func_ret_dim);
    	return false;
    }
    if(java_func_ret_type=='void' && java_func_ret_dim>0){
    	alert("Impossible Java function return type void with dimension "+java_func_ret_dim);
    	return false;
    }
}

function suggestion_validate(){
	var c_arg_count = document.forms["suggestion"]["c_nargs"].value;
	var java_arg_count = document.forms["suggestion"]["java_nargs"].value;
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
	for(var i=0; i<c_arg_count; i++){
		var c_arg = document.forms["suggestion"]["c_arg_"+i].value;
		if(c_arg.indexOf("Select Argument")!==-1){
			alert("Please select C function argument "+(i+1));
			return false;
		}
	}
	for(var i=0; i<java_arg_count; i++){
		var java_arg = document.forms["suggestion"]["java_arg_"+i].value;
		if(java_arg.indexOf("Select Argument")!==-1){
			alert("Please select Java function argument "+(i+1));
			return false;
		}
	}
}

