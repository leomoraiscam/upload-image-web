import styled, { css } from "styled-components";

const dragActive = css`
  border-color: #78e5d5;
`;

const dragReject = css`
  border-color: #e57878;
`;

const messageColors = {
  default: "#999999",
  error: "#e57878",
  sucess: "#78e5d5",
};

export const DropContainer = styled.div.attrs({
  className: "dropzone",
})`
  border: 1px dashed #dddddd;
  border-radius: 4px;
  cursor: pointer;
  transition: height 0.2s ease;

  ${(props) => props.isDragActive && dragActive};
  ${(props) => props.isDragReject && dragReject}
`;

export const UploadMessage = styled.p`
  padding: 15px 0px;
  color: ${(props) => messageColors[props.type || "default"]};
  display: flex;
  align-items: center;
  justify-content: center;
`;
