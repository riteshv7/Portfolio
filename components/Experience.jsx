'use client';

import { useState } from 'react';

const experiences = [
    {
        title: 'Data Analyst (Contract)',
        company: 'KGS Technology Group',
        location: 'Alpharetta, GA',
        date: 'June 2025 – August 2025',
        icon: 'fas fa-chart-line',
        color: '#00d4ff',
        tags: ['Lean Six Sigma', 'Power BI', 'SQL', 'Visio'],
    },
    {
        title: 'Data Research Analyst',
        company: 'Syracuse University',
        location: 'Syracuse, NY',
        date: 'June 2024 – June 2025',
        icon: 'fas fa-university',
        color: '#4f46e5',
        tags: ['SQL', 'Tableau', 'ETL', 'UAT'],
    },
    {
        title: 'Data Analyst',
        company: 'Nexis',
        location: 'Syracuse, NY',
        date: 'September 2023 – May 2024',
        icon: 'fas fa-truck',
        color: '#8b5cf6',
        tags: ['Python', 'AWS', 'Machine Learning', 'ETL'],
    },
    {
        title: 'Junior Data Analyst',
        company: 'Peeschute',
        location: 'Jalna, India',
        date: 'January 2021 – February 2022',
        icon: 'fas fa-ad',
        color: '#10b981',
        tags: ['SQL', 'Power BI', 'Marketing Analytics'],
    },
];

export default function Experience() {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section id="experience" className="experience section">
            <div className="container">
                <h2 className="section-title">Work Experience</h2>
                <div className="exp-showcase">
                    <div className="exp-tabs">
                        {experiences.map((exp, index) => (
                            <button
                                key={index}
                                className={`exp-tab ${activeIndex === index ? 'active' : ''}`}
                                onClick={() => setActiveIndex(index)}
                                style={{ '--accent': exp.color }}
                            >
                                <div className="exp-tab-icon">
                                    <i className={exp.icon}></i>
                                </div>
                                <div className="exp-tab-info">
                                    <span className="exp-tab-company">{exp.company}</span>
                                    <span className="exp-tab-date">{exp.date}</span>
                                </div>
                            </button>
                        ))}
                    </div>
                    <div className="exp-detail glass-card">
                        <div className="exp-detail-header" style={{ '--accent': experiences[activeIndex].color }}>
                            <div className="exp-detail-icon">
                                <i className={experiences[activeIndex].icon}></i>
                            </div>
                            <div className="exp-detail-info">
                                <h3 className="exp-detail-title">{experiences[activeIndex].title}</h3>
                                <h4 className="exp-detail-company">{experiences[activeIndex].company}</h4>
                            </div>
                        </div>
                        <div className="exp-meta">
                            <span className="exp-location">
                                <i className="fas fa-map-marker-alt"></i> {experiences[activeIndex].location}
                            </span>
                            <span className="exp-date">
                                <i className="fas fa-calendar"></i> {experiences[activeIndex].date}
                            </span>
                        </div>
                        <div className="exp-tags">
                            {experiences[activeIndex].tags.map((tag, tIndex) => (
                                <span className="exp-tag" key={tIndex} style={{ '--accent': experiences[activeIndex].color }}>
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .exp-showcase {
                    display: grid;
                    grid-template-columns: 280px 1fr;
                    gap: 40px;
                    align-items: start;
                }
                .exp-tabs {
                    display: flex;
                    flex-direction: column;
                    gap: 12px;
                }
                .exp-tab {
                    display: flex;
                    align-items: center;
                    gap: 16px;
                    padding: 16px 20px;
                    background: rgba(255, 255, 255, 0.03);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    border-radius: 12px;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    text-align: left;
                }
                .exp-tab:hover {
                    background: rgba(255, 255, 255, 0.06);
                    border-color: var(--accent);
                    transform: translateX(5px);
                }
                .exp-tab.active {
                    background: rgba(0, 212, 255, 0.1);
                    border-color: var(--accent);
                    box-shadow: 0 4px 20px rgba(0, 212, 255, 0.15);
                }
                .exp-tab-icon {
                    width: 44px;
                    height: 44px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background: rgba(0, 212, 255, 0.1);
                    border-radius: 10px;
                    color: var(--accent);
                    font-size: 1.1rem;
                }
                .exp-tab.active .exp-tab-icon {
                    background: var(--accent);
                    color: #0a0f1c;
                }
                .exp-tab-info {
                    display: flex;
                    flex-direction: column;
                    gap: 4px;
                }
                .exp-tab-company {
                    font-size: 0.95rem;
                    font-weight: 600;
                    color: #fff;
                }
                .exp-tab-date {
                    font-size: 0.8rem;
                    color: #9ca3af;
                }
                .exp-detail {
                    padding: 40px;
                    min-height: 280px;
                    display: flex;
                    flex-direction: column;
                    gap: 24px;
                }
                .exp-detail-header {
                    display: flex;
                    align-items: center;
                    gap: 20px;
                }
                .exp-detail-icon {
                    width: 70px;
                    height: 70px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background: var(--accent);
                    border-radius: 16px;
                    font-size: 1.8rem;
                    color: #0a0f1c;
                }
                .exp-detail-title {
                    font-size: 1.5rem;
                    font-weight: 700;
                    color: #fff;
                    margin-bottom: 6px;
                }
                .exp-detail-company {
                    font-size: 1.15rem;
                    color: var(--accent);
                    font-weight: 500;
                }
                .exp-meta {
                    display: flex;
                    gap: 24px;
                    flex-wrap: wrap;
                }
                .exp-meta span {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    font-size: 0.95rem;
                    color: #9ca3af;
                }
                .exp-meta i {
                    color: #00d4ff;
                }
                .exp-tags {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 10px;
                    margin-top: auto;
                }
                .exp-tag {
                    padding: 8px 18px;
                    font-size: 0.85rem;
                    font-weight: 500;
                    color: var(--accent);
                    background: rgba(0, 212, 255, 0.1);
                    border: 1px solid rgba(0, 212, 255, 0.2);
                    border-radius: 25px;
                }
                @media (max-width: 768px) {
                    .exp-showcase {
                        grid-template-columns: 1fr;
                    }
                    .exp-tabs {
                        flex-direction: row;
                        overflow-x: auto;
                        padding-bottom: 10px;
                    }
                    .exp-tab {
                        flex-shrink: 0;
                        padding: 12px 16px;
                    }
                    .exp-tab-info {
                        display: none;
                    }
                    .exp-detail {
                        padding: 24px;
                    }
                }
            `}</style>
        </section>
    );
}
