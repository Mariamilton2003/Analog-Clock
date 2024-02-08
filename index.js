setInterval(() => {
  const d = new Date();
  const hr = d.getHours();
  const min = d.getMinutes();
  const ss = d.getSeconds();
  console.log(hr + ":" + min + ":" + ss);
  const hrHand = document.querySelector(".clock-hand-hr");
  const minHand = document.querySelector(".clock-hand-min");
  const ssHand = document.querySelector(".clock-hand-ss");
  hrHand.style.transform = ` rotate(${eval(30 * hr + min / 2)}deg)`;
  minHand.style.transform = ` rotate(${eval(6 * min)}deg)`;
  ssHand.style.transform = `rotate(${eval(6 * ss)}deg)`;
}, 1000);
