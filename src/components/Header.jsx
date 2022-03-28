import React from "react";
import { AppBar, Button, Toolbar, Typography } from "@mui/material"
import { styled } from "@mui/system";
import { Link, BrowserRouter as Router } from "react-router-dom"

const MyAppBar = styled(AppBar)({
    backgroundColor: "#79BCB8",
    boxShadow: "none",
    height: "100px",
    paddingRight: "80px",
    paddingLeft: "120px"
})

const MyTypography = styled(Typography)({
    color: "#FFFEFE",
    textAlign: "left",
    marginTop: "10px",
    fontWeight: 500
})

const MyButton = styled(Button)({
    color: "inherit",
    fontWeight: 700,
    size: "18px",
    marginLeft: "38px",
    marginTop: "10px"
})

const MyToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between"
})

const headerData = [
    {
        label: "About Us",
        href: "/about-us"
    },
    {
        label: "Contact",
        href: "/contact"
    },
    {
        label: "See More",
        href: "/see-more"
    }
]

export default function Header() {

    const getButtons = () => {
        return headerData.map(({label, href})=> {
            return (
                <MyButton key={label} to= {href} component= {Link}>
                    {label}
                </MyButton>
            )
        })
    }


    return (
        <MyAppBar>
                <MyToolbar>
                    <MyTypography variant="h2" component="h1">
                        eXample
                    </MyTypography>
                    <div>
                        <Router>{getButtons()}</Router>
                    </div>
                </MyToolbar>
        </MyAppBar>
    )
}