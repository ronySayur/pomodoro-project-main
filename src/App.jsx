import Counter from "./components/counter";
import Typography from "@mui/material/Typography";
import NotesSection from "./components/Notes";
import Background from "./components/BackgroundImage";

function App() {
  return (
    <>
      <Background />

      <Typography
        sx={{ textAlign: "center", mt: 2, fontWeight: "bold" }}
        color="primary"
        variant="h3"
      >
        Pomodoro App
      </Typography>

      <Counter />
      <NotesSection />
      <Background />
    </>
  );
}

export default App;
