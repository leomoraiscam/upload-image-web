import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";

import { MdCheckCircle, MdError, MdLink } from "react-icons/md";

import { Container, FileInfo, Preview } from "./styles";

const FileList = () => (
  <Container>
    <ul>
      <li>
        <FileInfo>
          <Preview src="https://img.icons8.com/fluent/96/edit.png" />
          <div>
            <strong>Profile.png</strong>
            <span>
              64kb <button onClick={() => {}}>Excluir</button>
            </span>
          </div>
        </FileInfo>

        <div>
          <CircularProgressbar
            styles={{
              root: { width: 24 },
              path: { stroke: "#7159c1" },
            }}
            stokeWidth={10}
            percentage={60}
          />

          <a href="#" target="_blank" rel="noopener noreferrer">
            <MdLink style={{ marginRight: 8 }} size={24} color="#222222" />
          </a>

          <MdCheckCircle size={24} color="#78d5d5" />
          <MdError size={24} color="#e57878" />
        </div>
      </li>
    </ul>
  </Container>
);

export default FileList;
