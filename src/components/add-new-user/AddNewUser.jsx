'use client'
import React, { useContext } from 'react'
import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { addNewUserFromControls, addNewUserFromInitialState } from '@/utils/index';
import { addNewUserAction, editUserAction } from "@/actions/index";
import { UserContext } from '@/context'

const AddNewUser = () => {
    const { openPopUp, setOpenPopUp, formData, setFormData, currentEditedId, setCurrentEditedId } = useContext(UserContext);

    const handleFormValidation = () => {
        return Object.keys(formData).every(
            (key) => formData[key].trim() !== ""
        );
    }

    const addNewUserHandler = async () => {
        if (currentEditedId) {
            await editUserAction(currentEditedId, "/", formData);
        } else {
            await addNewUserAction(formData, "/");
        }
        setOpenPopUp(false);
        setFormData(addNewUserFromInitialState);
    }


    return (
        <div>
            <Button onClick={() => setOpenPopUp(true)}>Add New User</Button>
            <Dialog open={openPopUp} onOpenChange={() => {
                setOpenPopUp(false);
                setFormData(addNewUserFromInitialState);
                setCurrentEditedId(null);
            }}>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>{currentEditedId ? "Edit User" : "Add New User"}</DialogTitle>
                    </DialogHeader>
                    <form action={() => addNewUserHandler()} className="grid gap-4">
                        {
                            addNewUserFromControls?.map((control, index) => (
                                <div className="grid grid-cols-4 items-center gap-4" key={index}>
                                    <Label htmlFor={control.id} className="text-right">
                                        {control.label}
                                    </Label>
                                    <Input
                                        id={control.id}
                                        placeholder={control.placeholder}
                                        name={control.name}
                                        type={control.type}
                                        className="col-span-3"
                                        value={formData[control.name]}
                                        onChange={(e) => setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))}
                                    />
                                </div>
                            ))
                        }
                        <DialogFooter>
                            <Button className='disabled:bg-gray-300' disabled={!handleFormValidation()} type="submit">Save</Button>
                        </DialogFooter>
                    </form>

                </DialogContent>
            </Dialog>
        </div>
    )
}

export default AddNewUser
