
import {classNames} from "shared/lib/classNames/classNames";
import styles from './GoToUs.module.scss'
import shapes from 'shared/assets/icons/Shapes.svg'

interface GoToUsProps {
    className?: string;

}


const GoToUs = ({className} : GoToUsProps) => {
    return (
        <section className={classNames(styles.GoToUs, {}, [className])}>
           <div className={styles.goToUs_title__container}>
               <div className={styles.goToUs_title}>Поступай <br/> <span>к нам</span></div>
           </div>
            <div className={styles.goToUs_img__container}>
                <img src={shapes} alt="shapes"/>
            </div>
        </section>
    );
};

export default GoToUs;