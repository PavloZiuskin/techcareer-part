import React, { useEffect, useState } from 'react';
import Container from '../../components/Container/Container';
import {UsersList} from "../../components/TodoList/TodoList"
import { BtnLoadMore } from '../../components/BtnLoadMore/BtnLoadMore';
import { fetchUsers } from '../../services/API';
import BackButton from '../../components/BackButton/BackButton';


function TweetsPage() {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [isHasUsers, setIsHasUsers] = useState(true);
  const [loading, setLoading] = useState(false);

  const onLoadMore = () => setPage(prevPage => prevPage + 1);

  useEffect(() => {
    (fetchUsers(page)
    .then(response=>{
      setLoading(true)
      setUsers(prevUsers => [...prevUsers, ...response]);
      console.log(response)
      if (response.length < 4) {
        setIsHasUsers(false);
      }
      setLoading(false)
    })
    .catch(error => {
      console.log(error);
    }))},[page]);
 

  return (
    <Container>
      <BackButton />
      <UsersList user={users} />

      {isHasUsers === true && users.length > 0 && (
        <BtnLoadMore
          disabled={!isHasUsers}
          onLoadMore={onLoadMore}
          loading={loading}
        />
      )}
    </Container>
  );
}

export default TweetsPage;