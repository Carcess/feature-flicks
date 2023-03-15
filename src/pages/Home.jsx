import React, { useContext } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import NavComp from '../components/Navbar'
import { MovieContext } from '../context/MovieContext'
import Card from 'react-bootstrap/Card';

import moment from 'moment';


export default function Home() {
  const { Auditorium} = useContext(MovieContext)


  
  return (
    <>
      <NavComp />
      <Container className='mt-4'>
        <Row md={3} xs={1} lg={4} className="justify-content-center">

          {Auditorium?.map((obj, i) => {
            return (<Col key={i} className="m-2">
              <Card style={{ width: '18rem' }}>
              {/* {movies.filter((el)=>SortedMovies.filter((mid)=>mid.movie ===  el.title)).map(obj=><Card.Img variant="top" src={`https://cinema-rest.nodehill.se/${obj.description.posterImage}`} />)} */}
                <Card.Body>
                  <Card.Title>{obj?.movie}</Card.Title>
                  <Card.Text>
                    Auditorium: {obj?.auditorium}
                  </Card.Text>

                  <Card.Text>Date & Time: <b>{moment(obj?.screeningTime).format('LLLL')}</b></Card.Text>
                </Card.Body>
              </Card>
            </Col>)
          })}



        </Row>

      </Container>

    </>
  )
}
