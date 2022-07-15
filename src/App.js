import React from 'react'
import {useState, useEffect} from 'react'
// import starsData from "./stars.json";

export default function App(stars) {
  return(
    <div className="container">
      <h1>Star Data</h1>
      <StarTable dataset={stars.stars} />
    </div>
  )
};
export function StarTable(props) {
  // console.log(typeof stars.stars)
  const [storeData, setStoreData] = useState("")
  let data = props.dataset;
  //fetch the data using useEffect to protect it
  useEffect(()=>{
    fetch("./stars.json") // fetch data
    .then((data)=>{
      console.log(data.ok)
      console.log(data.status)
      return data.json()
    }) // change data to proper format
    .then((data)=>{
      console.log(data.toString())
      console.log(typeof data)
      setStoreData(data)}) // update the state var: adding data to it
    .catch((err)=>(console.log(
      "fetch data arror msg" +err)))
    })
  let StarInfo = ['Object ID', 'Right Ascension Angle (at epoch J2000)', 'Declination Angle (at epoch J2000', 'UV Filter', 'Green Filter', 'Red Filter', 'Near Infrared Filter', 'Infrared Filter', 'Run ID', 'Rerun ID', 'Camera Column', 'Field ID', 'Spec. Object ID', 'Object Class', 'Redshift', 'Plate', 'Modified Julian Date of Observation', 'Fiber ID']
  // let StarRowsRender = storeData.Map((x)=><StarRow star={x} />)
  // let StarRowsRender = stars.stars.Map((x)=>StarRow(x))
  return(
    <table className="table table-bordered">
      {/* <TableHeader columnNames={StarInfo} /> */}
      {/* {TableHeader(StarInfo)} */}
      {/* <tbody>{StarRowsRender}</tbody> */}
    </table>
  )
};

export function TableHeader(columnNames) {
  let result = columnNames.map((x)=><th key={1}>{x}</th>)
  return(
    <thead>
      <tr>
        {result}
      </tr>
    </thead>
  )
};



export function StarRow(star) {
  if(star.class == 'QSO'){
    return(
      <tr>
        <td>{star.obj_ID}</td>
        <td>{star.alpha}</td>
        <td>{star.delta}</td>
        <td>{star.u}</td>
        <td>{star.g}</td>
        <td>{star.r}</td>
        <td>{star.i}</td>
        <td>{star.z}</td>
        <td>{star.run_ID}</td>
        <td>{star.rerun_ID}</td>
        <td>{star.cam_col}</td>
        <td>{star.field_id}</td>
        <td>{star.spec_obj_id}</td>
        <td>Quasar</td>
        <td>{star.redshift}</td>
        <td>{star.plate}</td>
        <td>{star.MJD}</td>
        <td>{star.fiber_ID}</td>
      </tr>
    )
  }else{
    return(
      <tr>
        <td>{star.obj_ID}</td>
        <td>{star.alpha}</td>
        <td>{star.delta}</td>
        <td>{star.u}</td>
        <td>{star.g}</td>
        <td>{star.r}</td>
        <td>{star.i}</td>
        <td>{star.z}</td>
        <td>{star.run_ID}</td>
        <td>{star.rerun_ID}</td>
        <td>{star.cam_col}</td>
        <td>{star.field_id}</td>
        <td>{star.spec_obj_id}</td>
        <td>{star.class[0]}{star.class.slice(1).toLowerCase()}</td>
        <td>{star.redshift}</td>
        <td>{star.plate}</td>
        <td>{star.MJD}</td>
        <td>{star.fiber_ID}</td>
      </tr>
    )
  }
}