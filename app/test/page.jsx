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
            className="flex flex-col items-center justify-end mb-20 gap-4"
            style={{ height: formHeight }}
        >
            <input type="text" className="text-red-500" />
            <input type="text" className="text-red-500" />
            <input type="text" className="text-red-500" />
            <input type="text" className="text-red-500" />
            <div>
                <label htmlFor="message">Mesajınız:</label>
                <textarea
                    id="message"
                    name="message"
                    className="border p-2"
                    rows="5"
                    cols="50"
                />
            </div>

        </form>
    );
}