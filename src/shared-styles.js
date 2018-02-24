import '../node_modules/@polymer/polymer/polymer-element.js';
const $_documentContainer = document.createElement('div');
$_documentContainer.setAttribute('style', 'display: none;');

$_documentContainer.innerHTML = `<dom-module id="shared-styles">
  <template>
    <style>
      .hero {
        max-width: 700px;
        margin: 64px auto 48px auto;
        padding: 16px;
        box-sizing: border-box;
      }

      .hero_title {
        font-size: 96px;
        line-height: 96px;
        color: var(--app-primary-color);
        font-weight: 400;
        margin-bottom: 36px;
      }

      .hero_description p {
        font-size: 28px;
        line-height: 36px;
      }

      .cover {
        height: 600px;
        background-size: cover;
        background-position: center;
      }

      .cover_label {
        color: #ffffffbd;
        font-weight: 500;
        display: flex;
        justify-content: flex-end;
        padding: 8px;
        height: 40px;
        font-size: 14px;
        background: linear-gradient(#0000008f, transparent);
        text-align: right;
      }

      .item_container {
        margin-top: 36px;
      }

      .item_container .item {
        margin: 0 auto;
        max-width: 680px;
        padding: 28px 24px;
        line-height: 24px;
        border-bottom: 1px solid #e9e9e9;
      }
      .item_container .item:hover {
        cursor: pointer;
      }
      .item_container .item:hover .item_header,
      .item_container .item:hover iron-icon {
        color: #1a73e8;
      }
      
      .item_container .item:last-of-type {
        border-bottom: none;
      }
      .item_container .item_header {
        font-size: 24px;
        font-weight: 400;
        max-width: 95%;
        line-height: 36px;
        margin-bottom: 12px;
        transition: 70ms color ease-in-out;
      }
      .item_container .item_info {
        font-size: 15px;
        margin-bottom: 16px;
        color: #5d5d5d;
      }
      .item_container .item_description {
        font-size: 15px;
        color: #313131;
        font-family: 'Roboto', 'Noto', sans-serif;
      }

      .item_info {
        display: flex;
        flex-wrap: wrap;
      }

      .item_tag {
        border-radius: 18px;
        height: 30px;
        font-size: 12px;
        line-height: 12px;
        padding: 8px;
        box-sizing: border-box;
        border: 1px solid #DFE1E5;
        color: black;
        margin-right: 6px;
        margin-bottom: 6px;
        display: flex;
        align-items: center;
      }

      .item_circle {
        border-radius: 50%;
        background: #e7a9fa;
        width: 10px;
        height: 10px;
        margin-right: 5px;
      }

      #android {
        background-color: #77c158;
      }

      #android_things {
        background-color: #307912;
      }

      #firebase {
        background-color: #facc49;
      }

      #iot {
        background-color: rgb(250, 191, 169);
      }

      #other {
        background-color: rgb(250, 191, 169);
      }

      #polymer {
        background-color: #f07b99;
      }

      #python {
        background-color: #3b76aa;
      }

      #preact {
        background-color: #663ab8;
      }

      #pwa {
        background-color: #61a6ff;
      }

      #web {
        background-color: rgb(250, 191, 169);
      }

      @media screen and (max-width: 860px) {
        .hero {
          margin: 24px auto;
        }
        .hero_title {
          font-size: 60px;
          line-height: 60px;
          margin-bottom: 28px;
          word-break: break-word;
        }
        .hero_description p {
          font-size: 20px;
          line-height: 26px;
        }
        .cover {
          height: 300px;
        }
        .cover_label span {
          font-size: 12px;
          width: 80%;
        }
        .item_container {
          margin-top: 16px;
        }
        .item_container .item {
          padding: 20px 16px;
        }
        .item_container .item_header {
          font-size: 20px;
          line-height: 26px;
        }
        .item_container .item_info {
          font-size: 13px;
          margin-bottom: 12px;
        }
        .item_container .item_description {
          font-size: 14px;
        }
      }
    </style>
  </template>
</dom-module>`;

document.head.appendChild($_documentContainer);