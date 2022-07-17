import React from 'react';

import '../style/templates.css';
import { Pagination } from '@mui/material';
import Types from '../components/Types';
import GlassEffect from '../components/GlassEffect';

const Templates = () => {
  return (
    <div class="templates">
      {/* Intro */}
      <div class="templates_intro">
        <div class="templates_intro-container">
          <div class="templates_intro-text">
            Wybierzcie szablon strony internetowej, który wam podoba się
          </div>
        </div>
        <div class="templates_border" />
        <div class="templates_buttons-container">
          <div class="templates_buttons">
            <div class="templates_intro-button-text">
              Wszystkie szablony
              <i class="down" />
              <div class="submenu">
                Podmenu
              </div>
            </div>
            <div class="templates_intro-button-text">
              Puste szablony
              <i class="down" />
            </div>
            <div class="templates_intro-button-text">
              Inni
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
      {/* Pattern */}
      <div class="pattern">
        <div class="pattern_container">
          {/* LINE 1  */}
          <div class="pattern_box">
            <div class="box box-1">
              <div class="box_component">
                <a class="box_path-settings" href='/templates/fashion'>
                  <GlassEffect />
                </a>
              </div>
            </div>
            <div class="box box-2">
              <div class="box_component">
                <a class="box_path-settings" href='/templates/decor'>
                  <GlassEffect />
                </a>
              </div>
            </div>
            <div class="box box-3">
              <div class="box_component">
                <a class="box_path-settings" href='/templates/sites'>
                  <GlassEffect />
                </a>
              </div>
            </div>
          </div>
          <div class="pattern_text">
            <div class="templates_text">Moda i odzież</div>
            <div class="templates_text">Dom i wystrój</div>
            <div class="templates_text">Sklepy online</div>
          </div>
          {/* LINE 2  */}
          <div class="pattern_box">
            <div class="box box-4">
              <div class="box_component">
                <a class="box_path-settings" href='/templates/electronics'>
                  <GlassEffect />
                </a>
              </div>
            </div>
            <div class="box box-5">
              <div class="box_component">
                <a class="box_path-settings" href='/templates/books'>
                  <GlassEffect />
                </a>
              </div>
            </div>
            <div class="box box-6">
              <div class="box_component">
                <a class="box_path-settings" href='/templates/accessories'>
                  <GlassEffect />
                </a>
              </div>
            </div>
          </div>
          <div class="pattern_text">
            <div class="templates_text">Sklep z elektroniką</div>
            <div class="templates_text">Książki</div>
            <div class="templates_text">Akcesoria</div>
          </div>
          {/* LINE 3  */}
          <div class="pattern_box">
            <div class="box box-7">
              <div class="box_component">
                <a class="box_path-settings" href='/templates/jewelry'>
                  <GlassEffect />
                </a>
              </div>
            </div>
            <div class="box box-8">
              <div class="box_component">
                <a class="box_path-settings" href='/templates/sport'>
                  <GlassEffect />
                </a>
              </div>
            </div>
            <div class="box box-9">
              <div class="box_component">
                <a class="box_path-settings" href='/templates/beauty'>
                  <GlassEffect />
                </a>
              </div>
            </div>
          </div>
          <div class="pattern_text">
            <div class="templates_text">Biżuteria</div>
            <div class="templates_text">Sport</div>
            <div class="templates_text">Piękność</div>
          </div>
          {/* LINE 4  */}
          <div class="pattern_box">
            <div class="box box-10">
              <div class="box_component">
                <a class="box_path-settings" href='/templates/restaurants'>
                  <GlassEffect />
                </a>
              </div>
            </div>
            <div class="box box-11">
              <div class="box_component">
                <a class="box_path-settings" href='/templates/services'>
                  <GlassEffect />
                </a>
              </div>
            </div>
            <div class="box box-12">
              <div class="box_component">
                <a class="box_path-settings" href='/templates/blissful'>
                  <GlassEffect />
                </a>
              </div>
            </div>
          </div>
          <div class="pattern_text">
            <div class="templates_text">Restauracje</div>
            <div class="templates_text">Usługi</div>
            <div class="templates_text">Blogi</div>
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
