let eyeBall = document.getElementsByClassName("pupil");
let con1 = document.getElementsByClassName("container");
let rangePupil = 60 + "%";

document.onmousemove = () => {
  let x = (event.clientX * 100) / window.innerWidth + "%";
  console.log(x);
  let y = (event.clientY * 100) / window.innerHeight + "%";
  console.log(y);

  if (x <= rangePupil) {
    eyeBall[0].style.left = x;
    eyeBall[1].style.left = x;
  } else {
    eyeBall[0].style.left = rangePupil;
    eyeBall[1].style.left = rangePupil;
  }

  if (y <= rangePupil) {
    eyeBall[0].style.top = y;
    eyeBall[1].style.top = y;
  } else {
    eyeBall[0].style.top = rangePupil;
    eyeBall[1].style.top = rangePupil;
  }
};
