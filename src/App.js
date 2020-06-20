import React, { Component } from "react";
import GlobalStyle from "./styles/global";
import Upload from "./components/Upload";
import FileList from "./components/FileList";

import { Container, Content } from "./styles";

export default class App extends Component {
  state = {
    uploadedFiles: [],
  };

  handleUpload = (files) => {
    console.log(files);
  };

  render() {
    return (
      <Container>
        <GlobalStyle />
        <Content>
          <Upload onUpload={this.handleUpload} />
          <FileList />
        </Content>
      </Container>
    );
  }
}
