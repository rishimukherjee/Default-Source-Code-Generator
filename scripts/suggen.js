function validate(){
    var func_name = document.forms["input_form"]["fname"].value;
    if(func_name==null || func_name==""){
	alert("Please Enter Function Name");
	return false;
    }
    var class_name = document.forms["input_form"]["cname"].value;
    if(class_name==null || class_name==""){
	alert("Please Enter Class Name For Java");
	return false;
    }
    var func_ret_type = document.forms["input_form"]["argret"].value;
    if(func_ret_type==null || func_ret_type==""){
	alert("Please Enter Return Type of The Function");
	return false;
    }
    var func_arg_count = document.forms["input_form"]["iargs"].value;
    if(func_arg_count!=null || func_arg_count!="" || func_arg_count!=0){
        if(typeof document.forms["arg_form"]=='undefined') {alert("You have not given any argument details"); return false;}
	for(var i=0; i<func_arg_count;i++){
	    var input_name = document.forms["arg_form"]["varname"+i].value;
	    var input_type = document.forms["arg_form"]["vartype"+i].value;
            var input_dim = document.forms["arg_form"]["vardim"+i].value;
	    if(input_name==null || input_type==null || input_dim==null || input_name=="" || input_type=="" || input_dim==""){
		alert("Seems you have not given complete details of argument number "+(i+1));
		return false;
	    }
	}
    }
}

function sug(){
    validate();
}
