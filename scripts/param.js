function validate_and_process(){
      var result = document.input_form.iargs.value;
      var ans = "<form name='arg_form'><table id='arg_inp'><tr><th>Name of Variable</th><th>Type of Variable</th><th>Dimension of Variable</th></tr>";
      if (result==0 || result==null || result=="") {
	  document.getElementById("args").innerHTML="";
          alert("Number of input Arguments is set to 0");
	  return false;
      }
      for(var i=0; i<result;i++){
         ans += "<tr><td><input type='text' size='20' name='varname"+i+"'></td>";
         ans += "<td><input type='text' size='20' name='vartype"+i+"'></td>";
         ans += "<td><input type='text' size='20'  name='vardim"+i+"'></td>";
         ans += "</tr>"
      }
      document.getElementById("args").innerHTML=ans+"</table></form>";
}

function inpgen(){
    validate_and_process();
}
