import { Element } from '../node_modules/@polymer/polymer/polymer-element.js';
import '../node_modules/@polymer/app-layout/app-drawer/app-drawer.js';
import '../node_modules/@polymer/app-layout/app-drawer-layout/app-drawer-layout.js';
import '../node_modules/@polymer/app-layout/app-header/app-header.js';
import '../node_modules/@polymer/app-layout/app-header-layout/app-header-layout.js';
import '../node_modules/@polymer/app-layout/app-scroll-effects/app-scroll-effects.js';
import '../node_modules/@polymer/app-layout/app-toolbar/app-toolbar.js';
import '../node_modules/@polymer/app-route/app-location.js';
import '../node_modules/@polymer/app-route/app-route.js';
import '../node_modules/@polymer/iron-pages/iron-pages.js';
import '../node_modules/@polymer/iron-selector/iron-selector.js';
import '../node_modules/@polymer/iron-ajax/iron-ajax.js';
import '../node_modules/@polymer/paper-icon-button/paper-icon-button.js';

import './my-icons.js';
import './my-home.js';
import './my-awards.js';
import './my-projects.js';
import './my-stories.js';
import './my-talks.js';
import './shared-styles.js';

import { setPassiveTouchGestures } from '../node_modules/@polymer/polymer/lib/utils/settings.js';
setPassiveTouchGestures(true);

class MyApp extends Element {
  static get template() {
    return `
    <style>
      :host {
        --app-primary-color: #4285f4;
        --app-secondary-color: black;

        display: block;
      }

      app-drawer-layout:not([narrow]) [drawer-toggle] {
        display: none;
      }

      app-drawer {
        --app-drawer-width: 300px;
      }

      app-header {
        color: #000;
        background-color: #fff;
      }

      app-header [main-title] {
        margin-left: 16px;
      }

      app-header paper-icon-button {
        display: none;
        --paper-icon-button-ink-color: white;
      }

      .drawer-list {
        margin: 0 20px;
      }

      .drawer-list a {
        display: block;
        padding: 0 16px;
        text-decoration: none;
        color: #424242;
        line-height: 48px;
      }

      .drawer-list a:focus {
        outline: none;
      }

      .drawer-list a.iron-selected {
        color: #1976D2;
        font-weight: 500;
      }

      .nav-list {
        height: 100%;
        display: flex;
        align-items: center;
      }

      .nav-list a {
        margin: 0 2px;
        box-sizing: border-box;
        align-items: center;
        height: 100%;
        display: flex;
        cursor: pointer;
        justify-content: center;
        vertical-align: middle;
        color: #424242;
        font-size: 14px;
        padding: 3px 12px 0 12px;
        font-weight: 500;
        text-decoration: none;
        border-bottom: 2px solid transparent;
        transition: border-bottom 150ms ease-in-out;
      }

      .nav-list a:hover,
      .nav-list.no-tab a.iron-selected:hover {
        border-bottom: 2px solid #BCC8FB;
      }

      .nav-list a.iron-selected {
        border-bottom: 2px solid var(--app-primary-color);
      }

      footer {
        margin-top: 128px;
        font-family: 'Roboto', 'Noto', sans-serif;
        background: #FAFAFA;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 50px 80px;
        color: rgba(0, 0, 0, 0.65);
        font-size: 13px;
      }

      footer a {
        text-decoration: none;
      }

      footer iron-icon {
        margin: 8px 16px 8px 0;
        width: 26px;
        height: 26px;
        color: rgba(0, 0, 0, 0.65);
        -webkit-transition: all 150ms ease-in-out;
        -o-transition: all 150ms ease-in-out;
        transition: all 150ms ease-in-out;
      }

      footer iron-icon:hover {
        color: rgba(0, 0, 0, 0.95);
      }

      @media screen and (max-width: 860px){
        app-header paper-icon-button {
          display: flex;
        }
        .nav-list {
          display: none;
        }
        footer {
          flex-direction: column-reverse;
          align-items: flex-start;
          padding: 48px 16px;
        }
        footer .footer_social {
          margin-bottom: 16px;
        }
      }
    </style>

    <iron-ajax auto url="[[rootPath]]data/data.json" last-response="{{data}}"></iron-ajax>

    <app-location route="{{route}}"></app-location>

    <app-route route="{{route}}" pattern="/:page" data="{{routeData}}" tail="{{subroute}}"></app-route>
    <app-route route="{{subroute}}" pattern="/stories/:id" data="{{subrouteData}}"> </app-route>

    <app-drawer-layout force-narrow >
      <!-- Drawer content -->
      <app-drawer id="drawer" slot="drawer" swipe-open>
        <app-toolbar>limhenry.xyz</app-toolbar>
        <iron-selector selected="[[page]]" attr-for-selected="name" class="drawer-list" role="navigation">
          <a name="home" href="/home/">Home</a>
          <a name="stories" href="/stories/">Stories</a>
          <a name="projects" href="/projects/">Projects</a>
          <a name="talks" href="/talks/">Talks</a>
          <a name="awards" href="/awards/">Awards</a>
        </iron-selector>
      </app-drawer>

      <!-- Main content -->
      <app-header-layout>

        <app-header slot="header" reveals effects="waterfall">
          <app-toolbar>
            <paper-icon-button icon="my-icons:menu" drawer-toggle></paper-icon-button>
            <div main-title>limhenry.xyz</div>
            <iron-selector selected="[[page]]" attr-for-selected="name" class="nav-list" role="navigation">
              <a name="home" href="/home/">Home</a>
              <a name="stories" href="/stories/">Stories</a>
              <a name="projects" href="/projects/">Projects</a>
              <a name="talks" href="/talks/">Talks</a>
              <a name="awards" href="/awards/">Awards</a>
            </iron-selector>
          </app-toolbar>
        </app-header>

        <iron-pages role="main" selected="[[page]]" attr-for-selected="name" selected-attribute="visible" fallback-selection="home">
          <my-home name="home"></my-home>
          <my-projects name="projects" data="[[data.projects]]"></my-projects>
          <my-stories name="stories" route="{{subroute}}" data="[[data.stories]]"></my-stories>
          <my-talks name="talks" data="[[data.talks]]"></my-talks>
          <my-awards name="awards" data="[[data.awards]]"></my-awards>
        </iron-pages>

        <footer>
          <div class="footer_text">
            &copy; Copyright 2018 Henry Lim
          </div>
          <div class="footer_social">
            <a aria-label="Twitter" href="https://twitter.com/henrylim96" target="_blank" rel="noopener">
              <iron-icon icon="my-icons:twitter"></iron-icon>
            </a>
            <a aria-label="GitHub" href="https://github.com/limhenry" target="_blank" rel="noopener">
              <iron-icon icon="my-icons:github"></iron-icon>
            </a>
            <a aria-label="Medium" href="https://medium.com/@limhenry" target="_blank" rel="noopener">
              <iron-icon icon="my-icons:medium"></iron-icon>
            </a>
            <a aria-label="Linkedin" href="https://www.linkedin.com/in/henrylim96/" target="_blank" rel="noopener">
              <iron-icon icon="my-icons:linkedin"></iron-icon>
            </a>
            <a aria-label="Dribbble" href="https://dribbble.com/henrylim96" target="_blank" rel="noopener">
              <iron-icon icon="my-icons:dribbble"></iron-icon>
            </a>
          </div>
        </footer>
      </app-header-layout>
    </app-drawer-layout>
`;
  }

  static get is() { return 'my-app'; }

  static get properties() {
    return {
      page: {
        type: String,
        reflectToAttribute: true,
        observer: '_pageChanged',
      },
      routeData: Object,
      subroute: Object,
      // This shouldn't be neccessary, but the Analyzer isn't picking up
      // Polymer.Element#rootPath
      rootPath: String,
    };
  }

  static get observers() {
    return [
      '_routePageChanged(routeData.page)'
    ];
  }

  _routePageChanged(page) {
    // If no page was found in the route data, page will be an empty string.
    // Default to 'home' in that case.
    this.page = page || 'home';

    // Close a non-persistent drawer when the page & route are changed.
    if (!this.$.drawer.persistent) {
      this.$.drawer.close();
    }
  }

  _routeStoriesIdChanged() {
    this.shadowRoot.querySelector('app-header-layout').header.scroll(0, 0);
  }

  _pageChanged(page, oldPage) {
    if (page != null) {
      // home route is eagerly loaded
      this.shadowRoot.querySelector('app-header-layout').header.scroll(0, 0);
    }
  }

  _pageLoaded() {}

  _showPage404() {
    // this.page = 'home';
  }
}

window.customElements.define(MyApp.is, MyApp);

