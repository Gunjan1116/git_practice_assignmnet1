let n=13;
let c=0;
for(let i=1;i<=n;i++){
 if(n%i==0){
  c++;
}
}
if(c==2){
console.log(n+" is prime number");
}else{
console.log(n+" is not a prime number");
}