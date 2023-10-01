import React, { useState } from 'react';
import { Container, Divider, Button } from 'semantic-ui-react';
import JobType from './JobType';
import Description from './Description';
import Conditions from './Conditions';
import Experience from './Experience';
import ImageUpload from './ImageUpload';
import { db, storage } from '../src/utils/firebase';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { doc, setDoc } from 'firebase/firestore';

function FormPage() {
  const [selectedJobType, setSelectedJobType] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);

  const handleJobTypeChange = (newValue) => {
    const isEmployment = newValue === 'true';
    setPostData({ ...postData, isEmployment });
    setSelectedJobType(newValue);
  };

  const handleFileChange = (file) => {
    setSelectedFile(file);
  }

  const [postData, setPostData] = useState({
    title: '',
    description: '',
    skills: '',
    isEmployment: false,
    projectLength: '',
    paymentMin: 0.0,
    paymentMax: 0.0,
    workingHours: 0,
    experienceIn: '',
    experienceTime: '',
    imageUrl: '',
  });

  const handlePost = async () => {
    if (!selectedFile) {
        alert('Please select an image to upload.');
        return;
    }

    try {
      const newFileName = `${postData.title}_${selectedFile.name}`;
      const imageRef = ref(storage, `images/${newFileName}`);
      
      const blob = new Blob([selectedFile]);

      await uploadBytes(imageRef, blob);

      const imageUrl = await getDownloadURL(imageRef);

      postData.imageUrl = imageUrl;

      const timestamp = new Date().toISOString();
      const docRef = doc(db, 'jobs', timestamp);
      await setDoc(docRef, postData);

      alert("Job posted successfully");
    } catch (error) {
      console.error('Error uploading post:', error);
    }
  };

  return (
    <div>
      <Container>
        <Divider horizontal />
        <JobType onSelectJobType={handleJobTypeChange} />
        <Description onChangeDescription={(title, description, skills) => setPostData({...postData, title, description, skills})}/>
        <Divider horizontal />
        <Conditions onChangeConditions={(projectLength, paymentMin, paymentMax, workingHours) => setPostData({...postData, projectLength, paymentMin, paymentMax, workingHours})}/>
        <Divider horizontal />
        <ImageUpload onChangeFile={handleFileChange}/>
        <Divider horizontal />

        {selectedJobType === 'true' ? (
          <Experience onChangeExperience={(experienceIn, experienceTime) => setPostData({...postData, experienceIn, experienceTime})}/>
        ) : (
          <p></p>
        )}

        <Button floated='right' type='submit' onClick={handlePost}>
          Post
        </Button>
      </Container>
    </div>
  );
}

export default FormPage;
