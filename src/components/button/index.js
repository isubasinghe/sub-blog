import styled from "styled-components";
import theme from "../../theme";

const Button = styled.button`
  background-color: ${theme.primary};
  border: 2px solid ${theme.accent};
  color: ${theme.white};
  border-radius: 5px;
  padding-top: ${(props) => props.pt || "10px"};
  padding-bottom: ${(props) => props.pb || "10px"};
  padding-left: ${(props) => props.pl || "60px"};
  padding-right: ${(props) => props.pr || "60px"};
`;

export default Button;
