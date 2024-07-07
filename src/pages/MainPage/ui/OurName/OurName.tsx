
import {classNames} from "shared/lib/classNames/classNames";
import styles from "./OurName.module.scss";
import imgT from 'shared/assets/icons/img_T.png'

interface OurNameProps {
    className?: string;

}


const OurName = ({className} : OurNameProps) => {
    return (
        <section className={classNames(styles.OurName, {}, [className])}>
            <div className={styles.ourName__container}>

                <h1 className={classNames(styles.ourName_title, {}, [className, styles.ourName_title__text])}>Передовая<span>Инженерная</span></h1>

                <div className={styles.ourName_title_img__container}>
                    <img src={imgT} alt="Буква Т"/> <span>воя</span>
                </div>
            </div>
        </section>
    );
};

export default OurName;