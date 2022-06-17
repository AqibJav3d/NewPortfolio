import React, { useState } from "react";
import { data } from "./Data";
import { useStyles } from "./Styles";
import portfolio from "./../../Assets/Images/portfolio.png";
import Categories from "./Categories/Categories";
import { Grid } from "@material-ui/core";
import Menu from "./Menu/Index";

const Portfolio = (theme) => {
  const classes = useStyles();
  const [filtered, setFiltered] = useState(data);
  const handleFilter = (category) => {
    if (category !== "all") {
      const result = data.filter((data) => data.category === category);
      setFiltered(result);
    } else {
      setFiltered(data);
    }
  };

  return (
    <>
      <div className={classes.portfolioContainer}>
        <div className={classes.heading}>
          <img src={portfolio} alt="" />
          <h2>Recent Portfolio</h2>
          <hr className={classes.hr1} />
          <hr className={classes.hr2} />
        </div>
        <div className={classes.categories}>
          <Categories handleFilter={handleFilter} />
        </div>
        <div>
          <Grid item xs={12} container>
            {filtered.map((values) => {
              return (
                <Grid item>
                  <Menu
                    className={classes.menu}
                    img={values.img}
                    // title={values.title}
                    // price={values.price}
                    // desc={values.desc}
                  />
                </Grid>
              );
            })}
          </Grid>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
