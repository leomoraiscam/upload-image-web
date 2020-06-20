import React, { Component } from "react";
import { uniqueId } from "lodash";
import filesize from "filesize";
import GlobalStyle from "./styles/global";
import Upload from "./components/Upload";
import FileList from "./components/FileList";

import { Container, Content } from "./styles";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      uploadedFiles: [],
    };
  }

  handleUpload = (files) => {
    const uploadedFiles = files.map((file) => ({
      file,
      id: uniqueId(),
      name: file.name,
      readaleSize: filesize(file.size),
      preview: URL.createObjectURL(file),
      progress: 0,
      uploaded: false,
      error: false,
      url: null,
    }));

    this.setState({
      uploadedFiles: this.state.uploadedFiles.concat(uploadedFiles),
    });
  };

  render() {
    const { uploadedFiles } = this.state;

    return (
      <Container>
        <GlobalStyle />
        <Content>
          <Upload onUpload={this.handleUpload} />
          {!!uploadedFiles && <FileList files={uploadedFiles} />}
        </Content>
      </Container>
    );
  }
}

export default App;
