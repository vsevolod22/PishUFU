
import {classNames} from "shared/lib/classNames/classNames";
import styles from './DirectionCard.module.scss'
import arrow from 'shared/assets/icons/arrow.svg'

interface DirectionCardProps {
    backgroundStyle?: string;
    title: string;
    backgroundImg: string;
    backgroundAlt: string;
    setTitleButton: (title: string) => void;
    CardDisplay: object;
    cardClassName?: string;


}


const DirectionCard = ({backgroundStyle, backgroundImg, backgroundAlt, title, setTitleButton, CardDisplay, cardClassName} : DirectionCardProps) => {
    console.log(cardClassName)



    return (

        <div style={CardDisplay} className={classNames(styles.DirectionCard, {}, [cardClassName, styles.directionCard__pos])}>
            {cardClassName?.includes('cardStyle') ? <><img
                    className={classNames(styles.directionCard__img, {}, [backgroundStyle])} src={backgroundImg}
                    alt={backgroundAlt}/>
                    <div className={styles.directionCard__container}>
                        <div className={styles.directionCard__title}>{title}</div>
                        <div onClick={() => setTitleButton('')} className={styles.directionCard__link_open}>Скрыть <img
                            className={styles.directionCard_arrow__rotate} src={arrow} alt='стрелка'/></div>
                    </div>
                    <div className={styles.line}></div>
                    <div className={styles.table__title}>Образовательные <br/> программы</div>
                    <table className={styles.table}>
                        <thead>
                        <tr>
                            <th>Код специальности</th>
                            <th>Наименование</th>

                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>09.03.01</td>
                            <td>Программирование и системная интеграция ИТ-решений</td>

                        </tr>
                        <tr>
                            <td>11.03.01</td>
                            <td>Цифровые радиотехнические средства связи, локации и защиты информации</td>

                        </tr>

                        </tbody>
                    </table>
                </> :
                <><img className={classNames(styles.directionCard__img, {}, [backgroundStyle])} src={backgroundImg}
                       alt={backgroundAlt}/>
                    <div className={styles.directionCard__container}>
                        <div className={styles.directionCard__title}>{title}</div>
                        <div onClick={() => setTitleButton(title)} className={styles.directionCard__link}>Подробнее <img
                            src={arrow} alt='стрелка'/></div>
                    </div>
                </>

            }
        </div>
    );
};

export default DirectionCard;