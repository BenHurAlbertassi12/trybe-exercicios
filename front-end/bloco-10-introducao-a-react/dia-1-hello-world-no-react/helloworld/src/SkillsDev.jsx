import React from "react";
import "./SkillDev.css";

class SkillDev extends React.Component {
  render() {
    return (
    <section>
<h1>Minhas Skills</h1>
<div className='badges'>
    <img alt='react' src='https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB'/>
    <img src='https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white' alt="html5" />
    <img src='https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white' alt='css'/>
    <img alt='js' src='https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black'/>
    <img alt='python' src='https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white'/>
    <img alt='node' src='https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white'/>
    <img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" alt="gitHub" />
</div>
    </section>
    );
  }
}
export default SkillDev;
