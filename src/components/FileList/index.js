import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import { MdCheckCircle, MdError, MdLink } from "react-icons/md";

import { Container, FileInfo, Preview } from "./styles";

const FileList = ({ files }) => (
  <Container>
    {files.map((file) => (
      <>
        {console.log(file)}{" "}
        <li>
          <FileInfo>
            <Preview src={file.preview} />
            <div>
              <strong>{file.name}</strong>
              <span>
                {file.readaleSize}
                {!!file.url && <button onClick={() => {}}>Excluir</button>}
              </span>
            </div>
          </FileInfo>

          <div>
            {!file.uploaded && !file.error && (
              <CircularProgressbar
                styles={{
                  root: { width: 24 },
                  path: { stroke: "#7159c1" },
                }}
                stokeWidth={10}
                percentage={file.progress}
              />
            )}

            {file.url && (
              <a href={file.url} target="_blank" rel="noopener noreferrer">
                <MdLink style={{ marginRight: 8 }} size={24} color="#222222" />
              </a>
            )}

            {file.uploaded && <MdCheckCircle size={24} color="#78d5d5" />}
            {file.error && <MdError size={24} color="#e57878" />}
          </div>
        </li>
      </>
    ))}
  </Container>
);

export default FileList;
