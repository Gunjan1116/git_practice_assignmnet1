let num=179;
let rev=0;
let x=num;
let i=0;
while(num>0){
  i=num%10;
  rev=(rev*10)+i;
  num=Math.floor(num/10);
}
if(x==rev){
 console.log(num+" is palindrome");
}else{
 console.log(num+" is not palindrome");
}