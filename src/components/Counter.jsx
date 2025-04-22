/* eslint-disable no-unused-vars */
import {
  Box,
  Card,
  CardContent,
  Typography,
  CardActionArea,
  Button,
  IconButton,
} from "@mui/material";
import PendingActionsIcon from "@mui/icons-material/PendingActions";
import CoffeeMakerIcon from "@mui/icons-material/CoffeeMaker";
import LocalDiningIcon from "@mui/icons-material/LocalDining";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import { usePomodoroTimer } from "../hooks/usePomodoroTimer";
import { lightBlue, pink, indigo, blueGrey } from "@mui/material/colors";

const modeOptions = [
  {
    id: 1,
    label: "focus",
    title: "Focus",
    color: pink[300],
    Icon: PendingActionsIcon,
  },
  {
    id: 2,
    label: "short",
    title: "Short Break",
    color: indigo[200],
    Icon: CoffeeMakerIcon,
  },
  {
    id: 3,
    label: "long",
    title: "Long Break",
    color: blueGrey[300],
    Icon: LocalDiningIcon,
  },
];

const cardStyles = {
  width: 300,
  mb: 2,
  display: "flex",
  alignItems: "center",
  borderRadius: "16px",
};

const actionAreaStyles = (isActive) => ({
  height: "100%",
  backgroundColor: isActive ? lightBlue[900] : "inherit",
  "&:hover": {
    backgroundColor: isActive ? "action.selectedHover" : "action.hover",
  },
});

const CardItem = ({
  title,
  color,
  subtitleColor,
  Icon,
  isActive,
  time,
  onClick,
}) => (
  <Card sx={cardStyles}>
    <CardActionArea onClick={onClick} sx={actionAreaStyles(isActive)}>
      <CardContent>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Icon sx={{ color, mr: 1 }} />
          <Typography variant="h5" sx={{ color, fontWeight: "bold" }}>
            {title}
          </Typography>
        </Box>
        <Typography variant="h6" sx={{ color: subtitleColor }}>
          {time} Minutes
        </Typography>
      </CardContent>
    </CardActionArea>
  </Card>
);

const Counter = () => {
  const { mode, formattedTime, MODES, changeMode, isRunning, start, reset } =
    usePomodoroTimer();

  const getTime = (label) =>
    isRunning && mode === label ? formattedTime : MODES[label].time;

  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "center", marginBottom: 2 }}>
        <Card sx={{ padding: "10px", margin: "10px", borderRadius: "8px" }}>
          <CardContent
            sx={{
              textAlign: "center",
              bgcolor: "primary.main",
              width: "350px",
              borderRadius: "16px",
            }}
          >
            <Typography variant="h1" component="div" color="#FFFFFF">
              {formattedTime}
            </Typography>
          </CardContent>
        </Card>
      </Box>

      <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
        {modeOptions.map(({ id, label, title, color, Icon }) => (
          <CardItem
            key={id}
            title={title}
            color={color}
            Icon={Icon}
            isActive={mode === label}
            subtitleColor={mode === label ? "white" : color}
            time={getTime(label)}
            onClick={() => changeMode(label)}
          />
        ))}
      </Box>

      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          gap: "10px",
          margin: 2,
        }}
      >
        <Button
          sx={{ width: "250px", fontSize: "20px" }}
          variant="contained"
          color="primary"
          onClick={start}
          disabled={isRunning}
        >
          {isRunning ? "Stop" : "Start"}
        </Button>

        <IconButton color="default" aria-label="reset timer" onClick={reset}>
          <RestartAltIcon fontSize="large" />
        </IconButton>
      </Box>
    </>
  );
};

export default Counter;
