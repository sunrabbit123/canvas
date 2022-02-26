import { Snow } from "./snow.js";
import { Tree } from "./tree.js";

class App {
  constructor() {
    this.isDay = true;

    // 캔버스 생성 후 랜더링
    this.forestCanvas = document.getElementById("forest");
    document.body.appendChild(this.forestCanvas);

    this.forestCtx = this.forestCanvas.getContext("2d");
    this.forestCtx.globalCompositeOperation = "copy";

    this.snowCanvas = document.getElementById("snow");
    this.snowCanvas.classList.add("snow");

    this.snowCtx = this.snowCanvas.getContext("2d");
    this.snowCtx.globalCompositeOperation = "hard-light";

    document.body.appendChild(this.snowCanvas);
    // context 생성
    // 레티나 디스플레이에서의 화면 비율 조정
    this.pixelRatio = window.devicePixelRatio > 1 ? 2 : 1;

    // 화면 크기 재조정시 이벤트 추가
    window.addEventListener("resize", this.resize.bind(this), false);
    window.addEventListener("click", this.click.bind(this), false);

    this.resize();

    this.setBtn();
  }

  resize() {
    // body의 너비와 높이 저장
    this.stageWidth = document.body.clientWidth;
    this.stageHeight = document.body.clientHeight;

    // 디스플레이 비율에 맞추어 캔버스 사이즈와 비율 조정
    this.forestCanvas.width = this.stageWidth * this.pixelRatio;
    this.forestCanvas.height = this.stageHeight * this.pixelRatio;
    this.forestCtx.scale(this.pixelRatio, this.pixelRatio);

    this.snowCanvas.width = window.innerWidth;
    this.snowCanvas.height = window.innerHeight;

    // 리사이즈시 캔버스를 비워줌
    this.forestCtx.clearRect(0, 0, this.stageWidth, this.stageHeight);
    new Snow(
      this.snowCtx,
      this.snowCanvas.width,
      this.snowCanvas.height,
      this.isDay,
    );
  }
  setBtn() {
    this.nightBtn = document.querySelector(".night");
    this.isDayBtn = document.querySelector(".day");
    this.nightBtn.addEventListener(
      "click",
      this.nightBtnHandler.bind(this),
      false,
    );
    this.isDayBtn.addEventListener(
      "click",
      this.dayBtnHandler.bind(this),
      false,
    );
  }
  nightBtnHandler() {
    this.isDay = false;
    this.resize();
    this.isDayBtn.classList.add("show");
    this.nightBtn.classList.remove("show");
    document.body.classList.add("black");
  }

  dayBtnHandler() {
    this.isDay = true;
    this.resize();
    this.isDayBtn.classList.remove("show");
    this.nightBtn.classList.add("show");
    document.body.classList.remove("black");
  }
  click(event) {
    const { clientX } = event;
    new Tree(this.forestCtx, clientX, this.stageHeight, this.isDay);
  }
}

window.onload = () => {
  new App();
};
