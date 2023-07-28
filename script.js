var weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];


//France:
//console.log("Marie Antoinette's execution was on a " + weekdays[moment("17931006", "YYYYMMDD").day()]);

//console.log("King Louis was beheaded on a " + weekdays[moment("17920121", "YYYYMMDD").day()])

//console.log("The Bastille was stormed on a " + weekdays[moment("17890714", "YYYYMMDD").day()])

//console.log("Charlotte Corday killed Marat on a " + weekdays[moment("17930713", "YYYYMMDD").day()])

//America

console.log("America declared its indepdence on a " + weekdays[moment("17760704", "YYYYMMDD").day()])

console.log("9/11 happened on a " + weekdays[moment("20010911", "YYYYMMDD").day()])

function getDay(){
 var year = document.getElementById("year").value;
 var month = document.getElementById("month").value;
 var day = document.getElementById("day").value;
  
 
  
  if(year.match(/^\d{4}$/) != null  && month.match(/^\d{2}$/) != null && month.match(/^\d{2}$/))
    {
      console.log("preceding")
      document.getElementById("answer").innerText = weekdays[moment(year + month + day, "YYYYMMDD").day()]
    }
}
