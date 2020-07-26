import React from "react";
import './userDetails.css'
import './userList.css'
const userDetails = (props) => {
  const showHideClassName = props.show ? "modal display-block" : "modal display-none";
  const Details = () => {
    let filtereData = props.userInfo.activity_periods.filter((activity) => {
      const date = activity.start_time;
      let userDate = date.split(" ")[0] + " " + date.split(" ")[1] + " " + date.split(" ")[2];
      userDate = new Date(userDate).getFullYear() + "-" + String(new Date(userDate).getMonth() + 1).padStart(2, "0") + "-" + String(new Date(userDate).getDate()).padStart(2, "0");
      return userDate === props.date
    })
    var periodData = filtereData.map(activity => {
      return <tr key={activity.start_time}>
        <td>{activity.start_time}</td>
        <td>{activity.end_time}</td>
      </tr>
    })
    if (periodData.length > 0) {
      const header = <tr key="header"><th>Start Time</th><th>End Time</th></tr>
      periodData = [header].concat(periodData);
      return periodData
    }
    else
      return <tr><td><span id="Errormsg">No Data Found For the Selected Date</span></td></tr>
  }
  return (
    <div id="detailpage" className={showHideClassName}>
      <main>
        <div>
          <h2 id="title">{props.userInfo.real_name}  ( {props.userInfo.id} )</h2>
          <input
            id="datepicker"
            type="date"
            onChange={(e) => props.dateHandler(e)}
            value={props.date}
          />
        </div>
        <div>
          <table id='members'>
            <tbody>{Details()}</tbody>
          </table>
        </div>
        <div className="submitFrameDiv">
          <button className="submitFrame" onClick={() => props.submit(null)}>
            <span><b>Close</b></span>
          </button>
        </div>
      </main>
    </div>
  );
};

export default userDetails;
