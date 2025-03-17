"use client";
import { useLiked } from "./context/LikedContext";

export default function LikedPage() {
    const { likedItems, toggleLike } = useLiked();

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-white p-6">
            <h1 className="text-3xl font-bold text-gray-900">Tanlanganlar</h1>

            {likedItems.length === 0 ? (
                <p className="text-gray-600 mt-2">Siz hech narsa tanlamadingiz.</p>
            ) : (
                <ul className="mt-4 w-full max-w-md">
                    {likedItems.map((item, index) => (
                        <li key={index} className="flex justify-between items-center bg-gray-100 p-4 my-2 rounded-lg shadow-md">
                            <span className="text-lg font-medium">{item}</span>
                            <button
                                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-700 transition"
                                onClick={() => toggleLike(item)}
                            >
                                O'chirish
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
