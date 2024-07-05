
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
                <img className={styles.header_logo} alt='Логотип Юфу' src={ufu}></img>
                <img className={styles.header_logo} alt='Логотип ПИШ' src={pish}></img>

            </div>
        </header>
    );
};

export default Header;