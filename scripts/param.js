function validate_and_process(){
      var result = document.input_form.input_args.value;
      var argument_form = "<table id='arg_inp'><tr><th>Name of Variable</th><th>Type of Variable</th><th>Dimension of Variable</th></tr>";
      for(var i=0; i<result;i++){
         argument_form += "<tr><td><input type='text' size='20' name='arg_name_"+i+"'></td>";
         argument_form += "<td><input type='text' size='20' name='arg_type_"+i+"'></td>";
         argument_form += "<td><input type='text' size='20'  name='arg_dim_"+i+"'></td>";
         argument_form += "</tr>"
      }
      if(result!=0)
      document.getElementById("args").innerHTML=argument_form+"</table><input type='submit' value='submit'>";
      else
      document.getElementById("args").innerHTML="<input type='submit' value='submit'>";
}

