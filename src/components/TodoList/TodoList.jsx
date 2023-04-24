
import { UserCard } from "components/TodoItem/TodoItem";
import { TweetsContainer,TweetsList } from "./TodoList.styled";

export const UsersList = ({user})=>{
    return(<TweetsContainer>
        <TweetsList>
            {user.map(user => (
                <li key={user.id}>
                    <UserCard userTweet={user}/>
                </li>
            ))}
        </TweetsList>
    </TweetsContainer>)
}