import Container from "../Container/Container";

import { FaCircleCheck } from "react-icons/fa6";

import { TabsBtn, Title, Text, Text2 } from "../";

import "./SectionGoals.css";
import { Fragment, useState } from "react";

function SectionGoals() {
  const [tab, setTab] = useState(1);
  return (
    <section className="section-goals">
      <Container>
        <div className="section-goals-inner">
          <div className="section-goals-text">
            <Title>Main goals of the event</Title>
            <Text>
              Design must be functional, and functionality must be translate
              into visial aesthetics without any reliance on gimmicks that have
              to he explained.
            </Text>
            <Text2>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi, a
              iste inventore magnam officiis reiciendis? Laudantium provident
              autem ea optio? Laboriosam corrupti sequi odio temporibus
              recusandae ipsa ipsum fugit?
            </Text2>
          </div>
          <div className="section-goals-tabs-form">
            <div className={"tabs-header"}>
              <TabsBtn onClick={() => setTab(1)} isActive={tab === 1}>
                Learning object
              </TabsBtn>
              <TabsBtn onClick={() => setTab(2)} isActive={tab === 2}>
                Target audience
              </TabsBtn>
            </div>
            {tab === 1 ? (
              <div className={"tabs-content"}>
                <div className="tabs-text">
                  <Text2>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Sint, nihil. Neque quidem temporibus quisquam explicabo
                    soluta. Fugit aperiam ad vero!
                  </Text2>
                </div>
                <div className="tabs-li-img">
                  <ul className="tabs-li">
                    <li>
                      <FaCircleCheck color="rgb(44, 199, 193)" />
                      <Text2>Lorem ipsum dolor sit amet.</Text2>
                    </li>
                    <li>
                      <FaCircleCheck color="rgb(44, 199, 193)" />
                      <Text2>Lorem ipsum dolor sit amet.</Text2>
                    </li>
                    <li>
                      <FaCircleCheck color="rgb(44, 199, 193)" />
                      <Text2>Lorem ipsum dolor sit amet.</Text2>
                    </li>
                    <li>
                      <FaCircleCheck color="rgb(44, 199, 193)" />
                      <Text2>Lorem ipsum dolor sit amet.</Text2>
                    </li>
                  </ul>
                  <div className="tabs-img">
                    <img
                      src="https://eventide-event-landing-page.netlify.app/images/about/Img_Here.png"
                      alt="asasa"
                    />
                  </div>
                </div>
              </div>
            ) : (
              <div className={"tabs-content"}>
                <div className="tabs-text">
                  <Text2>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Sint, nihil. Neque quidem temporibus quisquam explicabo
                    soluta. Fugit aperiam ad vero!
                  </Text2>
                </div>
                <div className="tabs-img">
                  <img
                    src="https://eventide-event-landing-page.netlify.app/images/about/Img_Here.png"
                    alt="asasa"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}

export default SectionGoals;
