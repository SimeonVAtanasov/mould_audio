import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import { Link } from "gatsby"
import * as styles from "./cookiePolicy.module.scss"
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import setCookie from "../../assets/helpers/setCookie"

const CookiePolicy = ({ siteTitle }) => {
    const [open, setOpen] = React.useState(false);
    
    const toggleDrawer = (state) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        
        setOpen(state);
    };
    
    React.useEffect(() => {
        let timeout;
        let cookie = document.cookie;
        
        if (!cookie.includes("consent=true")) {
            timeout = setTimeout(() => { setOpen(true) }, 800);
        }

        return () => {
            clearTimeout(timeout);
        }
    }, [])

    const handleConsent = () => {
        setCookie("consent", true, 365); // expires in one year
        setOpen(false);
    }

    const list = () => (
        <div
            role="presentation"
            // onKeyDown={toggleDrawer(false)}
        >
            <List className={styles.listContainer}>
                <ListItem className={styles.textBox}>
                    By clicking “I accept”, you agree to the storing of cookies on your device to enhance site navigation, analyze site usage, and assist in our marketing efforts.
                </ListItem>
                <button className={styles.btn} onClick={handleConsent}>I accept</button>
                <Link
                    to={`/cookiePolicy`}
                    className={styles.link}
                >
                    <button className={styles.btn}>CookiePolicy</button>
                </Link>
            </List>

        </div>
    );
    return (
        <>
            <Drawer
                anchor={"bottom"}
                open={open}
                onClose={toggleDrawer(false)}
                variant={"persistent"}
            >
                {list()}
            </Drawer>
        </>
    )
}

export default CookiePolicy
