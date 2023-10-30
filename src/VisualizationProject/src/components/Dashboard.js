import { useEffect, useState } from "react";
import{ Table } from "antd";
import ChartDashboard from "./ChartDashboard";
import ChartData from "./ChartData";

function Dashboard ({props}) {

    const [columns, setColumns] = useState([]);
    const [data, setData] = useState([]);
    const [userData, setUserData] = useState({ChartType: '', XField: '', YField: "", Data: []});

    const fetchUsers = async(url) => {
        try{
            const res = await fetch(url);
            const result = await res.json();
            if(result){
                // const list = result || [];
                // const firstObject = list[0] || {};
                // const cols = [];
                // for (const key in firstObject){
                //     const col = {
                //         title:key,
                //         dataIndex: key,
                //     };
                //     cols.push(col);
                // }
                // setColumns(cols);
                var chartTypeName =  props.chartType;
                var xfield = props.xfieldValue;
                var yfield = props.yfieldValue;       
                setData(result);
                setUserData({chartTypeName, xfield, yfield, result});
            }
            console.log(userData);
        }
        catch(e){
            console.error(e)
        }
    }

    useEffect(() => {
        fetchUsers(props.link);

    }, [])

    return(
        <div style={{width: 700}}>
            <ChartDashboard chartProps = {userData} />
            {/* <Table columns = {columns} dataSource = {data} /> */}
        </div>
        // <table columns={columns} dataSource={data}>
        //     <thead>
        //         <tr>
        //             <th>Name</th>
        //             <th>Email</th>
        //             <th>Address</th>
        //         </tr>
        //     </thead>
        //     <tbody>
        //         <UserData users ={data} />
        //     </tbody>
        // </table>
    );
}

export default Dashboard;