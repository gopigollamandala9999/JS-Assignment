var x= 10;
function multiply(){
console.log("Globally value of x is :"+x);}
   multiply();
	function MUL(){

        var y=5;
	console.log(" locally value of y: =" +y);
 var X=x*y;
console.log("Mulitplication of x and y is equal to:"+X);
     }  MUL();