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
	alert("Please enter the number of arguments.")
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

function suggest(){
    var func_name = document.forms["input_form"]["f_name"].value;
    var class_name = document.forms["input_form"]["c_name"].value;
    var inp_arg_cnt = document.forms["input_form"]["input_args"].value;
    var all_args = new Array();
    for(var i=0; i<inp_arg_cnt; i++){
        var one_arg = {
	    arg_name : document.forms["arg_form"]["arg_name_"+i].value,
            arg_type : document.forms["arg_form"]["arg_type_"+i].value,
            arg_dim : document.forms["arg_form"]["arg_dim_"+i].value,
	}
        all_args.push(one_arg);
    }
}

