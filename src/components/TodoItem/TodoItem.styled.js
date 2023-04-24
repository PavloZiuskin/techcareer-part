import styled from "styled-components";

export const LogoWithItem = styled.img`
position: absolute;
top: 20px;
left: 20px;
`
export const AvatarContainer = styled.div`
position: absolute;
  left: 150px;
  top: 178px;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #EBD8FF;
  box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06),
    inset 0px -2.19582px 4.39163px #ae7be3,
    inset 0px 4.39163px 3.29372px #fbf8ff;
`
export const PhotoContainer = styled.div`
width: 64px;
  height: 64px;
  border-radius: 32px;
  background-color: #471CA9;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`
export const ImgAvatar = styled.img`
    object-fit: cover;
`
export const TweetsContainer = styled.div`
margin-top: 62px;
font-style: normal;
font-weight: 500;
font-size: 20px;
line-height: 24px;
text-transform: uppercase;
color: #EBD8FF;
`
export const TweetsInformation = styled.p`
margin-bottom: 16px;`
export const FollowersInformation = styled.p`
margin-bottom:26px;` 
export const BtnFollow = styled.button`
font-weight: 600;
font-family: inherit;
font-size: 18px;
line-height: 1.22;
color: black;
text-transform: uppercase;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 14px 56px;
margin: 0 auto;
margin-top: 26px;
width: 196px;
height: 50px;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 10px;
:hover,
:focus {
  background-color:#5CD3A8; 
  color: #eee;
}
`;