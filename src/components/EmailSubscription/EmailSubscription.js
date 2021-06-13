import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import setCookie from "../../assets/common/setCookie"

export default function EmailSubscription() {
    const minute = 60000;
    const [open, setOpen] = React.useState(false);
    const [email, setEmail] = React.useState("");
    
    const handleSubscription = () => {
        //  this function will send the entered email to email service
        // should implement verification of the email
        // cookie logic works good
        
        console.log(email);
        setCookie("subscription", true, 365) // expires in one year
        handleClose();
    }
    
    const handleClickOpen = () => {
        setOpen(true);
    };
    
    const handleClose = () => {
        setOpen(false);
    };
    
    React.useEffect(() => {
        let timeout;
        const cookie = document.cookie;

        if (!cookie.includes("subscription=true")) {
            timeout = setTimeout(() => { setOpen(true) }, 2 * minute);
        }

        return () => {
            clearTimeout(timeout);
        }
    }, [])


    return (
        <div>
            <Button onClick={handleClickOpen}>
                <strong style={{
                    marginRight: "6px",
                    letterSpacing: '2px'
                }}>
                    Subscribe
                </strong>
                <FontAwesomeIcon icon={['far', 'envelope']} size="lg" />
            </Button>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        To subscribe to our newsletter, please enter your email address here. We will send updates
                        occasionally.
          </DialogContentText>
                    <TextField
                        autoFocus
                        value={email}
                        onInput={(e) => { setEmail(e.target.value) }}
                        margin="dense"
                        id="name"
                        label="Email Address"
                        type="email"
                        fullWidth
                        autoComplete={"off"}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} >
                        Cancel
                    </Button>
                    <Button onClick={handleSubscription} >
                        <strong style={{
                            marginRight: "6px",
                            letterSpacing: '2px'
                        }}>
                            Subscribe
                </strong>
                        <FontAwesomeIcon icon={['far', 'bell']} size="lg" />
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}