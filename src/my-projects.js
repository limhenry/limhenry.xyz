import { Element } from '../node_modules/@polymer/polymer/polymer-element.js';
import './shared-styles.js';

class MyProjects extends Element {
  static get template() {
    return `
    <style include="shared-styles">
      :host {
        display: block;
      }

      .item {
        position: relative;
      }

      .item iron-icon {
        position: absolute;
        top: 0;
        bottom: 0;
        height: 100%;
        right: 22px;
        color: #b7b7b7;
        width: 18px;
    }

    .item_header,
    .item_info,
    .item_description {
      margin-right: 36px;
    }
    </style>

    <div class="hero">
      <div class="hero_title">Projects</div>
      <div class="hero_description">
        <p>I am trying to save the world using HTML, CSS and JavaScript.</p>
      </div>
    </div>

    <div class="item_container">
      <dom-repeat items="[[data]]">
        <template>
          <div class="item">
            <iron-icon icon="my-icons:open-in-new"></iron-icon>
            <div class="item_header">[[item.header]]</div>
            <div class="item_info">
              <dom-repeat items="[[item.techs]]">
                <template>
                  <div class="item_tag">
                    <div class="item_circle" id="[[item.id]]"></div>
                    <span>[[item.value]]</span>
                  </div>
                </template>
              </dom-repeat>
            </div>
            <div class="item_description">[[item.description]]</div>
          </div>
        </template>
      </dom-repeat>
    </div>
`;
  }

  static get is() { return 'my-projects'; }

  static get properties() {
    return {
      data: {
        type: Object,
        notify: true
      }
    };
  }
}

window.customElements.define(MyProjects.is, MyProjects);
