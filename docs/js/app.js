import { Tree } from "./tree.js";

class App {
  constructor() {
    // 캔버스 생성 후 랜더링
    this.canvas = document.createElement("canvas");
    document.body.appendChild(this.canvas);

    // context 생성
    this.ctx = this.canvas.getContext("2d");
    this.ctx.globalCompositeOperation = "copy";
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
    this.canvas.width = this.stageWidth * this.pixelRatio;
    this.canvas.height = this.stageHeight * this.pixelRatio;
    this.ctx.scale(this.pixelRatio, this.pixelRatio);

    // 리사이즈시 캔버스를 비워줌
    this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight);
  }
  setBtn() {
    this.nightBtn = document.querySelector(".night");
    this.dayBtn = document.querySelector(".day");
    this.day = true;
    this.nightBtn.addEventListener(
      "click",
      this.nightBtnHandler.bind(this),
      false,
    );
    this.dayBtn.addEventListener("click", this.dayBtnHandler.bind(this), false);
  }
  nightBtnHandler() {
    console.log(2);
    this.resize();
    this.dayBtn.classList.add("show");
    this.nightBtn.classList.remove("show");
    document.body.classList.add("black");
    this.day = false;
  }

  dayBtnHandler() {
    console.log(3);
    this.resize();
    this.dayBtn.classList.remove("show");
    this.nightBtn.classList.add("show");
    document.body.classList.remove("black");
    this.day = true;
  }
  click(event) {
    const { clientX } = event;
    new Tree(this.ctx, clientX, this.stageHeight, this.day);
  }
}

window.onload = () => {
  new App();
};
