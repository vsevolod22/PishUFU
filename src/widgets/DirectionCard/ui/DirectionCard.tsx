import { useState, useEffect, useRef } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import styles from "./DirectionCard.module.scss";
import arrow from "shared/assets/icons/arrow.svg";
import link from "shared/assets/icons/Link.svg";
import { IGetPrograms } from "features/Api/types";

interface DirectionCardProps {
  backgroundStyle?: string;
  title: string;
  backgroundImg: string;
  backgroundAlt: string;
  setTitleButton: (title: string) => void;
  CardDisplay: object;
  cardClassName?: string;
  directionData?: IGetPrograms["data"][0] | null;
}

const DirectionCard = ({
  backgroundStyle,
  backgroundImg,
  backgroundAlt,
  title,
  setTitleButton,
  CardDisplay,
  cardClassName,
  directionData,
}: DirectionCardProps) => {
  const [expanded, setExpanded] = useState(false);
  const [isCollapsing, setIsCollapsing] = useState(false);
  const [maxHeight, setMaxHeight] = useState("0px");
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (cardClassName?.includes("cardStyle")) {
      setExpanded(true);
    } else {
      setExpanded(false);
    }
  }, [cardClassName]);

  useEffect(() => {
    if (contentRef.current) {
      setMaxHeight(`${contentRef.current.scrollHeight}px`);
    }
  }, [expanded, contentRef]);

  const toggleExpand = () => {
    if (expanded) {
      setIsCollapsing(true);
      setTimeout(() => {
        setExpanded(false);
        setIsCollapsing(false);
        setTitleButton("");
      }, 1000); // Задержка должна совпадать с длительностью transition
    } else {
      setExpanded(true);
      setTitleButton(title);
    }
  };

  const allSpecialties = directionData?.attributes?.specialties?.data || [];
  const targetedSpecialties = allSpecialties.filter((specialty) =>
    specialty.attributes.depCode.startsWith("11.04")
  );
  const otherSpecialties = allSpecialties.filter(
    (specialty) => !specialty.attributes.depCode.startsWith("11.04")
  );

  return (
    <div
      style={CardDisplay}
      className={classNames(
        styles.DirectionCard,
        {
          [styles.expanded]: expanded && !isCollapsing,
          [styles.collapsing]: isCollapsing,
        },
        [cardClassName, styles.directionCard__pos]
      )}
    >
      <img
        className={classNames(styles.directionCard__img, {}, [backgroundStyle])}
        src={backgroundImg}
        alt={backgroundAlt}
      />
      <div className={styles.directionCard__container}>
        <div className={styles.directionCard__title}>{title}</div>
        <div
          onClick={toggleExpand}
          className={
            expanded && !isCollapsing
              ? styles.directionCard__link_open
              : styles.directionCard__link
          }
        >
          {expanded && !isCollapsing ? (
            <>
              Скрыть{" "}
              <img
                className={styles.directionCard_arrow__rotate}
                src={arrow}
                alt="стрелка"
              />
            </>
          ) : (
            <>
              Подробнее <img src={arrow} alt="стрелка" />
            </>
          )}
        </div>
      </div>
      <div
        ref={contentRef}
        className={styles.directionCard__content}
        style={{
          maxHeight: expanded && !isCollapsing ? maxHeight : "0px",
          opacity: expanded && !isCollapsing ? 1 : 0,
        }}
      >
        <div
          className={`${styles.line} ${
            expanded && !isCollapsing ? styles.opacity : ""
          }`}
        ></div>
        {directionData.attributes.Name === "Целевое направление" ? (
          <>
            {otherSpecialties.length > 0 && (
              <>
                <div
                  className={`${styles.table__title} ${
                    expanded && !isCollapsing ? styles.opacity : ""
                  }`}
                >
                  Образовательные программы (бакалавриат, форма обучения -
                  очная)
                </div>
                <table
                  className={`${styles.table} ${
                    expanded && !isCollapsing ? styles.opacity : ""
                  }`}
                >
                  <thead>
                    <tr>
                      <th>Код специальности</th>
                      <th>Наименование</th>
                      <th>Партнёр</th>
                    </tr>
                  </thead>
                  <tbody>
                    {otherSpecialties.map((specialty) => (
                      <tr key={specialty.id}>
                        <td>
                          {specialty.attributes.depCode}{" "}
                          <a
                            href={specialty.attributes.depLink}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <img src={link} alt="arrow" />
                          </a>
                        </td>
                        <td>{specialty.attributes.depName}</td>
                        <td>{specialty.attributes.partner || "N/A"}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </>
            )}
            {targetedSpecialties.length > 0 && (
              <>
                <div
                  className={`${styles.table__title} ${
                    expanded && !isCollapsing ? styles.opacity : ""
                  }`}
                >
                  Образовательные программы (магистратура, форма обучения -
                  очная)
                </div>
                <table
                  className={`${styles.table} ${
                    expanded && !isCollapsing ? styles.opacity : ""
                  }`}
                >
                  <thead>
                    <tr>
                      <th>Код специальности</th>
                      <th>Наименование</th>
                      <th>Партнёр</th>
                    </tr>
                  </thead>
                  <tbody>
                    {targetedSpecialties.map((specialty) => (
                      <tr key={specialty.id}>
                        <td>
                          {specialty.attributes.depCode}{" "}
                          <a
                            href={specialty.attributes.depLink}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <img src={link} alt="arrow" />
                          </a>
                        </td>
                        <td>{specialty.attributes.depName}</td>
                        <td>{specialty.attributes.partner || "N/A"}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </>
            )}
          </>
        ) : (
          <>
            <div
              className={`${styles.table__title} ${
                expanded && !isCollapsing ? styles.opacity : ""
              }`}
            >
              Образовательные программы
            </div>
            <table
              className={`${styles.table} ${
                expanded && !isCollapsing ? styles.opacity : ""
              }`}
            >
              <thead>
                <tr>
                  <th>Код специальности</th>
                  <th>Наименование</th>
                </tr>
              </thead>
              <tbody>
                {allSpecialties.map((specialty) => (
                  <tr key={specialty.id}>
                    <td>
                      {specialty.attributes.depCode}{" "}
                      <a
                        href={specialty.attributes.depLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img src={link} alt="arrow" />
                      </a>
                    </td>
                    <td>{specialty.attributes.depName}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        )}
      </div>
    </div>
  );
};

export default DirectionCard;
