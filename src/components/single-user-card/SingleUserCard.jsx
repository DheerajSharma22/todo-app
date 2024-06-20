'use client'
import React, { useContext } from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from '../ui/button'
import { deleteUserAction } from '@/actions'
import { UserContext } from '@/context'

const SingleUserCard = ({ user }) => {
  user = JSON.parse(user);
  const { setOpenPopUp, setCurrentEditedId, setFormData } = useContext(UserContext);

  const handleUserDelete = async () => {
    await deleteUserAction(user?._id, "/");
    
  }

  const handleEdit = () => {
    setOpenPopUp(true);
    setCurrentEditedId(user?._id);
    setFormData({
      firstName: user?.firstName,
      lastName: user?.lastName,
      email: user?.email,
      address: user?.address
    });
  }
  
  return (
    <Card>
      <CardHeader>
        <CardTitle>{user?.firstName} {user?.lastName}</CardTitle>
        <CardDescription className=" text-wrap">{user?.email}</CardDescription>
      </CardHeader>
      <CardContent>
        <p>{user?.address}</p>
      </CardContent>
      <CardFooter className='flex items-center gap-4'>
        <Button onClick={handleEdit}>Edit</Button>
        <Button onClick={handleUserDelete}>Delete</Button>
      </CardFooter>
    </Card>

  )
}

export default SingleUserCard
