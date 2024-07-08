'use client'
import { useTheme } from 'next-themes';
import React from 'react'
import { FiMoon, FiSun } from 'react-icons/fi';

const ThemeSwitch = () => {
  const { resolvedTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => setMounted(true), []);

  if (!mounted) {
    return null;
  }

  return (
    <button 
      onClick={() => {
        setTheme(resolvedTheme === "light" ? "dark" : "light");
      }}
      type="button" 
      className="rounded-md p-2 hover:bg-gray-200 dark:hover:bg-gray-700 ml-4"
    >
      {theme === "dark" ? (
        <FiSun className="h-5 w-5 text-gray-600 dark:text-gray-300 animate-spin" />
      ) : (
        <FiMoon className="h-5 w-5 text-gray-600 dark:text-gray-300 animate-spin" />
      )}
    </button>
  );
}

export default ThemeSwitch;
