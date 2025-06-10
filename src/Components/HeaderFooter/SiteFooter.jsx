import './header-footer.css';

const SiteFooter = () => {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();

    return (
        <footer className="footer-container">
            <div>&copy; {currentYear} Paul.Jeffreys Dev. All rights reserved</div>
            <div className="footer-socials">
                <a href="https://github.com/pauljeffreys1974" target="_blank" rel='noreferrer' title="Follow me on Github"><i class="fa-brands fa-github fa-xl"></i></a>
                <a href="https://www.linkedin.com/in/pauljeffreys/" target="_blank" rel='noreferrer' title="Follow me on LinkedIn"><i class="fa-brands fa-linkedin fa-xl"></i></a>
                <a href="https://www.instagram.com/jeffreyspaul/" target="_blank" rel='noreferrer' title="Follow me on Instagram"><i class="fa-brands fa-instagram fa-xl"></i></a>
                <a href="https://www.facebook.com/pjcavey/" target="_blank" rel='noreferrer' title="Follow me on Facebook"><i class="fa-brands fa-facebook fa-xl"></i></a>
            </div>
        </footer>
    );
};

export default SiteFooter;