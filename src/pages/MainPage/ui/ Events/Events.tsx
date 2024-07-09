
import {classNames} from "shared/lib/classNames/classNames";
import styles from './Events.module.scss'
import arrow from 'shared/assets/icons/arrow.svg'

interface EventsProps {
    className?: string;

}


const Events = ({className} : EventsProps) => {
    return (
        <section className={classNames(styles.Events, {}, [className])} id='events'>
            <div className={styles.events_title__container}>
                <h2 className={styles.events_title}>Мероприятия</h2>
            </div>

            <div className={styles.events__container}>
                <div className={styles.events_card__container}>
                    <div className={styles.events_card}>
                        <div className={styles.events_card__title}>День открытых дверей ИКТИБ</div>
                        <div className={styles.events_card__descr}>Международная конференция по индустриальной
                            биотехнологии! Три насыщенных дня докладов международных ученых.
                        </div>
                        <div className={styles.events_card__link}>Участвовать <img src={arrow} alt='стрелка'/></div>
                    </div>
                    <div className={styles.standLine}></div>
                    <div className={styles.events_card}>
                        <div className={styles.events_card__title}>Хакатон Cyber Garden 16</div>
                        <div className={styles.events_card__descr}>Хакатон, в рамках которого участники 48 часов бустили свои проекты вместе с экспертами и прокачивали скилл работы в команде.
                        </div>
                        <div className={styles.events_card__link}>Участвовать <img src={arrow} alt='стрелка'/></div>
                    </div>
                    <div className={styles.standLine}></div>
                    <div className={styles.events_card}>
                        <div className={styles.events_card__title}>Startup Battle</div>
                        <div className={styles.events_card__descr}>Трехдневный интенсив в сфере гражданской науки. В ходе мероприятия участники собрали микробные топливные элементы и пр.
                        </div>
                        <div className={styles.events_card__link}>Участвовать <img src={arrow} alt='стрелка'/></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Events;