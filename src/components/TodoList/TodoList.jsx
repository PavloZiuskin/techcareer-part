import { useDispatch, useSelector } from "react-redux";
import { useEffect } from 'react';
import { fetchUsers } from "redux/operation";
import { selectUsers } from "redux/selectors";
import { UserCard } from "components/TodoItem/TodoItem";
import { nanoid } from "@reduxjs/toolkit";

export const UsersList = ()=>{
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch]);
    const users = useSelector(selectUsers);
    return(<section>
        <ul>
            {users.map(user => (
                <li key={nanoid()}>
                    <UserCard userTweet={user}/>
                </li>
            ))}
        </ul>
    </section>)
}