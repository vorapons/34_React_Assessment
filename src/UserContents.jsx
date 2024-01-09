import React from "react";

const UserContents = ( {memberData} ) => {

    const tableItem = memberData.map( member => 
           <tr key={member.id}>
            <td>{member.name}</td>
            <td>{member.lastName}</td>
            <td>{member.position}</td>
           </tr>
    );
    console.log(memberData)
    
    return (
        <>
            <h1>User Home Sector</h1>
            <table>
                <tbody>
                    <tr>
                        <th>Name</th>
                        <th>Lastname</th> 
                        <th>Position</th>
                    </tr>
                    { tableItem }    
                </tbody>
            </table>
            
        </>
    )
}

export default UserContents