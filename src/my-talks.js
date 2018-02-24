import { Element } from '../node_modules/@polymer/polymer/polymer-element.js';
import './shared-styles.js';

class MyTalks extends Element {
  static get template() {
    return `
    <style include="shared-styles">
      :host {
        display: block;
      }

      .cover {
        margin-bottom: 36px;
      }
    </style>

    <div class="hero">
      <div class="hero_title">Presentations and Talks</div>
      <div class="hero_description">
        <p>I love to share all the Google's cutting-edge web technologies to everyone around me.</p>
      </div>
    </div>

    <div class="cover" style\$="background-image:url([[rootPath]]images/talks.jpg)">
      <div class="cover_label">
        <span>Tech Talk Thursday with Google and GDGKL @ Multimedia University, Cyberjaya</span>
      </div>
    </div>

    <div class="item_container">
      <dom-repeat items="[[data]]">
        <template>
          <div class="item">
            <div class="item_header">[[item.header]]</div>
            <div class="item_info">[[item.info]] | [[item.date]]</div>
            <div class="item_info">
              <dom-repeat items="[[item.topic]]">
                <template>
                  <div class="item_tag">
                    <div class="item_circle" id="[[item.id]]"></div>
                    <span>[[item.value]]</span>
                  </div>
                </template>
              </dom-repeat>
            </div>
            <div class="item_description">Topic: [[item.description]]</div>
          </div>
        </template>
      </dom-repeat>
    </div>
`;
  }

  static get is() { return 'my-talks'; }

  static get properties() {
    return {
      data: {
        type: Object,
        notify: true
      }
    };
  }
}

window.customElements.define(MyTalks.is, MyTalks);