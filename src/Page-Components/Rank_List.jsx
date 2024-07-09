import React, { useState } from 'react';
import styles from './RanklistPage.module.css';

const RanklistPage = () => {
  // Sample data
  const [students, setStudents] = useState([
    {
      enrollment_no: '123456',
      name: 'John Doe',
      skills: ['React', 'Node.js', 'CSS'],
      section: 'A',
      projects: [
        {
          name: 'Project A',
          description: 'A project about A',
          link: 'http://example.com',
        },
      ],
      work_experience: [
        {
          title: 'Software Engineer',
          organization: 'ABC Corp',
          location: 'New York',
          duration: 'Jan 2020 - Dec 2021',
          responsibilities: 'Developed web applications',
        },
      ],
    },
    {
      enrollment_no: '654321',
      name: 'Jane Smith',
      skills: ['Angular', 'Python', 'HTML'],
      section: 'B',
      projects: [
        {
          name: 'Project B',
          description: 'A project about B',
          link: 'http://example.com',
        },
      ],
      work_experience: [
        {
          title: 'Backend Developer',
          organization: 'XYZ Inc',
          location: 'San Francisco',
          duration: 'Mar 2019 - Nov 2020',
          responsibilities: 'Built APIs',
        },
      ],
    },
  ]);

  const [expandedStudent, setExpandedStudent] = useState(null);

  const handleToggle = (enrollment_no) => {
    setExpandedStudent((prev) => (prev === enrollment_no ? null : enrollment_no));
  };

  // Function to sort students by the number of skills
  const sortStudentsBySkills = (students) => {
    return students.sort((a, b) => b.skills.length - a.skills.length);
  };

  const sortedStudents = sortStudentsBySkills(students);

  return (
    <div className={styles.container}>
      <h1>Student Ranklist</h1>
      <div className={styles.ranklist}>
        {sortedStudents.map((student, index) => (
          <div key={student.enrollment_no} className={styles.studentCard}>
            <div
              className={styles.studentSummary}
              onClick={() => handleToggle(student.enrollment_no)}
            >
              <h2>Rank {index + 1}: {student.name}</h2>
              <p><strong>Enrollment No:</strong> {student.enrollment_no}</p>
              <p><strong>Skills:</strong> {student.skills.join(', ')}</p>
              <p><strong>Section:</strong> {student.section}</p>
            </div>
            {expandedStudent === student.enrollment_no && (
              <div className={styles.studentDetails}>
                <div className={styles.section}>
                  <h3>Projects:</h3>
                  {student.projects.map((project, idx) => (
                    <div key={idx} className={styles.project}>
                      <p><strong>Name:</strong> {project.name}</p>
                      <p><strong>Description:</strong> {project.description}</p>
                      <p><strong>Link:</strong> <a href={project.link} target="_blank" rel="noopener noreferrer">{project.link}</a></p>
                    </div>
                  ))}
                </div>
                <div className={styles.section}>
                  <h3>Work Experience:</h3>
                  {student.work_experience.map((work, idx) => (
                    <div key={idx} className={styles.workExperience}>
                      <p><strong>Title:</strong> {work.title}</p>
                      <p><strong>Organization:</strong> {work.organization}</p>
                      <p><strong>Location:</strong> {work.location}</p>
                      <p><strong>Duration:</strong> {work.duration}</p>
                      <p><strong>Responsibilities:</strong> {work.responsibilities}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default RanklistPage;
