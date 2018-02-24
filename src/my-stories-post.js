import { Element } from '../node_modules/@polymer/polymer/polymer-element.js';
import '../node_modules/@polymer/iron-ajax/iron-ajax.js';
import '../node_modules/@polymer/marked-element/marked-element.js';
import './shared-styles.js';

class MyStoriesPost extends Element {
  static get template() {
    return `
        <style include="shared-styles">
            :host {
                display: block;
                min-height: 80vh;
            }

            .story_cover {
                height: 300px;
                background-size: cover;
                background-position: center;
                max-width: 860px;
                margin: 0 auto;
            }

            .story_container {
                margin: 64px auto 48px auto;
            }

            .story_title {
                max-width: 640px;
                font-weight: 400;
                font-size: 52px;
                line-height: 50px;
                margin-bottom: 36px;
                margin: 0 auto;
            }

            .story_author {
                font-weight: 500;
                max-width: 640px;
                margin: 36px auto 6px auto;
                font-size: 16px;
            }

            .story_date {
                font-weight: 500;
                max-width: 640px;
                margin: 6px auto 48px auto;
                color: #757575;
                font-size: 14px;
            }

            .story_content p {
                max-width: 640px;
                font-family: Roboto, Arial, Helvetica, sans-serif;
                color: #5f6368;
                font-size: 18px;
                line-height: 28px;
                margin: 24px auto;
                font-weight: 400;
            }

            .story_content h1 {
                font-weight: 500;
                max-width: 640px;
                margin: 48px auto 0 auto;
            }

            .story_content h2 {
                font-weight: 500;
                max-width: 640px;
                margin: 48px auto 0 auto;
            }

            .story_content img {
                width: 140%;
                margin: 0 auto;
                margin-left: -20%;
            }

            .story_content em {
                font-size: 15px;
                width: 100%;
                display: block;
                margin-bottom: 36px;
            }

            .story_content a {
                color: #206dd6;
            }

            .story_origin {
                max-width: 640px;
                margin: 64px auto 48px auto;
                font-weight: 500;
                display: flex;
                align-items: center;
            }

            .story_origin a {
                text-decoration: none;
                text-transform: uppercase;
                color: #1a73e8;
                margin-left: 6px;
            }

            .box {
                width: 12px;
                height: 12px;
                background: #5696ed;
                margin-right: 8px;
            }

            @media screen and (max-width: 860px) {
                .story_title {
                    font-size: 44px;
                    line-height: 46px;
                }
                .story_author {
                    margin: 24px auto 6px auto;
                }
                .story_container {
                    padding: 0 16px;
                }
                .story_content p {
                    font-size: 16px;
                }
                .story_content img {
                    width: calc(100% + 32px);
                    margin-left: -16px;
                }
            }
        </style>

        <iron-ajax id="ajax" last-response="{{data}}" on-error="_requestError"></iron-ajax>

        <dom-if if="[[data]]">
            <template>
                <div class="story_container">
                    <h1 class="story_title">[[data.header]]</h1>
                    <div class="story_author">[[data.author]] - [[data.publisher]]</div>
                    <div class="story_date">Published [[data.date]]</div>
                    <div class="story_content">
                        <marked-element markdown="[[data.post]]">
                            <div slot="markdown-html"></div>
                        </marked-element>
                    </div>
                    <div class="story_origin">
                        <div class="box"></div>Originally posted on:
                        <a href="[[data.link]]" target="_blank">[[data.publisher]]</a>
                    </div>
                </div>
            </template>
        </dom-if>
`;
  }

  static get is() { return 'my-stories-post'; }

  static get properties() {
      return {
          route: {
              type: Object,
              notify: true,
              observer: '_getPost'
          }
      };
  }

  _requestError() {
      window.history.pushState({}, null, '/stories/');
      window.dispatchEvent(new CustomEvent('location-changed'));
  }

  _getPost() {
      this.data = null;
      if (this.route.page) {
          this.$.ajax.url = this.rootPath + 'data/' + this.route.page + ".json";
          this.$.ajax.generateRequest();
      }
  }
}

window.customElements.define(MyStoriesPost.is, MyStoriesPost);
