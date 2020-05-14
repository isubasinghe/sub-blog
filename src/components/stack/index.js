import styled from "styled-components";

const Stack = styled.div`
  margin-top: ${(props) => props.mt || "10px"};
  margin-bottom: ${(props) => props.mb || "10px"};
  margin-left: ${(props) => props.ml || "0px"};
  margin-right: ${(props) => props.mr || "0px"};
`;

export default Stack;
