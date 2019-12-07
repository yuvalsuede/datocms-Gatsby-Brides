import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "@emotion/styled"
import LogoImg from "../assets/images/logo_transparent_background.png"
import dimensions from "../constants/dimensions"
import colors from "../constants/colors"
import {Menu, MenuItem, SvgIcon} from "@material-ui/core"
import Button from "@material-ui/core/Button";
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

const HeaderContainer = styled.header`
  background: white;
  height: 60px;
  z-index: 5;
  padding: 0 1.5em;
  border-bottom: 1px solid #efefef;
`
const HeaderContent = styled.div`
    display: flex;
    justify-content: space-between;
`
const Logo = styled.img`
  height: 60px;
  width: auto;
  margin: 0;
`

const HeaderLinks = styled.div`
    display: grid;
    grid-template-columns: repeat(2, auto);
    // grid-gap: 7em;
    justify-content: flex-end;
    align-items: center;
    width: 100%;
    max-width: 200px;
    cursor: pointer;

    @media(max-width: ${dimensions.maxwidthTablet}px) {
        grid-gap: 5.5em;
    }

    @media(max-width: ${dimensions.minwidthDesktop}px) {
        grid-gap: 2.5em;
    }

    a {
        color: currentColor;
        text-decoration: none;
        border-bottom: 3px solid transparent;
        font-weight: 600;
        font-size: 0.95em;
        height: 100%;
        padding-bottom: 1.25em;
        padding-top: 0.25em;
        display: block;
        position: relative;

        &:after {
            position: absolute;
            content: "";
            bottom: 0;
            width: 18px;
            height: 3px;
            background: transparent;
            bottom: -3px;
            right: 50%;
            margin-right: -9px;
            transition: 100ms ease-in-out background;
        }

        &:hover {
            &:after {
                background: ${colors.A400};
                transition: 100ms ease-in-out background;
            }
        }

        &.Link--is-active {
            &:after {
                background: ${colors.A400};
                transition: 100ms ease-in-out background;
            }
        }
    }
`

const InstagramIcon = (props) => {
    return (
        <SvgIcon {...props}>
            <path fill="none" d="M0 0h24v24H0V0z"/>
            <path
                d="M14.12 4l1.83 2H20v12H4V6h4.05l1.83-2h4.24M15 2H9L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17L15 2zm-3 7c1.65 0 3 1.35 3 3s-1.35 3-3 3-3-1.35-3-3 1.35-3 3-3m0-2c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5z"/>
        </SvgIcon>
    )
}

const Header = ({ siteTitle, categories }) => {
    console.log(categories);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleClick = event => {
        setAnchorEl(event.currentTarget);
    };

    const handleLinkClick = event => {

    }

    const handleClose = (event) => {
        setAnchorEl(null);
        console.log(event.currentTarget)
    };
    return (
        <HeaderContainer>
            <HeaderContent>
                <Link to="/">
                    <Logo src={LogoImg} alt="Brides.il"/>
                </Link>
                <HeaderLinks>
                    <>

                        <Button css={{
                            margin: '0 20px'
                        }} aria-controls="categories-menu" aria-haspopup="true" onClick={handleClick}>
                            <ArrowDropDownIcon style={{ color: '#dd4fb1'}}  fontSize="large" />קטגוריות
                        </Button>
                        <Menu
                            id="categories-menu"
                            anchorEl={anchorEl}
                            keepMounted
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                        >
                            {
                                categories.map(category => {
                                    return (<MenuItem key={category.slug}
                                                      component={Link}
                                                      to={category.slug}
                                                      onClick={handleLinkClick}>{ category.heName}</MenuItem>)
                                })
                            }

                        </Menu>
                    </>
                    <InstagramIcon onClick={() => navigateTo('https://www.instagram.com/brides.il')}
                    />

                </HeaderLinks>
            </HeaderContent>
        </HeaderContainer>
    )
}


Header.propTypes = {
    siteTitle: PropTypes.string,
}

Header.defaultProps = {
    siteTitle: ``,
}

const navigateTo = (url) => {

    window.open(url);
}


export default Header
