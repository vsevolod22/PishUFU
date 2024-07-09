
import {classNames} from "shared/lib/classNames/classNames";
import styles from './News.module.scss'
import plus from 'shared/assets/icons/plus.svg';
import minus from 'shared/assets/icons/minus.svg';


interface NewsProps {
    className?: string;

}


const News = ({className} : NewsProps) => {
    return (
        <section className={classNames(styles.News, {}, [className])}>
            <div className={styles.news_title__container}>
                <h2 className={styles.news_title}>Новости</h2>
            </div>
            <div className={styles.news__container}>
                <div className={styles.news_card__container}>
                    <div className={styles.news_card}>
                        <div className={styles.news_card__title}>День открытых дверей ИКТИБ <img
                            className={styles.news_card__title_img} src={minus} alt='minus'/></div>
                        <div className={styles.standLine}></div>
                        <div className={styles.news_card__descr}>
                            Не знаешь, с чего начать свой бизнес? <br/>
                            Подай заявку на конкурс «Студенческий стартап», получи грант в 1 млн рублей, создай стартап
                            и стань <br/> руководителем компании.<br/>
                            Реализуй проект и развивай свой бизнес!<br/>

                            А если хочешь узнать подробнее, подключайся к вебинару 25 марта в 16:30 и ты
                            узнаешь: <br/> — что
                            такое программа «Студенческий стартап»;<br/> — как правильно подать заявку;<br/> — какие
                            критерии
                            отбора;<br/> — что изменилось в процедуре отбора в этой очереди конкурса.

                            Региональный представитель в Ростовской области Фонда содействия инновациям — Анна Пушенко в
                            прямом <br/> эфире ответит на все ваши вопросы <br/>
                            Получить ссылку на вебинар можно здесь https://forms.yandex.ru/u/65f84cfc3e9d081e3381a752/
                        </div>
                    </div>
                    <div className={styles.news_card}>
                        <div className={styles.news_card__title}>День открытых дверей ИКТИБ <img
                            className={styles.news_card__title_img} src={minus} alt='minus'/></div>
                        <div className={styles.standLine}></div>
                        <div className={styles.news_card__descr}>
                            Не знаешь, с чего начать свой бизнес? <br/>
                            Подай заявку на конкурс «Студенческий стартап», получи грант в 1 млн рублей, создай стартап
                            и стань <br/> руководителем компании.<br/>
                            Реализуй проект и развивай свой бизнес!<br/>

                            А если хочешь узнать подробнее, подключайся к вебинару 25 марта в 16:30 и ты
                            узнаешь: <br/> — что
                            такое программа «Студенческий стартап»;<br/> — как правильно подать заявку;<br/> — какие
                            критерии
                            отбора;<br/> — что изменилось в процедуре отбора в этой очереди конкурса.

                            Региональный представитель в Ростовской области Фонда содействия инновациям — Анна Пушенко в
                            прямом <br/> эфире ответит на все ваши вопросы <br/>
                            Получить ссылку на вебинар можно здесь https://forms.yandex.ru/u/65f84cfc3e9d081e3381a752/
                        </div>
                    </div>

                </div>

                <div className={styles.news_grid}>

                </div>
            </div>

        </section>
    );
};

export default News;