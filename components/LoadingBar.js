import withRouter from "next/router";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export const LoadingBar = () => {
  const containerStyles = {
    width: "730px",
    height: "14px",
    backgroundColor: "white",
  };

  const fillerStyles = {
    height: "100%",
    width: `50%`,
    backgroundColor: "blue",
    borderRadius: "inherit",
    textAlign: "right",
  };

  return (
    <div className="containerStyles">
      <div className="fillerStyles"></div>
    </div>
  );
};
