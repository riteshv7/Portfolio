'use client';

import { useEffect, useRef } from 'react';

const stats = [
    { icon: 'fas fa-briefcase', count: 4, label: 'Years Experience' },
    { icon: 'fas fa-project-diagram', count: 15, label: 'Projects Delivered' },
    { icon: 'fas fa-chart-pie', count: 150, label: '$K Savings Generated' },
    { icon: 'fas fa-database', count: 10, label: 'Data Sources Integrated' },
];

export default function About() {
    const statsRef = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const element = entry.target;
                        const target = parseInt(element.getAttribute('data-count'));
                        animateCounter(element, target);
                        observer.unobserve(element);
                    }
                });
            },
            { threshold: 0.5 }
        );

        statsRef.current.forEach((el) => {
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    const animateCounter = (element, target) => {
        let current = 0;
        const increment = target / 50;
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                element.textContent = target + '+';
                clearInterval(timer);
            } else {
                element.textContent = Math.floor(current);
            }
        }, 50);
    };

    return (
        <section id="about" className="about section">
            <div className="container">
                <h2 className="section-title">About Me</h2>
                <div className="about-content">
                    <div className="about-text">
                        <p>
                            I&apos;m a <span className="highlight">Data Analyst</span> who loves finding the story hidden in numbers
                            and turning complex data into decisions that actually matter. Think of me as a detective, but instead
                            of solving crimes, I&apos;m solving business problems with Python, SQL, and a healthy dose of curiosity.
                        </p>
                        <p>
                            With a Master&apos;s in Applied Data Science, I build <span className="highlight">ETL pipelines</span>,
                            design <span className="highlight">dashboards</span>, and optimize processes using
                            <span className="highlight"> Lean Six Sigma</span>. My approach? Question everything, test assumptions,
                            and let the data do the talking, whether that&apos;s predicting customer behavior or improving warehouse efficiency.
                        </p>
                        <p>
                            My analytical mindset extends beyond work. I calculate probabilities at the poker table, analyze cricket
                            stats like it&apos;s my job (spoiler: it&apos;s not), and appreciate the strategic complexity in games like
                            Valorant. Pattern recognition is just how my brain works, whether I&apos;m querying databases or predicting
                            plot twists in anime.
                        </p>
                        <div className="about-location">
                            <i className="fas fa-map-marker-alt"></i>
                            <span>New York, NY • <em>Open to Relocation</em></span>
                        </div>
                    </div>
                    <div className="about-stats">
                        {stats.map((stat, index) => (
                            <div className="stat-card" key={index}>
                                <div className="stat-icon"><i className={stat.icon}></i></div>
                                <div
                                    className="stat-number"
                                    data-count={stat.count}
                                    ref={(el) => (statsRef.current[index] = el)}
                                >
                                    0
                                </div>
                                <div className="stat-label">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
