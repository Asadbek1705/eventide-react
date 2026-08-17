import Container from "../Container/Container";
import { RegisterBtn, DiscoverBtn } from "../RegisterBtn/RegisterBtn";

import "./SectionPreview.css";

function SectionPreview() {
  const clickAlert = () => {
    alert("Registered!");
  };
  return (
    <section className="preview">
      <Container>
        <div className="preview-inner">
          <img
            src="https://eventide-event-landing-page.netlify.app/images/header/Logo.png"
            alt="slldl"
          />
          <div className="preview-data">
            <h1>November 08-10 | Sydney</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reiciendis id libero ratione, quod error nulla! Facere, sequi
              dignissimos! Quidem, quibusdam?
            </p>
          </div>
          <div className="preview-buttons">
            <RegisterBtn onClick={clickAlert} />
            <DiscoverBtn />
          </div>
        </div>
      </Container>
    </section>
  );
}

export default SectionPreview;
