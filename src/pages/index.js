import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import Layout from "../components/layout";
import Intro from "../components/intro";
import About from "../components/about";

const pages = [
  { component: Intro, key: "intro" },
  { component: About, key: "about" },
];

const Index = () => {
  return (
    <Layout>
      <ReactFullpage
        licenseKey="506D5FE4-268E4453-AC5FB1BA-ACFA05A5"
        onLeave={() => {}}
        render={({ state, fullpageApi }) => {
          const activeIndex = state?.destination?.index || 0;
          return (
            <ReactFullpage.Wrapper>
              {pages.map((page, index) => {
                const Component = page.component;
                return (
                  <div className={`section ${page.key}`} key={page.key}>
                    <Component active={activeIndex === index} />
                  </div>
                );
              })}
            </ReactFullpage.Wrapper>
          );
        }}
      />
    </Layout>
  );
};

export default Index;
