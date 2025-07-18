//question: 7 calculate all total sum of  Even,odd and substrate them
/let c = [5,6,99,8,76,4,68,44];
let odd = 0;
let even =0;
let difference = 0;
for(let i = 0;i<c.length;i++){
	if(c[i]%2==0){
		even += c[i];
		}
	else{
      odd += c[i];
      }

}
difference = even - odd;	
console.log(difference);  
//question:8
let b = [5,6,99,8,76,4,68,44];
let evenIndex = 0;
function printevenIndex(b){
   for(let i =0;i <b.length; i++){
  	if(i%2==0){
	 	console.log(b[i]);
  	}
    }
}
printevenIndex(b);



