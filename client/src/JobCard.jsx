import React, { useState } from 'react';
import { Card, Image, Button } from 'semantic-ui-react';

function JobCard({ job, onDelete }) {
  const [expanded, setExpanded] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  const toggleExpansion = () => {
    setExpanded(!expanded);
  };

  const handleDelete = () => {
    setIsHidden(true)
  };

  if (isHidden) {
    return null;
  }

  return (
    <Card>
      <Image src={job.imageUrl} wrapped ui={false} />
      <Card.Content>
        <Card.Header>
            {job.isEmployment ? (
                `Employment Opportunity: ${job.title}`
            ) : (
                `Freelance: ${job.title}`
            )}
        </Card.Header>
        <Card.Description>
          {expanded ? (
            <div>
              <p>{job.description}</p>
              <p>Skills Required: {job.skills}</p>
              <p>Payment Range: ${job.paymentMin} - ${job.paymentMax}</p>
              <p>Working Hours: {job.workingHours}</p>
              {job.isEmployment && (
                    <p>Experience Required: {job.experienceIn} for at least {job.experienceTime}</p>
              )}
            </div>
          ) : null}
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Button onClick={toggleExpansion}>
          {expanded ? 'Collapse' : 'Expand'}
        </Button>
        <Button onClick={handleDelete} color="red">
          Delete
        </Button>
      </Card.Content>
    </Card>
  );
}

export default JobCard;
