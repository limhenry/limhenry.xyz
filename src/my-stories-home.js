import { Element } from '../node_modules/@polymer/polymer/polymer-element.js';
import './shared-styles.js';

class MyStoriesHome extends Element {
  static get template() {
    return `
        <style include="shared-styles">
            :host {
                display: block;
            }

            .hero {
                max-width: 1200px;
            }

            .story_container {
                box-sizing: border-box;
                grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
                grid-column-gap: 20px;
                justify-items: center;
                justify-content: center;
                padding: 0 16px;
                display: grid;
                max-width: 1200px;
                margin: 0 auto;
            }

            .story_card {
                border: 1px solid #ededed;
                margin: 12px;
                width: 100%;
                cursor: pointer;
                transition: 250ms box-shadow ease-in-out;
                text-decoration: none;
                color: #000;
            }

            .story_card:hover {
                box-shadow: 0 0 2px rgba(38, 50, 56, .2), 0 8px 24px 0 rgba(0, 0, 0, .2)
            }

            .story_cover {
                height: 220px;
                background-size: cover;
                background-position: center;
            }

            .story_content {
                padding: 16px;
                box-sizing: border-box;
                min-height: 300px;
                display: flex;
                flex-direction: column;
            }

            .story_content .story_title {
                font-size: 24px;
                font-weight: 500;
                line-height: 28px;
                margin-bottom: 12px;
            }

            .story_content .story_date {
                flex: 1;
                text-transform: uppercase;
                color: #696969;
                font-weight: 500;
                font-size: 14px;
            }

            .story_content .story_readmore {
                text-transform: uppercase;
                font-weight: 500;
                font-size: 15px;
                display: flex;
                justify-content: space-between;
                align-items: center;
                line-height: 15px;
                color: #1565C0;
            }

            .story_content .story_readmore iron-icon {
                width: 22px;
                height: 22px;
            }

            .more {
                text-decoration: none;
                font-size: 15px;
                line-height: 15px;
                text-align: center;
                margin: 64px auto 48px auto;
                text-transform: uppercase;
                font-weight: 600;
                cursor: pointer;
                color: #3367d6;
                display: flex;
                justify-content: center;
                align-items: center;
            }

            .more iron-icon {
                margin-left: 6px;
                width: 22px;
                height: 22px;
            }

            @media screen and (max-width: 640px) {
                .story_container {
                    grid-template-columns: none;
                    padding: 0;
                }
                .story_card {
                    border: none;
                    width: 100%;
                    margin: 0;
                }
                .story_card:hover {
                    box-shadow: none;
                }
                .story_content {
                    padding-bottom: 24px;
                    min-height: 250px;
                }
                .story_card:last-of-type {
                    border-bottom: 1px solid #ededed;
                }
            }
        </style>

        <div class="hero">
            <div class="hero_title">Stories</div>
            <div class="hero_description">
                <p>Once upon a time, there was a boy who loved to code ...</p>
            </div>
        </div>

        <div class="story_container">
            <dom-repeat items="[[data]]">
                <template>
                    <a class="story_card" href="[[rootPath]]stories/[[item.id]]/">
                        <div class="story_cover" style="background-image: url([[rootPath]]images/[[item.image]])"></div>
                        <div class="story_content">
                            <div class="story_title">[[item.header]]</div>
                            <div class="story_date">[[item.date]] | [[item.author]]</div>
                            <div class="story_readmore">
                                <span>Read More</span>
                                <iron-icon icon="my-icons:arrow-forward"></iron-icon>
                            </div>
                        </div>
                    </a>
                </template>
            </dom-repeat>

        </div>

        <a class="more" href="https://medium.com/@limhenry/" target="_blank">
            <span>Read More on Medium.com</span>
            <iron-icon icon="my-icons:add-circle"></iron-icon>    
        </a>
`;
  }

  static get is() { return 'my-stories-home'; }

  static get properties() {
      return {
          data: {
              type: Object,
              notify: true
          }
      };
  }
}

window.customElements.define(MyStoriesHome.is, MyStoriesHome);
