import React, { useEffect, useState } from 'react';
import { Container, Card, Input } from 'semantic-ui-react';
import JobCard from './JobCard';
import { db } from './utils/firebase';
import { getFirestore, collection, getDocs, query, where, orderBy } from "firebase/firestore";

function HomePage() {
    const [searchTitle, setSearchTitle] = useState('');
    const [searchSkills, setSearchSkills] = useState('');
    const [filteredJobs, setFilteredJobs] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const jobCollection = collection(db, 'jobs');
                const q = query(
                    jobCollection,
                    orderBy('title'), // Sort by title
                );
                
                const querySnapshot = await getDocs(q);
                
                const jobs = [];
                querySnapshot.forEach((doc) => {
                    const jobData = doc.data();
                    const titleMatch = !searchTitle || jobData.title.toLowerCase().includes(searchTitle.toLowerCase());
                    const skillsMatch = !searchSkills || jobData.skills.toLowerCase().includes(searchSkills.toLowerCase());
                    
                    if (titleMatch && skillsMatch) {
                        jobs.push(jobData);
                    }
                });
                
                setFilteredJobs(jobs);
                
            }
            catch (error) {
                console.error('Error reading database:', error);
            }
        };

        fetchData();
    }, [searchTitle, searchSkills]);

    const handleTitleSearchChange = (e) => {
        setSearchTitle(e.target.value);
    };

    const handleSkillsSearchChange = (e) => {
        setSearchSkills(e.target.value);
    };

    return (
        <Container>
            <Input
                placeholder="Search by title"
                value={searchTitle}
                onChange={handleTitleSearchChange}
            />
            <Input
                placeholder="Search by skills"
                value={searchSkills}
                onChange={handleSkillsSearchChange}
            />
            <Card.Group>
                {filteredJobs.map((job, index) => (
                    <JobCard key={index} job={job} />
                ))}
            </Card.Group>
        </Container>
    );
}

export default HomePage;
