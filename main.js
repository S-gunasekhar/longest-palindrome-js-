function func(){
let str=prompt("Enter the string :","Hello");
var flag=0

let len=str.length;
for(let j=0;j<len-1;j++)
  {
    let k=0,n=len-j;
    console.log(k,n);
    while(n<=len)
        {
            
            let temp=str.slice(k,n);
            
            //console.log(temp);
            // console.log(k,n);
            let temp1=temp.split('').reverse().join('');
            
            if(temp===temp1) 
            {
            document.getElementById("sub1").innerHTML = `The longest palindrome in the given string "${str}" is "${temp1}" And the length is `+temp.length; 
            
            //console.log(temp1);
            flag=1;
           
            }
            if(flag===1) break;
            k++;
            n++;
        }
   }
   if(flag===0) document.getElementById("sub1").innerHTML=`The given string "${str}" does not have any palindrome`;
    
}