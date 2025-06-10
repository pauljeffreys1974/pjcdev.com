import { useNavigate } from "react-router-dom";

import './resume.css';

const Resume = () => {
    const skillsTechnical = [
        "ReactJS",
        "NodeJS",
        "AgularJS",
        "SvelteJS",
        "SCSS",
        "HTML",
        "CSS",
        "Express",
        "T-SQL",
        "D3",
        "Coldfusion",
        "C#",
    ];
    const skillsPersonal = [
        "Requirement Gathering",
        "Teamwork",
        "Collaboration",
        "Empathetic Management",
        "Interpersonal Skills",
        "Attention to Detail",
        "Highly Professional",
        "Hard Working",
        "Verbal and Written Communication"
    ];
    const navigate = useNavigate();

    return (
        <section className="resume-container">
            <article className="resume-intro">
                <div className="resume-intro-image"></div>
                <div className="resume-intro-details">
                    <h2>Paul Jeffreys</h2>
                    <p className="resume-intro-summary">IT Manager & Front End Developer</p>
                    <p className="resume-intro-socials">
                        <span><i class="fa-regular fa-envelope fa-md" style={{ color: 'rgb(113, 138, 207)'}}></i> pauljeffreysdev@gmail.com</span>
                        <span><i class="fa-solid fa-location-dot fa-md" style={{ color: 'rgb(113, 138, 207)'}}></i> Gates, NC</span>
                        <span><a href="https://www.linkedin.com/in/pauljeffreys/" target="_blank" rel='noreferrer' title="Follow me on LinkedIn"><i class="fa-brands fa-linkedin fa-md" style={{ color: 'rgb(113, 138, 207)'}}></i> www.linkedin.com/in/pauljeffreys/</a></span>
                        <span><a href="https://github.com/pauljeffreys1974" target="_blank" rel='noreferrer' title="Follow me on Github"><i class="fa-brands fa-github fa-md" style={{ color: 'rgb(113, 138, 207)'}}></i> github.com/pauljeffreys1974</a></span>
                    </p>
                    <p>
                        <a
                        href="/Paul-Jeffreys-Resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <button className="btn-blueborder"><i class="fa-solid fa-file-pdf"></i> Download PDF</button>
                    </a> 
                        <button className="btn-bluebg" onClick={() => navigate('/contact')}><i class="fa-regular fa-envelope"></i> Contact Me</button>
                    </p>
                </div>
            </article>

            <article className="resume-summary">
                <h3>Professional Summary</h3>
                <p>Adept at requirement gathering and empathetic management, I spearheaded diverse teams at Homes.com, enhancing project success through collaboration and technical prowess in ReactJS and Javascript. My leadership significantly improved site performance and team efficiency, showcasing my commitment to excellence and interpersonal skills.</p>
            </article>

            <article className="resume-work-experience">
                <h3>Work Experience</h3>

                <div className="resume-experience">
                    <h4>Team Lead/Software Engineer</h4>
                    <p className="work-experience-company">CoStar Group Inc. - Norfolk, VA</p>
                    <p className="work-experience-dates">March 2021 - February 2025</p>
                    <ul className="work-experience-details">
                        <li>Collaborated closely with Senior Management, managers, other Team Leads, and senior developers on requirements and timelines for projects, ensuring timely and successful project delivery</li>
                        <li>Conducted performance reviews and performance enhancement reviews on team members, fostering professional growth and improving team efficiency</li>
                        <li>Monitored site performance during updates, maintaining site speed and optimizing user experience</li>
                        <li>Constantly worked with Product & Design to improve UI/UX and regularly suggested improvements.</li>
                    </ul>
                    <ul className="work-experience-languages">
                        <li>ReactJS</li>
                        <li>SCSS</li>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>Express</li>
                        <li>T-SQL</li>
                    </ul>
                </div>
                <div className="resume-experience">
                    <h4>Team Lead/Development Manager</h4>
                    <p className="work-experience-company">Homes.com - Norfolk, VA</p>
                    <p className="work-experience-dates">June 2016 - March 2021</p>
                    <ul className="work-experience-details">
                        <li>Planned, managed and hands-on coded a rebuild of Homes.com`s Detail pages, Search Results pages and Homepage to streamline load and performance metrics, resulting in Google scores going from 27%, 43% and 57% respectively to 98%, 97% and 100% respectively.</li>
                        <li>Worked with Product, Design, Company Senior Leadership and other stakeholder to improve UI/UX and implemented improvements which resulted in the bounce rate of users going down by 40% and user engagement and retention going up by 30%.</li>
                        <li>Led a blended team of 8 Front End Developers and 6 Mobile App Developers, achieving project success by collaborating closely with Product Managers and stakeholders.</li>
                        <li>Successfully managed both teams remotely during the COVID lockdown, ensuring timely delivery and maintaining high-quality standards</li>
                    </ul>
                    <ul className="work-experience-languages">
                        <li>AngularJS</li>
                        <li>SvelteJS</li>
                        <li>ReactJS</li>
                        <li>SCSS</li>
                        <li>NodeJS</li>
                        <li>HTML</li>
                        <li>CSS</li>
                    </ul>
                </div>
                <div className="resume-experience">
                    <h4>Front End Developer</h4>
                    <p className="work-experience-company">Homes.com - Norfolk, VA</p>
                    <p className="work-experience-dates">June 2014 - June 2016</p>
                    <ul className="work-experience-details">
                        <li>Enhanced the Homes.com website's load speed and design, resulting in a 25% increase in user satisfaction by optimizing frontend performance using ReactJS and JavaScript.</li>
                        <li>Designed and implemented new layouts to achieve usability and performance objectives, boosting site performance by 50% through collaboration with Product & Design teams.</li>
                        <li>Gathered and translated stakeholder requirements into product stories and actionable tasks, ensuring timely project delivery and high-quality standards within Agile methodologies</li>
                    </ul>
                    <ul className="work-experience-languages">
                        <li>AngularJS</li>
                        <li>ReactJS</li>
                        <li>Redux</li>
                        <li>SCSS</li>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>ColdFusion</li>
                        <li>NodeJS</li>
                        <li>D3</li>
                    </ul>
                </div>
                <div className="resume-experience">
                    <h4>Front End Developer</h4>
                    <p className="work-experience-company">Realise Ltd, - Edinburgh, Scotland, UK</p>
                    <p className="work-experience-dates">May 2000 - November 2013</p>
                    <ul className="work-experience-details">
                        <li>Brought mock-ups to life with HTML, CSS and JavaScript</li>
                        <li>Applied innovative approaches to software design through creative inception and planning</li>
                        <li>Created documentation for new applications to support end-users</li>
                        <li>Developed site content and graphic by coordinating with copywriters and graphic artists</li>
                        <li>Managed online experiential content for product launches, design changes and promotions</li>
                        <li>Redesigned sites to enhance navigation and improve visual appeal</li>
                        <li>Implemented improvements to boost site performance</li>
                    </ul>
                    <ul className="work-experience-languages">
                        <li>HTML</li>
                        <li>Javascript</li>
                        <li>CSS</li>
                        <li>DHTML</li>
                        <li>ActionScript</li>
                        <li>ASP.NET</li>
                        <li>C#</li>
                        <li>VB.NET</li>
                    </ul>
                </div>
            </article>

            <article className="resume-education">
                <h3>Education</h3>
                <div className="education-wrapper">
                    <h4 className="resume-education-degree">Bachelor of Science in Quantity Surveying</h4>
                    <p className="resume-education-university">Abertay University, Dundee, Scotland, UK</p>
                    <p className="resume-education-dates">October 1992 - November 1995</p>
                    <ul className="resume-education-courses">
                        <li>Coursework Subjecs: Project Management, Construction Studies, Construction Quantities, Economics, Construction Economics, Legal Studies, Legal Practices, Mathematics, Computing</li>
                        <li>Certified Transcripts Available on request</li>
                    </ul>
                </div>
            </article>

            <article className="resume-skills-certifications">
                <div className="resume-skills">
                    <h3>Technical Skills</h3>
                    <ul className="skills-list">
                        {skillsTechnical.map((skill) => {
                           return (
                            <li>{skill}</li>
                           ) 
                        })}
                    </ul>
                    <h3>Personal Skills</h3>
                    <ul className="skills-list">
                        {skillsPersonal.map((skill) => {
                            return (
                                <li>{skill}</li>
                            )
                        })}
                    </ul>
                </div>
                <div className="resume-certifications">
                    <h3>Certifications</h3>
                    <ul>
                        <li><img src="/certifications-bullet.png" width="32" height="32" alt="certification star" /> Google PMP Level 1 - Foundations of Project Management</li>
                        <li><img src="/certifications-bullet.png" width="32" height="32" alt="certification star" /> Google PMP Level 2 - Project Initiation: Starting a Successful Project</li>
                    </ul>

                    <h3>Personal Achievements</h3>
                    <ul className="resume-interests">
                        <li>Represented Great Britain Twice for Flag Football</li>
                        <li>Represented Scotland in Rowing</li>
                        <li>Won School prize for Technical Drawing</li>
                    </ul>
                    <h3>Interests</h3>
                    <ul className="resume-interests">
                        <li>Reading</li>
                        <li>Sports</li>
                        <li>Movies</li>
                        <li>DIY</li>
                    </ul>
                </div>
            </article>

            <p><button onClick={() => navigate('/contact')} className="btn-blueborder"><i class="fa-regular fa-envelope"></i> Contact Me</button></p>
        </section>
    );
}

export default Resume;