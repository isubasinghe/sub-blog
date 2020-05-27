import styled from "styled-components";
import theme from "../../theme";

const TextArea = styled.textarea`
  background-color: ${(props) => props.bg || theme.secondary};
  border: 2px solid ${theme.accent};
  color: ${theme.white};
  border-radius: 15px;
  padding-top: ${(props) => props.pt || "15px"};
  padding-bottom: ${(props) => props.pb || "15px"};
  padding-left: ${(props) => props.pl || "20px"};
  padding-right: ${(props) => props.pr || "20px"};
`;

export default TextArea;
