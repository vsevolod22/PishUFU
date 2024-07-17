import { classNames } from "shared/lib/classNames/classNames";
import styles from "./OurSpaces.module.scss";
import arrow from "shared/assets/icons/arrow.svg";
import firstBig from "shared/assets/backgroundImg/OurSpaces/firstBig.png";
import secondBig from "shared/assets/backgroundImg/OurSpaces/SecondBig.png";
import thirdBig from "shared/assets/backgroundImg/OurSpaces/ThirdBig.png";
import firstSmall from "shared/assets/backgroundImg/OurSpaces/firstSmall.png";
import firstSmallSecond from "shared/assets/backgroundImg/OurSpaces/firstSmallSecond.png";
import secondSmallFirst from "shared/assets/backgroundImg/OurSpaces/SecondSmallFirst.png";
import secondSmallSecond from "shared/assets/backgroundImg/OurSpaces/SecondSmallSecond.png";
import thirdSmallFirst from "shared/assets/backgroundImg/OurSpaces/ThirdSmallFirst.png";
import thirdSmallSecond from "shared/assets/backgroundImg/OurSpaces/ThirdSmallSecond.png";
import { useState, useEffect } from "react";

interface OurSpacesProps {
  className?: string;
}

const imagesToPreload = [
  firstBig,
  secondBig,
  thirdBig,
  firstSmall,
  firstSmallSecond,
  secondSmallFirst,
  secondSmallSecond,
  thirdSmallFirst,
  thirdSmallSecond,
];

const preloadImages = (images: string[]) => {
  images.forEach((src) => {
    const img = new Image();
    img.src = src;
  });
};

const OurSpaces = ({ className }: OurSpacesProps) => {
  const [numberOfSection, setNumberOfSection] = useState(1);

  useEffect(() => {
    preloadImages(imagesToPreload);
  }, []);

  return (
    <section className={classNames(styles.OurSpaces, {}, [className])}>
      <div className={styles.ourSpaces_title__container}>
        <h2 className={styles.ourSpaces_title}>Наши пространства</h2>
      </div>
      <div className={styles.ourSpaces__container}>
        <div className={styles.ourSpaces_card__container}>
          <div className={styles.ourSpaces_card}>
            {numberOfSection === 1 && (
              <div className={styles.ourSpaces_card_img__container}>
                <div className={styles.ourSpaces_card_img__big}>
                  <img src={firstBig} alt="Образовательные пространства" />
                </div>
                <div className={styles.ourSpaces_card_img__small}>
                  <img src={firstSmall} alt="Образовательные пространства" />
                  <img
                    src={firstSmallSecond}
                    alt="Образовательные пространства"
                  />
                </div>
              </div>
            )}

            {numberOfSection === 2 && (
              <div className={styles.ourSpaces_card_img__container}>
                <div className={styles.ourSpaces_card_img__big}>
                  <img src={secondBig} alt="Лаборатории" />
                </div>
                <div className={styles.ourSpaces_card_img__small}>
                  <img src={secondSmallFirst} alt="Лаборатории" />
                  <img src={secondSmallSecond} alt="Лаборатории" />
                </div>
              </div>
            )}

            {numberOfSection === 3 && (
              <div className={styles.ourSpaces_card_img__container}>
                <div className={styles.ourSpaces_card_img__big}>
                  <img src={thirdBig} alt="Пространства для нетворкинга" />
                </div>
                <div className={styles.ourSpaces_card_img__small}>
                  <img
                    src={thirdSmallFirst}
                    alt="Пространства для нетворкинга"
                  />
                  <img
                    src={thirdSmallSecond}
                    alt="Пространства для нетворкинга"
                  />
                </div>
              </div>
            )}

            <div className={styles.ourSpaces_card_switch__container}>
              {numberOfSection === 1 ? (
                <span>
                  Образовательные пространства
                  <img src={arrow} alt="arrow" />
                </span>
              ) : (
                <span onClick={() => setNumberOfSection(1)}>
                  01
                  <img src={arrow} alt="arrow" />
                </span>
              )}
              {numberOfSection === 2 ? (
                <span>
                  Лаборатории
                  <img src={arrow} alt="arrow" />
                </span>
              ) : (
                <span onClick={() => setNumberOfSection(2)}>
                  02
                  <img src={arrow} alt="arrow" />
                </span>
              )}
              {numberOfSection === 3 ? (
                <span>
                  Пространства для нетворкинга
                  <img src={arrow} alt="arrow" />
                </span>
              ) : (
                <span onClick={() => setNumberOfSection(3)}>
                  03
                  <img src={arrow} alt="arrow" />
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurSpaces;
