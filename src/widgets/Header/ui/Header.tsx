
import {classNames} from "shared/lib/classNames/classNames";
import styles from './Header.module.scss'
import pish from 'shared/assets/icons/pish.png'
import ufu from 'shared/assets/icons/ufu.png'

interface HeaderProps {
    className?: string;

}


const Header = ({className} : HeaderProps) => {
    return (
        <header className={classNames(styles.Header, {}, [className])}>
            <div className={styles.header_logo__container}>
                <img className={styles.header_logo__pish} alt='Логотип ПИШ' src={pish}></img>
                <img className={styles.header_logo__ufu} alt='Логотип Юфу' src={ufu}></img>
            </div>

            <div className={styles.header_nav__container}>
                <nav className={styles.header_nav}>
                    <a href='#' className={styles.header_nav__link}>Направления подготовки</a>
                    <a href='#' className={styles.header_nav__link}>Мероприятия</a>
                    <a href='#' className={styles.header_nav__link}>Контакты</a>
                </nav>
                <button className={classNames(styles.header_btn, {}, [className, styles.header_btn__text])}>Абитуриентам</button>
            </div>

        </header>
    );
};

export default Header;