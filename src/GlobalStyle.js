// globalStyles.js
import { createGlobalStyle } from "styled-components"
import sectionOneBanner from "../src/assets/images/sec1.png"
import Mint from "../src/assets/images/secondSection.png"
import Font from "./assets/font/Pixelar/PixelarRegular.ttf"
import featuredBg from "../src/assets/images/featured.png"
import featuredbuild from "../src/assets/images/allEight.png"
import build from "../src/assets/images/building.png"
import spacer from "../src/assets/images/FourthPart.png"
import egg from "../src/assets/images/Shape1.png"
import build1 from "../src/assets/images/V1.gif"
import FooterImg from "../src/assets/images/lastlayer.png"

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
    scroll-behavior: smooth;
  }
   .App{
    position: relative;
    .Footer{
        position: absolute;
        bottom:0px;
    }
   }
   /* Chrome, Safari, Edge, Opera */
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
    }

    /* Firefox */
    input[type=number] {
    -moz-appearance: textfield;
    }
  @font-face {
    font-family:'Pixelar';
    src: url(${Font});
  }
  .header-wrapper{
      padding: 36px 84px;
      background-color: #12FED9;
      @media all and (max-width:1200px){
        padding: 10px;
      }
      .navbar-nav{
            @media all and (max-width:600px){
              justify-content: flex-end;
            }
          li {
              margin-right: 30px;
              @media all and (max-width:1200px){
               margin-right: 5px;
              }
              a{
                padding: 0px;
                font-family: 'Pixelar';
                font-style: normal;
                font-weight: 300;
                font-size: 32px;
                line-height: 32px;
                color: #000000 !important;

                @media all and (min-width:1700px) and (max-width:2200px){
                    font-size: 50px;
                }
                  @media all and (max-width:1200px){
                   padding: 10px 0px;
                   font-size: 16px;
                  }
                    &:hover{
                        text-decoration: none;
                    }
              }
          }
      }
    .navbar-toggler{
        @media all and (max-width:600px){
            border: 2px solid black;
        }
        &::focus{
            box-shadow: none;
            outline: none;
        }
    }
    .social-media-icons{
        a{
          margin-right: 45px;
            @media all and (max-width:1200px){
                margin-right: 10px;
            }
          img{
            @media all and (max-width:1200px){
                width: 25px;
            }  
          }
        }
    }
    .collapse{
        &.show {
            ~ {
                .social-media-icons{
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    width: 100%;
                    margin-top: 10px;
                }
            }
        }
    }
  }
  .section-one{
    width: 100%;
    height: 1035.02px;
    background-size: cover;
    background-position: center;
    background-image:url(${sectionOneBanner});
    @media all and (min-width:1500px) and (max-width:2200px){
        display: flex;
        flex-direction: column;
        align-items: center; 
    }
    @media all and (max-width:600px){
      height: 318.02px;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
   .logo-img {
     margin-top: 165px;

     @media all and (min-width:1500px) and (max-width:3000px){
       width: 500px;
     }

     @media all and (max-width:600px){
        margin-top: 20px;
        width: 200px;
     }
    }
    .text-img {
     margin-top: -130px;
     padding: 0px 20px;

     @media all and (min-width:1500px) and (max-width:3000px){
        width: 1010px;
        margin-top: -70px;
     }

     @media all and (max-width:600px){
        margin-top: -46px;
        width: 300px;
     }
    }
  }
  .min-sec-wrapper{
    height: 245px;
    width: 100%;
    margin-top: -10px;
    background-size: cover;
    background-position: center;
    background-image:url(${Mint});
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 130px;
    @media all and (max-width:600px){
        flex-direction: column;
        padding: 0 20px;
        height: 100%;
    }
    @media all and (max-width:1200px){
        padding: 0 20px;
    }
    .right-section-wrap{
        img{
            @media all and (max-width:600px){
             margin-top: 20px;
            } 
        }
    }
    .content-wrapper{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
      .title{
        font-style: normal;
        font-weight: normal;
        font-size: 70px;
        line-height: 65px;
        color: #232323;
        font-family:'Pixelar';
        margin-bottom: 10px;
      }
      .dec{
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        line-height: 30px;
        color: #232323;
        margin-bottom: 23px;
        font-family: 'Poppins', sans-serif;
        @media all and (max-width:600px){
         text-align: left;
        }
      }
      .input-wrapper{
        input{
            width: 131.85px;
            height: 45px;
            border: 3px solid #fff;
            font-style: normal;
            font-weight: normal;
            font-size: 40px;
            line-height: 42px;
            color: #232323;
            font-family:'Pixelar';
            border-radius: 5px;
            margin-right: 25px;
            background-color: rgba(225,225,225,0.7);
            &::active{
                outline: none;
                border: none;
            }
            &::placeholder{
                color: #232323;
            }
        }
        .btn-mint-action{
            height: 45px;
            cursor: pointer;
            width: 115.85px;
            border: 3px solid #FE2A77;
            font-style: normal;
            font-weight: normal;
            font-size: 40px;
            line-height: 42px;
            font-family: 'Pixelar';
            text-align: center;
            color: #FFFFFF;
            background-color: #FE2A77;
            display: inline-block;
            border-radius: 5px;
            margin-right: 50px;
        }
        .total-section{
            font-style: normal;
            font-family:'Pixelar';
            font-weight: normal;
            font-size: 40px;
            line-height: 37px;
            color: #232323;
        
            .result-val {
             color: #FE2A77;
            }
        }
      }
    }
  }
  .featured-wrapper{
    height: 2917px;
    width: 100%;
    background-size: 103% 100% !important;
    background-position: center !important;
    background-repeat: no-repeat !important;
    background-image: url(${build1});
    z-index: -1;
    margin-top: -25px;
    transition: 0.5s ease all;
    @media all and (min-width:1500px) and (max-width:3000px){
            height: 3200px;
    }
    @media all and (max-width:1200px){
        height: 2000px;
        margin-top: -10px;
    }
    @media all and (max-width:700px){
        height: 1900px;
        margin-top: -20px;
    }
    @media all and (max-width:600px){
        height: 1100px;
    }
    .featured-space{
        width: 80%;
        margin: auto;
        height: 1159.61px;
        background-repeat: no-repeat;
        background-size: contain;
        background-position: center;
        position: relative;
        background-image: url(${featuredbuild});
        @media all and (max-width:600px){
            height: 550px;
            background-repeat: no-repeat;
            background-size: contain;
            background-position: bottom;
        }    
    }
    .heading-featured{
        font-family: Roboto;
        font-style: normal;
        font-weight: normal;
        font-size: 64px;
        line-height: 75px;
        color: #FFFFFF;
        text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25); 
        text-align: left;
        padding-top: 0px; 
        @media all and (max-width:900px){
            font-size: 34px;
            padding-top: 50px; 
        }
        @media all and (min-width:1800px) and (max-width:3000px){
            margin-left: 290px;
        }
    }
    img{
        width: 700px;
        position: absolute;
        left: -200px;
        top: 0px;
        @media all and (min-width:1800px) and (max-width:3000px){
            position: absolute;
            left: 190px;
            top: 0px;
        }
        @media all and (max-width:1200px){
            width: 400px;
            position: absolute;
            left: -110px;
            top: 180px;
        }
        @media all and (max-width:600px){
            width: 300px;
            position: absolute;
            left: -95px;
            top: 100px;
        }
        @media all and (max-width:450px){
            width: 200px;
            position: absolute;
            left: -50px;
            top: 190px;
        }
    }
    .animated-lines{
        position: relative;
        height: 413px;
        margin: auto;
        @media all and (min-width:1500px) and (max-width:3000px){
            width: 1200px;
        }
        @media all and (max-width:1200px){
         display:none;
        }
        img {
            width: 70px;
            position: absolute;
            animation-duration: 20000ms;
            animation-iteration-count: infinite;
            animation-timing-function: linear;
        }
        .line1{
            left: 37%;
            top: 70px;
            animation-name: line1;
        }
        .line2{
            left: 20%;
            top: 130px;
            animation-name: line2;
        }
        .line3{
            left: 18%;
            top: 180px;
            animation-name: line3;
        }
        .line4{
            left: 10%;
            top: 210px;
            width: 170px;
            animation-name: line4;
        }
        .line5{
            left: 32%;
            top: 256px;
            animation-name: line5;
        }
        .line6{
            left: 30%;
            top: 280px;
            animation-name: line6;
        }
        .line7{
            left: 40%;
            top: 300px;
            animation-name: line7;
        }
        .line8{
            left: 42%;
            top: 335px;
            animation-name: line8;
        }
        .line9{
            left: 50%;
            top: 315px;
            animation-name: line11;
        }
        .line10{
            left: 50%;
            top: 330px;
            width: 170px;
            animation-name: line10;
        }
    }
  }
  .building-image{
    height: 1380px;
    width: 100%;
    margin-top: 40px;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    background-image: url(${build}); 
    @media all and (max-width:600px){
        height: 400px;
        background-size: contain;
    } 
  }
  .Roadmap-wrapper{
    width: 100%;
    height: 1000px;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    background-image: url(${spacer}); 
    position: relative;

    .over-lap-div{
    width: 430px;
    height: 492px;
    background-repeat: no-repeat;
    background-position: center;
    background-image: url(${egg});
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -25%);  
    @media all and (max-width:600px){
        width: 300px;
        height: 492px;
        background-size: contain;
    }   
    }
    .music{
    position: absolute;
    right: -30px;
    top: 66px;
    @media all and (max-width:600px){
        position: absolute;
        right: -6px;
        top: 120px;
        width: 100px;
    }    
    } 
    .disc{
    position: absolute;
    left: 60px;
    top: 97px;
    z-index: -1; 
    animation-name: spin;
    animation-duration: 40000ms;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
   
    @media all and (max-width:600px){
       position: absolute;
       left: 33px;
       top: 135px;
       z-index: -1;
       width: 240px;
    }     
    }
    .egg{
    position: absolute;
    left: 180px;
    top: 210px;
    z-index: 1;
        @media all and (max-width:600px){
         position: absolute;
         left: 120px;
         top: 220px;
         z-index: -1;
         width: 70px;
        }     
    }
  }
  .blue-wrap-sec{
   background-color:#12FED9;
   width: 100%;
   margin-top: -50px;
    @media all and (max-width:900px){
    height: auto;
    }    
  }
   .timeline-road{  
    margin-top:0px;
   }
   .lab2{
       margin-top: -10px;
   }
   .section-five{
    margin-top: -18px;
    img{
        width: 100%;
    }
   }
   .map-six-image{
       margin-top: -105px;
   }
   .section-six-wrapper{
    margin-top: -185px;
    z-index: -1;
    position: relative;
    img{
        width: 100%;
    }
    @media all and (max-width:600px){
      margin-top: -55px;
    } 
    .team-member{
    position: absolute;
    bottom: 100px;
    width: 100%;
    left: 50%;
    transform: translateX(-50%);
    padding: 0px 20px;
  
    }
   }
   .Footer{
    margin-top: -125px;
    overflow: hidden;
    height: 325px;
    width: 100%;
    background-image: url(${FooterImg});
    background-repeat-x: repeat;
    background-repeat-y: no-repeat;
    background-position: center;
    background-size: unset;
    animation-name: footer;
    animation-duration: 40000ms;
    animation-iteration-count: infinite;
    animation-timing-function: linear;

    @media all and (max-width:600px){
        margin-top: 22px;
        position: relative;
        bottom: 0px;
    } 
   }
   .map-road{
       width: 100%;
   }
    @keyframes spin {
        from {transform:rotate(0deg);}
        to {transform:rotate(360deg);}
    }
    ${"" /* run */}
    @keyframes run {
       from { transform: translateX(0px); }
       to { transform: translateX(180px); }
    }
    ${"" /* footer */}
    @keyframes footer {
     0% {
         background-position: left;
     }
     50% {
         background-position: center;
     }
     80% {
         background-position: right;
     }
     100%{
         background-position: left;
     }
    }
    ${"" /* lines */}
    @keyframes line1 {
     0% {
       top:70px;
       left: 37%;
     }
     50% {
        top:13px;
        left: 37%;
     }
     100%{
        left: 70px;
        left: 37%;
     }
    }
    @keyframes line2 {
     0% {
       top: 130px;
       left: 20%;
     }
     50% {
        top: 130px;
        left: 34%;
     }
     100%{
        top: 130px;
        left: 20%;
     }
    }
    @keyframes line3 {
     0% {
        left: 18%;
        top: 180px;
     }
     50% {
        left: 0%;
        top: 180px;
     }
     100%{
        left: 18%;
        top: 180px;
     }
    }
    @keyframes line4 {
     0% {
        left: 18%;
        top: 180px;
     }
     50% {
        left: 40%;
        top: 180px;
     }
     100%{
        left: 0%;
        top: 180px;
     }
    }
    @keyframes line5 {
     0% {
        left: 32%;
        top: 265px;
     }
     50% {
        left: 20%;
        top: 265px;
     }
     100%{
        left: 35%;
        top: 265px;
     }
    }
    @keyframes line6 {
     0% {
        left: 32%;
        top: 265px;
     }
     50% {
        left: 32%;
        top: 260px;
     }
     80% {
        left: 32%;
        top: 334px;
     }
     100%{
        left: 32%;
        top: 256px;
     }
    }
    @keyframes line7 {
     0% {
        left: 40%;
        top: 300px;
     }
     50% {
        left: 50%;
        top: 300px;
     }
     100%{
        left: 40%;
        top: 300px;
     }
    }
    @keyframes line8 {
     0% {
      left: 42%;
      top: 335px;
     }
     50% {
        left: 37%;
        top: 335px;
     }
     100%{
        left: 42%;
        top: 335px;
     }
    }
    @keyframes line9 {
     0% {
        left: 50%;
        top: 315px;
     }
     50% {
        left: 65%;
        top: 315px;
     }
     100%{
        left: 50%;
        top: 315px;
     }
    }
    @keyframes line10 {
     0% {
        left: 50%;
        top: 315px;
     }
     50% {
        left: 65%;
        top: 315px;
     }
     100%{
        left: 50%;
        top: 315px;
     }
    }
    @keyframes line11 {
     0% {
        left: 50%;
        top: 315px;
     }
     50% {
        left: 34%;
        top: 315px;
     }
     100%{
        left: 50%;
        top: 315px;
     }
    }
  `

export default GlobalStyle
