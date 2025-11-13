import React from 'react';

function Courses() {
  const courses = [
    { title: 'Mth201', desc: 'Master numbers, algebra, and geometry.' },
    { title: 'Sen201', desc: 'Explore the world of Software Engineering.' },
    { title: 'Cos201', desc: 'Learn coding and technology basics.' },
  ];

  return (
    <section id="courses" className="courses">
      <h2>Our Courses</h2>
      <div className="course-list">
        {courses.map((course, index) => (
          <div key={index} className="course-card">
            <h3>{course.title}</h3>
            <p>{course.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Courses;
