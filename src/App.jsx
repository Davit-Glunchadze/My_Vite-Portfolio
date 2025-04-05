// მოახდინე პროექტის ინიციალიზაცია create-react-app პაკეტის გამოყენებით და npx ბრძანებით --- ეს ძველია -  შეიცვალა npm create vite@latest ბრძანებით
// ● შეიტანე ცვლილებები საწყის გვერდზე, დაამსგავსე ის მარტივ პორტფოლიოს გვერდს
// ● ჩასვი სასურველი სურათი და მოკლე ტექსტური ინფორმაცია

import userPhoto from "./assets/user-photo.PNG";
import "./App.css";

function About() {

  return (
    <>
      {/* About Section */}
      <section id="about" className="about-section">
        {/* Section Title */}
        <div className="section-title">
          <h1>About me</h1>
          <p>
            Hello! I'm a passionate front-end developer who started my journey
            at Skillwill 7 months ago. Since then, I’ve been diving deep into
            HTML, CSS, and JavaScript (ES6+), continuously improving my skills
            and building a strong foundation in front-end development.
            Currently, I’m expanding my knowledge in modern JavaScript
            frameworks, particularly React, while honing my expertise in DOM
            manipulation, asynchronous JavaScript, and responsive web design. I
            enjoy turning creative ideas into interactive and user-friendly web
            experiences. I'm always eager to learn new technologies and take on
            challenges that help me grow as a developer. Let’s build something
            amazing together!{" "}
          </p>
        </div>
        {/* End Section Title */}

        <div className="container">
          {/* image */}
            <div>
              <img src={userPhoto} className="img-fluid" alt="About photo" />
            </div>
            {/* about texts */}
            <div>
              <h2>Front-End Developer</h2>
              <p>
                I specialize in building interactive and responsive web
                applications using modern front-end technologies.
              </p>
              <div>
                <ul>
                  <li><span>Birthday:</span>12 Dec 1989</li>
                  <li><span>phone:</span>577 391-140</li>
                  <li><span>City:</span>Rustavi, Geo</li>
                  <li><span>Age:</span>35</li>
                  <li><span>Degree:</span>Junior</li>
                  <li><span>Email:</span>davitiglunchadze@gmail.com</li>
                  <li><span>Freelance:</span>Available</li>
                  <li><span>Languages:</span>Georgian, English</li>
                </ul>
              </div>
            </div>
        </div>
      </section>
      {/* End About Section */}
    </>
  );
}

export default About;
