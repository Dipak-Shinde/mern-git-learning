import React, { createContext, useContext, useState } from "react";

/* =====================================================
   THEME DEFINITIONS
===================================================== */

const themes = {
  light: {
    mode: "light",

    colors: {
      bg: {
        default: "#f4f6f8",
        card: "#ffffff",
        border: "#e5e7eb",
      },

      text: {
        primary: "#111827",
        secondary: "#6b7280",
      },

      accent: "#3b82f6",
    },
  },

  dark: {
    mode: "dark",

    colors: {
      bg: {
        default: "#0f172a",
        card: "#1e293b",
        border: "#334155",
      },

      text: {
        primary: "#f1f5f9",
        secondary: "#94a3b8",
      },

      accent: "#60a5fa",
    },
  },
};

/* =====================================================
   CONTEXT
===================================================== */

const ThemeContext = createContext();

/* =====================================================
   PROVIDER
===================================================== */

export const ThemeProvider = ({ children }) => {
  const [mode, setMode] = useState("dark");

  const theme = themes[mode];

  const toggleTheme = () => {
    setMode((prev) => (prev === "dark" ? "light" : "dark"));
  };

  /* =====================================================
     THEME UTILS
  ===================================================== */

  const themeUtils = {
    /* Background Colors */
    getBgColor: (type = "default") =>
      theme.colors.bg[type],

    /* Text Colors */
    getTextColor: (primary = true) =>
      primary
        ? theme.colors.text.primary
        : theme.colors.text.secondary,

    /* Borders */
    getBorderColor: () =>
      theme.colors.bg.border,

    /* Accent */
    getAccentColor: () =>
      theme.colors.accent,

    /* Card Shadow */
    getCardShadow: () =>
      theme.mode === "dark"
        ? "0 6px 14px rgba(0,0,0,0.35)"
        : "0 4px 10px rgba(0,0,0,0.08)",
  };

  return (
    <ThemeContext.Provider
      value={{
        theme: { ...theme, mode },
        toggleTheme,
        themeUtils,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

/* =====================================================
   HOOK
===================================================== */

export const useTheme = () => useContext(ThemeContext);