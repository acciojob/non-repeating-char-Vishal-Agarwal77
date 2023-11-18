function firstNonRepeatedChar(str) {
 // Write your code here
	let temp=[];
	for(let i=0;i<str.length;i++){
		if(temp[str.charCodeAt(i)]>=0){
			temp[str.charCodeAt(i)]++;
		}
		else{
			temp[str.charCodeAt(i)]=1;
		}
	}
	for(let i=0;i<temp.length;i++){
		if(temp[i]===1){
			return String.fromCharCode(i);
		}
	}
	return null;
}
// const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
