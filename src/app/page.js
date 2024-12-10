"use client";

import { ReactLenis } from "@studio-freight/react-lenis";
import ParallaxImage from "./ParallaxImage";

export default function Home() {
  return (
    <ReactLenis root>
      <div className="app">
        <section className="hero">
          <div className="img">
            <ParallaxImage src="/portraits/image1.avif" alt="" />
          </div>
          <div className="nav">
            <p>Tour</p>
            <p>Updates</p>
            <p>Contact</p>
            <p>Merch </p>
          </div>
        </section>
        <section className="projects">
          <div className="img">
            <ParallaxImage src="/portraits/image2.avif" alt="" />
          </div>
          <div className="projects-brief">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
              eos doloremque inventore nulla sapiente deserunt veniam voluptatem
              quibusdam, eaque, alias minus consectetur neque dolor numquam?
            </p>
          </div>
          <div className="col projects-cover">
            <div className="img">
              <ParallaxImage src="/portraits/image7.avif" alt="" />
            </div>
          </div>
          <div className="col projects-list">
            <div className="project">
              <h1>Sunrise</h1>
              <p>Apple Music / Spotify / YouTube</p>
            </div>
            <div className="project">
              <h1>Moonlight</h1>
              <p>Apple Music / Spotify / YouTube</p>
            </div>
            <div className="project">
              <h1>Starlight</h1>
              <p>Apple Music / Spotify / YouTube</p>
            </div>
            <div className="project">
              <h1>Twilight</h1>
              <p>Apple Music / Spotify / YouTube</p>
            </div>
          </div>
        </section>
        <section className="about">
          <div className="col intro">
            <p>Introduction</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
              voluptatem dolorem asperiores eveniet commodi adipisci maxime
              assumenda! Asperiores nam facilis quae! Illo, voluptatibus!
              Voluptatem, suscipit.
            </p>
          </div>
          <div className="col portrait">
            <div className="portrait-container">
              <div className="img">
                <ParallaxImage src="/portraits/image4.avif" alt="" />
              </div>
            </div>
          </div>
        </section>
        <section className="banner">
          <div className="img">
            <ParallaxImage src="/portraits/image5.avif" alt="" />
          </div>
          <div className="banner-copy">
            <p>Be the</p>
            <h1>First to know</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione
              optio voluptate consequatur saepe, quaerat vitae.
            </p>
            <button>Join the newsletter</button>
          </div>
        </section>
        <section className="footer">
          <div className="col">
            <p>Instagram / Twitter / Discord</p>
            <div className="footer-links">
              <p>Menu</p>
              <h1>Tour</h1>
              <h1>Updates</h1>
              <h1>Contact</h1>
              <h1>Merch </h1>
            </div>
            <p>&copy; Designed by TatvaTech</p>
          </div>
          <div className="col">
            <p>
              Join the newsletter <br />
              <button>Subscribe</button>
            </p>
            <div className="shop">
              <div className="img">
                <ParallaxImage src="/portraits/image6.avif" alt="" />
              </div>
            </div>
            <p>Apple Music / Spotify / YouTube</p>
          </div>
        </section>
      </div>
    </ReactLenis>
  );
}
