import React from "react";
import { AppBar, Button, Toolbar, Typography } from "@mui/material"
import { styled } from "@mui/system";
import { Link, BrowserRouter as Router, Route, Routes } from "react-router-dom"
import About from "./About";
import Contact from "./Contact";
import More from "./More";
import styles from "./Header.module.css"
import Auth from "./Auth";

const MyAppBar = styled(AppBar)({
    backgroundColor: "#79BCB8",
    boxShadow: "none",
    height: "100px",
    paddingRight: "80px",
    paddingLeft: "120px",
    position: "relative"
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
        href: "/about-us",
        toRender: About
    },
    {
        label: "Contact",
        href: "/contact",
        toRender: Contact
    },
    {
        label: "See More",
        href: "/see-more",
        toRender: More
    }
]

export default function Header() {

    const getButtons = () => {
        return headerData.map(({label, href})=> {
            return (
                <MyButton key={label} to={href} component={Link}>
                    {label}
                </MyButton>
            )
        })
    }

    const getRoutes = () => {
        return headerData.map(({href, toRender}) =>{
            return (
                <Route key={href} path={href} element={toRender()}/>
            )
        })
    }


    return (
            <MyAppBar>
                    <MyToolbar>
                        <MyTypography variant="h2" component="h1">
                            <Link to="/" className={styles.logo}> eXample </Link>
                        </MyTypography>
                        <div>
                            {getButtons()}
                        </div>
                        <Auth/>
                    </MyToolbar>
            </MyAppBar>
    )
}