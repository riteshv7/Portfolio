const skillCategories = [
    {
        icon: 'fas fa-chart-bar',
        title: 'Data Visualization & Reporting',
        skills: [
            { icon: 'fas fa-chart-line', name: 'Tableau' },
            { icon: 'fas fa-chart-pie', name: 'Power BI' },
            { icon: 'fas fa-table', name: 'DAX' },
            { icon: 'fas fa-search', name: 'Power Query' },
            { icon: 'fas fa-file-excel', name: 'Excel' },
            { icon: 'fas fa-file-alt', name: 'SQL Reporting' },
        ],
    },
    {
        icon: 'fas fa-database',
        title: 'Database & Programming',
        skills: [
            { icon: 'fas fa-code', name: 'SQL' },
            { icon: 'fab fa-python', name: 'Python' },
            { icon: 'fas fa-snowflake', name: 'Snowflake' },
            { icon: 'fas fa-table', name: 'Pandas' },
            { icon: 'fas fa-calculator', name: 'NumPy' },
            { icon: 'fab fa-aws', name: 'AWS' },
        ],
    },
    {
        icon: 'fas fa-tasks',
        title: 'Business Analysis & Process',
        skills: [
            { icon: 'fas fa-cogs', name: 'Lean Six Sigma' },
            { icon: 'fas fa-project-diagram', name: 'DMAIC' },
            { icon: 'fas fa-search-plus', name: 'Root-Cause Analysis' },
            { icon: 'fas fa-sitemap', name: 'Process Mapping' },
            { icon: 'fas fa-clipboard-check', name: 'UAT' },
            { icon: 'fas fa-bullseye', name: 'KPI Design' },
        ],
    },
    {
        icon: 'fas fa-tools',
        title: 'Tools & Technologies',
        skills: [
            { icon: 'fab fa-git-alt', name: 'Git' },
            { icon: 'fas fa-cloud', name: 'AWS Glue' },
            { icon: 'fas fa-bolt', name: 'Lambda' },
            { icon: 'fas fa-book', name: 'Confluence' },
            { icon: 'fas fa-draw-polygon', name: 'Visio' },
            { icon: 'fas fa-users', name: 'Stakeholder Mgmt' },
        ],
    },
];

export default function Skills() {
    return (
        <section id="skills" className="skills section">
            <div className="container">
                <h2 className="section-title">Technical Skills</h2>
                <div className="skills-grid">
                    {skillCategories.map((category, index) => (
                        <div className="skill-category glass-card" key={index}>
                            <div className="category-header">
                                <div className="category-icon"><i className={category.icon}></i></div>
                                <h3>{category.title}</h3>
                            </div>
                            <div className="skill-tags">
                                {category.skills.map((skill, sIndex) => (
                                    <span className="skill-tag" key={sIndex}>
                                        <i className={skill.icon}></i> {skill.name}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
