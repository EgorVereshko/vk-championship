import Reveal from "../Reveal/Reveal";
import "./Directions.scss"

const directions = [
  {
    number: "01",
    title: "Разработка",
    description:
      "Создавай интерфейсы и цифровые продукты, используя современные технологии.",
    tags: ["Frontend", "React", "TypeScript"],
  },
  {
    number: "02",
    title: "Дизайн",
    description:
      "Придумывай визуальные решения и проектируй удобные цифровые интерфейсы.",
    tags: ["UI/UX", "Figma", "Motion"],
  },
];

function Directions() {
  return (
    <Reveal>
      <section className="section directions" id="directions">
        <div className="container">
          <div className="section__header">
            <p className="section__eyebrow">НАПРАВЛЕНИЯ</p>

            <h2 className="section__title">
              Выбирай своё
              <br />
              направление.
            </h2>
          </div>

          <div className="directions__grid">
            {directions.map((direction) => (
              <article className="direction-card" key={direction.number}>
                <span className="direction-card__number">
                  {direction.number}
                </span>

                <div>
                  <h3>{direction.title}</h3>

                  <p>{direction.description}</p>

                  <div className="direction-card__tags">
                    {direction.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </Reveal>
  );
}

export default Directions;