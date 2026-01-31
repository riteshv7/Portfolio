'use client';

const education = [
    {
        degree: 'Master of Science in Applied Data Science',
        university: 'Syracuse University',
        location: 'Syracuse, NY',
        date: 'August 2022 – May 2024',
        icon: 'fas fa-graduation-cap',
        coursework: ['Machine Learning', 'Business Analytics', 'Big Data Analytics', 'Lean Six Sigma', 'Cloud Computing', 'Database Management'],
    },
    {
        degree: 'Bachelor of Technology (Honors) in Electronics & Telecommunication',
        university: 'NMIMS University',
        location: 'Shirpur, India',
        date: 'July 2018 – April 2022',
        icon: 'fas fa-university',
        minor: 'Minor in Data Analytics',
        coursework: ['Mathematics', 'Data Warehousing', 'Multidimensional Modeling', 'Descriptive & Predictive Analytics', 'BA for Industries'],
    },
];

export default function Education() {
    return (
        <section id="education" className="education section">
            <div className="container">
                <h2 className="section-title">Education</h2>
                <div className="education-grid">
                    {education.map((edu, index) => (
                        <div className="edu-card glass-card" key={index}>
                            <div className="edu-icon">
                                <i className={edu.icon}></i>
                            </div>
                            <div className="edu-content">
                                <h3 className="degree">{edu.degree}</h3>
                                {edu.minor && <p className="minor">{edu.minor}</p>}
                                <h4 className="university">{edu.university}</h4>
                                <p className="edu-location"><i className="fas fa-map-marker-alt"></i> {edu.location}</p>
                                <p className="edu-date"><i className="fas fa-calendar"></i> {edu.date}</p>
                                <div className="coursework">
                                    <h5>Key Coursework:</h5>
                                    <div className="course-tags">
                                        {edu.coursework.map((course, cIndex) => (
                                            <span className="course-tag" key={cIndex}>{course}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style jsx>{`
                .education-grid {
                    display: grid;
                    grid-template-columns: repeat(2, 1fr);
                    gap: 30px;
                }
                .minor {
                    font-size: 0.95rem;
                    color: #8b5cf6;
                    font-weight: 500;
                    margin-bottom: 8px;
                }
                @media (max-width: 768px) {
                    .education-grid {
                        grid-template-columns: 1fr;
                    }
                }
            `}</style>
        </section>
    );
}
