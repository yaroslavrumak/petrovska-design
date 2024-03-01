import { useState } from "react";
import Header from "./components/UI/Header";
import Section from "./components/basic/Section";
import VideoSection from "./components/sections/VideoSection";
import AboutSection from "./components/sections/AboutSection";
import Footer from "./components/UI/Footer";
function App() {
  return (
    <>
      <Header />
      <main>
        <article>
          <Section type="hero">
            <VideoSection
              src={
                "https://www.aromasdelcampo.com/wp-content/uploads/2021/06/Video-company_recorte-1-1.mov"
              }
            />
          </Section>
          <Section type="regular" id="about">
            <AboutSection />
          </Section>
        </article>
      </main>
      <Footer />
    </>
  );
}

export default App;
