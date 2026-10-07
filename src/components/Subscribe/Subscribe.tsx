import Reveal from "../Reveal/Reveal";
import "./Subscribe.scss"

import { useState } from "react";

function Subscribe() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!email.includes("@")) {
      return;
    }

    setSubmitted(true);
    setEmail("");
  };

  return (
    <Reveal>
      <section className="section subscribe" id="subscribe">
        <div className="container">
          <div className="subscribe__box">
            <p className="section__eyebrow">НЕ ПРОПУСТИ</p>

            <h2 className="subscribe__title">
              Хочешь участвовать?
            </h2>

            <p className="subscribe__description">
              Оставь email — расскажем о старте регистрации
              и новых этапах чемпионата.
            </p>

            {submitted ? (
              <div className="subscribe__success">
                ✓ Спасибо! Мы сообщим о старте.
              </div>
            ) : (
              <form
                className="subscribe__form"
                onSubmit={handleSubmit}
              >
                <label htmlFor="subscribe-email" className="sr-only">
                  Email
                </label>

                <input
                  id="subscribe-email"
                  name="email"
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  required
                  autoComplete="email"
                />

                <button type="submit">
                  Подписаться
                </button>
              </form>
            )}

            <p className="subscribe__hint">
              Никакого спама. Только новости чемпионата.
            </p>
          </div>
        </div>
      </section>
    </Reveal>
  );
}

export default Subscribe;