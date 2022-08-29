import { Grid } from "@material-ui/core";
import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { makeStyles } from "@material-ui/styles";
import amazonBanner from "../Assets/images/amazonBanner4.jpg";
import { Link } from "react-router-dom";
const useStyles = makeStyles({
  banner: {
    marginTop: "3.5rem",
    backgroundImage: `url(${amazonBanner})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "97.5vw 65vh",
    height: "65vh",
    marginLeft: "0.7vw",
  },
  gridItem: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  main: {
    // background: "red",
    // #fcf0d9
    backgroundImage: "linear-gradient(180deg ,#02386E 50%, #ffffff)",
  },
});
function Home() {
  const classes = useStyles();
  const [data, setData] = useState({});
  const [product, setProduct] = useState({});
  const [showProduct, setShowProduct] = useState(false);
  useEffect(() => {
    const apiCall = async () => {
      const response = await axios("https://fakestoreapi.com/products");
      setData(response.data);
    };

    apiCall();
  }, []);
  const clicked = (value) => {
    setProduct(value);
    setShowProduct(true);
  };
  return (
    <>
      {showProduct ? (
        <div style={{ marginTop: "10rem" }}>
          <h1>{product.title}</h1>
        </div>
      ) : (
        <div className={classes.main}>
          <div className={classes.banner}></div>
          <Grid container className={classes.grid}>
            {Object.keys(data).map((i) => {
              return (
                <Link to={`/products/${data[i].id}`} key={i}>
                  <Grid
                    item
                    xs={12}
                    sm={12}
                    md={4}
                    lg={3}
                    xl={3}
                    className={classes.gridItem}
                    onClick={() => clicked(data[i])}
                  >
                    <ProductCard item={data[i]} />
                  </Grid>
                </Link>
              );
            })}
          </Grid>
        </div>
      )}
    </>
  );
}

export default Home;
