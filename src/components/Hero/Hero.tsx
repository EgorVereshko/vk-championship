import "./Hero.scss"

function Hero() {
  return (
    <section className="hero">
      <div className="container hero__inner">
        <div className="hero__content">
          <p className="hero__eyebrow">
            VK EDUCATION · ВЕСНА 2026
          </p>

          <h1 className="hero__title">
            Чемпионат
            <br />
            <span>по дизайну</span>
            <br />
            и разработке
          </h1>

          <p className="hero__description">
            Создавай цифровые продукты, решай реальные задачи
            и покажи, на что способен.
          </p>

          <div className="hero__actions">
            <a href="#subscribe" className="button button--primary">
              Принять участие
            </a>

            <a href="#about" className="button button--secondary">
              Узнать больше
            </a>
          </div>
        </div>

        <div className="hero__visual" aria-hidden="true">
          <div className="hero__shape hero__shape--blue" />
          <div className="hero__shape hero__shape--purple" />
          <div className="hero__shape hero__shape--green" />

          <div className="hero__card">
            <span>01</span>
            <strong>CREATE</strong>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;