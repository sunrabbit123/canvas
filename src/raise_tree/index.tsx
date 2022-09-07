import styled from "styled-components";

const Canvas = styled.canvas`
  position: absolute;
  width: 100%;
  height: 90%;
`;
const SnowCanvas = styled(Canvas)`
  z-index: 2;
`;

const BtnBlock = styled.div`
  position: absolute;
  z-index: 3;
  right: 3em;
  top: 3em;
`;

const RaiseTree: React.FC = () => {
  return (
    <>
      <Canvas></Canvas>
      <SnowCanvas></SnowCanvas>
      <BtnBlock></BtnBlock>
    </>
  );
};

export default RaiseTree;
