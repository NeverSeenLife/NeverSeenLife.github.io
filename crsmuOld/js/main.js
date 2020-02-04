function cos(){

    var data = new Date();
    var test;
    var test2;
    var test3;
    var godzina = data.getHours();
      if(godzina<10){
        test3 = "0" + godzina;
      }
      else{
        test3 = godzina;
      }
    var minuta = data.getMinutes();
    if(minuta<10){
      test2 = "0" + minuta;
    }
    else{
      test2 = minuta;
    }
    
    var sekunda = data.getSeconds();
    if(sekunda<10){
      test = "0" + sekunda;
    }
    else{
      test = sekunda;
    }
    document.getElementById("clock").innerHTML = "<span class=\"text-timer\">CZAS SERWERA: </span>" + test3 + ":" + test2 + ":" + test;
      
      setTimeout(cos, 1000);
    }