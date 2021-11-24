import React, { Fragment, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';

// COMPONENTS
import UserTable from '../../components/UserTable';

const Landing = () => {
   const [people, setPeople] = useState(null);
   useEffect(() => {
      axios
         .get('https://randomuser.me/api/?results=10')
         .then((res) => {
            setPeople(res?.data?.results);
         })
         .catch(() => {
            console.log('error fetching users!');
         });
   }, []);
   return (
      <Container>
         <Row>
            <Col md={12} className='mt-5'>
               <UserTable users={people} />
            </Col>
         </Row>
      </Container>
   );
};

export default Landing;
