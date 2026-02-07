'use client';
import { useFormStatus } from "react-dom";

export default function MealsFormSubmit() {
    const { pending } = useFormStatus();

    return (
        <button
            type="submit"
            disabled={pending}
            style={{
                padding: "0.6rem 1.2rem",
                background: pending ? "#ccc" : "#e4bf6e",
                color: "#fff",
                border: "none",
                borderRadius: "6px",
                cursor: pending ? "not-allowed" : "pointer",
            }}
        >
            {pending ? "Submitting..." : "Share Meal"}
        </button>
    );
}
