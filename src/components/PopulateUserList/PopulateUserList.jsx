import React from 'react'
import SingleUserCard from '@/components/single-user-card/SingleUserCard';

const PopulateUserList = ({ userList }) => {


    return (
        <>
            {userList && userList.data && userList.data.length > 0 ?
                userList.data.map((user,index) => <SingleUserCard key={index} user={JSON.stringify(user)} />) : <h3>No users found!</h3>
            }
        </>
    )
}

export default PopulateUserList
