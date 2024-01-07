/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Sejal's Portfolio",
  description:
    "I am a self-driven individual who thrives on contributing to the world of IT. ",
  og: {
    title: "Sejal Maniyar Portfolio",
    type: "website",
    url: "http://ashutoshhathidara.com/",
  },
};


//Home Page
const greeting = {
  title: "Sejal Maniyar",
  logo_name: "SejalManiyar",
  // nickname: "layman_brother",
  subTitle:
    "I am a self-driven individual who thrives on contributing to the world of IT. As a passionate data engineer, I excel in tackling diverse projects and crafting end-to-end solutions.",
  resumeLink:
    "https://drive.google.com/file/d/1slokAd1adJn_-6WGxDr5tPRwupuYb8hx/view?usp=sharing",
  // portfolio_repository: "https://github.com/ashutosh1919/masterPortfolio",
  githubProfile: "https://github.com/sejal1011",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/ashutosh1919",
  // linkedin: "https://www.linkedin.com/in/ashutosh-hathidara-88710b138/",
  // gmail: "ashutoshhathidara98@gmail.com",
  // gitlab: "https://gitlab.com/ashutoshhathidara98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/sejal-maniyar/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Github",
    link: "https://github.com/sejal1011",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  // {
  //   name: "YouTube",
  //   link: "https://youtube.com/c/DevSense19",
  //   fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
  //   backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  // },
  {
    name: "Gmail",
    link: "mailto:sejalmaniyar9@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  // {
  //   name: "X-Twitter",
  //   link: "https://twitter.com/ashutosh_1919",
  //   fontAwesomeIcon: "fa-x-twitter", // Reference https://fontawesome.com/icons/x-twitter?f=brands&s=solid
  //   backgroundColor: "#000000", // Reference https://simpleicons.org/?q=x
  // },
  // {
  //   name: "Facebook",
  //   link: "https://www.facebook.com/laymanbrother.19/",
  //   fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
  //   backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  // },
  // {
  //   name: "Instagram",
  //   link: "https://www.instagram.com/layman_brother/",
  //   fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
  //   backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  // },
];

const skills = {
  data: [
    {
      title: " Database Management",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Proficient in writing SQL queries and experienced with database software like Oracle, MySQL, and PostgreSQL.",
        "⚡ Skilled in using ETL tools for efficient data processing and adept at creating robust data models.",
        "⚡ Competent in utilizing Excel for complex data analysis, visualization tasks and developing VBA macros.",
      ],
      softwareSkills: [
        {
          skillName: "Excel",
          fontAwesomeClassname: "vscode-icons:file-type-excel",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "logos:mysql",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "devicon:postgresql-wordmark",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "SQL",
          fontAwesomeClassname: "tabler:file-type-sql",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
      ],
    },
    {
      title: "Data Analytics",
      fileName: "FullStackImg",
      skills: [
        "⚡ I've successfully executed projects using Kaggle datasets and API data, showcasing my skills in data acquisition and manipulation.",
        "⚡ Skilled in Data Cleaning, Preparation, and Machine Learning-based Analysis, I excel at turning complex data into actionable insights.",
        "⚡ Proficient in predictive modeling and data visualization, I effectively use Tableau and Power BI to communicate data-driven stories.",
      ],
      softwareSkills: [
        {
          skillName: "scikitlearn",
          fontAwesomeClassname: "devicon:scikitlearn",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "PowerBI",
          fontAwesomeClassname: "simple-icons:powerbi",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "Numpy",
          fontAwesomeClassname: "vscode-icons:file-type-numpy",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "logos:python",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ML",
          fontAwesomeClassname: "gravity-ui:abbr-ml",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "API",
          fontAwesomeClassname: "eos-icons:api",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "Pandas",
          fontAwesomeClassname: "devicon:pandas-wordmark",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "Matplotlib",
          fontAwesomeClassname: "devicon:matplotlib",
          style: {
            color: "#61DAFB",
          },
        },
      ],
    },
    {
      title: "Cloud Engineering",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ I worked effectively with AWS and Azure platforms, gaining hands-on experience in their diverse functionalities and services.",
        "⚡ I managed and provisioned infrastructure through code using Terraform and engaged with containerization and orchestration processes.",
        "⚡ I utilized version control tools such as Git for source code management and employed monitoring tools like Grafana, Loki, and Promtail in projects. ",      
      ],
      softwareSkills: [
        {
          skillName: "Terraform",
          fontAwesomeClassname: "vscode-icons:file-type-terraform",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "devicon:git",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "Jenkins",
          fontAwesomeClassname: "devicon:jenkins",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "Bash",
          fontAwesomeClassname: "devicon:bash",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
          },
        },
      ],
    },
    // {
    //   title: "UI/UX Design",
    //   fileName: "DesignImg",
    //   skills: [
    //     "⚡ Designing highly attractive user interface for mobile and web applications",
    //     "⚡ Customizing logo designs and building logos from scratch",
    //     "⚡ Creating the flow of application functionalities to optimize user experience",
    //   ],
    //   softwareSkills: [
    //     {
    //       skillName: "Adobe XD",
    //       fontAwesomeClassname: "simple-icons:adobexd",
    //       style: {
    //         color: "#FF2BC2",
    //       },
    //     },
    //     {
    //       skillName: "Figma",
    //       fontAwesomeClassname: "simple-icons:figma",
    //       style: {
    //         color: "#F24E1E",
    //       },
    //     },
    //     {
    //       skillName: "Adobe Illustrator",
    //       fontAwesomeClassname: "simple-icons:adobeillustrator",
    //       style: {
    //         color: "#FF7C00",
    //       },
    //     },
    //     {
    //       skillName: "Inkscape",
    //       fontAwesomeClassname: "simple-icons:inkscape",
    //       style: {
    //         color: "#000000",
    //       },
    //     },
    //   ],
    // },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/layman_brother/",
    },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/layman_brother",
    },
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      profileLink: "https://www.codechef.com/users/ashutosh_1919",
    },
    {
      siteName: "Codeforces",
      iconifyClassname: "simple-icons:codeforces",
      style: {
        color: "#1F8ACB",
      },
      profileLink: "http://codeforces.com/profile/layman_brother",
    },
    {
      siteName: "Hackerearth",
      iconifyClassname: "simple-icons:hackerearth",
      style: {
        color: "#323754",
      },
      profileLink: "https://www.hackerearth.com/@ashutosh391",
    },
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://www.kaggle.com/laymanbrother",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Constructor University",
      subtitle: "MSc in Data Engineering",
      logo_path: "co.png",
      alt_name: "Jacobs University Bremen",
      duration: "08/2022 - 05/2024",
      descriptions: [
        "⚡ I have been honored with a Full Tuition Scholarship for my Masters in Data Engineering at Jacobs University, a recognition that attests to my commitment to academic excellence.",
        "⚡ The curriculum for my program encompasses a diverse range of subjects including Machine Learning, Data Analytics, the Big Data Challenge, IT Law, Data Mining, and Data Security and Privacy.",
        "⚡ I have complemented my academic pursuits with 'Werkstudent' opportunities, blending practical data engineering experience into my education.",
      ],
      website_link: "https://constructor.university/",
    },
    {
      title: "Vellore Institute of Technology",
      subtitle: "B.Tech in Electrical and Electronics Engineering",
      logo_path: "iu_logo.png",
      alt_name: "VIT",
      duration: "07/2018 - 05/2022",
      descriptions: [
        "⚡ Throughout my curriculum, I was able to maintain an average score of above 9 CGPA and am in the top 10% of students in the Department.",
        "⚡ I had courses of C++, Java, Neural Networks and Fuzzy Control, Statistics for Engineers, and Artificial Intelligence.",
        "⚡ I was elected Vice President of the VITMAS (VIT Mathematical Association) chapter of VIT, managing over 100 members.",
      ],
      website_link: "https://vit.ac.in/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "DevOps Engineer Expert",
      subtitle: "Microsoft Certified",
      logo_path: "stanford_logo.png",
      certificate_link:
        "https://learn.microsoft.com/en-gb/users/sejalmaniyar-3654/credentials/d91788251fded86f",
      alt_name: "Microsoft",
      color_code: "#8C151599",
    },
    {
      title: "Azure Administrator Associate",
      subtitle: "Microsoft Certified",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://learn.microsoft.com/en-us/users/sejalmaniyar-3654/credentials/4e39e318ff9b91f7",
      alt_name: "Microsoft",
      color_code: "#00000099",
    },
    {
      title: "Azure Data Engineer Associate",
      subtitle: "Microsoft Certified",
      logo_path: "microsoft_logo.png",
      certificate_link:
        "https://learn.microsoft.com/en-us/users/sejalmaniyar-3654/credentials/666ef8a2bd24275",
      alt_name: "Microsoft",
      color_code: "#D83B0199",
    },
    {
      title: "Azure Fundamentals",
      subtitle: "Microsoft Certified",
      logo_path: "image.png",
      certificate_link:
        "https://learn.microsoft.com/en-us/users/sejalmaniyar-3654/credentials/2b6e3a725367388f",
      alt_name: "Microsoft",
      color_code: "#0C9D5899",
    },
    {
      title: "Google Data Analytics Specialization",
      subtitle: "Google Certified",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/PLEAPCSJBZT5",
      alt_name: "Google",
      color_code: "#1F70C199",
    },
    {
      title: "Business Analytics for Decision Making",
      subtitle: "University of Colorado Boulder",
      logo_path: "coursera_logo.png",
      certificate_link:
        "https://coursera.org/share/f3b7560d199fdd899f1e7f9b8194bdc7",
      alt_name: "University of Colorado Boulder",
      color_code: "#1F70C199",
    },
    {
      title: "Predictive Modeling and Analytics",
      subtitle: "University of Colorado Boulder",
      logo_path: "coursera_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/5JZZM7TNQ2AV",
      alt_name: "University of Colorado Boulder",
      color_code: "#0C9D5899",
    },
    {
      title: "Data Analytics for Business",
      subtitle: "University of Colorado Boulder",
      logo_path: "coursera_logo.png",
      certificate_link:
        "https://coursera.org/share/6d8ce13dc6a811bf2370747490b0f574",
      alt_name: "University of Colorado Boulder",
      color_code: "#00000099",
    },
    {
      title: "Machine Learning",
      subtitle: "Duke University",
      logo_path: "coursera_logo.png",
      certificate_link:
        "https://coursera.org/share/0c8277316827ea23e0defa54d22e6eb6",
      alt_name: "Duke University",
      color_code: "#2A73CC",
    },
    // {
    //   title: "Kuberenetes on GCP",
    //   subtitle: "- Qwiklabs",
    //   logo_path: "gcp_logo.png",
    //   certificate_link:
    //     "https://google.qwiklabs.com/public_profiles/e4d5a92b-faf6-4679-a70b-a9047c0cd750",
    //   alt_name: "GCP",
    //   color_code: "#4285F499",
    // },
    // {
    //   title: "Cryptography",
    //   subtitle: "- Saurabh Mukhopadhyay",
    //   logo_path: "nptel_logo.png",
    //   certificate_link:
    //     "https://drive.google.com/open?id=1z5ExD_QJVdU0slLkp8CBqSF3-C3g-ro_",
    //   alt_name: "NPTEL",
    //   color_code: "#FFBB0099",
    // },
    // {
    //   title: "Cloud Architecture",
    //   subtitle: "- Qwiklabs",
    //   logo_path: "gcp_logo.png",
    //   certificate_link:
    //     "https://google.qwiklabs.com/public_profiles/5fab4b2d-be6f-408c-8dcb-6d3b58ecb4a2",
    //   alt_name: "GCP",
    //   color_code: "#4285F499",
    // },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work Experience and Volunteership",
  description:
    "I have gained valuable knowledge and experience through my work with companies, enhancing my learning and personal growth. Additionally, I have completed internships, engaged in non-governmental organization activities, and participated in several clubs and chapters at my university have significantly enriched my extracurricular profile.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Werkstudent DevOps Engineer",
          company: "Aaron.ai",
          company_url: "https://www.aaron.ai/",
          logo_path: "legato_logo.png",
          duration: "Dec 2023 - Present",
          location: "Berlin, Germany",
          description:
            "I am working on automating healthcare products. The projects involve automation for process improvements and for significantly enhancing the profits. I am currently working on Cancer Survival and Reoccurence Prediction. Our goal is to make AI system which scales and removes doctor dependency as much as possible.",
          color: "#0879bf",
        },
        {
          title: "Werkstudent Data Engineer",
          company: "Robert Bosch GmbH",
          company_url: "https://www.bosch.de/",
          logo_path: "muffito_logo.png",
          duration: "Jan 2023 - Dec 2023",
          location: "Stuttgart, Germany",
          "description": [
            "I developed a multi-million-row database using Oracle SQL Developer and performed data ingestion through VBA, generating real-time Power BI reports for analysis. In weekly global database team meetings, I shared region-specific insights and helped replicate databases across regions for streamlined processes. Additionally, I collaborated with a global team to centralize data on Microsoft Azure, enhancing the creation of insightful PowerBI reports."
          ],
          "color": "#9b1578"
        },
        {
          "title": "Intern Information Technology",
          "company": "Shree Ganesh Enterprises Pune",
          "company_url": "https://www.linkedin.com/company/shree-ganesh-enterprises-pune/about/",
          "logo_path": "freecopy_logo.jpg",
          "duration": "Jun 2021 - May 2022",
          "location": "Pune, India",
          "description": [
            "I utilized Python, Docker, SQL, Git, and shell scripting for IT project support and process streamlining. I contributed to AWS projects for cloud infrastructure optimization and managed client inquiries with innovative solutions. My role also involved collaborating in cross-functional teams for efficient technical issue resolution"
          ],
          "color": "#fc1f20"
        }
      ],
    },
    // {
    //   title: "Internships",
    //   experiences: [
    //     {
    //       title: "Machine Learning Intern",
    //       company: "TikTok Inc.",
    //       company_url: "https://www.tiktok.com/en/",
    //       logo_path: "tiktok_logo.png",
    //       duration: "May 2022 - Aug 2022",
    //       location: "San Francisco, USA",
    //       description:
    //         "Building new features on the backend recommendation system, specifically ranking algorithms for Ads that touch hundreds of millions of people around the world. Improving online and offline content ranking algorithms by performing hard sample data replays for training steps.",
    //       color: "#000000",
    //     },
    //     {
    //       title: "Data Science Research Intern",
    //       company: "Delhivery Pvt. Ltd.",
    //       company_url: "https://www.delhivery.com/",
    //       logo_path: "delhivery_logo.png",
    //       duration: "May 2019 - Sept 2019",
    //       location: "Gurgaon, Haryana",
    //       description:
    //         "I have worked on project of predicting freight rates based on previous data. There were two objectives: (1) To build a forecasting engine to predict daily freight rates. (2) To embed feature in the model which can explain the seasonal major changes in freight rate based on regions and locations. I have closely worked with deep learning models in combination with statistical methods to create solution for this. At the end of internship, I had created model deployed on AWS EC2 with the use of Kafka stream jobs, ElasticSearch and PostgreSQL.",
    //       color: "#ee3c26",
    //     },
    //     {
    //       title: "Data Science Intern",
    //       company: "Intel Indexer LLC",
    //       company_url:
    //         "https://opencorporates.com/companies/us_dc/EXTUID_4170286",
    //       logo_path: "intel_logo.jpg",
    //       duration: "Nov 2018 - Dec 2018",
    //       location: "Work From Home",
    //       description:
    //         "This is financial Solution Company. I have made Supervised Learning model for the company which can perform time series analysis on Stock price data for 32 companies. I have built LSTM Neural Networks Model and trained the data of 32 companies for last 2 years. This model is also used for forecasting.",
    //       color: "#0071C5",
    //     },
    //   ],
    // },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Public Relations",
          company: "Rotary International",
          company_url: "https://www.linkedin.com/company/rotary-international/",
          logo_path: "rotary.png",
          duration: "Apr 2021 - Jul 2021",
          location: "Sangamner, India",
          description:
            "I have had the enriching experience of working as a Public Relations volunteer, a role in which I deeply enjoyed interacting and engaging with diverse individuals. My responsibilities included clearly explaining eye treatment procedures to patients, ensuring they felt informed and at ease. Additionally, I actively collaborated with internal teams, fostering a cooperative and dynamic work environment.",
          color: "#4285F4",
        },
        {
          title: "Vice Chairperson",
          company: "VITMAS",
          company_url: "https://www.linkedin.com/company/vit-mathematical-association-student-chapter/",
          logo_path: "VITMAS.png",
          duration: "Jan 2021 - Dec 2021",
          location: "Vellore, India",
          description:
            "I was elected Vice President of the VITMAS (VIT Mathematical Association) chapter, managing over 100 members. In order to help juniors achieve their technical goals and seek mentorship, I organised technical events, webinars, and hackathons.I outlined a roadmap to teach members data analytics and guided them through learning. I used my analytical skills to reduce the chapter's financial expenditure to 80%.",
          color: "#D83B01",
        },
        // {
        //   title: "Mozilla Campus Captain",
        //   company: "Mozilla",
        //   company_url: "https://www.mozilla.org/",
        //   logo_path: "mozilla_logo.png",
        //   duration: "Oct 2019 - May 2020",
        //   location: "Kurnool, Andhra Pradesh",
        //   description:
        //     "My responsibility for this program was to create opensource environment in college and in the city. We have organised multiple hackathons on the problems collected by ordinary people from Kurnool city. We have build opensource community of our own college. The community is available at dsc_iiitdmk on github.",
        //   color: "#000000",
        // },
        // {
        //   title: "Developer Students Club Member",
        //   company: "DSC IIITDM Kurnool",
        //   company_url:
        //     "https://www.linkedin.com/company/developer-students-club-iiitdm-kurnool",
        //   logo_path: "dsc_logo.png",
        //   duration: "Jan 2018 - May 2020",
        //   location: "Kurnool, Andhra Pradesh",
        //   description:
        //     "We have well established developer club in college which is directly associated with Google Developers. We have developed many interdisciplinary projects under the membership of this club. We have organised workshops and activities on Android Application Development, Flutter and React JS.",
        //   color: "#0C9D58",
        // },
        // {
        //   title: "Developer Program Member",
        //   company: "Github",
        //   company_url: "https://github.com/",
        //   logo_path: "github_logo.png",
        //   duration: "July 2019 - PRESENT",
        //   location: "Work From Home",
        //   description:
//             "I am actively contributing to many opensource projects. I have contributed to projects of organisations like Tensorflow, Uber, Facebook, Google, Scikit-learn, Kiwix, Sympy, Python, NVLabs, Fossasia, Netrack, Keras etc. These contributions include bug fixes, feature requests and formulating proper documentation for project.",
//           color: "#181717",
//         },
      ],
     },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "I have worked on various projects in the fields of data analytics, data engineering, and DevOps, harnessing a diverse range of the latest technology tools. My expertise lies primarily in managing and analyzing data to drive effective solutions in these domains.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description:
    "I have worked on and published a few research papers and publications of my own.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzQ=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzi=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNze=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzt=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzb=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "sejal.png",
    description:
      "Please feel free to connect with me on LinkedIn or contact me directly via email.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I author technical blogs on Medium, focusing on hands-on technology projects with the aim of contributing to the tech community.",
    link: "https://medium.com/@sejalmaniyar9",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle:
      "Fahrenheitstraße 19-25, 28359 Bremen, Germany",
    locality: "Uni Bremen",
    country: "DE",
    region: "Bremen",
    postalCode: "28359",
    streetAddress: "Fahrenheitstraße 19-25",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.app.goo.gl/djM24oy4SksksoFq8",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
