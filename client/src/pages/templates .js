import React from 'react';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import '../style/templates.css';
import { Pagination } from '@mui/material';
import Types from '../components/Types';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

const Templates = () => {
  return (
    <div class="templates">
      {/* Intro */}
      <div class="templates_intro">
        <div class="templates_intro-container">
          <div class="templates_intro-text">
            Choose a site template that you like
          </div>
          <div class="templates_intro-search">
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                // style={{width: 300}}
                placeholder="Search ..."
                inputProps={{ 'aria-label': 'search' }}
              />
            </Search>
            <div class="templates_border-search" />
          </div>
        </div>
        <div class="templates_border" />
        <div class="templates_buttons-container">
          <div class="templates_buttons">
            <div class="templates_intro-button-text">
              All templates
              <i class="down" />
            </div>
            <div class="templates_intro-button-text">
              Blank templates
              <i class="down" />
            </div>
            <div class="templates_intro-button-text">
              Other
              <i class="down" />
            </div>
          </div>
        </div>
        <div class="templates_border-buttons" />
      </div>
      {/* Main body */}
      <div class="template_main-body">
        <Types />
      </div>
      <div class="pattern">
        <div class="pattern_container">
          {/* LINE 1  */}
          <div class="pattern_box">
            <div class="box box-1" />
            <div class="box box-2" />
            <div class="box box-3" />
          </div>
          <div class="pattern_text">
            <div class="text">T-shirt shops</div>
            <div class="text">Beauty salon</div>
            <div class="text">Landing of goods</div>
          </div>
          {/* LINE 2  */}
          <div class="pattern_box">
            <div class="box box-4" />
            <div class="box box-5" />
            <div class="box box-6" />
          </div>
          <div class="pattern_text">
            <div class="text">Canned Drink Store</div>
            <div class="text">Electronics store</div>
            <div class="text">Accessories store</div>
          </div>
          {/* LINE 3  */}
          <div class="pattern_box">
            <div class="box box-7" />
            <div class="box box-8" />
            <div class="box box-9" />
          </div>
          <div class="pattern_text">
            <div class="text">Health goods store</div>
            <div class="text">Accessories store</div>
            <div class="text">A clothing store</div>
          </div>
          {/* LINE 4  */}
          <div class="pattern_box">
            <div class="box box-10" />
            <div class="box box-11" />
            <div class="box box-12" />
          </div>
          <div class="pattern_text">
            <div class="text">Backpack store</div>
            <div class="text">Hardware store</div>
            <div class="text">Supermarket</div>
          </div>
        </div>
      </div>
      {/* Pagination */}
      <div class="pagination">
        <div class="pagination_conteiner">
          <Pagination count={10} shape="rounded" />
        </div>
      </div>
    </div>
  );
};

export default Templates;
