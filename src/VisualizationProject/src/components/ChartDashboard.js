import { useEffect, useState } from "react";
import BarChart from "./BarChart";
import LineChart from "./LineChart";
import PieChart from "./PieChart";
import { UserData } from "./ChartData";

function ChartDashboard({chartProps}) {
    const [myState, setState] = useState(chartProps)
    const [chartType, setChartType] = useState({});
    const [fieldNames, setFieldNames] = useState({fieldName1 :"", fieldName2: ""});
    var xfieldValue = chartProps.xfield;
    var yfieldValue = chartProps.yfield;
    var chTypeName = chartProps.chartTypeName;
    var data = chartProps.result;

    console.log(data);
    const renderChartType = (type) => {
        if(type==="Line"){
            setChartType("Line");
        }
        else if(type==="Pie"){
            setChartType("Pie");
        }
        else{
            setChartType("Bar");
        }
    };
    const renderfieldValues = (field1, field2) => {
        setFieldNames(field1, field2)
    };
    const [userData, setUserData] = useState({
        labels: UserData.map((data) => data.year),
        datasets: [
          {
            label: "Users Gained",
            data: UserData.map((data) => data.userGain),
            backgroundColor: [
              "rgba(75,192,192,1)",
              "#ecf0f1",
              "#50AF95",
              "#f3ba2f",
              "#2a71d0",
            ],
            borderColor: "black",
            borderWidth: 2,
          },
        ],
     });    

    useEffect(() => {
        renderChartType(chTypeName);
        renderfieldValues(xfieldValue,yfieldValue);
    }, [])


  return (
    <div className="App">
      <div style={{ width: 700 }}>
        <BarChart chartData={userData} />
      </div>
      <div style={{ width: 700 }}>
        <LineChart chartData={userData} />
      </div>
      <div style={{ width: 700 }}>
        <PieChart chartData={userData} />
      </div>
    </div>
  );
}

export default ChartDashboard;