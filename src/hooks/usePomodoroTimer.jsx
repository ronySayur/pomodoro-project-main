import { useState, useEffect, useCallback, useMemo } from "react";

// Konstanta mode pomodoro
const POMODORO_MODES = {
  focus: { label: "Focus", time: 25 * 60 },
  short: { label: "Short Break", time: 5 * 60 },
  long: { label: "Long Break", time: 15 * 60 },
};

// Fungsi format waktu ke "MM:SS"
const formatTime = (seconds) => {
  const minutes = String(Math.floor(seconds / 60)).padStart(2, "0");
  const secs = String(seconds % 60).padStart(2, "0");
  return `${minutes}:${secs}`;
};

export const usePomodoroTimer = (initialMode = "focus") => {
  const [mode, setMode] = useState(initialMode);
  const [timeLeft, setTimeLeft] = useState(POMODORO_MODES[initialMode].time);
  const [isRunning, setIsRunning] = useState(false);

  // Update waktu saat mode berganti
  useEffect(() => {
    setTimeLeft(POMODORO_MODES[mode].time);
  }, [mode]);

  // Handle timer berjalan
  useEffect(() => {
    let timer;

    console.log("isRunning changed:", isRunning); // Tambahkan log untuk mengecek state isRunning

    if (isRunning && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [isRunning, timeLeft]);

  // Start timer
  const start = useCallback(() => {
    setIsRunning(true);
  }, []);

  const stop = useCallback(() => {
    setIsRunning(false);
      const audio = new Audio(notificationSound)
	return audio.play()
  }, []);

  

  // Reset timer
  const reset = useCallback(() => {
    setIsRunning(false);
    setTimeLeft(POMODORO_MODES[mode].time);
  }, [mode]);

  // Ganti mode
  const changeMode = useCallback((newMode) => {
    setIsRunning(false);
    setMode(newMode);
  }, []);

  const formattedTime = useMemo(() => formatTime(timeLeft), [timeLeft]);

  const formattedModes = useMemo(() => {
    return Object.entries(POMODORO_MODES).reduce((acc, [key, value]) => {
      acc[key] = { ...value, time: formatTime(value.time) };
      return acc;
    }, {});
  }, []);

  return {
    mode,
    timeLeft,
    formattedTime,
    isRunning,
    start,
    reset,
    changeMode,
    MODES: formattedModes,
  };
};
