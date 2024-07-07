
import {classNames} from "shared/lib/classNames/classNames";
import styles from './AboutUs.module.scss'
import question from 'shared/assets/icons/question.png'
import firstBlock from 'shared/assets/icons/firstBlock.png'
import secondBlock from 'shared/assets/icons/secondBlock.png'

interface AboutUsProps {
    className?: string;

}


const AboutUs = ({className} : AboutUsProps) => {
    return (
        <section className={classNames(styles.AboutUs, {}, [className])}>
           <div className={styles.aboutUs_title__container}>
               <h2 className={styles.aboutUs_title}>Кто мы<img className={styles.aboutUs_title__img} src={question} alt="?"/></h2>
           </div>
            <div className={classNames(styles.aboutUs_descr__container, {}, [className, styles.mt100])}>
                <div className={classNames(styles.aboutUs_descr__container, {}, [className, styles.aboutUs_descr__column])}>
                    <div className={styles.aboutUs_descr__text}>Передовая инженерная школа ЮФУ создана в 2022 году в партнёрстве с Государственной корпорацией «Ростех», АО «КРЭТ», Группой компаний «Элемент» и другими крупными технологическими партнёрами.</div>
                    <div className={classNames(styles.aboutUs_descr__text, {}, [className, styles.aboutUs_descr__mt]) }>ПИШ ЮФУ входит в ТОП 6 и является одной из самых больших Передовых инженерных школ в России, более 600 обучающихся.</div>
                </div>
                <div className={styles.aboutUs_descr__text}>Главные цели ПИШ ЮФУ — подготовка высококлассных инженерных кадров и генерация интеллектуальных технологий в области робототехнических комплексов и их ключевых компонентов: современные системы связи и навигации, сенсорика, элементы электронной компонентной базы, гидроакустика, искусственный интеллект, цифровые технологии и системы управления.</div>
            </div>
            <div className={styles.aboutUs_grid}>
                <img className={styles.aboutUs_grid__first} src={firstBlock} alt="декор"/>
                <img className={styles.aboutUs_grid__second} src={secondBlock} alt="декор"/>
            </div>
        </section>
    );
};

export default AboutUs;