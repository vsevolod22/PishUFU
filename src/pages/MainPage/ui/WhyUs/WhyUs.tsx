
import {classNames} from "shared/lib/classNames/classNames";
import styles from './WhyUs.module.scss'
import question from "shared/assets/icons/question.png";
import thirdBlock from "shared/assets/icons/thirdBlock.png";


interface WhyUsProps {
    className?: string;

}


const WhyUs = ({className} : WhyUsProps) => {
    return (
        <section className={classNames(styles.WhyUs, {}, [className])}>
            <div className={styles.whyUs_title__container}>
                <h2 className={styles.whyUs_title}>Почему мы<img className={styles.whyUs_title__img} src={question} alt="?"/></h2>
            </div>
            <img className={styles.whyUs_descr__img} src={thirdBlock} alt="декор"/>
            <div className={styles.whyUs_descr__containerRow}>

                <div className={styles.whyUs_descr__containerColumn}>
                    <span className={classNames(styles.whyUs_descr__text, {}, [styles.whyUs_descr__fist])}>Учись в IT столице <br/> России </span>
                    <span className={classNames(styles.whyUs_descr__text, {}, [styles.whyUs_descr__second])}>В топ-6 ПИШей по стане, <br/> лучший на юге</span>
                    <span className={classNames(styles.whyUs_descr__text, {}, [styles.whyUs_descr__third])}>200 солнечных дней <br/> в году</span>
                    <span className={classNames(styles.whyUs_descr__text, {}, [styles.whyUs_descr__fourth])}>Сотни современных <br/> лабораторий</span>
                    <span className={classNames(styles.whyUs_descr__text, {}, [styles.whyUs_descr__fifth])}>Готовим передовых <br/> инженеров с 1952 года</span>
                </div>
            </div>

        </section>
    );
};

export default WhyUs;