import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { ListGroup, Badge } from 'react-bootstrap';

// COMPONENTS
import UserTableItem from '../UserTableItem';

const UserTable = ({ users }) => {
   return (
      <ListGroup as='ol' numbered>
         <UserTableItem users={users} />
      </ListGroup>
   );
};

export default UserTable;
