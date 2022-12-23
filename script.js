let days = document.querySelector(".days");
let hours = document.querySelector(".hours");
let minutes = document.querySelector(".minutes");
let seconds = document.querySelector(".seconds");

let dd = document.getElementById("dd");
let hh = document.getElementById("hh");
let mm = document.getElementById("mm");
let ss = document.getElementById("ss");

let daysDot = document.querySelector(".days_dot");
let hoursDot = document.querySelector(".hr_dot");
let minDot = document.querySelector(".min_dot");
let secDot = document.querySelector(".sec_dot");

let endDate = "1/1/2023 00:00:00";
// date formate DD/MM/YYYY

let x = setInterval(function () {
  let now = new Date(endDate).getTime();
  let countDown = new Date().getTime();
  let distance = now - countDown;

  //time calculation
  console.log(days);
  let d = Math.floor(distance / (1000 * 60 * 60 * 24));
  console.log(d);
  let h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let s = Math.floor((distance % (1000 * 60)) / 1000);

  //output the result in element wiht id

  days.innerHTML = d + "<br><span>Days</span>";
  hours.innerHTML = h + "<br><span>Hours</span>";
  minutes.innerHTML = m + "<br><span>Minutes</span>";
  seconds.innerHTML = s + "<br><span>Seconds</span>";

  //animate stroke

  dd.style.strokeDashoffset = 440 - (440 * d) / 365;
  hh.style.strokeDashoffset = 440 - (440 * h) / 24;
  mm.style.strokeDashoffset = 440 - (440 * m) / 60;
  ss.style.strokeDashoffset = 440 - (440 * s) / 60;

  //animate circle dots
  daysDot.style.trasform = `rotateZ(${d * 0.986})deg`;
  hoursDot.style.trasform = `rotateZ(${h * 15}deg)`;
  minDot.style.trasform = `rotateZ(${m * 6}deg)`;
  secDot.style.trasform = `rotateZ(${s * 6}deg)`;

  //if the countdown Is over, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("time").style.display = "none";
    document.querySelector(".newYear").style.display = "block";
  }
});
