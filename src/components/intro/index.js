import React from "react";
// import ReactDOM from "react-dom";
import styled from "styled-components";
import { Helmet } from "react-helmet";
// import { Canvas, useFrame, useThree } from "react-three-fiber/css3d";
// import { CSS3DObject } from "three/examples/jsm/renderers/CSS3DRenderer";
import Button from "../button";
import theme from "../../theme";

const IntroContainer = styled.div`
  background-color: ${theme.secondary};
  height: 100%;
  width: 100%;
`;

const H1 = styled.h1`
  color: ${theme.white};
  font-size: 3rem;
`;

const Hello = styled.div`
  font-size: 3.5rem;
`;

const Container = styled.div`
  margin: 0 auto;
  height: 100%;
  max-width: 80vw;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  @media only screen and (max-width: 950px) {
    justify-content: center;
  }
`;

const TextContainer = styled.div`
  width: 100%;
`;

// const CodeCard = styled.div`
//   border-radius: 5px;
//   background-color: ${theme.primary};
//   padding: 1px;
//   color: ${theme.white};
// `;

// function DOMObject({ dom }) {
//   const { scene } = useThree();
//   const ref = useRef(null);
//   useFrame(
//     () => (ref.current.rotation.y = Math.sin((ref.current.rotation.y += 0.01)))
//   );
//   useEffect(() => {
//     ref.current = new CSS3DObject(dom.current);
//     scene.add(ref.current);
//     return () => scene.remove(ref.current);
//   }, [dom, scene]);
//   return null;
// }

// const Portal = ({ children }) => {
//   const root = useMemo(() => document.createElement("div"), []);
//   return ReactDOM.createPortal(<Fragment>{children}</Fragment>, root);
// };

const Intro = ({ active }) => {
  // const ref = useRef();
  return (
    <>
      {active && <Helmet title="Istha Subasinghe" />}
      <IntroContainer>
        <Container>
          <TextContainer>
            <H1>
              <Hello>Hello,</Hello>
              <br />
              I am Isitha,
              <br />a polyglot software engineer
            </H1>
            <br />
            <a href="#contact">
              <Button>CONTACT ME</Button>
            </a>
          </TextContainer>
          {/* <Canvas camera={{ position: [0, 0, 60] }}>
            <DOMObject dom={ref} />
          </Canvas> */}
        </Container>
      </IntroContainer>
      {/* <Portal>
        <CodeCard ref={ref}>Hello</CodeCard>
      </Portal> */}
    </>
  );
};

export default Intro;
