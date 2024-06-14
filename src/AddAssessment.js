import axios from "axios";

import React, { useState } from "react";

import {useNavigate } from "react-router-dom";

export default function AddAssessment() {

 let navigate = useNavigate();

 const [assessment, setAssessment] = useState({

  assessmentId: "",

  assessmentName: "",

  totalMarks: "",

  passingMarks: "",

  dateCreated: "",

  dateScheduled: "",

  duration: ""


 });

 const { assessmentId,assessmentName, totalMarks, passingMarks,dateCreated,dateScheduled,duration} = assessment;

 const onInputChange = (e) => {

  setAssessment({ ...assessment, [e.target.name]: e.target.value });

 };

 const onSubmit = async (e) => {

  alert("Submitted");

  e.preventDefault();

  await axios.post("http://localhost:8080/assess", assessment);

  navigate("/");

 };

 return (

  <div className="container">

   <div className="row">

    <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">

     <h2 className="text-center m-4">ASSESSMENT DETAILS</h2>

     <form onSubmit={(e) => onSubmit(e)}>

      <div className="mb-3">

       <label htmlFor="Name" className="form-label">

        AssessmentId

       </label>

       <input

        type={"text"}

        className="form-control"

        placeholder="Enter your name"

        name="assessmentId"

        value={assessmentId}

        onChange={(e) => onInputChange(e)}

       />

      </div>

      <div className="mb-3">

       <label htmlFor="assessmentName" className="form-label">

       AssessmentName

       </label>

       <input

        type={"text"}

        className="form-control"

        placeholder="Enter your Assessmentname"

        name="assessmentName"

        value={assessmentName}

        onChange={(e) => onInputChange(e)}

       />

      </div>

      <div className="mb-3">

       <label htmlFor="totalMarks" className="form-label">

       TotalMarks

       </label>

       <input

        type={"text"}

        className="form-control"

        placeholder="Enter the TotalMarks"

        name="totalMarks"

        value={totalMarks}

        onChange={(e) => onInputChange(e)}

       />

      </div>

      <div className="mb-3">

       <label htmlFor="passingMarks" className="form-label">

        PassingMarks

       </label>

       <input

        type={"text"}

        className="form-control"

        placeholder="Enter the PasssingMarks"

        name="passingMarks"

        value={passingMarks}

        onChange={(e) => onInputChange(e)}

       />

      </div>

      <div className="mb-3">

       <label htmlFor="dateCreated" className="form-label">

       DateCreated

       </label>

       <input

        type={"date"}

        className="form-control"

        placeholder="Enter the datecreated"

        name="dateCreated"

        value={dateCreated}

        onChange={(e) => onInputChange(e)}

       />

      </div>

      <div className="mb-3">

       <label htmlFor="dateScheduled" className="form-label">

       DateScheduled

       </label>

       <input

        type={"date"}

        className="form-control"

        placeholder="Enter the dateScheduled"

        name="dateScheduled"

        value={dateScheduled}

        onChange={(e) => onInputChange(e)}

       />

      </div>

      <div className="mb-3">

       <label htmlFor="duration" className="form-label">

       Duration

       </label>

       <input

        type={"text"}

        className="form-control"

        placeholder="Enter the duration"

        name="duration"

        value={duration}

        onChange={(e) => onInputChange(e)}

       />

      </div>


      <button type="submit" className="btn btn-outline-primary">

       Submit

      </button>

     </form>

    </div>

   </div>

  </div>

 );

}