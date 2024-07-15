
import {classNames} from "shared/lib/classNames/classNames";
import styles from './News.module.scss'
import plus from 'shared/assets/icons/plus.svg';
import minus from 'shared/assets/icons/minus.svg';
import React, {useState} from "react";
const newsData = [
    {
        title: 'День открытых дверей ИКТИБ',
        description: `Не знаешь, с чего начать свой бизнес? 
Подай заявку на конкурс «Студенческий стартап», получи грант в 1 млн рублей, создай стартап
и стань руководителем компании.
Реализуй проект и развивай свой бизнес!

А если хочешь узнать подробнее, подключайся к вебинару 25 марта в 16:30 и ты
узнаешь: 
— что такое программа «Студенческий стартап»;
— как правильно подать заявку;
— какие критерии отбора;
— что изменилось в процедуре отбора в этой очереди конкурса.

Региональный представитель в Ростовской области Фонда содействия инновациям — Анна Пушенко в
прямом эфире ответит на все ваши вопросы 
Получить ссылку на вебинар можно здесь https://forms.yandex.ru/u/65f84cfc3e9d081e3381a752/`
    },
    {
        title: 'День открытых дверей ИКТИБ',
        description: `Не знаешь, с чего начать свой бизнес? 
Подай заявку на конкурс «Студенческий стартап», получи грант в 1 млн рублей, создай стартап
и стань руководителем компании.
Реализуй проект и развивай свой бизнес!

А если хочешь узнать подробнее, подключайся к вебинару 25 марта в 16:30 и ты
узнаешь: 
— что такое программа «Студенческий стартап»;
— как правильно подать заявку;
— какие критерии отбора;
— что изменилось в процедуре отбора в этой очереди конкурса.

Региональный представитель в Ростовской области Фонда содействия инновациям — Анна Пушенко в
прямом эфире ответит на все ваши вопросы 
Получить ссылку на вебинар можно здесь https://forms.yandex.ru/u/65f84cfc3e9d081e3381a752/`
    },
    {
        title: 'День открытых дверей ИКТИБ',
        description: `Не знаешь, с чего начать свой бизнес? 
Подай заявку на конкурс «Студенческий стартап», получи грант в 1 млн рублей, создай стартап
и стань руководителем компании.
Реализуй проект и развивай свой бизнес!

А если хочешь узнать подробнее, подключайся к вебинару 25 марта в 16:30 и ты
узнаешь: 
— что такое программа «Студенческий стартап»;
— как правильно подать заявку;
— какие критерии отбора;
— что изменилось в процедуре отбора в этой очереди конкурса.

Региональный представитель в Ростовской области Фонда содействия инновациям — Анна Пушенко в
прямом эфире ответит на все ваши вопросы 
Получить ссылку на вебинар можно здесь https://forms.yandex.ru/u/65f84cfc3e9d081e3381a752/`
    }
];

interface NewsProps {
    className?: string;

}


const News = ({className} : NewsProps) => {
    const [expandedIndex, setExpandedIndex] = useState(null);

    const handleToggle = (index : number) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };
    return (
        <section className={classNames(styles.News, {}, [className])}>
            <div className={styles.news_title__container}>
                <h2 className={styles.news_title}>Новости</h2>
            </div>
            <div className={styles.news__container}>
                <div className={styles.news_card__container}>
                    {newsData.map((news, index) => (
                        <div className={classNames(styles.news_card , {}, [])} key={index}>
                            <div style={expandedIndex === index ? null : {margin: 0, transition: '0.5s margin ease-in'}} className={styles.news_card__title}>{news.title}
                                <img
                                    className={styles.news_card__title_img}
                                    src={expandedIndex === index ? minus : plus}
                                    alt={expandedIndex === index ? 'minus' : 'plus'}
                                    onClick={() => handleToggle(index)}
                                />
                            </div>
                            <>
                                    <div className={classNames(styles.standLine, {}, [expandedIndex === index ? styles.expand : styles.collapse])}></div>
                                    <div className={classNames(styles.news_card__descr, {}, [expandedIndex === index ? styles.expand : styles.collapse])}>
                                        {news.description.split('\n').map((line, index) => (
                                            <React.Fragment key={index}>
                                                {line}
                                                <br/>
                                            </React.Fragment>
                                        ))}
                                    </div>
                            </>
                        </div>
                    ))}


                </div>

                <div className={styles.news_grid}>

                </div>
            </div>

        </section>
    );
};

export default News;