
import {classNames} from "shared/lib/classNames/classNames";
import styles from './Events.module.scss'


interface EventsProps {
    className?: string;

}


const Events = ({className} : EventsProps) => {
    return (
        <section className={classNames(styles.Events, {}, [className])}>
            <div className={styles.events_title__container}>
                <h2 className={styles.events_title}>Мероприятия</h2>
            </div>
        </section>
    );
};

export default Events;