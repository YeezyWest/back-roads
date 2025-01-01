import aboutImg from "../images/about.jpeg";
import { Title } from "./title";

export const About = () => {
  return (
    <section className="section" id="about">
      <Title title="about" subTitle="us" />

      <div className="section-center about-center">
        <div className="about-img">
          <img src={aboutImg} className="about-photo" alt="awesome beach" />
        </div>
        <article className="about-info">
          <h3>explore the difference</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
            ipsam commodi error numquam quidem dolores placeat hic mollitia quo
            molestias!
          </p>
          <p>
           Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste accusantium delectus eum ad, et earum eaque error placeat id tempore odit nesciunt culpa maiores sequi est possimus reiciendis velit soluta aliquid sint fugit officiis quia! Reprehenderit, perspiciatis doloribus! Odit eaque beatae expedita voluptates assumenda deserunt, minima ipsam repellendus dicta vero.
          </p>
          <a href="#about" className="btn">
            read more
          </a>
        </article>
      </div>
    </section>
  );
};
