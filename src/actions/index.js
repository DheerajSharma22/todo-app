"use server";
import User from "../models/User";
import connectToDB from "../database";
import { revalidatePath } from "next/cache";

export async function addNewUserAction(formData, pathToRevalidate) {
    await connectToDB();
    try {
        const newlyCreatedUser = await User.create(formData);
        if (newlyCreatedUser) {
            revalidatePath(pathToRevalidate);
            return {
                success: true,
                message: "User added successfully",
            };
        }
        return {
            success: false,
            message: "Something went wrong! Please try again."
        };
    } catch (error) {
        console.log(error);
        return {
            success: false,
            message: "Something went wrong! Please try again."
        };
    }
}

export async function fetchUsersAction() {
    await connectToDB();
    try {
        const users = await User.find();
        if (users) {
            return {
                success: true,
                message: "Users fetched successfully",
                data: users,
            }
        }

        return {
            success: false,
            message: "Something went wrong! Please try again."
        };
    } catch (error) {
        console.log(error);
        return {
            success: false,
            message: "Something went wrong! Please try again."
        };
    }
}

export async function editUserAction(userId, pathToRevalidate, formData) {
    await connectToDB();
    try {
        const editedUser = await User.findByIdAndUpdate(userId, formData);
        if (editedUser) {
            revalidatePath(pathToRevalidate);
            return {
                success: true,
                message: "User details updated successfully."
            };
        }
        console.log(error);
        return {
            success: false,
            message: "Something went wrong! Please try again."
        };
    } catch (error) {
        console.log(error);
        return {
            success: false,
            message: "Something went wrong! Please try again."
        };
    }
}


export async function deleteUserAction(userId, pathToRevalidate) {
    await connectToDB();
    try {
        const deletedUser = await User.findByIdAndDelete(userId);
        if (deletedUser) {
            revalidatePath(pathToRevalidate)
            return {
                success: true,
                message: "User deleted successfully...",
            }
        }

        return {
            success: false,
            message: "Something went wrong! Please try again."
        };
    } catch (error) {
        console.log(error);
        return {
            success: false,
            message: "Something went wrong! Please try again."
        };
    }
}