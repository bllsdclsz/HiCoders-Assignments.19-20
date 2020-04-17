//set minutes 
var mins = 2;

//calculate the seconds 
var secs = mins * 60;

//countdown function is evoked when page is loaded 
function countdown() {
   setTimeout('Decrement()', 60);
}

//Decrement function decrement the value. 
function Decrement() { 
      if (seconds < 59) {
         seconds.value = secs;
      }
      //Display both minutes and seconds 
      //getminutes and getseconds is used to 
      //get minutes and seconds 
      else {
         minutes.value = getminutes();
         seconds.value = getseconds();
      }

      //if seconds becomes zero, 
      //then page alert time up 
      if (mins < 0) {
         alert('time up');
         minutes.value = 0;
         seconds.value = 0;
      }
      //if seconds > 0 then seconds is decremented 
      else {
         secs--;
         setTimeout('Decrement()', 1000);
      }
   }
}

function getseconds() {
   //take minutes remaining (as seconds) away  
   //from total seconds remaining 
   return secs - Math.round(mins * 60);
}