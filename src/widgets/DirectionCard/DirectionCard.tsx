
import {classNames} from "shared/lib/classNames/classNames";
import styles from './DirectionCard.module.scss'
import arrow from 'shared/assets/icons/arrow.png'

interface DirectionCardProps {
    backgroundPos?: string;
    title: string;
    backgroundImg: string;
    backgroundAlt: string;

}


const DirectionCard = ({backgroundPos, backgroundImg, title} : DirectionCardProps) => {
    return (
        <div className={classNames(styles.DirectionCard, {}, [])}>
            <img className={classNames(styles.directionCard__img, {}, [backgroundPos])} src={backgroundImg} alt=""/>
            <div className={styles.directionCard__container}>
                <div className={styles.directionCard__title}>{title}</div>
                <a className={styles.directionCard__link}>Подробнее <img src={arrow} alt='стрелка'/></a>
            </div>
        </div>
    );
};

export default DirectionCard;