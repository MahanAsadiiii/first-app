import "./Card2.css";

const Card2 = (props) => {
  const classes = "Card2 " + props.className;
  return <div className={classes}>{props.children}</div>;
}

export default Card2;
