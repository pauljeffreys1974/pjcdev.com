import { useEffect, useState } from "react";

import skillsDataJson from '../../data/skills.json';

import './skills.css';

const SkillsList = ({limit}) => {
    const [skillsData, setSkillsData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        try {
            if (Array.isArray(skillsDataJson)) {
                setSkillsData(skillsDataJson);
                setIsLoading(false);
            } else {
                throw new Error("skills.json is not an array or is invalid.");
            }
        } catch (err) {
            console.error("Error loading skills data from import:", err);
            setError(err);
            setIsLoading(false);
        }
    }, []);

    if (isLoading) {
        return <section className="section technical-skills"><h2>Technical Skills</h2><p>Loading skills...</p></section>;
    }

    if (error) {
        return <section className="section technical-skills"><h2>Technical Skills</h2><p>Error: {error.message}</p></section>;
    }

    const skillsToRender = Array.isArray(skillsData)
        ? (typeof limit === 'number' && limit >= 0 ? skillsData.slice(0, limit) : skillsData)
        : [];

    return (
        <section className="section technical-skills">
            <h2>Technical Skills</h2>
            <div className="skills-container">
                {
                    skillsToRender.map((skill, index) => {
                        return (
                            <div className="skill" key={skill.id || index}>
                                <p><i className={skill.icon} style={{ color: 'rgb(113, 138, 207)'}}></i></p>
                                <p>{skill['skill-name']}</p>
                                <p>{skill['skill-level']}</p>
                            </div>
                        );
                    })
                }
            </div>
        </section>
    );
};

export default SkillsList;