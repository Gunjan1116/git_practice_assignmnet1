let num=179;
let rev=0;
let x=num;
while(num>0){
  i=num%10;
  rev=(rev*10)+i;
  num=Math.floor(num/10);
}
if(rev==num){
 console.log("no");
}else{
 console.log("yes");
}