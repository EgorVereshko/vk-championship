import "./Footer.scss"

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div>
            <a href="#" className="footer__logo">
              VK
            </a>

            <p className="footer__description">
              Весенний чемпионат по дизайну
              и разработке.
            </p>
          </div>

          <div className="footer__links">
            <a href="#about">О чемпионате</a>
            <a href="#directions">Направления</a>
            <a href="#prizes">Призы</a>
            <a href="#subscribe">Участвовать</a>
          </div>

          <div className="footer__socials">
            <a href="#subscribe">VK</a>
            <a href="#subscribe">Telegram</a>
            <a href="mailto:hello@example.com">
              Email
            </a>
          </div>
        </div>

        <div className="footer__bottom">
          <span>© 2026 VK Education</span>
          <span>Сделано с интересом к технологиям</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;