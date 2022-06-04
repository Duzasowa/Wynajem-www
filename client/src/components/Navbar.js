import React from 'react'
import '../style/navbar.css'
import { Button } from '@mui/material'
import LanguageIcon from '@mui/icons-material/Language';

const Navbar = () => {

  return (
    <div class="navbar">
      <div class="navbar_main-container">
        <div class="navbar_container">
          {/* <---left_container--> */}
          <div class="left_container">
            <a href='/main' class="logo_container">
              HORN  
            </a>
            <div class="navigarion_container">
              <div class="menu_text">
                Functions
              </div>
              <div class="menu_text">
                Gallary
              </div>
              <a href='/subscriptions' class="menu_text">
                Subcriptions
              </a>
              <div class="menu_text">
                Templates
              </div>
              <div class="menu_text">
                Support
              </div>
            </div>
          </div>
          {/* <---rigth_container--> */}
          <div class="rigth_container">
            <div class="icon_container">
              <LanguageIcon style={{color: 'grey'}} />
            </div>
            <div class="navbar_button">
              <Button style={{marginBottom: 20, borderRadius: 50}} variant="contained">Log IN</Button>
            </div>
          </div>
        </div>
        <div class="main_border-container"></div>
      </div>
    </div>
  )
}

export default Navbar
