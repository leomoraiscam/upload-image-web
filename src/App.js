import React from "react";
import GlobalStyle from "./styles/global";
import Upload from "./components/Upload";

import { Container, Content } from "./styles";

function App() {
  return (
    <Container>
      <GlobalStyle />
      <Content>
        <Upload />
      </Content>
    </Container>
  );
}

export default App;
