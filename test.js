var myForm= document.forms.form;


myForm.onsubmit=function(){
      if(myForm.a.value=="" || myForm.b.value=="" || myForm.c.value=="") {
      	
      alert("enter the value");

      }
      else{
      	var a=parseInt(myForm.elements.a.value);
          var b=parseInt(myForm.elements.b.value);
          var b=parseInt(myForm.elements.c.value);
      	var f=function(x){
		return ((x*x*x)-(5*x)+1);
		}
      	var main=function(a,b){
      		if( f(a)*f(b)>=0 ){
 		   alert("the interval is wrong!");
  			}
  		else {
    	alert("right interval!");	
      	}
      	  var x=0;
		  var x1=0;
		  var i=0;
		  do{
		    var x=(a+b)/2;
		    if(x==x1){
		      alert("the root is: "+x);
		      break;
		    }
		    x1=x;
		    i++;
		    if(f(a)*f(x)<0)
		    b=x;
		    else {
		      a=x;
		    }
		  }while (f(a)*f(b)<0);
		     }
		     main(a,b);
		}
  
};