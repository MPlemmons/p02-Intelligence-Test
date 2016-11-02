//Michael Plemmons
var results_calc = 0;
var user;
var p1 = false;
var p2 = false;
var p3 = false;

function q1_calc()
{
  var q1_answer = 279944;
  user = document.getElementById("q1").value;
  if(isNaN(user))
  {
    document.getElementById("output").innerHTML = user + " is not a number";
    document.getElementById("q1").value = "";
  }
  else if (user == q1_answer){
    document.getElementById("output").innerHTML = user + " is correct!";
    document.getElementById("q1").value = "";
    if(p1 == false)
    {
      setCookie("results_acc", results_calc + 1);
      p1 = true;
    }
  }
    else
  {
    document.getElementById("output").innerHTML = user + " is incorrect. Try again or move onto "
    + "the next question.";
    document.getElementById("q1").value = "";
      setCookie("results_acc", results_calc);
  }
}

function q2_calc()
{
  var q2_answer = 279936117649;
  user = document.getElementById("q2").value;
  if(isNaN(user))
  {
    document.getElementById("output").innerHTML = user + " is not a number";
    document.getElementById("q2").value = "";
  }
  else if (user == q2_answer){
    document.getElementById("output").innerHTML = user + " is correct!";
    document.getElementById("q2").value = "";
    if(p2 == false)
      {
        results_calc = Number(getCookie("results_acc"));
        setCookie("results_acc", results_calc + 1);
        p2 = true;
      }
  }
  else
  {
    document.getElementById("output").innerHTML = user + " is incorrect. Try again " +
    " or move onto the next question";
    document.getElementById("q2").value = "";
  }
}

function q3_calc()
{
  var q3_answer = 30;
  user = document.getElementById("q3").value;
  if(isNaN(user))
  {
    document.getElementById("output").innerHTML = user + " is not a number";
    document.getElementById("q3").value = "";
  }
  else if (user == q3_answer){
    document.getElementById("output").innerHTML = user + " is correct!";
    document.getElementById("q3").value = "";
      if (p3 == false)
        {
          results_calc = Number(getCookie("results_acc"));
          setCookie("results_acc", results_calc + 1);
          p3 = true;
        }
  }
  else
  {
    document.getElementById("output").innerHTML = user + " is incorrect. Try again " +
    "or move onto the next question";
    document.getElementById("q3").value = "";
  }
}

function results()
{
  results_calc = getCookie("results_acc");
  document.getElementById("results").innerHTML = results_calc + "/3 correct";
  results_calc = 0;
}

//courtesy of w3schools, from: http://www.w3schools.com/js/js_cookies.asp
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

//courtesy of w3schools, from: http://www.w3schools.com/js/js_cookies.asp
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
