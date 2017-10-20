function onClick(){
	var n11=document.getElementById("s11").value;

	var n12=document.getElementById("s12").value;
	var n13=document.getElementById("s13").value;
	var n21=document.getElementById("s21").value;
	var n22=document.getElementById("s22").value;
	var n23=document.getElementById("s23").value;
	var n31=document.getElementById("s31").value;
	var n32=document.getElementById("s32").value;
	var n33=document.getElementById("s33").value;
	var det= n11*n22*n33+n21*n32*n13+n31*n12*n23-n13*n22*n31-n23*n32*n11-n33*n12*n21;
	
	var res=document.getElementById("result");
	res.innerHTML=det;

}
const button = document.querySelector('button');
button.addEventListener('click',onClick);
