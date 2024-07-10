
import {classNames} from "shared/lib/classNames/classNames";
import styles from './OurSpaces.module.scss'
import arrow from 'shared/assets/icons/arrow.svg'
import firstBig from 'shared/assets/backgroundImg/OurSpaces/firstBig.png'
import secondBig from 'shared/assets/backgroundImg/OurSpaces/SecondBig.png'
import thirdBig from 'shared/assets/backgroundImg/OurSpaces/ThirdBig.png'
import firstSmall from 'shared/assets/backgroundImg/OurSpaces/firstSmall.png'
import firstSmallSecond from 'shared/assets/backgroundImg/OurSpaces/firstSmallSecond.png'
import secondSmallFirst from 'shared/assets/backgroundImg/OurSpaces/SecondSmallFirst.png'
import secondSmallSecond from 'shared/assets/backgroundImg/OurSpaces/SecondSmallSecond.png'
import thirdSmallFirst from 'shared/assets/backgroundImg/OurSpaces/ThirdSmallFirst.png'
import thirdSmallSecond from 'shared/assets/backgroundImg/OurSpaces/ThirdSmallSecond.png'




interface OurSpacesProps {
    className?: string;

}


const OurSpaces = ({className} : OurSpacesProps) => {
    return (
        <section className={classNames(styles.OurSpaces, {}, [className])}>
            <div className={styles.ourSpaces_title__container}>
                <h2 className={styles.ourSpaces_title}>Наши пространства</h2>
            </div>
            <div className={styles.ourSpaces__container}>
                <div className={styles.ourSpaces_card__container}>
                    <div className={styles.ourSpaces_card}>
                        <div className={styles.ourSpaces_card_img__container}>
                            <div className={styles.ourSpaces_card_img__big}>
                                <img src={firstBig} alt="Образовательные пространства"/>
                            </div>
                            <div className={styles.ourSpaces_card_img__small}>
                                <img src={firstSmall} alt="Образовательные пространства"/>
                                <img src={firstSmallSecond} alt="Образовательные пространства"/>
                            </div>
                        </div>
                        <div className={styles.ourSpaces_card_switch__container}>
                            <span>Образовательные пространства<img src={arrow} alt="arrow"/></span>
                            <span>02<img src={arrow} alt="arrow"/></span>
                            <span>03<img src={arrow} alt="arrow"/></span>
                        </div>


                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurSpaces;