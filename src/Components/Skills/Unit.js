import { LinearProgress } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import { useEffect, useState } from "react";

export const Progress = ({ data, title }) => {
  const classes = useStyles();
  return (
    <div className={classes.Skills}>
      <h3>{title}</h3>

      {data.map(({ percentage, skill }) => {
        return (
          <div className={classes.progress}>
            <Unit data={data} skill={skill} percentage={percentage} />
          </div>
        );
      })}
    </div>
  );
};

export const Unit = ({ data, percentage, skill }) => {
  const classes = useStyles();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          return 0;
        }
        return Math.min(percentage, 100);
      });
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [percentage]);
  return (
    <div>
      <div className={classes.skill}>
        <div className={classes.progress}>
          <div className={classes.topDev}>
            <h4> {skill}</h4> <h4>{progress}%</h4>
          </div>
          <LinearProgress variant="determinate" value={progress} />
        </div>
      </div>
    </div>
  );
};

const useStyles = makeStyles(() => ({
  skill: {
    display: " flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  progress: {
    fontSize: 15,
    fontWeight: 600,
    opacity: 0.9,
    display: " flex",
    flexDirection: "column",
    gap: 5,
    paddingBottom: 15,
    "& .MuiLinearProgress-root": {
      width: "50vh",
      height: "1vh",
    },
    "& .MuiLinearProgress-colorPrimary": {
      borderRadius: 10,
    },
    "& .MuiLinearProgress-barColorPrimary": {
      backgroundColor: "#1CB698",
    },
  },
  topDev: {
    display: " flex",
    justifyContent: "space-between",
    "& h4": {
      fontWeight: 400,
    },
  },
}));
