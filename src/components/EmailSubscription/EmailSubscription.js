import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import setCookie from "../../assets/common/setCookie"

export default function EmailSubscription() {
    const minute = 60000;
    const cookie = document.cookie;
    const [open, setOpen] = React.useState(false);
    const [email, setEmail] = React.useState("");

    const handleSubscription = () => {
        //  this function will send the entered email
        // should implement verification of the email
        // cookie logic work good

        console.log(email);
        setCookie("subscription", true, 365) // expires in one year
        console.log(cookie + " " + "cooki");
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

        if (!cookie.includes("subscription=true")) {
            timeout = setTimeout(() => { setOpen(true) }, 2 * minute);
        }

        return () => {
            clearTimeout(timeout);
        }
    }, [])


    return (
        <div>
            {/* <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                Open form dialog
            </Button> */}
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
                    <Button onClick={handleClose} color="primary">
                        Cancel
          </Button>
                    <Button onClick={handleSubscription} color="primary">
                        Subscribe
          </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}