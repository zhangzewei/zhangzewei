const fs = require('fs-extra');
const path = require('path');

// 读取配置文件
async function loadConfig() {
    try {
        const configPath = path.join(__dirname, 'profile-config.json');
        const config = await fs.readJson(configPath);
        return config;
    } catch (error) {
        console.error('Error loading config:', error);
        process.exit(1);
    }
}

// 生成技能徽章
function generateSkillBadges(skills) {
    const badgeConfig = {
        // Programming Languages
        'JavaScript': { color: 'F7DF1E', logo: 'javascript', logoColor: 'black' },
        'TypeScript': { color: '007ACC', logo: 'typescript', logoColor: 'white' },
        'Python': { color: '3776AB', logo: 'python', logoColor: 'white' },
        'Java': { color: 'ED8B00', logo: 'java', logoColor: 'white' },
        'Go': { color: '00ADD8', logo: 'go', logoColor: 'white' },
        'C++': { color: '00599C', logo: 'c%2B%2B', logoColor: 'white' },
        'C#': { color: '239120', logo: 'c-sharp', logoColor: 'white' },
        'PHP': { color: '777BB4', logo: 'php', logoColor: 'white' },
        'Ruby': { color: 'CC342D', logo: 'ruby', logoColor: 'white' },
        'Swift': { color: 'FA7343', logo: 'swift', logoColor: 'white' },
        'Kotlin': { color: '0095D5', logo: 'kotlin', logoColor: 'white' },

        // Frontend
        'React': { color: '20232A', logo: 'react', logoColor: '61DAFB' },
        'Vue.js': { color: '35495E', logo: 'vue.js', logoColor: '4FC08D' },
        'Angular': { color: 'DD0031', logo: 'angular', logoColor: 'white' },
        'Next.js': { color: '000000', logo: 'next.js', logoColor: 'white' },
        'Nuxt.js': { color: '00C58E', logo: 'nuxt.js', logoColor: 'white' },
        'HTML5': { color: 'E34F26', logo: 'html5', logoColor: 'white' },
        'CSS3': { color: '1572B6', logo: 'css3', logoColor: 'white' },
        'Sass': { color: 'CC6699', logo: 'sass', logoColor: 'white' },
        'Tailwind CSS': { color: '38B2AC', logo: 'tailwind-css', logoColor: 'white' },
        'Bootstrap': { color: '563D7C', logo: 'bootstrap', logoColor: 'white' },
        'Material-UI': { color: '0081CB', logo: 'material-ui', logoColor: 'white' },

        // Backend
        'Node.js': { color: '43853D', logo: 'node.js', logoColor: 'white' },
        'Express.js': { color: '404D59', logo: 'express', logoColor: 'white' },
        'Django': { color: '092E20', logo: 'django', logoColor: 'white' },
        'Flask': { color: '000000', logo: 'flask', logoColor: 'white' },
        'FastAPI': { color: '005571', logo: 'fastapi', logoColor: 'white' },
        'Spring': { color: '6DB33F', logo: 'spring', logoColor: 'white' },
        'Laravel': { color: 'FF2D20', logo: 'laravel', logoColor: 'white' },
        'Ruby on Rails': { color: 'CC0000', logo: 'ruby-on-rails', logoColor: 'white' },

        // Databases
        'PostgreSQL': { color: '316192', logo: 'postgresql', logoColor: 'white' },
        'MySQL': { color: '00000F', logo: 'mysql', logoColor: 'white' },
        'MongoDB': { color: '4EA94B', logo: 'mongodb', logoColor: 'white' },
        'Redis': { color: 'DD0031', logo: 'redis', logoColor: 'white' },
        'SQLite': { color: '07405E', logo: 'sqlite', logoColor: 'white' },
        'Oracle': { color: 'F80000', logo: 'oracle', logoColor: 'white' },
        'Elasticsearch': { color: '005571', logo: 'elasticsearch', logoColor: 'white' },

        // Cloud & DevOps
        'AWS': { color: '232F3E', logo: 'amazon-aws', logoColor: 'white' },
        'Google Cloud': { color: '4285F4', logo: 'google-cloud', logoColor: 'white' },
        'Azure': { color: '0078d4', logo: 'microsoft-azure', logoColor: 'white' },
        'Docker': { color: '2496ED', logo: 'docker', logoColor: 'white' },
        'Kubernetes': { color: '326ce5', logo: 'kubernetes', logoColor: 'white' },
        'Jenkins': { color: 'D24939', logo: 'Jenkins', logoColor: 'white' },
        'GitLab CI': { color: 'FC6D26', logo: 'gitlab', logoColor: 'white' },
        'GitHub Actions': { color: '2088FF', logo: 'github-actions', logoColor: 'white' },
        'Terraform': { color: '623CE4', logo: 'terraform', logoColor: 'white' },

        // Tools
        'Git': { color: 'F05032', logo: 'git', logoColor: 'white' },
        'VS Code': { color: '0078D4', logo: 'visual%20studio%20code', logoColor: 'white' },
        'IntelliJ IDEA': { color: '000000', logo: 'intellij-idea', logoColor: 'white' },
        'Postman': { color: 'FF6C37', logo: 'Postman', logoColor: 'white' },
        'Figma': { color: 'F24E1E', logo: 'figma', logoColor: 'white' },
        'Adobe XD': { color: 'FF26BE', logo: 'adobe%20xd', logoColor: 'white' },
        'Jira': { color: '0052CC', logo: 'jira', logoColor: 'white' },
        'Notion': { color: '000000', logo: 'notion', logoColor: 'white' },

        // Web3 & Blockchain
        'Ethereum': { color: '3C3C3D', logo: 'ethereum', logoColor: 'white' },
        'Solidity': { color: '363636', logo: 'solidity', logoColor: 'white' },
        'Hardhat': { color: 'FFF04D', logo: 'hardhat', logoColor: 'black' },
        'web3.js': { color: 'F16822', logo: 'web3.js', logoColor: 'white' },
        'ethers.js': { color: '2535A0', logo: 'ethers', logoColor: 'white' },
        'Stellar': { color: '7D00FF', logo: 'stellar', logoColor: 'white' },
        'Wagmi': { color: '000000', logo: 'wagmi', logoColor: 'white' },
        'Viem': { color: '000000', logo: 'viem', logoColor: 'white' },
        'Dynamic': { color: '6366F1', logo: 'dynamic', logoColor: 'white' },
        'MetaMask': { color: 'F6851B', logo: 'metamask', logoColor: 'white' },
        'WebAuthn': { color: '0052CC', logo: 'webauthn', logoColor: 'white' },
        'Taro': { color: '13C2C2', logo: 'taro', logoColor: 'white' },
        'Chrome Extension': { color: '4285F4', logo: 'google-chrome', logoColor: 'white' },
        'CouchDB': { color: 'E42528', logo: 'apache-couchdb', logoColor: 'white' },
        'NestJS': { color: 'E0234E', logo: 'nestjs', logoColor: 'white' }
    };

    function createBadge(skill) {
        const config = badgeConfig[skill] || { color: '000000', logo: skill.toLowerCase().replace(/\s+/g, '-'), logoColor: 'white' };
        return `![${skill}](https://img.shields.io/badge/${encodeURIComponent(skill)}-${config.color}?style=for-the-badge&logo=${config.logo}&logoColor=${config.logoColor})`;
    }

    let badges = '';

    if (skills.programmingLanguages) {
        badges += '### Programming Languages\n';
        badges += skills.programmingLanguages.map(createBadge).join('\n') + '\n\n';
    }

    if (skills.frontend) {
        badges += '### Frontend Development\n';
        badges += skills.frontend.map(createBadge).join('\n') + '\n\n';
    }

    if (skills.backend) {
        badges += '### Backend Development\n';
        badges += skills.backend.map(createBadge).join('\n') + '\n\n';
    }

    if (skills.databases) {
        badges += '### Databases\n';
        badges += skills.databases.map(createBadge).join('\n') + '\n\n';
    }

    if (skills.cloudDevOps) {
        badges += '### Cloud & DevOps\n';
        badges += skills.cloudDevOps.map(createBadge).join('\n') + '\n\n';
    }

    if (skills.web3) {
        badges += '### Web3 & Blockchain\n';
        badges += skills.web3.map(createBadge).join('\n') + '\n\n';
    }

    if (skills.tools) {
        badges += '### Tools & Platforms\n';
        badges += skills.tools.map(createBadge).join('\n') + '\n\n';
    }

    return badges;
}

// 生成项目部分
function generateProjects(projects) {
    return projects.map((project, index) => {
        const emoji = ['📱', '🛒', '🤖', '🌐', '⚡', '🎯', '🚀', '💡'][index] || '🔥';

        let projectMd = `### ${emoji} [${project.name}](${project.url})\n`;
        projectMd += `> **${project.description}**\n`;

        if (project.technologies && project.technologies.length > 0) {
            projectMd += `- 🚀 Built with ${project.technologies.join(', ')}\n`;
        }

        if (project.features && project.features.length > 0) {
            project.features.forEach(feature => {
                projectMd += `- 🎨 ${feature}\n`;
            });
        }

        return projectMd;
    }).join('\n');
}

// 生成完整的 README
async function generateReadme(config) {
    const { personalInfo, aboutMe, skills, currentFocus, projects, workExperience = [], education = [] } = config;

    // Build social links block conditionally
    const socialLinks = [];
    if (personalInfo.linkedinUrl) {
        socialLinks.push(`[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](${personalInfo.linkedinUrl})`);
    }
    if (personalInfo.twitterUrl) {
        socialLinks.push(`[![Twitter](https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](${personalInfo.twitterUrl})`);
    }
    if (personalInfo.email) {
        socialLinks.push(`[![Email](https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:${personalInfo.email})`);
    }
    if (personalInfo.portfolioUrl) {
        socialLinks.push(`[![Portfolio](https://img.shields.io/badge/Portfolio-FF5722?style=for-the-badge&logo=todoist&logoColor=white)](${personalInfo.portfolioUrl})`);
    }
    if (personalInfo.blogUrl) {
        socialLinks.push(`[![Blog](https://img.shields.io/badge/Blog-FFA500?style=for-the-badge&logo=rss&logoColor=white)](${personalInfo.blogUrl})`);
    }
    const socialLinksBlock = `<div align="center">\n  \n${socialLinks.join('\n')}\n\n</div>`;

    const bannerRelPath = 'assets/banner.svg';
    const bannerMd = `![${personalInfo.name} — ${personalInfo.title}](${bannerRelPath})`;

    const readme = `${bannerMd}

## 🚀 About Me

I'm a passionate **${personalInfo.title}** with **${personalInfo.experience}** of experience in building scalable web applications, Web3 DApps, and innovative blockchain solutions. Based in **${personalInfo.location}**, I specialize in bridging traditional web development with cutting-edge blockchain technology.

### 💼 Professional Background
- 🏢 Currently working at **${personalInfo.company}** as a **${personalInfo.title}**
- 🌐 Rich experience in front-end development, SEO improvement, responsive layout and front-end architecture design
- ⛓️ Proficient in Web3 front-end development, including DApp development, wallet integration, and smart contract interactions
- 📜 Experienced in Solidity development for EVM-compatible smart contracts
- 🐧 Strong background in Node.js scripting for blockchain state monitoring and trading strategies

- 🔭 I'm currently working on **${aboutMe.currentWork}**
- 🌱 I'm currently learning **${aboutMe.currentLearning}**
- 👯 I'm looking to collaborate on **${aboutMe.lookingToCollaborate}**
- 💬 Ask me about **${aboutMe.askMeAbout}**
- 📫 How to reach me: **${personalInfo.email}**
- ⚡ Fun fact: **${aboutMe.funFact}**

## 🛠️ Tech Stack

${generateSkillBadges(skills)}

## 📊 GitHub Stats

<div align="center">
  <img src="https://github-readme-stats.vercel.app/api?username=${personalInfo.githubUsername}&show_icons=true&theme=radical&hide_border=true&count_private=true" alt="GitHub Stats" height="165"/>
  <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=${personalInfo.githubUsername}&layout=compact&theme=radical&hide_border=true" alt="Top Languages" height="165"/>
</div>

<div align="center">
  <img src="https://github-readme-streak-stats.herokuapp.com/?user=${personalInfo.githubUsername}&theme=radical&hide_border=true" alt="GitHub Streak" />
</div>

## 🏆 GitHub Trophies

<div align="center">
  <img src="https://github-profile-trophy.vercel.app/?username=${personalInfo.githubUsername}&theme=radical&no-frame=true&no-bg=false&margin-w=4" alt="GitHub Trophies"/>
</div>

## 📈 Activity Graph

<div align="center">
  <img src="https://github-readme-activity-graph.vercel.app/graph?username=${personalInfo.githubUsername}&theme=react-dark&hide_border=true" alt="Activity Graph"/>
</div>

## 🎯 Current Focus

\`\`\`javascript
const ${personalInfo.githubUsername} = {
    currentFocus: ${JSON.stringify(currentFocus.areas)},
    technologies: ${JSON.stringify(currentFocus.technologies, null, 8)},
    architecture: ${JSON.stringify(currentFocus.architecture)},
    currentlyLearning: ${JSON.stringify(currentFocus.currentlyLearning)},
    goals2024: ${JSON.stringify(currentFocus.goals2024)}
};
\`\`\`

## 🌟 Featured Projects

${generateProjects(projects)}

## 🧑‍💻 Work Experience

${workExperience.map(exp => {
        const period = `${exp.startDate} - ${exp.endDate}`;
        const header = `### ${exp.company} — ${exp.role} (${period})`;
        const location = exp.location ? `- 📍 ${exp.location}\n` : '';
        const projects = exp.projects && exp.projects.length ? `- 🔗 Key Projects: ${exp.projects.join(', ')}\n` : '';
        const highlights = exp.highlights && exp.highlights.length ? exp.highlights.map(h => `- • ${h}`).join('\n') + '\n' : '';
        return `${header}\n${location}${projects}${highlights}`;
    }).join('\n')}

## 🎓 Education

${education.map(ed => {
        const period = `${ed.startDate} - ${ed.endDate}`;
        const header = `### ${ed.school} — ${ed.degree} (${period})`;
        const details = ed.details && ed.details.length ? ed.details.map(d => `- • ${d}`).join('\n') + '\n' : '';
        return `${header}\n${details}`;
    }).join('\n')}

## 📊 This Week I Spent My Time On

<!--START_SECTION:waka-->
\`\`\`text
TypeScript   8 hrs 32 mins   ████████████░░░░░░░░░░░░░   48.2%
React        4 hrs 15 mins   ████████░░░░░░░░░░░░░░░░░   24.1%
Python       2 hrs 18 mins   ████░░░░░░░░░░░░░░░░░░░░░   13.0%
CSS          1 hr 25 mins    ████░░░░░░░░░░░░░░░░░░░░░   8.1%
Other        1 hr 10 mins    ██░░░░░░░░░░░░░░░░░░░░░░░   6.6%
\`\`\`
<!--END_SECTION:waka-->

## 🤝 Let's Connect

${socialLinksBlock}

---

<div align="center">
  <img src="https://komarev.com/ghpvc/?username=${personalInfo.githubUsername}&label=Profile%20views&color=0e75b6&style=flat" alt="Profile Views" />
  
  ### Thanks for visiting! 😊
  
  ![Wave](https://raw.githubusercontent.com/mayhemantt/mayhemantt/Update/svg/Bottom.svg)
</div>`;

    return readme;
}

// 主函数
async function main() {
    try {
        console.log('🚀 Generating GitHub Profile README...');

        const config = await loadConfig();
        const readme = await generateReadme(config);

        const outputPath = path.join(__dirname, 'README.md');
        await fs.writeFile(outputPath, readme, 'utf8');

        console.log('✅ README.md has been generated successfully!');
        console.log(`📄 File location: ${outputPath}`);
        console.log('\n🔧 To customize your README:');
        console.log('1. Edit profile-config.json with your information');
        console.log('2. Run: node generate-readme.js');
        console.log('3. Copy the generated README.md to your GitHub profile repository');

    } catch (error) {
        console.error('❌ Error generating README:', error);
        process.exit(1);
    }
}

// 如果直接运行这个脚本
if (require.main === module) {
    main();
}

module.exports = { generateReadme, loadConfig };
