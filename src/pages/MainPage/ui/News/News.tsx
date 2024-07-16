import { classNames } from "shared/lib/classNames/classNames";
import styles from "./News.module.scss";
import plus from "shared/assets/icons/plus.svg";
import minus from "shared/assets/icons/minus.svg";
import newsBlock from "shared/assets/backgroundImg/newsBlock.png";
import firstBlock from "shared/assets/icons/firstBlock.png";
import zag from "shared/assets/icons/zag.svg";
import { HttpApiMethods } from "features/Api/FetchUtils";
import React, { useEffect, useState } from "react";
import { IGetNews } from "features/Api/types";

interface NewsProps {
  className?: string;
}

const News = ({ className }: NewsProps) => {
  const [newsData, setNewsData] = useState<IGetNews | null>(null);
  const [expandedIndex, setExpandedIndex] = useState(null);
  useEffect(() => {
    const fetchNews = async () => {
      const api = new HttpApiMethods();
      const news = await api.GetNews();
      if (news) {
        setNewsData(news); // Assuming the news data is in the 'data' property
      }
    };

    fetchNews();
    console.log(newsData);
  }, []);

  const handleToggle = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };
  return (
    <section className={classNames(styles.News, {}, [className])}>
      <img
        className={styles.news__img__block_first}
        src={newsBlock}
        alt="декор"
      />
      <img
        className={styles.news__img__block_second}
        src={firstBlock}
        alt="декор"
      />
      <img className={styles.news__img__zag_first} src={zag} alt="декор" />
      <img className={styles.news__img__zag_second} src={zag} alt="декор" />
      <div className={styles.news_title__container}>
        <h2 className={styles.news_title}>Новости</h2>
      </div>
      <div className={styles.news__container}>
        <div className={styles.news_card__container}>
          {newsData &&
            newsData.data.map &&
            newsData.data.map((news, index) => (
              <div className={classNames(styles.news_card, {}, [])} key={index}>
                <div
                  style={
                    expandedIndex === index
                      ? null
                      : { margin: 0, transition: "0.5s margin ease-in" }
                  }
                  className={styles.news_card__title}
                >
                  {news.attributes.title}
                  <img
                    className={styles.news_card__title_img}
                    src={expandedIndex === index ? minus : plus}
                    alt={expandedIndex === index ? "minus" : "plus"}
                    onClick={() => handleToggle(index)}
                  />
                </div>
                <>
                  <div
                    className={classNames(styles.standLine, {}, [
                      expandedIndex === index ? styles.expand : styles.collapse,
                    ])}
                  ></div>
                  <div
                    className={classNames(styles.news_card__descr, {}, [
                      expandedIndex === index ? styles.expand : styles.collapse,
                    ])}
                  >
                    {news.attributes.descriptions
                      .split("\n")
                      .map((line, index) => (
                        <React.Fragment key={index}>
                          {line}
                          <br />
                        </React.Fragment>
                      ))}
                  </div>
                </>
              </div>
            ))}
        </div>

        <div className={styles.news_grid}></div>
      </div>
    </section>
  );
};

export default News;
