import React from "react";
import GlobalStyle from "./styles/global";
import Upload from "./components/Upload";
import FileList from "./components/FileList";

import { Container, Content } from "./styles";

function App() {
  return (
    <Container>
      <GlobalStyle />
      <Content>
        <Upload />
        <FileList />
      </Content>
    </Container>
  );
}

export default App;
