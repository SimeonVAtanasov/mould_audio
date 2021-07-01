import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import * as styles from "./headerMobile.module.scss"
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const HeaderMobile = ({ siteTitle }) => {
    const [isOpen, setIsOpen] = React.useState(false);

    const toggleDrawer = (state) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setIsOpen(state);
    };
    const list = () => (
        <div
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
        >
            <List>
                {['ABOUT', 'RELEASES', 'RADIO', 'STORE'].map((text) => (
                    <ListItem key={text}>
                        <Link
                            to={`/${text.toLowerCase()}`}
                            className={styles.navLink}
                        >
                            {text}
                        </Link>
                    </ListItem>

                ))}

                <ListItem style={{ justifyContent: "center" }}>~ Social ~</ListItem>

                <ListItem>
                    <a className={styles.navLink} href={"https://www.instagram.com/mould.audio/?hl=en"}>
                        <FontAwesomeIcon icon={['fab', 'instagram']} size="lg" style={{ marginRight: "6px" }} />
                        Instagram
                    </a>
                </ListItem>
                <ListItem>
                    <a className={styles.navLink} href={'https://www.facebook.com/mould.audio/'}>
                        <FontAwesomeIcon icon={['fab', 'facebook']} size="lg" style={{ marginRight: "6px" }} />
                        Facebook
                    </a>
                </ListItem>
                <ListItem>
                    <a className={styles.navLink} href={'https://open.spotify.com/artist/6ycFquApuIF6ApGoDpGTuf'}>
                        <FontAwesomeIcon icon={['fab', 'spotify']} size="lg" style={{ marginRight: "6px" }} />
                        Spotify
                    </a>
                </ListItem>
                <ListItem>
                    <a className={styles.navLink} href={"https://soundcloud.com/mouldaudio"}>
                        <FontAwesomeIcon icon={['fab', 'soundcloud']} size="lg" style={{ marginRight: "6px" }} />
                        Soundcloud
                    </a>
                </ListItem>

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
                                src={`../../../static/mouldLogoText.png`}
                                width={150}
                                quality={100}
                                formats={["AUTO", "WEBP", "AVIF"]}
                                alt="MOULD AUDIO"
                            />
                        </Link>
                    </li>
                </ul>
            </nav>
            <Button onClick={toggleDrawer(true)}>
                <FontAwesomeIcon icon={faBars} size="lg" />
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
