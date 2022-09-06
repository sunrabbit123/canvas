const Tetris: React.FC = () => {
  return (
    <>
      <canvas id="forest"></canvas>
      <canvas id="snow"></canvas>
      <div className="btnBox">
        <div className="day hide">
          <span className="material-icons">wb_sunny</span>
        </div>
        <div className="night hide show">
          <span className="material-icons">nightlight_round</span>
        </div>
      </div>
      <script src="./js/app.js" type="module"></script>
    </>
  );
};

export default Tetris;
