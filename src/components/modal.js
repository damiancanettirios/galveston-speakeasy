import React from "react"
import styled from "@emotion/styled"

const StyledModal = styled("div")`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.9);
  display: inline-block;
  text-align: center;
  transition: 1.1s ease-out;
`

const Modal = ({ children }) => {
  return <StyledModal>{children}</StyledModal>
}

export default Modal
