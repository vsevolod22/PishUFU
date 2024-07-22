import { classNames } from "shared/lib/classNames/classNames";
import styles from "./Footer.module.scss";
import round from "shared/assets/icons/round.svg";
import telegram from "shared/assets/icons/telegram.png";
import vk from "shared/assets/icons/vk.png";

interface FooterProps {
  className?: string;
}

const Footer = ({ className }: FooterProps) => {
  return (
    <footer id="footer" className={classNames(styles.Footer, {}, [className])}>
      <div className={styles.footer_img__container}>
        <img alt="backImg" src={round} />
      </div>
      <div className={styles.footer_contacts__container}>
        <div className={styles.footer_contacts__title}>Контакты</div>
        <div className={styles.footer_contacts__icons}>
          <a href="https://vk.com/pish_sfedu" target="_blank">
            <img src={vk} alt="vk" />
          </a>
          <a href="https://t.me/pish_sfedu" target="_blank">
            <img src={telegram} alt="telegram" />
          </a>
        </div>
      </div>
      <div className={styles.footer_address__container}>
        <span className={styles.footer_address}>Email: pish@sfedu.ru</span>
        <span className={styles.footer_address}>
          Телефон: 8 (863) 218-40-00 доб. 30116
        </span>
        <span className={styles.footer_address}>
          Адрес: 347900, ул. Петровская, 81, г. Таганрог. Ростовская область
        </span>
      </div>
    </footer>
  );
};

export default Footer;
