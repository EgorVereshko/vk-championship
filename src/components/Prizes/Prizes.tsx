import Reveal from "../Reveal/Reveal";
import "./Prizes.scss"

const prizes = [
  {
    place: "01",
    title: "Первое место",
    prize: "100 000 ₽",
  },
  {
    place: "02",
    title: "Второе место",
    prize: "50 000 ₽",
  },
  {
    place: "03",
    title: "Третье место",
    prize: "30 000 ₽",
  },
];

function Prizes() {
  return (
    <Reveal>
      <section className="section prizes" id="prizes">
        <div className="container">
          <div className="section__header">
            <p className="section__eyebrow">ПРИЗЫ</p>

            <h2 className="section__title">
              Хорошая работа
              <br />
              должна быть
              <br />
              вознаграждена.
            </h2>
          </div>

          <div className="prizes__list">
            {prizes.map((item) => (
              <div className="prize" key={item.place}>
                <span className="prize__place">{item.place}</span>

                <span className="prize__title">
                  {item.title}
                </span>

                <strong className="prize__amount">
                  {item.prize}
                </strong>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Reveal>
  );
}

export default Prizes;