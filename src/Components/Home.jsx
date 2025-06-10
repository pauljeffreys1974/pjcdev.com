import { useNavigate } from "react-router-dom";

import SkillsList from "./SkillsList/skills";
import Projects from "./Projects/Projects";

const Home = () => {
    const navigate = useNavigate();
    
    return (
        <div className="homepage-container">
            <section className="section introduction">
                <h2><span>I am an</span> <span>IT Manager & Developer</span></h2>
                <p>Creating digital experiances with clean code, creative solutions and mentoring developers.</p>
                <p><button onClick={() => navigate('/resume')}>View Resume</button> <button onClick={() => navigate('/projects')}>See work examples</button></p>
            </section>

            <Projects limit={3} location="homepage" />

            <SkillsList />
        </div>
    );
};

export default Home;