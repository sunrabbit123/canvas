import React from "react";
import styled from "styled-components";
import RaiseTree from "./raise_tree";

const NavBlcok = styled.ul`
  width: 95%;
  text-align: center;
  display: block;
  list-style: none;
  margin: 0;
`;
const NavItem = styled.li`
  display: inline;
  margin: 10vh;
  font-size: 5vh;
  font-weight: 400;
`;

const Link = styled.a`
  color: #000;
  text-decoration: none;
  outline: none;
  &:hover {
    text-decoration: none;
    color: #000;
  }
  &:active {
    text-decoration: none;
    color: #000;
  }
`;

const Content = styled.article`
  height: 100%;
  width: 100%;
`;
const Container = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-rows: 1fr 9fr;
`;
const Header = styled.header`
  grid-row: 1;
`;
function App() {
  return (
    <Container>
      <Header>
        <nav>
          <NavBlcok>
            <NavItem>
              <Link href="./tetris">테트리스</Link>
            </NavItem>
            <NavItem>
              <Link href="./raise_tree">나무 기르기</Link>
            </NavItem>
          </NavBlcok>
        </nav>
      </Header>
      <Content>
        <RaiseTree />
      </Content>
    </Container>
  );
}

export default App;
