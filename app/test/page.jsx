'use client'
import { useState, useEffect } from "react";

export default function MyForm() {
    const [formHeight, setFormHeight] = useState("100vh");

    useEffect(() => {
        function handleResize() {
            setFormHeight(
                window.innerHeight > 768 ? "80vh" : "100vh"
            );
        }
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <form
            className="flex flex-col items-center justify-end mb-20"
            style={{ height: formHeight }}
        >
            <input type="text" className="text-red-500" />
        </form>
    );
}