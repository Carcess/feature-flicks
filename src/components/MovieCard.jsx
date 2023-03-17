import React from "react";
import { Card } from "react-bootstrap";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { IMAGE_LINK, IMAGE_UNAVAILABLE_PLACEHOLDER } from "../constants";
import { motion } from "framer-motion";
import moment from "moment/moment";


export const MovieCard = ({ movie }) => {



  function formatTime(time) {
    const minutes = time.minutes();
    const hours = time.hours();
    const hourFormatStr = hours === 1 ? 'hour' : 'hours';
    const minuteFormatStr = minutes === 1 ? 'minute' : 'minutes';
    if (!time.minutes()) {
      return time.format(`h [${hourFormatStr}]`);
    }
    return time.format(`h [${hourFormatStr}] mm [${minuteFormatStr}]`);
  }

  return (
    <motion.div
      key={movie.id}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 40,
      }}

    >
      <Card

        style={{
          width: "100%",
          background: "#161616",
          color: "white",
          borderRadius: 6,
          position: "relative",
        }}
        className=" movie-card"
      >
        <Card.Body>
          <LazyLoadImage
            src={!movie.description.posterImage ? IMAGE_UNAVAILABLE_PLACEHOLDER : `${IMAGE_LINK}/${movie.description.posterImage}`}
            width={"100%"}
            height={350}
            alt="movie"
            effect="blur"
            style={{ objectFit: "cover" }}
          />
          <Card.Title
            // onClick={() => navigate(`/${movie.id}`)}
            className="text-center mt-3"
            style={{ cursor: "pointer" }}
          >
            {movie.name || movie.title}
          </Card.Title>

          <Card.Text>
            Auditorium: {movie.auditorium}
          </Card.Text>

          <Card.Text>Date & Time: <b>{moment(movie?.screeningTime).format('LLLL')}</b></Card.Text>
          <Card.Text

            className="text-center mt-1"
            style={{ cursor: "pointer" }}
          >
            Duration: {formatTime(moment.utc(
              moment.duration(movie.description.length, "minutes")
                .asMilliseconds()
            ))}
          </Card.Text>
          <Card.Text

            className="text-center mt-1"
            style={{ cursor: "pointer" }}
          >
            Category:{movie.description.categories.map((obj) => <li>{obj}</li>)}
          </Card.Text>
        </Card.Body>
      </Card>
    </motion.div>
  );
};
