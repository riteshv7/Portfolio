const projects = [
    {
        icon: 'fas fa-industry',
        title: 'Lean Six Sigma - Packing Process Optimization',
        description: 'Led a cross-functional Lean Six Sigma project utilizing data analysis and process mapping to increase packing efficiency by 38% and reduce defects by 45%, generating $120K+ in annual savings.',
        highlights: [
            'Implemented automated data collection and real-time dashboards',
            'Established standardized work procedures and continuous improvement culture',
            'Recognized as a best practice within the organization',
        ],
        tech: ['Lean Six Sigma', 'Data Analysis', 'Process Mapping', 'Dashboards'],
        github: 'https://github.com/riteshv7',
    },
    {
        icon: 'fas fa-truck',
        title: 'Transportation Data Lake & Predictive Analytics',
        description: 'Architected and implemented an automated ETL pipeline integrating 10+ transportation data sources into AWS S3, enabling predictive resource allocation with 82% accuracy.',
        highlights: [
            'Built ETL pipelines using Python, AWS Glue, and Lambda',
            'Developed Gradient Boosting models for forecasting',
            'Reduced stakeholder request turnaround by 35%',
        ],
        tech: ['Python', 'AWS', 'Machine Learning', 'ETL'],
        github: 'https://github.com/riteshv7',
    },
    {
        icon: 'fas fa-ad',
        title: 'Marketing Analytics & Media Mix Modeling',
        description: 'Built comprehensive marketing analytics dashboards and media mix modeling framework for 8+ e-commerce clients, improving ad spend efficiency by 12%.',
        highlights: [
            'Integrated data from Facebook, Google Ads, and TikTok',
            'Created Power BI dashboards for campaign tracking',
            'Implemented regression-based attribution modeling',
        ],
        tech: ['Power BI', 'SQL', 'Regression', 'Marketing'],
        github: 'https://github.com/riteshv7',
    },
];

export default function Projects() {
    return (
        <section id="projects" className="projects section">
            <div className="container">
                <h2 className="section-title">Featured Projects</h2>
                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <div className="project-card glass-card" key={index}>
                            <div className="project-header">
                                <div className="project-icon"><i className={project.icon}></i></div>
                                <div className="project-links">
                                    <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                                        <i className="fab fa-github"></i>
                                    </a>
                                </div>
                            </div>
                            <h3 className="project-title">{project.title}</h3>
                            <p className="project-description">{project.description}</p>
                            <ul className="project-highlights">
                                {project.highlights.map((highlight, hIndex) => (
                                    <li key={hIndex}>{highlight}</li>
                                ))}
                            </ul>
                            <div className="project-tech">
                                {project.tech.map((tech, tIndex) => (
                                    <span key={tIndex}>{tech}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
                <div className="projects-cta">
                    <a href="https://github.com/riteshv7" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                        <i className="fab fa-github"></i> View More on GitHub
                    </a>
                </div>
            </div>
        </section>
    );
}
