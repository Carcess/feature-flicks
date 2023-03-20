import { motion } from "framer-motion";
import React, { useContext } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Genre } from "../components/Genre";
import { MovieCard } from "../components/MovieCard";
import NavComp from "../components/Navbar";
import { MovieContext } from "../context/MovieContext";
import { container } from "../helpers/framerMotion";


export default function Movies() {
  const {  movies, movieGenres, handleGenres, Auditorium } =
    useContext(MovieContext);

    let mergedMovieScreen = movies.map(v=>({...v,...Auditorium.find(sp => sp.movie === v.title)}))
    
    // setMovies(mergedMovieScreen || movies.map(v=>({...v,...Auditorium.find(sp => sp.movie === v.title)})));
    
  return (
    <>
      <NavComp />
      <Container className="mt-4">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="genres d-flex flex-wrap "
          style={{
            gap:'5px 15px'
          }}
        >
          {movieGenres?.map((item) => (
            <Genre
              id={item.id}
              key={item.id}
              title={item.title}
              active={item.active}
              handleGenres={handleGenres}
            />
          ))}
        </motion.div>
        <div className="wrapper mt-4">
          <Row md={3} xs={1} lg={4} className="g-4">
            {mergedMovieScreen?.map((item) => (
              <Col key={item.id}>
                <MovieCard movie={item} key={item.id} tvShow={false} />
              </Col>
            ))}
          </Row>
        </div>
      
      </Container>
    </>
  );
}
