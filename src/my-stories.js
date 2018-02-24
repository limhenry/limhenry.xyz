import { Element } from '../node_modules/@polymer/polymer/polymer-element.js';
import '../node_modules/@polymer/iron-pages/iron-pages.js';
import '../node_modules/@polymer/app-route/app-route.js';
import './shared-styles.js';
import './my-stories-home.js';
import './my-stories-post.js';

class MyStories extends Element {
  static get template() {
    return `
        <style include="shared-styles">
            :host {
                display: block;
            }
        </style>

        <app-route route="{{route}}" pattern="/:page" data="{{routeData}}" tail="{{subroute}}"></app-route>

        <iron-pages selected="[[page]]" attr-for-selected="name" fallback-selection="home">
            <my-stories-home name="home" data="{{data}}"></my-stories-home>
            <my-stories-post name="post" route="{{routeData}}"></my-stories-post>
        </iron-pages>
`;
  }

  static get is() { return 'my-stories'; }

  static get observers() {
      return [
          '_routePageChanged(routeData.page)'
      ];
  }

  static get properties() {
      return {
          page: {
              type: String,
              reflectToAttribute: true
          },
          data: {
              type: Object,
              notify: true
          },
          routeData: {
              type: Object,
              notify: true,
              reflectToAttribute: true,
          }
      };
  }

  _routePageChanged(page) {
      if (page === undefined || page.length <= 0) {
          this.page = 'home';
      }
      else {
          this.page = 'post'
      }
  }
}

window.customElements.define(MyStories.is, MyStories);
