import * as React from "react"
// import TextField from '@material-ui/core/TextField';
// import Button from '@material-ui/core/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import * as styles from "./footer.module.scss"
import EmailSubscription from "../EmailSubscription/EmailSubscription";
library.add(fab, far)

const Footer = ({ siteTitle }) => {
   
    return (
        <footer
            className={styles.footerWrapper}
        >
            <div className={styles.footerContainer}>
                <div>© mould.audio {new Date().getFullYear()}</div>
                <div className={styles.socialMediaBox}>
                    <a href={"https://www.instagram.com/mould.audio/?hl=en"}>
                        <FontAwesomeIcon icon={['fab', 'instagram']} size="lg" />
                    </a>
                    <a href={'https://www.facebook.com/mould.audio/'}>
                        <FontAwesomeIcon icon={['fab', 'facebook']} size="lg" />
                    </a>
                    <a href={'https://open.spotify.com/artist/6ycFquApuIF6ApGoDpGTuf'}>
                        <FontAwesomeIcon icon={['fab', 'spotify']} size="lg" />
                    </a>
                    <a href={"https://soundcloud.com/mouldaudio"}>
                        <FontAwesomeIcon icon={['fab', 'soundcloud']} size="lg" />
                    </a>
                </div>

                <EmailSubscription />
            </div>

        </footer>
    )
}



export default Footer
