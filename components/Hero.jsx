'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

const phrases = [
    'Transforming Data into Strategic Insights',
    'Building Data-Driven Solutions',
    'Optimizing Processes with Analytics',
    'Uncovering Patterns in Complex Data',
];

export default function Hero() {
    const [displayText, setDisplayText] = useState('');
    const [phraseIndex, setPhraseIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentPhrase = phrases[phraseIndex];
        let timeout;

        if (!isDeleting && charIndex < currentPhrase.length) {
            timeout = setTimeout(() => {
                setDisplayText(currentPhrase.substring(0, charIndex + 1));
                setCharIndex(charIndex + 1);
            }, 80);
        } else if (!isDeleting && charIndex === currentPhrase.length) {
            timeout = setTimeout(() => setIsDeleting(true), 2000);
        } else if (isDeleting && charIndex > 0) {
            timeout = setTimeout(() => {
                setDisplayText(currentPhrase.substring(0, charIndex - 1));
                setCharIndex(charIndex - 1);
            }, 40);
        } else if (isDeleting && charIndex === 0) {
            setIsDeleting(false);
            setPhraseIndex((phraseIndex + 1) % phrases.length);
        }

        return () => clearTimeout(timeout);
    }, [charIndex, isDeleting, phraseIndex]);

    const handleScrollToSection = (e, sectionId) => {
        e.preventDefault();
        const target = document.querySelector(sectionId);
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <section id="home" className="hero">
            <div className="hero-content">
                <div className="hero-text">
                    <p className="hero-greeting">Hello, I&apos;m</p>
                    <h1 className="hero-name">Ritesh Verma</h1>
                    <div className="hero-tagline-wrapper">
                        <span className="hero-tagline" id="typed-text">{displayText}</span>
                        <span className="cursor">|</span>
                    </div>
                    <p className="hero-description">
                        Data Analyst with expertise in transforming complex datasets into actionable business strategies.
                        Master&apos;s in Applied Data Science from Syracuse University.
                    </p>
                    <div className="hero-cta">
                        <a href="#contact" className="btn btn-primary" onClick={(e) => handleScrollToSection(e, '#contact')}>
                            <i className="fas fa-paper-plane"></i> Get In Touch
                        </a>
                        <a href="mailto:riverma312@gmail.com" className="btn btn-secondary">
                            <i className="fas fa-download"></i> Download Resume
                        </a>
                    </div>
                    <div className="hero-social">
                        <a href="https://www.linkedin.com/in/riteshv7/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                            <i className="fab fa-linkedin-in"></i>
                        </a>
                        <a href="https://github.com/riteshv7" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                            <i className="fab fa-github"></i>
                        </a>
                        <a href="mailto:riverma312@gmail.com" aria-label="Email">
                            <i className="fas fa-envelope"></i>
                        </a>
                    </div>
                </div>
                <div className="hero-image">
                    <div className="image-wrapper">
                        <div className="image-glow"></div>
                        <Image
                            src="/profile.jpg"
                            alt="Ritesh Verma"
                            width={320}
                            height={320}
                            className="profile-photo"
                            priority
                        />
                        <div className="image-ring"></div>
                    </div>
                    <div className="floating-icons">
                        <div className="float-icon" style={{ '--delay': '0s', '--x': '-60px', '--y': '-40px' }}>
                            <i className="fas fa-chart-line"></i>
                        </div>
                        <div className="float-icon" style={{ '--delay': '0.5s', '--x': '80px', '--y': '-20px' }}>
                            <i className="fas fa-database"></i>
                        </div>
                        <div className="float-icon" style={{ '--delay': '1s', '--x': '-70px', '--y': '60px' }}>
                            <i className="fas fa-code"></i>
                        </div>
                        <div className="float-icon" style={{ '--delay': '1.5s', '--x': '90px', '--y': '80px' }}>
                            <i className="fas fa-brain"></i>
                        </div>
                    </div>
                </div>
            </div>
            <a href="#about" className="scroll-indicator" onClick={(e) => handleScrollToSection(e, '#about')}>
                <span>Scroll Down</span>
                <i className="fas fa-chevron-down"></i>
            </a>
        </section>
    );
}
