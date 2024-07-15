
import {classNames} from "shared/lib/classNames/classNames";
import styles from './DirectionCard.module.scss'
import arrow from 'shared/assets/icons/arrow.svg'
import link from 'shared/assets/icons/Link.svg'
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
                            <td>09.03.01 <a href="#"><img src={link} alt="arrow"/></a></td>
                            <td>Программирование и системная интеграция ИТ-решений</td>

                        </tr>
                        <tr>
                            <td>11.03.01 <a href="#"><img src={link} alt="arrow"/></a></td>
                            <td>Цифровые радиотехнические средства связи, локации и защиты информации</td>

                        </tr>
                        <tr>
                            <td>11.03.02 <a href="#"><img src={link} alt="arrow"/></a></td>
                            <td>Интеллектуальные инфокоммуникационные системы и технологии</td>

                        </tr>
                        <tr>
                            <td>11.03.03 <a href="#"><img src={link} alt="arrow"/></a></td>
                            <td>Электронные средства киберфизических систем</td>

                        </tr>
                        <tr>
                            <td>11.03.04 <a href="#"><img src={link} alt="arrow"/></a></td>
                            <td>Электронные приборы и устройства</td>

                        </tr>
                        <tr>
                            <td>13.03.02 <a href="#"><img src={link} alt="arrow"/></a></td>
                            <td>Электроэнергетические системы и электрооборудование</td>

                        </tr>
                        <tr>
                            <td>15.03.04 <a href="#"><img src={link} alt="arrow"/></a></td>
                            <td>Цифровое управление производственными комплексами</td>

                        </tr>
                        <tr>
                            <td>15.03.06 <a href="#"><img src={link} alt="arrow"/></a></td>
                            <td>Интеллектуальные системы в робототехнике</td>

                        </tr>
                        <tr>
                            <td>27.03.03 <a href="#"><img src={link} alt="arrow"/></a></td>
                            <td>Системная инженерия интеллектуальных информационных и управляющих систем</td>

                        </tr>
                        <tr>
                            <td>27.03.04 <a href="#"><img src={link} alt="arrow"/></a></td>
                            <td>Управление и искусственный интеллект в технических системах</td>

                        </tr>
                        <tr>
                            <td>28.03.02 <a href="#"><img src={link} alt="arrow"/></a>ssssssssssssssssssssssssssssssssssss</td>
                            <td>Нанотехнологии и наносистемы</td>

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