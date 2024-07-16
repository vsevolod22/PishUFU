import { classNames } from "shared/lib/classNames/classNames";
import styles from "./Competitions.module.scss";
import pishLogo from "shared/assets/icons/pish_logo.png";
import zag from "shared/assets/icons/zag.svg";
import thirdBlock from "shared/assets/icons/thirdBlock.png";
interface CompetitionsProps {
  className?: string;
}

const Competitions = ({ className }: CompetitionsProps) => {
  return (
    <section className={classNames(styles.Competitions, {}, [className])}>
      <img
        className={styles.competitions__img__zag_first}
        src={zag}
        alt="декор"
      />
      <img
        className={styles.competitions__img__zag_second}
        src={zag}
        alt="декор"
      />
      <img
        className={styles.competitions__img__zag_third}
        src={zag}
        alt="декор"
      />
      <img
        className={styles.competitions__img_block}
        src={thirdBlock}
        alt="декор"
      />
      <div className={styles.competitions_title__container}>
        <h2 className={styles.competitions_title}>Конкурсы</h2>
      </div>
      <div className={styles.competitions__container}>
        <div className={styles.competitions_card__container}>
          <div className={styles.competitions_card}>
            <div className={styles.competitions_card__column}>
              <div className={styles.competitions_card__title}>
                Конкурс по поддержке отдельных научных групп в Биотех центре
                АГНИ
              </div>
              <div className={styles.standLine}></div>
              <div className={styles.competitions_card__descr}>
                Стипендиальная программа предназначена для студентов 1-го курса
                магистратуры образовательных программ ПИШ, стремящихся
                трансформировать свои исследования и экспериментальные
                разработки в минимально жизнеспособный продукт (MVP).
              </div>
              <button
                className={classNames(styles.competitions_btn, {}, [
                  className,
                  styles.competitions_btn__text,
                ])}
              >
                Участвовать
              </button>
            </div>
            <div className={styles.competitions_img__container}>
              <img src={pishLogo} alt="Логотип ПИШ" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Competitions;
