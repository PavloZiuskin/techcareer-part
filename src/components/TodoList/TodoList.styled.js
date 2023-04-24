import styled from "styled-components";
import  FoneImg  from "images/logoPictures/Background.png";

export const TweetsContainer=styled.section`
margin-right: auto;
margin-left: auto;
padding-right: 40px;
padding-left: 40px;
width: 1200px;
`
export const TweetsList = styled.ul`
display: flex;
flex-wrap: wrap;
gap: 48px;
justify-content: center;
align-items: center;
li {
    position: relative;
    width: 380px;
    height: 460px;
    text-align: center;
    background-image: url(${FoneImg}),
    linear-gradient(114.99deg, #471ca9 -0.99%, #5736a3 54.28%, #4b2a99 78.99%);
  background-repeat: no-repeat;
  background-position: top 28px center, center;
  background-size: 308px 168px, 100%;
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;
    ::before {
    content: '';
    margin-top: 214px;
    display: block;
    width: 100%;
    height: 8px;
    background-color: #EBD8FF;
    box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
      inset 0px -1.71846px 3.43693px #ae7be3,
      inset 0px 3.43693px 2.5777px #fbf8ff;
  }
}
`