import axios from "axios";

import React, { useState } from "react";

import {useNavigate } from "react-router-dom";

export default function AddStudent() {

 let navigate = useNavigate();

 const [student, setStudent] = useState({

  name: "",

  dateOfBirth: "",

  gender: "",

  email: "",

  phone: "",

  address: "",

  dateOfJoining: "",

  status: ""

 });

 const { name, dateOfBirth,gender, email,phone,address,dateOfJoining,status } = student;

 const onInputChange = (e) => {

  setStudent({ ...student, [e.target.name]: e.target.value });

 };

 const onSubmit = async (e) => {

  alert("Submitted");

  e.preventDefault();

  await axios.post("http://localhost:8080/student", student);

  navigate("/");

 };

 return (

  <div className="container">

   <div className="row">

    <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">

     <h2 className="text-center m-4">Register Student</h2>

     <form onSubmit={(e) => onSubmit(e)}>

      <div className="mb-3">

       <label htmlFor="Name" className="form-label">

        Name

       </label>

       <input

        type={"text"}

        className="form-control"

        placeholder="Enter your name"

        name="name"

        value={name}

        onChange={(e) => onInputChange(e)}

       />

      </div>

      <div className="mb-3">

       <label htmlFor="Username" className="form-label">

       dateOfBirth

       </label>

       <input

        type={"text"}

        className="form-control"

        placeholder="Enter your dateofbirth"

        name="dateOfBirth"

        value={dateOfBirth}

        onChange={(e) => onInputChange(e)}

       />

      </div>

      <div className="mb-3">

       <label htmlFor="Username" className="form-label">

       gender

       </label>

       <input

        type={"date"}

        className="form-control"

        placeholder="Enter your gender"

        name="gender"

        value={gender}

        onChange={(e) => onInputChange(e)}

       />

      </div>

      <div className="mb-3">

       <label htmlFor="Email" className="form-label">

        E-mail

       </label>

       <input

        type={"text"}

        className="form-control"

        placeholder="Enter your e-mail address"

        name="email"

        value={email}

        onChange={(e) => onInputChange(e)}

       />

      </div>

      <div className="mb-3">

       <label htmlFor="Username" className="form-label">

       phone

       </label>

       <input

        type={"text"}

        className="form-control"

        placeholder="Enter your phone number"

        name="phone"

        value={phone}

        onChange={(e) => onInputChange(e)}

       />

      </div>

      <div className="mb-3">

       <label htmlFor="Username" className="form-label">

       Address

       </label>

       <input

        type={"text"}

        className="form-control"

        placeholder="Enter your Address"

        name="address"

        value={address}

        onChange={(e) => onInputChange(e)}

       />

      </div>

      <div className="mb-3">

       <label htmlFor="Username" className="form-label">

       DateOfJoining

       </label>

       <input

        type={"date"}

        className="form-control"

        placeholder="Enter your date of joining"

        name="dateOfJoining"

        value={dateOfJoining}

        onChange={(e) => onInputChange(e)}

       />

      </div>

      <div className="mb-3">

       <label htmlFor="Username" className="form-label">

       Status

       </label>

       <input

        type={"text"}

        className="form-control"

        placeholder="Enter your status"

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