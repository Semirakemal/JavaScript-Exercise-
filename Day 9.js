
//Question :15 
function div(min,max){
	for(let j=min;j<max;j++){
		
			if(j%3==0){
			   console.log(j +" div3");
			}else{
				console.log(j);
				}
		}
}
div(1,7);
//Question:16 fizzBuzz challenge 
function fizzBuzz(a,b){
	for(let i=a;i<=b;i++){
		if(i%3===0 && i%5===0){
			console.log(" FizzBuzz");
		}else if(i%5===0){
			console.log( "Buzz");
		}else if(i%3===0){
			console.log( "Fizz");
		}else{
			console.log(i);
			}
 	}
}
fizzBuzz(1,100);
//
function anEvent(w){
	let s=w.toString();
	for(let i=0;i<s.length;i++){
		if(parseInt(s[i]) % 2 !==0){
		console.log(0);
         return;
         }
     }
        console.log(1);
}
anEvent(456);
anEvent(466);

	
	
