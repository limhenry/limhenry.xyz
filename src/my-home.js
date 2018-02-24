import { Element } from '../node_modules/@polymer/polymer/polymer-element.js';
import './shared-styles.js';

class MyHome extends Element {
  static get template() {
    return `
    <style include="shared-styles">
      :host {
        display: block;
      }
    </style>

    <div class="hero">
      <div class="hero_title">I'm Henry Lim</div>
      <div class="hero_description">
        <p>I'm a front-end web developer from Kuala Lumpur. I'm trying to make the web great again with Firebase, Progressive Web Apps, Polymer and Web Components.</p>
        <p>Also, I'm the co-organizer at Google Developer Group Kuala Lumpur. We organize conferences, meetups, workshops, and bringing all the latest Google technologies into the town.</p>
      </div>
    </div>  
`;
  }

  static get is() { return 'my-home'; }
}

window.customElements.define(MyHome.is, MyHome);
