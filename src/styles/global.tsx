import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @viewport{
      zoom: 1.0;
      width: device-width;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
    font-family: Roboto;
    margin-bottom: 100px;
  }

  a {
    color: #999;
    text-decoration: none;
    :hover {
      color:#fafafa;
    }
  }

  .header {
    padding: 20px;
    display: grid;
    grid-template-columns: 80px 1fr;
    grid-template-rows: 1fr;
    gap: 0px 0px;
    grid-template-areas: ". .";
    svg {
      width: 60px;
      height: auto;
    }
  }

  .search {
    label {
      display: block;
    }

    input {
      font-weight: bold;
      font-size: 48px;
      color: #999;
      background: ${props => props.theme.colors.background};
      border: none;
      border-bottom: 1px solid #999;
      width: 100%;
      :focus {
        outline: none;
      }
    }
  }

  h1 {
    font-weight: bold;
    font-size: 48px;
    color: #999;
  }

  .login {
    text-align: center;
    padding: 60px 20px;
    a {
      font-size: 32px;
      font-weight: bold;
    }
  }

  footer {
    position: fixed;
    bottom: 0px;
    text-align: center;
    display: block;
    padding: 20px 0;
    width: 100vw;
    max-width: 100vw;
    background: #161616;
  }

  .results {
    .info {
      padding: 20px;
      text-align: center;
      font-size: 24px;
    }

    .list {
      padding: 20px;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
      grid-auto-rows: 1fr;
      grid-template-rows: repeat(auto-fit);
      grid-auto-flow: dense;
      gap: 20px 20px;
      grid-template-areas:
        ". . .";

      @media only screen and (max-width: 768px) {
        display: block;
      }

      @media only screen and (max-width: minmax(550px, 1fr)) {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
      }

      img {
        min-width: 320px;
        max-width: 100%;
        height: auto;
      }

      .item {
        min-width: 320px;
      }
    }
  }

  .albumPage {
      padding: 20px;
      a {
        display: block;
        position: relative;
        margin-top: -90px;
        margin-bottom: 50px;
        left: 120px;
        color: #fafafa;
        font-size: 20px;
        :hover {
          color: #999;
        }
      }

      .container {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-auto-rows: 1fr;
        grid-template-rows: repeat(auto-fit);
        grid-auto-flow: dense;
        gap: 20px 20px;
        grid-template-areas:
          ". . .";

        @media only screen and (max-width: 960px) {
          display: block;
        }
        .details {
          img {
            margin-bottom: 20px;
          }
          text-align: center;
          .label {
            margin-top: 10px;
            font-size: 14px;
            color: #999;
          }
          h1 {
            padding: 20px;
          }
        }
        .tracksList {
          div {
            padding: 10px 0;
            font-size: 18px;
          }

          svg {
            max-width: 30px;
            height: auto;
            margin-right: 10px;
          }

          span {
            cursor: pointer;
          }
        }
      }

      .playing {
        text-align: center;
        color: #00d95f;
        border: 1px solid #00d95f;
        padding: 20px;
        margin: 30px 0;
        border-radius: 20px;
      }
    }

    .imgAleatoria {
      padding: 30px;
      text-align: center;
    }
`;
