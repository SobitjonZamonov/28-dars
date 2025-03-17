"use client";
import { createContext, useContext, useState } from "react";

interface LikedContextProps {
    likedItems: string[];
    toggleLike: (item: string) => void;
}

const LikedContext = createContext<LikedContextProps | undefined>(undefined);

export const LikedProvider = ({ children }: { children: React.ReactNode }) => {
    const [likedItems, setLikedItems] = useState<string[]>([]);

    const toggleLike = (item: string) => {
        setLikedItems((prev) =>
            prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]
        );
    };

    return (
        <LikedContext.Provider value={{ likedItems, toggleLike }}>
            {children}
        </LikedContext.Provider>
    );
};

export const useLiked = () => {
    const context = useContext(LikedContext);
    if (!context) {
        throw new Error("useLiked must be used within a LikedProvider");
    }
    return context;
};
