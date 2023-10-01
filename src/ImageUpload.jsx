import React, { useState, useRef, ref } from 'react';
import { Button, Form } from 'semantic-ui-react'
import { storage } from './utils/firebase';

function ImageUpload({ onChangeFile }) {
  const [selectedFile, setSelectedFile] = useState(null);
  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    onChangeFile(file)
    setSelectedFile(file);
  };

  const handleUpload = () => {
    if (selectedFile) {
      console.log('Selected File:', selectedFile);
    } else {
      alert('Please select a file first.');
    }
  };

  return (
    <div>
        <Form>
        <Form.Field inline>
            <label>Add an image: </label>
            <input
                size={100}
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                style={{ display: 'none' }}
                ref={fileInputRef}
            />
            <input
                type="text"
                value={selectedFile ? selectedFile.name : ''}
                readOnly
                placeholder="No file chosen"
            />
            <Button onClick={() => fileInputRef.current.click()}>Browse</Button>
            <Button onClick={handleUpload}>Upload</Button>
        </Form.Field>
        </Form>
    </div>
  );
}

export default ImageUpload;
