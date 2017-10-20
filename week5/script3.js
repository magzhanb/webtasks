function insert(){
 var option = document.getElementById("faculty").selectedIndex;
 option= 2;

	var name = document.getElementById("name").value;
	var surname = document.getElementById("surname").value;
  var parenttbl = document.getElementById("students");
  var newel = document.createElement('tr');
  var elementid = document.getElementsByTagName("tr").length
  newel.setAttribute('id',elementid);
  newel.innerHTML = "<tr><td>" + name + "</td><td>" + surname + "</td><td>"+option+"</td><tr>";
  parenttbl.appendChild(newel);
}