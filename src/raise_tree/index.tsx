import React, { MouseEventHandler } from "react";
import styled from "styled-components";
import { Stage } from "@inlet/react-pixi";

const PixiBox = styled.div`
  margin: 0 auto;
  width: 500px;
`;

const Canvas: React.FC<{
  WIDTH: number;
  HEIGHT: number;
  fn: MouseEventHandler<HTMLDivElement>;
}> = (props) => {
  return (
    <PixiBox onClick={props.fn}>
      <Stage width={props.WIDTH} height={props.HEIGHT} />
    </PixiBox>
  );
};

const BtnBlock = styled.div`
  position: absolute;
  z-index: 3;
  right: 3em;
  top: 3em;
`;

const RaiseTree: React.FC = () => {
  const WIDTH = 500;
  const HEIGHT = 500;

  const drawTree = () => {};
  return (
    <>
      <Canvas WIDTH={WIDTH} HEIGHT={HEIGHT} fn={drawTree}></Canvas>
      <BtnBlock></BtnBlock>
    </>
  );
};

export default RaiseTree;
