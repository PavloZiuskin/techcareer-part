import { useState,useEffect } from "react";
import { updateFollowers } from "services/API";
import logo from "images/logoPictures/Vector.png";

import { LogoWithItem,AvatarContainer,PhotoContainer,ImgAvatar,TweetsContainer,TweetsInformation,FollowersInformation,BtnFollow} from "./TodoItem.styled";

export const UserCard = ({ userTweet }) => {
  const [isFollowing, setIsFollowing] = useState(false);
  const [followerCount, setFollowerCount] = useState(userTweet.followers);

  useEffect(() => {
    const following = localStorage.getItem(`following_${userTweet.id}`);
    if (following !== null) {
      setIsFollowing(following === 'true');
    }
  }, [userTweet.id]);

  const handleClick = async () => {
    setIsFollowing(!isFollowing);
    const newFollowerCount = isFollowing
      ? followerCount - 1
      : followerCount + 1;
    await updateFollowers(userTweet.id, newFollowerCount);
    setFollowerCount(newFollowerCount);
    localStorage.setItem(`following_${userTweet.id}`, !isFollowing);
  };
    const { avatar, tweets}= userTweet
  return (
    <div>
      <LogoWithItem src={logo} alt="logo" />
      <div>
        <AvatarContainer>
          <PhotoContainer>
          <ImgAvatar src={avatar} alt="avatar" />
          </PhotoContainer>
        </AvatarContainer>
        <TweetsContainer>
          <TweetsInformation>{tweets} TWEETS</TweetsInformation>
          <FollowersInformation>{followerCount.toLocaleString('en-US')} followers</FollowersInformation>
          <BtnFollow onClick={handleClick} isFollowing={isFollowing} style={isFollowing ? {backgroundColor: "#5CD3A8"} : {backgroundColor:"#EBD8FF"} }>
        {isFollowing ? 'Following' : 'Follow'}
      </BtnFollow>
        </TweetsContainer>
      </div>
    </div>
  );
};
