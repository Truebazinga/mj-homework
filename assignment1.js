var Fibonacci ={
   of: function(n) {
    if ( n <= 2 ) 
    {return 1};
    return this.of(n - 1) + this.of(n - 2);
    
  }
    
  }
  
for (var i=1;i<=200;i++)
{ 
    console.log(Fibonacci.of(i));
}
