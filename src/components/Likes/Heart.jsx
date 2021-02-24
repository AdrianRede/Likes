import React from 'react';
import IconButton from "@material-ui/core/IconButton";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    red:{
        fontSize:'3rem',
        color: 'rgb(245, 0, 87)',
        zIndex:2,
    }
}));

const Heart = () => {
    
    const classes = useStyles();
    
    return ( 
       
        <IconButton variant="contained" color="secondary" className={classes.red}>
            <i className="fas fa-heart  "  />
        </IconButton>

     );
}
 
export default Heart;