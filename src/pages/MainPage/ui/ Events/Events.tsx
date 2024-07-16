import { classNames } from "shared/lib/classNames/classNames";
import styles from "./Events.module.scss";
import arrow from "shared/assets/icons/arrow.svg";
import zag from "shared/assets/icons/zag.svg";
import { useEffect, useState } from "react";
import { HttpApiMethods } from "features/Api/FetchUtils";
import { IGetEvents } from "features/Api/types";

interface EventsProps {
  className?: string;
}

const Events = ({ className }: EventsProps) => {
  const [eventsData, setEventsData] = useState<IGetEvents | null>(null);
  useEffect(() => {
    const fetchNews = async () => {
      const api = new HttpApiMethods();
      const events = await api.GetEvents();
      if (events) {
        setEventsData(events); // Assuming the news data is in the 'data' property
      }
    };

    fetchNews();
    console.log(eventsData);
  }, []);
  return (
    <section className={classNames(styles.Events, {}, [className])} id="events">
      <img className={styles.events__zag} src={zag} alt="декор" />
      <div className={styles.events_title__container}>
        <h2 className={styles.events_title}>Мероприятия</h2>
      </div>

      <div className={styles.events__container}>
        <div className={styles.events_card__container}>
          {eventsData?.data.map((event) => (
            <>
              <div key={event.id} className={styles.events_card}>
                <div className={styles.events_card__title}>
                  {event.attributes.title}
                </div>
                <div className={styles.events_card__descr}>
                  {event.attributes.descriptions}
                </div>
                <div className={styles.events_card__link}>
                  <a
                    href={event.attributes.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Участвовать <img src={arrow} alt="стрелка" />
                  </a>
                </div>
              </div>
              <div key={event.id} className={styles.standLine}></div>
            </>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;
