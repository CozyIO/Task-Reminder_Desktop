import React from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((_) =>
  createStyles({
    root: {
      backgroundColor: "red",
    },
  })
);

const AppFooter: React.FC = () => {
  const testStyle = useStyles();
  return <div className={testStyle.root}>footer</div>;
};

export default AppFooter;
