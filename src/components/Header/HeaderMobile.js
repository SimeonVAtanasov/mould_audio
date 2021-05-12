import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import * as styles from "./HeaderMobile.module.scss"
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
const HeaderMobile = ({ siteTitle }) => {
    const [isOpen, setIsopen] = React.useState(false);

    const toggleDrawer = (state) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setIsopen(state);
    };
    const list = () => (
        <div
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
        >
            <List>
                {['ABOUT', 'RELEASES', 'RADIO', 'STORE'].map((text) => (
                    <ListItem button key={text}>
                        <Link
                            to={`/${text.toLowerCase()}`}
                            className={styles.navLink}
                        >
                            {text}
                        </Link>
                    </ListItem>
                ))}
            </List>

        </div>
    );
    return (
        <header className={styles.header}>
            <nav className={styles.navBar} >
                <ul >
                    <li className={styles.navLinks}>
                        <Link
                            to="/"
                            className={styles.navLink}
                        >
                            <StaticImage
                                src={`../../../public/images/mouldLogoText.png`}
                                width={150}
                                quality={80}
                                formats={["AUTO", "WEBP", "AVIF"]}
                                alt="MOULD AUDIO"
                            />
                        </Link>
                    </li>
                </ul>
            </nav>
            <Button onClick={toggleDrawer(true)}>
                <FontAwesomeIcon icon={faBars} size="lg"/>
            </Button>
            <Drawer anchor={"right"} open={isOpen} onClose={toggleDrawer(false)}>
                {list()}
            </Drawer>
        </header>
    )
}

HeaderMobile.propTypes = {
    siteTitle: PropTypes.string,
}

HeaderMobile.defaultProps = {
    siteTitle: ``,
}

export default HeaderMobile
