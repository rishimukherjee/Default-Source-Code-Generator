function inpgen(){
      var result = document.input_form.iargs.value;
      var ans = "<table border='1'><tr><th>Name of Variable</th><th>Type of Variable</th><th>Dimension of Variable</th></tr>";
      if (result==0) ans = "";
      for(var i=0; i<result;i++){
         ans += "<tr><td><input type='text' size='20' name='varname"+i+"'></td>";
         ans += "<td><input type='text' size='20' name='vartype"+i+"'></td>";
         ans += "<td><input type='text' size='20'  name='vardim"+i+"'></td>";
         ans += "</tr>"
      }
      document.getElementById("args").innerHTML=ans+"</table>";
    }
