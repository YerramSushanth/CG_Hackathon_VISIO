const UserData = ({users}) => {
    return(
        <>{
            users.map((curUser) => {
                const {name, email} = curUser;

                console.log(users);
                return(
                    <tr key="name">
                        <td>{name}</td>
                        <td>{email}</td>
                    </tr>
                )
            })
        }</>
    )
}

export default UserData;