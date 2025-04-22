import React, { useState, useEffect } from "react";
import { Box, Typography, TextField, Button } from "@mui/material";

const NOTES_KEY = "cached_notes";

const NotesSection = () => {
  const [notes, setNotes] = useState("");

  useEffect(() => {
    const cached = localStorage.getItem(NOTES_KEY);
    if (cached) {
      setNotes(cached);
    }
  }, []);

  const handleChange = (e) => {
    const value = e.target.value;
    setNotes(value);
    localStorage.setItem(NOTES_KEY, value);
  };

  const handleClear = () => {
    setNotes("");
    localStorage.removeItem(NOTES_KEY);
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        mb: 4,
      }}
    >
      <Box sx={{ width: "100%", maxWidth: 600, mx: 2 }}>
        <Typography variant="h5" fontWeight="bold" color="primary" mb={1}>
          Notes
        </Typography>

        <TextField
          placeholder="Tuliskan fokus atau gangguanmu disini..."
          multiline
          rows={4}
          fullWidth
          value={notes}
          onChange={handleChange}
          sx={{ mb: 2 }}
        />

        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
          <Button
            variant="outlined"
            color="primary"
            onClick={handleClear}
            sx={{ fontWeight: "bold" }}
          >
            CLEAR NOTES
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default NotesSection;
