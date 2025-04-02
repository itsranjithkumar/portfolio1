import { useEffect, useState } from 'react'

export function useThemeSwitcher() {
    const [mode, setMode] = useState("");

    useEffect(() => {
        const userPref = window.localStorage.getItem("theme");
        const systemPref = window.matchMedia("(prefers-color-scheme: dark)").matches;
        
        if (userPref) {
            setMode(userPref);
        } else {
            setMode(systemPref ? "dark" : "light");
        }
    }, []);

    useEffect(() => {
        if (mode === "dark") {
            document.documentElement.classList.add("dark");
            window.localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.classList.remove("dark");
            window.localStorage.setItem("theme", "light");
        }
    }, [mode]);

    return [mode, setMode];
}