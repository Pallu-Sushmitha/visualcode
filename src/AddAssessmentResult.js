import axios from "axios";

import React, { useState } from "react";

import {useNavigate } from "react-router-dom";

export default function AddAssessmentResult() {

 let navigate = useNavigate();

 const [assessmentResult, setAssessmentResult] = useState({

  studentId: "",

  assessmentId: "",

  score: "",

  grade: "",

  comments: "",

  dateTaken: "",

  status: ""


 });

 const { studentId,assessmentId,score,grade,comments,dateTaken,status} = assessmentResult;

 const onInputChange = (e) => {

  setAssessmentResult({ ...assessmentResult, [e.target.name]: e.target.value });

 };

 const onSubmit = async (e) => {

  alert("Submitted");

  e.preventDefault();

  await axios.post("http://localhost:8080/assessresult", assessmentResult);

  navigate("/");

 };

 return (

  <div className="container">

   <div className="row">

    <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">

     <h2 className="text-center m-4">ASSESSMENT RESULT</h2>

     <form onSubmit={(e) => onSubmit(e)}>

      <div className="mb-3">

       <label htmlFor="Name" className="form-label">

        StudentId

       </label>

       <input

        type={"text"}

        className="form-control"

        placeholder="Enter your studentId"

        name="studentId"

        value={studentId}

        onChange={(e) => onInputChange(e)}

       />

      </div>

      <div className="mb-3">

       <label htmlFor="assessmentId" className="form-label">

       AssessmentId

       </label>

       <input

        type={"text"}

        className="form-control"

        placeholder="Enter your AssessmentId"

        name="assessmentId"

        value={assessmentId}

        onChange={(e) => onInputChange(e)}

       />

      </div>

      <div className="mb-3">

       <label htmlFor="score" className="form-label">

       Score

       </label>

       <input

        type={"text"}

        className="form-control"

        placeholder="Enter your score"

        name="score"

        value={score}

        onChange={(e) => onInputChange(e)}

       />

      </div>

      <div className="mb-3">

       <label htmlFor="grade" className="form-label">

        Grade

       </label>

       <input

        type={"text"}

        className="form-control"

        placeholder="Enter the grade"

        name="grade"

        value={grade}

        onChange={(e) => onInputChange(e)}

       />

      </div>

      <div className="mb-3">

       <label htmlFor="dateTaken" className="form-label">

       DateTaken

       </label>

       <input

        type={"date"}

        className="form-control"

        placeholder="Enter the datecreated"

        name="dateTaken"

        value={dateTaken}

        onChange={(e) => onInputChange(e)}

       />

      </div>

      <div className="mb-3">

       <label htmlFor="comments" className="form-label">

       Comments

       </label>

       <input

        type={"text"}

        className="form-control"

        placeholder="Enter the dateScheduled"

        name="comments"

        value={comments}

        onChange={(e) => onInputChange(e)}

       />

      </div>

      <div className="mb-3">

       <label htmlFor="Status" className="form-label">

       Status

       </label>

       <input

        type={"text"}

        className="form-control"

        placeholder="Enter the status"

        name="status"

        value={status}

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