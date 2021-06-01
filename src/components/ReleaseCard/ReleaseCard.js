import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import * as styles from "./releaseCard.module.scss"
import { GatsbyImage } from "gatsby-plugin-image"
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ReleaseCard = ({ siteTitle, release }) => (
    <div className={styles.releaseContainer} >
        <div className={styles.coverBox}>
                <div className={styles.front}>
                    <GatsbyImage
                        image={release.img.childImageSharp.gatsbyImageData}
                        maxWidth={350}
                        alt={release.id}
                    />
                </div>
                <div className={styles.back}>
                    <GatsbyImage
                        image={release.imgBack.childImageSharp.gatsbyImageData}
                        maxWidth={350}
                        alt={release.id}
                    />
                </div>
        </div>
        <div className={styles.textBox}>
            <div>
                <h2>
                    {release.name}
                </h2>
                <span>[{release.id}]</span>
                <p>by: {release.by}</p>
            </div>

            <p>
                {release.text}
            </p>
            <Link className={styles.link} to={`/player/${release.id}`}>
                <span>
                    <FontAwesomeIcon icon={faPlay} size="lg" />
                </span>
                <span className={styles.linkText}>Listen</span>
            </Link>
        </div>
    </div>
)

ReleaseCard.propTypes = {
    siteTitle: PropTypes.string,
}

ReleaseCard.defaultProps = {
    siteTitle: ``,
}

export default ReleaseCard