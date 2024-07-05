

import {classNames} from "shared/lib/classNames/classNames";
import styles from './MainPage.module.scss'
import Header from "widgets/Header/ui/Header";


interface MainPageProps {
    className?: string;

}


const MainPage = ({className} : MainPageProps) => {
    return (
        <div className={classNames(styles.MainPage, {}, [className])}>
           <div className={classNames(styles.mainPage__container)}>
                <Header/>
           </div>
        </div>
    );
};

export default MainPage;