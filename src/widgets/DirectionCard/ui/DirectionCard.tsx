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
  // Разделяем специальности на две группы
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
      className={classNames(styles.DirectionCard, {}, [
        cardClassName,
        styles.directionCard__pos,
      ])}
    >
      {cardClassName?.includes("cardStyle") ? (
        <>
          <img
            className={classNames(styles.directionCard__img, {}, [
              backgroundStyle,
            ])}
            src={backgroundImg}
            alt={backgroundAlt}
          />
          <div className={styles.directionCard__container}>
            <div className={styles.directionCard__title}>{title}</div>
            <div
              onClick={() => setTitleButton("")}
              className={styles.directionCard__link_open}
            >
              Скрыть{" "}
              <img
                className={styles.directionCard_arrow__rotate}
                src={arrow}
                alt="стрелка"
              />
            </div>
          </div>
          <div className={styles.line}></div>

          {directionData.attributes.Name === "Целевое направление" ? (
            <>
              {otherSpecialties.length > 0 && (
                <>
                  <div className={styles.table__title}>
                    Образовательные программы (бакалавриат, форма обучения -
                    очная)
                  </div>
                  <table className={styles.table}>
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
                  <div className={styles.table__title}>
                    Образовательные программы (магистратура, форма обучения -
                    очная)
                  </div>
                  <table className={styles.table}>
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
              <div className={styles.table__title}>
                Образовательные программы
              </div>
              <table className={styles.table}>
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
        </>
      ) : (
        <>
          <img
            className={classNames(styles.directionCard__img, {}, [
              backgroundStyle,
            ])}
            src={backgroundImg}
            alt={backgroundAlt}
          />
          <div className={styles.directionCard__container}>
            <div className={styles.directionCard__title}>{title}</div>
            <div
              onClick={() => setTitleButton(title)}
              className={styles.directionCard__link}
            >
              Подробнее <img src={arrow} alt="стрелка" />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default DirectionCard;

// Пример данных, которые могут быть переданы в компонент
const exampleDirectionData = {
  id: 1,
  attributes: {
    Name: "Целевое направление",
    specialties: {
      data: [
        {
          id: 1,
          attributes: {
            depCode: "09.03.01",
            depLink: "https://sfedu.ru/op/9",
            depName: "Программирование и системная интеграция ИТ-решений",
            partner: 'АО "ТНИИС"',
          },
        },
        {
          id: 2,
          attributes: {
            depCode: "11.04.01",
            depLink: "https://sfedu.ru/op/111",
            depName:
              "Цифровые радиотехнические средства связи, локации и защиты информации",
            partner:
              'ПАО "Таганрогский авиационный научно-технический комлекс им. Г.М. Бериева"',
          },
        },
      ],
    },
  },
};

// Использование компон
