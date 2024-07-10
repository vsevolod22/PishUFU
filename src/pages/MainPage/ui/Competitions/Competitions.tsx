
import {classNames} from "shared/lib/classNames/classNames";
import styles from './Competitions.module.scss'
import pishLogo from "shared/assets/icons/pish_logo.png";


interface CompetitionsProps {
    className?: string;

}


const Competitions = ({className} : CompetitionsProps) => {
    return (
        <section className={classNames(styles.Competitions, {}, [className])}>
            <div className={styles.competitions_title__container}>
                <h2 className={styles.competitions_title}>Конкурсы</h2>
            </div>
            <div className={styles.competitions__container}>
                <div className={styles.competitions_card__container}>
                    <div className={styles.competitions_card}>
                        <div className={styles.competitions_card__column}>
                            <div className={styles.competitions_card__title}>Конкурс по поддержке отдельных научных групп в Биотех центре АГНИ</div>
                            <div className={styles.standLine}></div>
                            <div className={styles.competitions_card__descr}>
                                Стипендиальная программа предназначена для студентов 1-го курса магистратуры
                                образовательных программ ПИШ, стремящихся трансформировать свои исследования
                                и экспериментальные разработки в минимально жизнеспособный продукт (MVP).
                            </div>
                            <button
                                className={classNames(styles.competitions_btn, {}, [className, styles.competitions_btn__text])}>Участвовать
                            </button>
                        </div>
                        <div className={styles.competitions_img__container}>
                            <img src={pishLogo} alt='Логотип ПИШ'/>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Competitions;