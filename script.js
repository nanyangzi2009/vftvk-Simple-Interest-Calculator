function rateChange(){
  var r = document.getElementById("rate");
  var v = document.getElementById("rateValue");
  v.innerHTML = (r.value).toString() + "%";
}

function calulateInterest(){
  var v = document.getElementById('amount').value.toString();
  if(v=="" || (!isFinite(v)) || parseFloat(v)<0.01) {
    alert("Please input a correct amount!");
    return;
  }
  var amount = parseInt(v);
  var rate = document.getElementById("rate").value ;
  var today = new Date();
  var years = Number(document.getElementById("year").value);
  var endyear = Number(today.getFullYear()) + years;
  var interest = amount * rate/100 * years;
  interest = Math.round(interest *100)/100;
  var txt = "If you deposit <mark>" + amount + "</mark>,<br>";
  txt += "at an interest rate at <mark>" + rate + "%</mark>.<br>";
  txt += "You will receive an amount of <mark>" + interest + "</mark>,<br>";
  txt += "at the year <mark>" + endyear +"</mark>";
  document.getElementById("result").innerHTML = txt;
  return;
}
