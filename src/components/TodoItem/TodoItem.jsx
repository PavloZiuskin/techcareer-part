export const UserCard = ({ userTweet }) => {
    const {user, avatar, tweets, followers}= userTweet
  return (
    <div>
      <div>
        <img srs="" alt="" />
      </div>
      <div>
        <div>
          <img srs={avatar} alt={user} />
        </div>
        <div>
          <h2>{user}</h2>
          <p>{tweets} TWEETS</p>
          <p>{followers} FOLLOWERS</p>
          <button type="button"></button>
        </div>
      </div>
    </div>
  );
};
