import Reveal from "../Reveal/Reveal";
import "./About.scss";

function About() {
  return (
    <Reveal>
      <section className="section about" id="about">
        <div className="container">
          <div className="section__header">
            <p className="section__eyebrow">О ЧЕМПИОНАТЕ</p>

            <h2 className="section__title">
              Создавай.
              <br />
              Экспериментируй.
              <br />
              Побеждай.
            </h2>
          </div>

          <div className="about__content">
            <div className="about__text">
              <p>
                VK Education проводит весенний чемпионат для тех,
                кто хочет проверить свои навыки в дизайне и разработке.
              </p>

              <p>
                Участникам предстоит решать реальные задачи,
                работать над цифровыми продуктами и показать свой
                профессиональный уровень.
              </p>
            </div>

            <div className="about__stats">
              <div className="stat">
                <strong>2</strong>
                <span>направления</span>
              </div>

              <div className="stat">
                <strong>2026</strong>
                <span>год проведения</span>
              </div>

              <div className="stat">
                <strong>∞</strong>
                <span>возможностей</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Reveal>
  );
}

export default About;