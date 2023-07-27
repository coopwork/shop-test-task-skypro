import React, {useContext} from 'react';
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";


const AlertToastContext = React.createContext()

export const useToast = () => {
    return useContext(AlertToastContext)
}

const AlertToast = ({ children }) => {
    const [toast, setToast] = React.useState({
        show: false,
        message: 'Уведомление',
        type: 'info'
    });

    const Alert = React.forwardRef(function Alert(props, ref) {
        return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
    });
    const vertical ='bottom', horizontal = 'right';
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setToast({show: false});
    };

    const addToast = (object) => {
        setToast((prevState)=>({
            ...prevState,
            ...object
        }))
    }

    return (
        <AlertToastContext.Provider value={{
            toast,
            addToast
        }}>
            { children }
            <Snackbar open={toast.show} autoHideDuration={6000} onClose={handleClose} anchorOrigin={{ vertical, horizontal }}>
                <Alert onClose={handleClose} severity={toast.type} sx={{ width: '100%' }}>
                    {toast.message}
                </Alert>
            </Snackbar>
        </AlertToastContext.Provider>
    );
};

export default AlertToast;