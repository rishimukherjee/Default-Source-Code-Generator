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
}

function sug(){
    validate();
}
