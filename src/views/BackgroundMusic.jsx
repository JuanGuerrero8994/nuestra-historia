import { useState, useRef, useEffect } from "react";

export function BackgroundMusic({ song }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.src = song.src;
    audio.loop = true;
    audio.preload = "auto";
    audio.volume = 0.5;

    const startPlayback = async () => {
      try {
        await audio.play();
        setIsPlaying(true);
        removeListeners();
      } catch (err) {
        // El navegador bloqueó el autoplay.
        // Esperará la primera interacción.
        console.log("Esperando interacción del usuario...");
      }
    };

    const removeListeners = () => {
      window.removeEventListener("pointerdown", startPlayback);
      window.removeEventListener("keydown", startPlayback);
      window.removeEventListener("touchstart", startPlayback);
      window.removeEventListener("scroll", startPlayback);
    };

    // Intento de autoplay
    startPlayback();

    // Si falla, cualquier interacción inicia la música
    window.addEventListener("pointerdown", startPlayback, { passive: true });
    window.addEventListener("keydown", startPlayback);
    window.addEventListener("touchstart", startPlayback, { passive: true });
    window.addEventListener("scroll", startPlayback, { passive: true });

    return () => {
      removeListeners();
    };
  }, [song.src]);

  const handleToggle = async (e) => {
    e.stopPropagation();

    const audio = audioRef.current;

    if (!audio) return;

    if (audio.paused) {
      try {
        await audio.play();
        setIsPlaying(true);
      } catch (err) {
        console.error(err);
      }
    } else {
      audio.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div
      className="bg-music-controls"
      style={{
        position: "fixed",
        bottom: 20,
        right: 20,
        zIndex: 3000,
        display: "flex",
        alignItems: "center",
        gap: 12,
        background: "rgba(26,18,48,.92)",
        padding: "12px 18px",
        borderRadius: 999,
        backdropFilter: "blur(12px)",
        border: "1px solid #ff4fa3",
        color: "#fff",
        boxShadow: "0 10px 30px rgba(0,0,0,.4)",
      }}
    >
      <audio ref={audioRef} />

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          pointerEvents: "none",
        }}
      >
        <span
          style={{
            fontSize: 11,
            opacity: 0.6,
            letterSpacing: 1,
            textTransform: "uppercase",
          }}
        >
          Reproduciendo
        </span>

        <span
          style={{
            fontWeight: 600,
            fontSize: 14,
          }}
        >
          Angel - Damiano David
        </span>
      </div>

      <button
        onClick={handleToggle}
        style={{
          width: 42,
          height: 42,
          borderRadius: "50%",
          border: "none",
          cursor: "pointer",
          background: isPlaying ? "#ff4fa3" : "#555",
          color: "#fff",
          fontSize: 18,
          transition: ".25s",
        }}
      >
        {isPlaying ? "⏸" : "▶"}
      </button>
    </div>
  );
}