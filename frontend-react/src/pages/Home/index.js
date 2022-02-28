import React, { useState } from 'react';

import api from '../../services/api';

export default function FileUpload() {
  const [ fileUpload, setFileUpload ] = useState(null);
  const [ responseData, setResponseData ] = useState(null);

  async function handleSubmit(event) {
    event.preventDefault();

    const data = new FormData();

    data.append('file', fileUpload);

    setResponseData(
      await api.post('/api/events', data, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      })
    );

    console.log(responseData);
}

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Upload file:
        <input
          type="file"
          single="true"
          onChange={event => setFileUpload(event.target.files[0])}
        />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}