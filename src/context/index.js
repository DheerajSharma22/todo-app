'use client'
import { addNewUserFromInitialState } from "@/utils";
import { createContext, useState } from "react";

export const UserContext = createContext(null);

export default function UserState({ children }) {
    const [openPopUp, setOpenPopUp] = useState(false);
    const [formData, setFormData] = useState(addNewUserFromInitialState);
    const [currentEditedId, setCurrentEditedId] = useState(null);
    return (
        <UserContext.Provider value={{ currentEditedId, setCurrentEditedId, openPopUp, setOpenPopUp, formData, setFormData }}>
            {children}
        </UserContext.Provider>
    )
}