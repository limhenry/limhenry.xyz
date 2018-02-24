import { Element } from '../node_modules/@polymer/polymer/polymer-element.js';
import './shared-styles.js';

class MyAwards extends Element {
  static get template() {
    return `
    <style include="shared-styles">
      :host {
        display: block;
      }
    </style>

    <div class="hero">
      <div class="hero_title">Awards and Honors</div>
      <div class="hero_description">
        <p>(Drum roll) and the winner goes to ...</p>
      </div>
    </div>

    <div class="cover" style\$="background-image:url([[rootPath]]images/firebass.jpg)">
      <div class="cover_label">
        <span>Winner of Google's Firebass Challenge @ Google I/O 2017</span>
      </div>
    </div>

    <div class="item_container">
      <dom-repeat items="[[data]]">
        <template>
          <div class="item">
            <div class="item_header">[[item.header]]</div>
            <div class="item_info">[[item.info]] | [[item.date]]</div>
            <div class="item_description">[[item.description]]</div>
          </div>
        </template>
      </dom-repeat>
    </div>
`;
  }

  static get is() { return 'my-awards'; }

  static get properties() {
    return {
      data: {
        type: Object,
        notify: true
      }
    };
  }
}

window.customElements.define(MyAwards.is, MyAwards);
