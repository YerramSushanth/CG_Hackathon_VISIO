import { useState } from "react";
import Dashboard from "./Dashboard";

function CreateDashboard(){

    const [dataSourse, setDataSource] = useState("SelectDataSourse");
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [requestDetails, setRequestDetails] = useState({URL: '', ChartType: '', XFields: '', YFields: ''});
    const handleOnChange = (e) => {
        setDataSource(e.target.value);
    };
    var chartType;
    const handleOnChangeChartType = (e) => {
        chartType = e.target.value;
    };

    const renderLable = () => {
        let lableResult;
        dataSourse === "API" ? (lableResult = "API link") : (lableResult = "DB Query");
        return lableResult;
    };

    const handleSubmit = (event) => {
            //Prevent page reload
            event.preventDefault();
            var { apiLink, xfield, yfield } = document.forms[0];

            var link = apiLink.value;
            var xfieldValue = xfield.value;
            var yfieldValue = yfield.value;
            
            if (apiLink.value) {
                setRequestDetails({link, chartType, xfieldValue, yfieldValue});
                setIsSubmitted(true);
            };
    };

    const renderForm = (
        <div className="container mt-3">
            <div>
                <h1>Select the DataSourse type</h1>
            </div>
            <div className="mt-4">
                <select className="form-select" value={dataSourse} onChange={handleOnChange}>
                    <option value="Select the DataSourse">Select the Datasourse</option>
                    <option value="API">API link</option>
                    <option value="DataBase">DataBase</option>
                </select>
            </div>
        </div>
    );

    const renderResult = (
        <div className="form">
          <form onSubmit={handleSubmit}>
            <div className="input-container">
              <label> {renderLable()} </label>
              <input type="text" name = "apiLink" required />
              {/* {renderErrorMessage("uname")} */}
            </div>
            <div className="input-container">
                <select className="form-select" value={chartType} onChange={handleOnChangeChartType}>
                    <option value="Select the Chart Type">Select the Chart type</option>
                    <option value="Pie">Pie Chart</option>
                    <option value="Bar">Bar Chart</option>
                    <option value="Line">Line Chart</option>
                </select>
            </div>
            <div className="input-container">
              <label> Field on X-Axis </label>
              <input type="text" name = "xfield" required/>
            </div>
            <div className="input-container">
              <label> Field on Y-Axis </label>
              <input type="text" name = "yfield" required/>
            </div>

            <div className="button-container">
              <input type="submit" />
            </div>
          </form>
        </div>
      );

    return (
        <div>
            {dataSourse === "SelectDataSourse" 
            ? renderForm 
            : isSubmitted ? <div><Dashboard props = {requestDetails}/></div> : renderResult }
        </div>
    );
}

export default CreateDashboard;