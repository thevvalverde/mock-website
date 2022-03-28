import { Button } from "@mui/material";
import { styled } from "@mui/system";
import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import "./styles.css"

export default function Auth() {

    return (
        <div className="auth-buttons">
            <Button 
                variant="contained" 
                disableElevation 
                color="secondary"
                to="/login"
                component={Link} >
                Log in
            </Button>
            <Button 
                variant="outlined" 
                disableElevation 
                color="secondary"
                to="/register"
                component={Link} >
                Register
            </Button>
        </div>
    )
}