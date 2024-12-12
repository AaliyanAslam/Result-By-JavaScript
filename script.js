function check() {
  let a = document.getElementById("sub1").value;
  let b = document.getElementById("sub2").value;
  let c = document.getElementById("sub3").value;
  let d = document.getElementById("sub4").value;


 if (a === "" || b === "" || c === "" || d === "") {
  alert("Please enter something in all fields.");
  return; 
}

a = parseInt(a);
b = parseInt(b);
c = parseInt(c);
d = parseInt(d);

  let total = a + b + c + d;
  let percentage = (total / 500) * 100;

  document.getElementById("data").innerHTML = `YOUR TOTAL MARKS IS ${total}`;
  document.getElementById(
    "data1"
  ).innerHTML = `YOUR PERCENTAGE IS ${percentage}%`;


  
  if (percentage >= 90) {
    document.getElementById(
      "data2"
    ).innerHTML = `you passed with good Percentage ${percentage}%`;
  } 
  else if (percentage >= 80) {
    document.getElementById(
      "data2"
    ).innerHTML = `you passed with good Percentage ${percentage}%`;
  }

  else if(percentage >= 70){
document.getElementById("data2").innerHTML= (`you passed with good Percentage ${percentage}%`)
  }
  else if(percentage >= 60){
document.getElementById("data2").innerHTML= (`you passed with normal Percentage ${percentage}%`)
  }
  else if(percentage >= 50){
document.getElementById("data2").innerHTML= (`you passed with normal Percentage ${percentage}%`)
  }
  else if(percentage >= 40){
document.getElementById("data2").innerHTML= (`you passed with normal Percentage ${percentage}%`)
  }
  else{
document.getElementById("data2").innerHTML= (`you FAIL ${percentage}%`)
  }

 
}

