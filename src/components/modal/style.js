import styled from "styled-components";

const ModalOptions = styled.div`
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: fixed;
`;

export const ModalOverlay = styled(ModalOptions)`
  background: rgba(49, 49, 49, 0.8);
`
export const ModalContainer = ModalOptions;

export const ModalContent = styled.div`
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  line-height: 1.4;
  background: #f1f1f1;
  padding: 14px 28px;
  border-radius: 3px;
  max-width: 600px;
  min-width: 300px;
`;

export const ModalCloseButton = styled.button`
  display: flex;
  border-style: hidden;
  background-color: transparent;
  cursor: pointer;
  font-size: large;
`;