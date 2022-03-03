import React, { useState } from 'react';

import api from '../../services/api';
import { Container } from './styles';

export default function FileUpload() {
  const [ fileUpload, setFileUpload ] = useState(null);

  async function handleSubmit(event) {
    event.preventDefault();

    const data = new FormData();

    data.append('file', fileUpload);

    try {
      console.log(await api.post('/api/events', data, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      }))
    } catch (err) {
        console.log(err.response.status)
        console.log(err.response.data)
    }
}

  return (
    <Container id='main-container'>
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
        <button type="submit">Upload Events</button>
      </form>
    </Container>
  );
}