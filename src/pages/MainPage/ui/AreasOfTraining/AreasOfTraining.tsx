import { classNames } from "shared/lib/classNames/classNames";
import styles from "./AreasOfTraining.module.scss";
import DirectionCard from "widgets/DirectionCard/ui/DirectionCard";
import medal from "shared/assets/backgroundImg/medal.png";
import hat from "shared/assets/backgroundImg/hat.png";
import bag from "shared/assets/backgroundImg/bag.png";
import { HttpApiMethods } from "features/Api/FetchUtils";
import { IGetPrograms } from "features/Api/types";
import { useEffect, useState } from "react";

interface AreasOfTrainingProps {
  className?: string;
}

const AreasOfTraining = ({ className }: AreasOfTrainingProps) => {
  const [titleButton, setTitleButton] = useState("");
  const [firstCardDisplay, setFirstCardDisplay] = useState({});
  const [secondCardDisplay, setSecondCardDisplay] = useState({});
  const [thirdCardDisplay, setThirdCardDisplay] = useState({});
  const [cardClassName, SetcardClassName] = useState([
    styles.directionCard__pos,
    styles.directionCard__pos,
    styles.directionCard__pos,
  ]);
  const [programsData, setProgramsData] = useState<IGetPrograms | null>(null);
  useEffect(() => {
    const fetchPrograms = async () => {
      const api = new HttpApiMethods();
      const programs = await api.GetPrograms();
      if (programs) {
        setProgramsData(programs); // Assuming the news data is in the 'data' property
      }
    };

    fetchPrograms();
    console.log(programsData);
  }, []);

  useEffect(() => {
    if (titleButton === "Бакалавриат") {
      setSecondCardDisplay({ display: "none" });
      setThirdCardDisplay({ display: "none" });
      SetcardClassName([
        styles.cardStyle,
        styles.directionCard__pos,
        styles.directionCard__pos,
      ]);
    } else if (titleButton === "Магистратура") {
      setFirstCardDisplay({ display: "none" });
      setThirdCardDisplay({ display: "none" });
      SetcardClassName([
        styles.directionCard__pos,
        styles.cardStyle,
        styles.directionCard__pos,
      ]);
    } else if (titleButton === "Целевые места") {
      setFirstCardDisplay({ display: "none" });
      setSecondCardDisplay({ display: "none" });
      SetcardClassName([
        styles.directionCard__pos,
        styles.directionCard__pos,
        styles.cardStyle,
      ]);
    } else if (titleButton === "") {
      setFirstCardDisplay({ display: "flex", flexDirection: "column" });
      setSecondCardDisplay({ display: "flex", flexDirection: "column" });
      setThirdCardDisplay({ display: "flex", flexDirection: "column" });
      SetcardClassName([
        styles.directionCard__pos,
        styles.directionCard__pos,
        styles.directionCard__pos,
      ]);
    }
  }, [titleButton]);
  return (
    <section
      className={classNames(styles.AreasOfTraining, {}, [className])}
      id="areasOfTraining"
    >
      <div className={styles.areasOfTraining_title__container}>
        <h2 className={styles.areasOfTraining_title}>Направления подготовки</h2>
      </div>
      <div className={styles.areasOfTraining__container}>
        <DirectionCard
          cardClassName={cardClassName[0]}
          CardDisplay={firstCardDisplay}
          setTitleButton={setTitleButton}
          backgroundStyle={styles.medal}
          title={"Бакалавриат"}
          backgroundImg={medal}
          backgroundAlt={"medal"}
          directionData={programsData ? programsData.data[0] : null}
        />
        <DirectionCard
          cardClassName={cardClassName[1]}
          CardDisplay={secondCardDisplay}
          setTitleButton={setTitleButton}
          backgroundStyle={styles.hat}
          title={"Магистратура"}
          backgroundImg={hat}
          backgroundAlt={"hat"}
          directionData={programsData ? programsData.data[1] : null}
        />
        <DirectionCard
          cardClassName={cardClassName[2]}
          CardDisplay={thirdCardDisplay}
          setTitleButton={setTitleButton}
          backgroundStyle={styles.bag}
          title={"Целевые места"}
          backgroundImg={bag}
          backgroundAlt={"bag"}
          directionData={programsData ? programsData.data[2] : null}
        />
      </div>
      <div className={styles.areasOfTraining_grid}></div>
    </section>
  );
};

export default AreasOfTraining;
