import React from 'react';
import '../style/footer.css';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PinterestIcon from '@mui/icons-material/Pinterest';

const Footer = () => {
  return (
    <footer class="footer">
      <nav class="footer_container">
        <ul class="footer_list">
          <li class="footer_item">
            <p class="footer_title">PRODUCT</p>
            <ul class="footer_item-list">
              <li class="footer_column">
                <a href='/' class="footer_column-text">Gallery</a>
              </li>
              <li class="footer_column">
                <a href='/' class="footer_column-text">Functions</a>
              </li>
              <li class="footer_column">
                <a href='/' class="footer_column-text">Web Accessibility</a>
              </li>
              <li class="footer_column">
                <a href='/' class="footer_column-text">Velo</a>
              </li>
              <li class="footer_column">
                <a href='/' class="footer_column-text">My sites</a>
              </li>
              <li class="footer_column">
                <a href='/' class="footer_column-text">Premium plans</a>
              </li>
              <li class="footer_column">
                <a href='/' class="footer_column-text">Horn SEO</a>
              </li>
            </ul>
          </li>
          <li class="footer_item">
            <p class="footer_title">COMPANY</p>
            <ul class="footer_item-list">
              <li class="footer_column">
                <a href='/' class="footer_column-text">About Horn</a>
              </li>
              <li class="footer_column">
                <a href='/' class="footer_column-text">Investors</a>
              </li>
              <li class="footer_column">
                <a href='/' class="footer_column-text">Work at Horn</a>
              </li>
              <li class="footer_column">
                <a href='/' class="footer_column-text">Corporate identityv</a>
              </li>
              <li class="footer_column">
                <a href='/' class="footer_column-text">Terms of use</a>
              </li>
              <li class="footer_column">
                <a href='/' class="footer_column-text">App Market Terms</a>
              </li>
              <li class="footer_column">
                <a href='/' class="footer_column-text">Privacy policy</a>
              </li>
            </ul>
          </li>
          <li class="footer_item">
            <p class="footer_title">COMMUNITY</p>
            <ul class="footer_item-list">
              <li class="footer_column">
                <a href='/' class="footer_column-text">Horn Blog</a>
              </li>
              <li class="footer_column">
                <a href='/' class="footer_column-text">Horn Marketplace</a>
              </li>
            </ul>
          </li>
          <li class="footer_item">
            <p class="footer_title">SUPPORT</p>
            <ul class="footer_item-list">
              <li class="footer_column">
                <a href='/' class="footer_column-text">Help Center</a>
              </li>
              <li class="footer_column">
                <a href='/' class="footer_column-text">Status page</a>
              </li>
            </ul>
          </li>
        </ul>
        <div class="footer_discription-container">
          <div class="footer_logo" />
          <p class="footer_text">
            Horn is a leading cloud-based development platform with millions of
            users worldwide. We help create great professional sites.
          </p>
          <p class="footer_text">
            Promote your business, demonstrate skills, set up an online store or
            generate new ideas. Wix Website Designer has everything you need to
            create individual, professional and free websites.
          </p>
          <p class="footer_text">© 2006-2022 Horn, Inc</p>
          <div class="footer_icons">
            <InstagramIcon />
            <FacebookIcon />
            <TwitterIcon />
            <YouTubeIcon />
            <LinkedInIcon />
            <PinterestIcon />
          </div>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
