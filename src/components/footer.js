// margin: 0px auto;
// max-width: 960px;
// padding: 0px 1.0875rem 1.45rem;

import React from "react"
import styled from "@emotion/styled"
import dimensions from "../constants/dimensions"
import colors from "../constants/colors"
import LogoImg from "../assets/images/white_logo_transparent_background.png"
import { Link } from "gatsby"

const Logo = styled.img`
  height: 60px;
  width: auto;
  margin: 0;
`

const FooterContainer = styled.div`
  background: #${colors["400"]};
  width: 100%;
  min-height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 100px;
`
const FooterContent = styled.div`
        margin: 0 auto;
        max-width: 960px;
        width: 100%;
        padding: 20px 1.0875rem;
        display: flex;
        justify-content: space-between;
        direction: rtl;
        font-size: 13px;
        line-height: 20px;
`

const FooterDisclaimer = styled.div`

  color: white;
  max-width: 50%;

`

const Footer = () => (
    <>
        <FooterContainer>

            <FooterContent>

                <FooterDisclaimer>
          <span>
            אתר brides-il מגיש לכם הצעה לבעלי מקצוע בתחום החתונות, אשר הנם בעלי שם ומוניטין.
            בעלי המקצוע המוצגים בנבחרת כמו גם הנתונים המוצגים, עלולים להשתנות מעת לעת.
            אין לראות בהמלצת הנבחרת תחליף לבחינת מידת ההתאמה של בעל המקצוע עבורכם. כמו כן, על אף שאנו עושים מאמצים לבחור את בעלי המקצוע המתאימים ביותר, אין לראות זאת כסמכות מקצועית להתאמה עבורכם.
          </span>
                </FooterDisclaimer>
                <Link to="/"
                      css={{
                          display: 'flex',
                          alignItems: 'center'
                      }}>
                    <Logo src={LogoImg} alt="Brides.il"/>
                </Link>
            </FooterContent>
        </FooterContainer>
    </>

)
export default Footer
