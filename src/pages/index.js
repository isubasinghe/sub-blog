import React, { useState } from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import Layout from "../components/layout";
import { pages } from "../helpers/pagedata";
import ComponentContext from "../context/component";

const anchors = pages.reduce((accum = [], curr) => {
  accum.push(curr.key);
  return accum;
}, []);

const Index = () => {
  const [activeClass, setActiveClass] = useState(pages[0].key);
  return (
    <ComponentContext.Provider value={{ activeClass }}>
      <Layout>
        <ReactFullpage
          licenseKey="506D5FE4-268E4453-AC5FB1BA-ACFA05A5"
          anchors={anchors}
          onLeave={(_, dest) => {
            setActiveClass(pages[dest.index].key);
          }}
          render={({ state }) => {
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
    </ComponentContext.Provider>
  );
};

export default Index;
