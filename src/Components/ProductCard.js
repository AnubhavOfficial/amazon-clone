import { Card, makeStyles, Typography } from "@material-ui/core";
import React, { useState } from "react";
import StarRatings from "react-star-ratings";

const useStyles = makeStyles({
  main: {
    height: "55vh",
    width: "22vw",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    boxShadow: "none",
    marginTop: "2rem",
    borderRadius: "1rem",
    "&:hover": {
      cursor: "pointer",
      transform: "scale(1.07)",
    },
  },
  title: {
    height: "3rem",
    width: "90%",
    overflow: "hidden",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
  },
  image: {
    height: "70%",
    width: "80%",
  },
  footer: {
    display: "flex",
    justifyContent: "space-between",
    width: "80%",
    background: "transparent",
  },
});

const ProductCard = ({ item }) => {
  const classes = useStyles();
  return (
    <Card className={classes.main}>
      <img src={item.image} alt="" className={classes.image} />
      <Typography className={classes.title}>{item.title}</Typography>
      <div className={classes.footer}>
        <Typography>${item.price}</Typography>
        <StarRatings
          rating={item.rating.rate}
          starRatedColor="#FFA41C"
          numberOfStars={5}
          name="rating"
          starDimension="20px"
          starSpacing="5px"
        />
      </div>
    </Card>
  );
};

export default ProductCard;
