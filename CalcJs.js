
$(document).ready(function(){

    var str = "";
    $(".num").click(function() {
       str += $(this).text();
       $("#calc").text(str);
        if(str.length > 16) {                         /* String length check */
             alert("No more input allowed!!");
        }
    });

    $(".C").click(function() {
        str = "";
        $("#calc, #result").text("0");
    });

    $(".CE").click(function(){
        str = str.slice(0, str.length-1);
        $("#calc").text(str);
    });

    $(".equals").click(function(){
      try{
          var ans = eval(str) + "";
          if(ans == "Infinity" || ans == "-Infinity"){
              throw "Error";
          }else{
              $("#result").text(ans);
          }
      }catch(err){
         $("#result").text("Error");
      }
       
    });

    $(document).keypress(function(event){
    
    console.log(event.which);
    
    if(event.which == 48){
      str += 0;
      $("#calc").text(str);
    }
    if(event.which == 49){
      str += 1;
      $("#calc").text(str);
    }
    if(event.which == 50){
      str += 2;
      $("#calc").text(str);
    }
    if(event.which == 51){
      str += 3;
      $("#calc").text(str);
    }
    if(event.which == 52){
      str += 4;
      $("#calc").text(str);
    }
    if(event.which == 53){
      str += 5;
      $("#calc").text(str);
    }
    if(event.which == 54){
      str += 6;
      $("#calc").text(str);
    }
    if(event.which == 55){
      str += 7;
      $("#calc").text(str);
    }
    if(event.which == 56){
      str += 8;
      $("#calc").text(str);
    }
    if(event.which == 57){
      str += 9;
      $("#calc").text(str);
    }
    if(event.which == 43){
      str += '+';
      $("#calc").text(str);
    }
    if(event.which == 42){
      str += '*';
      $("#calc").text(str);
    }
    if(event.which == 45){
      str += '-';
      $("#calc").text(str);
    }
    if(event.which == 47){
      str += '/';
      $("#calc").text(str);
    }
    if(event.which == 40){
      str += '(';
      $("#calc").text(str);
    }
    if(event.which == 41){
      str += ')';
      $("#calc").text(str);
    }

    if(event.which == 46){
        str += '.';
        $("#calc").text(str);
    }
    if(str.length > 16) {
             alert("No more input allowed!!");
    }
  });

   $(document).keyup(function(event){
    
    console.log(event.which);
        if(event.which == 13){
      try{
          var ans = eval(str) + "";
          if(ans == "Infinity" || ans == "-Infinity"){
              throw "Error";
          }else{
              $("#result").text(ans);
          }
      }catch(err){
         $("#result").text("Error");
      }
    }
    if(event.which == 8){
        str = str.slice(0, str.length-1);
        $("#calc").text(str);
    }
    if(event.which == 67){
        str = "";
        $("#calc, #result").text("0");
    }
   });
});
  
