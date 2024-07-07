
import {classNames} from "shared/lib/classNames/classNames";
import styles from './AreasOfTraining.module.scss'


interface AreasOfTrainingProps {
    className?: string;

}


const AreasOfTraining = ({className} : AreasOfTrainingProps) => {
    return (
        <section className={classNames(styles.AreasOfTraining, {}, [className])}>
            <div className={styles.areasOfTraining_title__container}>
                <h2 className={styles.areasOfTraining_title}>Направления подготовки</h2>
            </div>
        </section>
    );
};

export default AreasOfTraining;