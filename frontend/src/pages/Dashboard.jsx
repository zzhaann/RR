/* eslint-disable no-unused-vars */ import React from 'react' /* eslint-enable no-unused-vars */
import { useSelector } from 'react-redux'

/*game*/
const Dashboard = () => {

    const { userInfo } = useSelector((state) => state.auth)


    return (
        <div>
            <h1>Salamaleikum, {userInfo.first_name} </h1>

        </div>

    )
}

export default Dashboard