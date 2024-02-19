let data = {

    name: "Helena",
    lastName: "Saborit",
    profilePic: "https://res.cloudinary.com/ddzhdj4yd/image/upload/v1666880132/movie-project/q5237cx5cxdvhegu7mgo.jpg",
    role: "Full Stack Web Developer",
    myDescription: "Lifelong learner changing paths from Tourism and Hospitality to Web Development",
    aboutMe: "I'm a Full Stack Web Developer with knowledge in Java and JavaScipt, but leaning towards JavaScript. I'm interested in both Backend and Frontend so feel free to reach me for any of those fields or for the Full Stack position!",
    socialLinks: [
        {
            name:"email",
            url:"mailto:helena.sb91@gmail.com",
            icon: "https://res.cloudinary.com/ddzhdj4yd/image/upload/v1674475359/pngwing.com_11_tsq0hp.png",
            className: 'email-icon'

        },
        {
            name:"linkedin",
            url:"https://www.linkedin.com/in/helena-saborit/",
            icon: "https://res.cloudinary.com/ddzhdj4yd/image/upload/v1674475274/linkdn_ks1wcg.png",
            className: 'linkedin-icon'
        },       
        {
            name:"github",
            url:"https://github.com/Helsinky91",
            icon: "https://res.cloudinary.com/ddzhdj4yd/image/upload/v1674475565/github4_py6uz4.png",
            className: 'github-icon'

        },
        {
            name: "cv",
            url:"https://drive.google.com/file/d/1rv6EEtt9e85CTD9RKQa8-PMTgccaQEOI/view?usp=drive_link ",
            icon: "https://res.cloudinary.com/ddzhdj4yd/image/upload/v1674475463/file_al922k.png",
            className: 'cv-icon'

          } 
    ],
    studies: [
        {
            school: "Ironhack",
            major: "Full Stak with Java",
            finishedAt: "currently studing",
            // description: "9 weeks intensive web development bootcamp where we learned Front End Technologies that include:",
            achivements: "9 weeks intensive web development bootcamp where we learned Java, SQL, TypeScript, Angular & API.",
            certificate: "https://www.credential.net/c43bbe42-0093-43cf-8637-deaf934b01f1#gs.4ph3x6"
        },
        {
            school: "Ironhack",
            major: "Full Stak Web Developer",
            finishedAt: "Nov 2022",
            // description: "9 weeks intensive web development bootcamp where we learned Front End Technologies that include:",
            achivements: "9 weeks intensive web development bootcamp where we learned Front End Technologies that include: HTML, CSS, JavaScript (ES6), React; helped by Bootstrap and Ant Design; and Back End Technologies that include: Express.js, Node.js, Axios, REST APIs, Postman, MongoDB",
            certificate: "https://www.credential.net/6683d67b-345c-437b-aeee-f034b49d2efa#gs.nga9wc"
        },
        // {
        //     school: "CodeCademy",
        //     major: "JavaScript: Fundamentals Course", 
        //     finishedAt: "Jan 2023",
        //     achivements: "Refreshment on JavaScript basics", 
        //     certificate: "https://www.codecademy.com/profiles/Helsinky91/certificates/6494a05213df47028c37a0fe6e70a202"
        // },
        {
            school: "UAB",
            major: "Tourismus Degree",
            finishedAt: "June 2013",
            achivements: "4 years degree with diverse courses, from Accounting, Econ and Marketing, to Tourist Guide, Geography and World Heritage",
            certificate: ""
        },
    ],
    /* certificates: [
        {
            school: "", 
            certifUrl: "" 
        },
        {
            school: "", 
            certifUrl: "" 
        },
        {
            school: "", 
            certifUrl: "" 
        },
    ], */ 
    jobs: [  
        { 
            companyName: "Freelance Job (MartAlex)", 
            jobTitle: "Freelance Wedding MERN WebApp",
            startDate: "Dec 2023",
            endDate: "Feb 2024",
            location: "Remote",
            jobDescription: "Creation of a personalized Full Stack Web for wedding planning.",
            jobTasks: [
                {
                   task: "WebApp developed with React.js, Nodel.js, MongoDB and Express.js, with some Bootstrap."
                },
                {
                    task: "Worked togethe with an UX/UI designer to ensure best looks & workability of the website." 
                },
                {
                    task: "See more details in my 'Projects' page." 
                },
            ]
        },
        { 
            companyName: "Accenture Spain", 
            jobTitle: "Junior Software Developer",
            startDate: "June 2023",
            endDate: "Current position",
            location: "Remote",
            jobDescription: "Full stack developer with the following tasks:",
            jobTasks: [
                {
                   task: "Provide application and technical support as required."
                },
                {
                    task: "Keep up with the new skills and internal trainings provided by the company." 
                },
                
            ]
        },
        
        { 
            companyName: "Travelclick S.L.", 
            jobTitle: "GMS Premier Agent",
            startDate: "Feb 2018",
            endDate: "Jul 2020",
            location: "Barcelona, Spain",
            jobDescription: "Premier agent for the GMS program (Guest Management Solutions) for two international clients. ",
            jobTasks: [
                {
                   task: "Use of CRM " 
                },
                {
                    task: "Creation and management of Databases" 
                },
                {
                    task: "Extend knowledge of GDPR law" 
                },
                {
                    task: "Daily use of Google Analytics, Salesforce and Taxiforemails" 
                },
                {
                    task: "Use of HTML5 and CSS" 
                },
                {
                    task: "Setted up the standars on case resolutions per day." 
                },
                {
                    task: "Trained new incorporations to the Customer Service team." 
                },
                 
            ]
        },
    ],
    tourismJobs: [
        { 
            companyName: "Casa Pop Berga", 
            jobTitle: "Founder & Manager of a touristic apartment",
            startDate: "Aug 2020",
            endDate: "May 2022",
            location: "Berga, Catalonia, Spain",
            jobDescription: "After a full renovation of bathrooms and kitchen, I've rented the apartment for tourist.",
            jobTasks: [
                {
                   task: "Compare and adjust prices, manage Bookings and Revenues" 
                },
                {
                    task: "Ensuring the best Guest Experience, with self-check in and out, and a 24h online help if needed." 
                },
                {
                    task: "Coordination with external Housekeeping agency." 
                }
            ]
        },
        {
            companyName: "Smart Rooms Company",
            jobTitle: "Tourist Apartments Customer Service Agent",
            startDate: "May 2017",
            endDate: "Feb 2018",
            location: "Barcelona, Spain",
            jobDescription: "Multitasking front desk agent",
            jobTasks: [
                {
                   task: "Welcoming guests on their booked apartments." 
                },
                {
                    task: "Managing reservations as well as payments and invoices." 
                },
                {
                    task: "Creation of Front Desk protocols." 
                },
                {
                    task: "Coordination with Housekeeping and Maintenance department" 
                },
                {
                    task: "Co-responsable of Quality department." 
                },
                {
                    task: "Help on the opening of the new office and apartment building." 
                }
            ]
        },
        {
            companyName: "Hotel La Casa Del Sol",
            jobTitle: "Front Desk Agent at 4 Stars Hotel",
            startDate: "Dec 2016",
            endDate: "May 2017",
            location: "Barcelona, Spain",
            jobDescription: "Front desk agent in a upcoming opening Hotel:",
            jobTasks: [
                {
                   task: "Help in assembly, preparation and coordination with the rest of the team and departments. " 
                },
                {
                    task: "Welcoming guests, check in & out" 
                },
                {
                    task: "Creation of protocols and procedures." 
                },
                {
                    task: "Training new interns." 
                },
                {
                    task: "Sometimes helping at the restaurant." 
                },
            ]
        },
        {
            companyName: "Hotusa Group",
            jobTitle: "Booking Agent with German",
            startDate: "Jun 2015",
            endDate: "Aug 2015",
            location: "Barcelona, Spain",
            jobDescription: "Intermediary between Hotels and German-speaking Travel Agencies",
            jobTasks: [
                {
                   task: "Consultation, creation and confirmation of traveling groups. " 
                },
                {
                    task: "Select the best hotel, guide, transfer or any other services that the client may need." 
                },
                {
                    task: "Worked exclusively for two markets: German market and Europe market that wishes to go to Germany." 
                }
            ]
        },
        {
            companyName: "Iberostar Fuerteventura Palace",
            jobTitle: "Front Desk Receptionist with German",
            startDate: "May 2014",
            endDate: "Nov 2014",
            location: "Fuerteventura, Canary Island, Spain",
            jobDescription: "Front Desk Agent at a large Beach Hotel",
            jobTasks: [
                {
                   task: "Check in and out." 
                },
                {
                    task: "Ensuring the guest has the best stay." 
                },
                {
                    task: "Help with touristic information, transfers, etc." 
                }
            ]
        },
        {
            companyName: "Book Hotel, Eurostars",
            jobTitle: "Internship in Housekeeping, Restaurant and Kitchen",
            startDate: "Jun 2013",
            endDate: "Dec 2013",
            location: "Munich, Germany",
            jobDescription: "Internship in several Hotel departments",
            jobTasks: [
                {
                   task: "Housekeeping Supervisor: coordination with housekeepers and front desk department." 
                },
                {
                    task: "Bar and Restaurant: waitress at a La Carte Restaurant and the Hotel's Bar." 
                },
                {
                    task: "Kitchen Manager: planning and cooking on the breakfast shift, coordinate with Restaurant department." 
                }
            ]
        },
        {
            companyName: "Hotel Campus",
            jobTitle: "Waitress",
            startDate: "Oct 2009",
            endDate: "Abril 2012",
            location: "Bellaterra, Catalonia, Spain",
            jobDescription: "Waitress at Weddings, Christenings and other events",
            jobTasks: [
                {
                   task: "Assemble the tables and decorations together with the Events Department" 
                },
                {
                    task: "Serve and assist guests" 
                }
            ]
        },
        {
            companyName: "Barrtra Restaurant",
            jobTitle: "Help at the kitchen, housekeeping and garden.",
            startDate: "Aug 2010",
            endDate: "Aug 2010",
            location: "Lahinch, Ireland",
            jobDescription: "One month exchange to learn English",
            jobTasks: [
                {
                   task: "4h a day of help with anything they needed in exchange of accomodation and meals, with WWOOFer program" 
                }
            ]
        },  
        
    ],
    hardSkills: [
        {
            skillName: "JavaScript"
        },
        {
            skillName: "HTML"
        },
        {
            skillName: "CSS"
        },
        {
            skillName: "MERN"
        },
        {
            skillName: "React.js"
        },
        {
            skillName: "MongoDB"
        },
        {
            skillName: "Node.js"
        },
        {
            skillName: "Express.js"
        },
        {
            skillName: "API"
        },
        {
            skillName: "Rest API"
        },
        {
            skillName: "Git"
        },
        {
            skillName: "GitHub"
        },
        {
            skillName: "HandleBars"
        },
        {
            skillName: "Bootstrap"
        },
        {
            skillName: "VSCode"
        },
     
    ],
    softSkills: [
        {
            skillName: "CRM"
        },
        {
            skillName: "GDPR"
        },
        {
            skillName: "TeamWork"
        },
        {
            skillName: "Leadership"
        },
        {
            skillName: "Driven"
        },
        {
            skillName: "Communication"
        },
        {
            skillName: "Empathic"
        },
        {
            skillName: "Love new challenges"
        }
    ],
    // learningSkills: [
    //     {
    //         skillName: ""
    //     },
    // ],
    languages: [
        {
            languageName: "Catalan",
            level: "Native or Bilingual Proficency",
            arrow: "https://res.cloudinary.com/ddzhdj4yd/image/upload/v1674644379/pngwing.com_15_cpwyb0.png"
        },
        {
            languageName: "Spanish",
            level: "Native or Bilingual Proficency",
            arrow: "https://res.cloudinary.com/ddzhdj4yd/image/upload/v1674644379/pngwing.com_15_cpwyb0.png"
        },
        {
            languageName: "English",
            level: "Full Professional Proficency",
            arrow: "https://res.cloudinary.com/ddzhdj4yd/image/upload/v1674644379/pngwing.com_15_cpwyb0.png"
        },
        {
            languageName: "German",
            level: "Limited Working Proficency",
            arrow: "https://res.cloudinary.com/ddzhdj4yd/image/upload/v1674644379/pngwing.com_15_cpwyb0.png"
        },
        {
            languageName: "French",
            level: "Limited Working Proficency",
            arrow: "https://res.cloudinary.com/ddzhdj4yd/image/upload/v1674644379/pngwing.com_15_cpwyb0.png"
        },
        {
            languageName: "Italian",
            level: "Elementary Proficiency",
            arrow: "https://res.cloudinary.com/ddzhdj4yd/image/upload/v1674644379/pngwing.com_15_cpwyb0.png"
        },
    ],
    projects: [
        {
            name: "MartAlex Wedding Web",
            description: "The client wanted a website where the wedding guests would be able to choose a Cosplay to wear during the wedding and track the attendance of the guests.",
            techUsed: "Developed with React.js, Node.js, Express.js and MongoDB Atlas, and styled with CSS and Bootstrap.",
            imgurl: "https://res.cloudinary.com/ddzhdj4yd/image/upload/v1708355998/thumbnail_MartAlex_Web_aegb96.jpg",
            url: "https://whatcha-cookin.netlify.app/",
            gitHubUrl: "https://github.com/Helsinky91/martalex-lista-client"
        },
        {
            name: "Whatcha cookin? - Project 3 at @Ironhack",
            description: "For the final project at Ironhack, we created a WebApp that is a social network to share recipes, add friends and like and comment on those recepies.",
            techUsed: "Developed with HTML, CSS with Bootstrap, Javascript using React.js, Node.js, Express.js and MongoDB Atlas.",
            imgurl: "https://res.cloudinary.com/ddzhdj4yd/image/upload/v1674637650/thumbnail_Whatcha_cookin_wcyv8a.jpg",
            url: "https://whatcha-cookin.netlify.app/",
            gitHubUrl: "https://github.com/Helsinky91/whatcha-cookin-app-server"
        },
        {
            name: "Worklog App - project 2 at @Ironhack",
            description: "We developed an app that would log all worker's time in and out, as well as being able to see all company events and add them to favourites.",
            techUsed: "Developed with HTML and Handlebars, CSS with Bootstrap, Javascript, Express.js, Node.js and MongoDB Atlas.",
            imgurl: "https://res.cloudinary.com/ddzhdj4yd/image/upload/v1674637650/thumbnail_Worklog_app_yztoz0.jpg",
            url: "https://worklog.cyclic.app/",
            gitHubUrl: "https://github.com/Helsinky91/worklog-app"
        },
        {
            name: "Snake 2022 - project 1 at @Ironhack",
            description: "For the first project at @Ironhack I've recreated the 90's Snake game. It is a bit raw and there is a lot of room of improvement, but this is the first project ever and I'm proud the way it turned out.",
            techUsed: "Developed in a week only using Canvas, HTML, CSS and Javascript.",
            imgurl: "https://res.cloudinary.com/ddzhdj4yd/image/upload/v1674637653/thumbnail_Snake22_yktl8g.png",
            url: "https://helsinky91.github.io/snake-2022/",
            gitHubUrl: "https://github.com/Helsinky91/snake-2022"
        },
    ],
    onWorkingProjects: [
        {
            name: "Jordi's Personal Portfolio",
            description: "A customized React.js webApp to display the client's work.",
            // imgurl: "https://res.cloudinary.com/ddzhdj4yd/image/upload/v1674638005/pexels-negative-space-169573_l5pcut.jpg",
            imgurl: "https://res.cloudinary.com/ddzhdj4yd/image/upload/v1708355998/thumbnail_Jordi_s_portfolio_nkf8oq.jpg",
            url: "",
            gitHubUrl: ""
        },
        // {
        //     name: "Tami's Personal Portfolio",
        //     description: "A customized React.js webApp to display the client's work.",
        //     imgurl: "https://res.cloudinary.com/ddzhdj4yd/image/upload/v1674638005/pexels-negative-space-169573_l5pcut.jpg",
        //     url: "",
        //     gitHubUrl: ""
        // }
    ],
    // hobbies: [
    //     {
    //         name: "" 
    //     },

    // ]


}

export default data;