//compite the numbe
function compite(num1,num2){
	if(num1==num2){
		return ( "true" );
		}
	else{
		return ( "false" );
		}
}
console.log(compite(54,32));
//divisible by 100
function divisible(x){
	if(x%100==0){
		return ( "true" );
		}
	else{
		return ( "false" );
		}
}
console.log(divisible(200));
// odd or even
function number(a){
	if(a%2==0){
		return ( "even" );
		}
	else{
		return ( "odd" );
		}
}
console.log(number(7));
//Grade making
function grade(n){
    if(100<n || n<1){
		return ( "invalid " );
		}
  	else if(100>=n && n>=90){
		return ( "A" );
		}
      else if(89<=n && n>=80){
		return ( "B " );
		}
  	else{
		return ( "C " );
		}
}
console.log(grade(100));
		
	
		


