

import {classNames} from "shared/lib/classNames/classNames";
import styles from './MainPage.module.scss'
import Header from "widgets/Header/ui/Header";
import OurName from "pages/MainPage/ui/OurName/OurName";
import AboutUs from "pages/MainPage/ui/AboutUs/AboutUs";
import WhyUs from "pages/MainPage/ui/WhyUs/WhyUs";
import AreasOfTraining from "pages/MainPage/ui/AreasOfTraining/AreasOfTraining";
import Events from "pages/MainPage/ui/ Events/Events";
import News from "pages/MainPage/ui/News/News";
import Competitions from "pages/MainPage/ui/Competitions/Competitions";


interface MainPageProps {
    className?: string;

}


const MainPage = ({className} : MainPageProps) => {
    return (
        <div className={classNames(styles.MainPage, {}, [className])}>
           <div className={classNames(styles.mainPage__container)}>
                <Header/>
                <main>
                    <OurName/>
                    <AboutUs/>
                    <WhyUs/>
                    <AreasOfTraining/>
                    <Events/>
                    <News/>
                    <Competitions/>
                </main>

           </div>
        </div>
    );
};

export default MainPage;