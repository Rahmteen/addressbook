import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { ListGroup, Badge, Image, Container, Row, Col } from 'react-bootstrap';

const UserTableItem = ({ users }) => {
   return (
      <Fragment>
         {users &&
            users.map((user) => (
               <Container className='p-3'>
                  <Row>
                     <Col md={8}>
                        <div className='ms-2 me-auto'>
                           <div className='fw-bold'>
                              {user.name.first} {user.name.last}
                           </div>
                           {user.email}
                        </div>
                     </Col>
                     <Col md={4}>
                        <Image src={user.picture.thumbnail} alt='user_picture' roundedCircle />
                     </Col>
                  </Row>
               </Container>
            ))}
      </Fragment>
   );
};

export default UserTableItem;
