let drageable = false;

const wrap = document.querySelector(".wrap");
const usageHistory = document.querySelector(".account__history");
const target = document.querySelector("#scrollTarget");


let currentY = 0;

//마우스 움직임
wrap.addEventListener("mousemove", (e) => {
  if (!drageable) {
    return;
  }
  let text = "x : " + e.clientX + ", y : " + e.clientY;

  //최대값과 최소값
  if (e.clientY < 99) {
    return;
  }
  if (e.clientY > 353) {
    return;
  }

  let movePoint = Math.abs(currentY - e.clientY);
  //내리고자 할 때는 translate에 양수값을 주면 되고, currentY < clientY
  //올리고자 할 때는 translate에 음수값을 주면 되는데 currentY > clientY
  if (currentY <= e.clientY) {
    usageHistory.style.transform = "translateY(" + movePoint + "px)";
  } else {
    usageHistory.style.transform = "translateY(-" + movePoint + "px)";
  }

  console.log(currentY, " , ", e.clientY, "translateY(" + movePoint + "px)")
})

//마우스 누르기
target.addEventListener("mousedown", (e) => {
  drageable = true;
  console.log("?");
  currentY = e.clientY;
})

//마우스 떼기
const setTopTarget = (data) => {
  if (data <= -99) {
    console.log("바텀에 고정해야함!");
    usageHistory.dataset.value = "bottom";
    usageHistory.style.transform = "translateY(0px)";
  } else {
    console.log("탑에 고정해야함!")
    usageHistory.dataset.value = "top";
    usageHistory.style.transform = "translateY(0px)";
  }
  drageable = false;
}

const setBottomTarget = (data) => {
  console.log("data : ", data);
  if (data <= 353) {
    console.log("바텀에 고정해야함!");
    usageHistory.dataset.value = "bottom";
    usageHistory.style.transform = "translateY(0px)";
  } else {
    console.log("탑에 고정해야함!")
    usageHistory.dataset.value = "top";
    usageHistory.style.transform = "translateY(0px)";
  }
  drageable = false;
}

const mouseUpFunc = (e) => {
  mouseClickSpan.innerText = "마우스 뗐음!";
  if (usageHistory.dataset.value == "top") {
    setTopTarget(currentY - e.clientY);
  } else {
    setBottomTarget(currentY - e.clientY);
  }
}

document.body.addEventListener("mouseup", mouseUpFunc);
window.mouseUp = mouseUpFunc;