import React from 'react';
import Types from '../../components/Types';

const Sport = () => {
  return (
    <div class="accessories">
      <div class="accessories_container">

        <div class="templates_intro">
          <div class="templates_intro-container">
            <div class="templates_intro-text">
              Sport
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

        <div class="template_main-body">
          <Types />
        </div>

        <div class="pattern accessories_pattern">
          <div class="pattern_container">
            {/* LINE 1  */}
            <div class="pattern_box">
              <div class="box comming_soon">
                <div class="box_component accessories_box_component" />
              </div>
              <div class="box comming_soon">
                <div class="box_component accessories_box_component" />
              </div>
              <div class="box comming_soon">
                <div class="box_component accessories_box_component" />
              </div>
            </div>
            <div class="pattern_text">
              <div class="templates_text">Bags</div>
              <div class="templates_text">In progress</div>
              <div class="templates_text">In progress</div>
            </div>
            {/* LINE 2  */}
            <div class="pattern_box">
              <div class="box comming_soon">
                <div class="box_component accessories_box_component" />
              </div>
              <div class="box comming_soon">
                <div class="box_component accessories_box_component" />
              </div>
              <div class="box comming_soon">
                <div class="box_component accessories_box_component" />
              </div>
            </div>
            <div class="pattern_text">
              <div class="templates_text">In progress</div>
              <div class="templates_text">In progress</div>
              <div class="templates_text">In progress</div>
            </div>
            {/* LINE 3  */}
            <div class="pattern_box">
              <div class="box comming_soon">
                <div class="box_component accessories_box_component" />
              </div>
              <div class="box comming_soon">
                <div class="box_component accessories_box_component" />
              </div>
              <div class="box comming_soon">
                <div class="box_component accessories_box_component" />
              </div>
            </div>
            <div class="pattern_text">
              <div class="templates_text">In progress</div>
              <div class="templates_text">In progress</div>
              <div class="templates_text">In progress</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sport;
