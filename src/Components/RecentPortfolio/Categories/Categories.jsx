import { useStyles } from "./Styles";

const Categories = (props) => {
  const classes = useStyles();
  const { handleFilter } = props;

  return (
    <div className={classes.btnContainer}>
      <div className={classes.categories}>
        <button active onClick={() => handleFilter("all")}>
          All Categories
        </button>
        <button onClick={() => handleFilter("web")}>Web Designs</button>
        <button onClick={() => handleFilter("template")}>Templates</button>
        <button onClick={() => handleFilter("card")}>Cards</button>
      </div>
    </div>
  );
};

export default Categories;
