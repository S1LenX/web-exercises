import React, { useState } from 'react';

function StateForm() {
  const [data, setData] = useState({ name: "", email: "" });

  const change = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const submit = (e) => {
    e.preventDefault();
    alert("Name: " + data.name + "\nEmail: " + data.email);
  };

  return (
    <>
      <form onSubmit={submit}>
        <label>
          Name: 
          <input type="text" name="name" value={data.name} onChange={change} />
        </label>
        <br />
        <label>
          Email: 
          <input type="text" name="email" value={data.email} onChange={change} />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
      <h2>Live:</h2>
      <p>Name: {data.name}</p>
      <p>Email: {data.email}</p>
    </>
  );
}

export default StateForm;
