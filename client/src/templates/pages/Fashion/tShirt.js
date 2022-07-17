/* eslint-disable react/self-closing-comp */
import React from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import './style/tshirt.css';

const TShirt = () => {
  return (
    <div class="tshirt">
      <div class="tshirt_container">
        {/* NAVBAR OPEN */}
        <div class="tshirt_navbar">
          <div class='tshirt_sale-line'>
            <div class="tshirt_sale-line-text">Sprzedaż! 25% zniżki na wszystkie produkty z kodem promocyjnym FUTBOLKA24</div>
          </div>
          <div class="tshirt_navbar-container">
            <div class="tshirt_navbar-logo">
              <div class="tshirt_navbar-logo-text">
                T SHOP
              </div>
            </div>
            <div class="tshirt_navbar-icons-container">
              <div class="tshirt_navbar-icons-container-text">
                <div class="tshirt_navbar-text-link">Nowe produkty</div>
                <div class="tshirt_navbar-text-link">Dla jej</div>
                <div class="tshirt_navbar-text-link">Dla nego</div>
              </div>
              <div class="tshirt_navbar_authorization-container">
                <div><AccountCircleIcon fontSize='large' /></div>
                {/* <div>Zajść</div> */}
                <div><ShoppingBasketIcon fontSize='large' /></div>
              </div>
            </div>
          </div>
        </div>
        <div class="tshirt_navbar_border" />

        {/* MAIN INTRO */}
        <div class="main_intro">
          <div class="main_intro-text-up">
            Podkoszulek
            <strong style={{marginLeft: 10}}>SHOP</strong>
          </div>
          <div class="main_intro-text-down">Aktualizacje dla partii</div>
        </div>
        {/* MAIN INTRO-2 */}
        <div class="main_intro-2">
          <div class="main_intro-img-1"></div>
          <div class="main_intro-img-2"></div>
          <div class="main_intro-img-3"></div>
        </div>
        <div class="main_nowosci">
          <div class="main_nowosci-text">Nowe Nowości</div>
        </div>

        {/* Products */}
        <div class="products">
          <div class="products_container">
            <div class="products_container-up">
              <div class="products_box"></div>
              <div class="products_box"></div>
              <div class="products_box"></div>
              <div class="products_box"></div>
            </div>
            <div class="products_container-down">
              <div class="products_box"></div>
              <div class="products_box"></div>
              <div class="products_box"></div>
              <div class="products_box"></div>
            </div>
            <div></div>
          </div>
        </div>


      </div>
    </div>
  );
};

export default TShirt;
