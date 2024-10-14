document.addEventListener('DOMContentLoaded', function () {
    // Event listener for search button
    document.getElementById('submit').addEventListener('click', function () {
        const selectedCategory = document.getElementById('search').value;
        if (selectedCategory) {
            displayJobs(selectedCategory); // Call a function to display jobs
        }
    });
});

// Sample data for demonstration
const jobData = [
        {
            "Category": "Front-End Development",
            "Job Title": "Front-End Developer",
            "Description": "Specializes in UI, aesthetics, and layout of web applications.",
            "Technologies": "HTML, CSS, JavaScript, React, Angular, Vue.js",
            "Documentation": "MDN Web Docs, W3Schools"
        },
        {
            "Category": "Front-End Development",
            "Job Title": "Markup Developer",
            "Description": "Works on simple interfaces using HTML, CSS, and basic JavaScript.",
            "Technologies": "HTML, CSS, Bootstrap",
            "Documentation": "MDN Web Docs"
        },
        {
            "Category": "Front-End Development",
            "Job Title": "Frontend App Developer",
            "Description": "Creates complex frontend interfaces using technologies like ReactJS.",
            "Technologies": "JavaScript, REST APIs, ReactJS, Vue.js",
            "Documentation": "React Documentation"
        },
        {
            "Category": "Front-End Development",
            "Job Title": "UI/UX Designer",
            "Description": "Focuses on enhancing user experience and interface design.",
            "Technologies": "Prototyping Tools",
            "Documentation": "Nielsen Norman Group, UX Design Guidelines"
        },
        {
            "Category": "Front-End Development",
            "Job Title": "HTML Email Developer",
            "Description": "Designs and develops responsive email templates.",
            "Technologies": "HTML, CSS, MJML",
            "Documentation": "Campaign Monitor"
        },
        {
            "Category": "Back-End Development",
            "Job Title": "Backend (Server-Side) Developer",
            "Description": "Responsible for server, application, and database management.",
            "Technologies": "Servers, Databases, Java, Python, C#, Node.js, .NET",
            "Documentation": "RESTful API Documentation"
        },
        {
            "Category": "Back-End Development",
            "Job Title": "Middle-Tier Developer",
            "Description": "Writes non-UI code that runs in the browser and interacts with server-side code.",
            "Technologies": "Middleware, Java, Python, Spring, Express.js",
            "Documentation": "Middleware Documentation"
        },
        {
            "Category": "Back-End Development",
            "Job Title": "API Developer",
            "Description": "Specializes in creating and managing APIs for applications.",
            "Technologies": "RESTful services, Java, Python, Ruby, Django, Flask",
            "Documentation": "API Blueprint"
        },
        {
            "Category": "Back-End Development",
            "Job Title": "Database Administrator",
            "Description": "Manages and maintains database performance and security.",
            "Technologies": "DBMS, SQL, PL/SQL",
            "Documentation": "Oracle Database Documentation"
        },
        {
            "Category": "Back-End Development",
            "Job Title": "Cloud Services Developer",
            "Description": "Integrates and manages backend services on cloud platforms.",
            "Technologies": "AWS, Azure, Google Cloud, Python, Java",
            "Documentation": "AWS Documentation"
        },
        {
            "Category": "Full-Stack Development",
            "Job Title": "Full-Stack Developer",
            "Description": "Handles both front-end and back-end work for applications.",
            "Technologies": "Web Technologies, JavaScript, Python, Java, MERN, MEAN",
            "Documentation": "MERN Stack Documentation"
        },
        {
            "Category": "Full-Stack Development",
            "Job Title": "MERN Stack Developer",
            "Description": "Specializes in MongoDB, Express.js, React, and Node.js technologies.",
            "Technologies": "Web Technologies, JavaScript, MERN Stack",
            "Documentation": "MERN Documentation"
        },
        {
            "Category": "Full-Stack Development",
            "Job Title": "MEAN Stack Developer",
            "Description": "Works with MongoDB, Express.js, Angular, and Node.js.",
            "Technologies": "Web Technologies, JavaScript, MEAN Stack",
            "Documentation": "MEAN Documentation"
        },
        {
            "Category": "Mobile Development",
            "Job Title": "Mobile Developer",
            "Description": "Develops applications for iOS, Android, or Windows.",
            "Technologies": "Mobile SDKs, Java, Swift, Kotlin, React Native, Flutter",
            "Documentation": "Android Developer Documentation"
        },
        {
            "Category": "Mobile Development",
            "Job Title": "iOS Developer",
            "Description": "Specializes in developing applications for Apple devices.",
            "Technologies": "iOS SDK, Swift, Objective-C",
            "Documentation": "Apple Developer Documentation"
        },
        {
            "Category": "Mobile Development",
            "Job Title": "Android Developer",
            "Description": "Focuses on developing applications for Android devices.",
            "Technologies": "Android SDK, Java, Kotlin, Jetpack Compose",
            "Documentation": "Android Developer Documentation"
        },
        {
            "Category": "Mobile Development",
            "Job Title": "Cross-Platform Developer",
            "Description": "Creates applications that run on multiple platforms using frameworks like React Native.",
            "Technologies": "Cross-Platform SDKs, JavaScript, Dart, React Native, Xamarin",
            "Documentation": "React Native Documentation"
        },
        {
            "Category": "Desktop Development",
            "Job Title": "Desktop Developer",
            "Description": "Develops software applications for desktop operating systems.",
            "Technologies": "GUI Toolkits, C#, Java, WPF, Electron",
            "Documentation": "Microsoft Docs"
        },
        {
            "Category": "Desktop Development",
            "Job Title": "Windows Application Developer",
            "Description": "Focuses on creating applications specifically for Windows OS.",
            "Technologies": "Windows APIs, C#, C++",
            "Documentation": "Microsoft Developer Network"
        },
        {
            "Category": "Desktop Development",
            "Job Title": "Mac OS Developer",
            "Description": "Specializes in developing applications for Mac OS.",
            "Technologies": "Mac APIs, Swift, Objective-C",
            "Documentation": "Apple Developer Documentation"
        },
        {
            "Category": "Embedded Development",
            "Job Title": "Embedded Developer",
            "Description": "Works on software for hardware devices like microcontrollers and IoT devices.",
            "Technologies": "Embedded Systems, C, C++, FreeRTOS, Embedded Linux",
            "Documentation": "Embedded Systems Documentation"
        },
        {
            "Category": "Embedded Development",
            "Job Title": "Firmware Developer",
            "Description": "Writes low-level software that controls hardware devices.",
            "Technologies": "Firmware Development, C, Assembly",
            "Documentation": "Firmware Documentation"
        },
        {
            "Category": "Embedded Development",
            "Job Title": "IoT Developer",
            "Description": "Focuses on creating applications for Internet of Things devices.",
            "Technologies": "IoT Platforms, C, Python, Arduino, Raspberry Pi",
            "Documentation": "IoT Documentation"
        },
        {
            "Category": "Database Development",
            "Job Title": "Database Developer",
            "Description": "Responsible for creating and implementing databases.",
            "Technologies": "DBMS, SQL, PL/SQL",
            "Documentation": "Database Documentation"
        },
        {
            "Category": "Database Development",
            "Job Title": "Database Architect",
            "Description": "Designs database structures and architecture for optimal performance.",
            "Technologies": "Database Design, SQL, NoSQL",
            "Documentation": "Data Architecture Documentation"
        },
        {
            "Category": "Database Development",
            "Job Title": "Data Analyst",
            "Description": "Analyzes data and generates insights for decision-making.",
            "Technologies": "Data Analysis Tools, SQL, Python",
            "Documentation": "Data Analysis Documentation"
        },
        {
            "Category": "Cloud Development",
            "Job Title": "Cloud Developer",
            "Description": "Manages cloud-based systems and architecture.",
            "Technologies": "Cloud Services, Python, Java",
            "Documentation": "AWS Documentation"
        },
        {
            "Category": "Cloud Development",
            "Job Title": "Cloud Solutions Architect",
            "Description": "Designs cloud solutions and architectures for businesses.",
            "Technologies": "Cloud Architecture, Java, Python, AWS CloudFormation",
            "Documentation": "Cloud Architecture Documentation"
        },
        {
            "Category": "Cloud Development",
            "Job Title": "Cloud Security Engineer",
            "Description": "Focuses on ensuring the security of cloud environments.",
            "Technologies": "Cloud Security Tools, Python, Go",
            "Documentation": "Cloud Security Documentation"
        },
        {
            "Category": "Security Development",
            "Job Title": "Security Developer",
            "Description": "Creates systems for testing software security and fixing vulnerabilities.",
            "Technologies": "Security Testing Tools, C, Python, Ruby",
            "Documentation": "OWASP Guidelines"
        },
        {
            "Category": "Security Development",
            "Job Title": "Ethical Hacker",
            "Description": "Conducts penetration testing to find vulnerabilities in systems.",
            "Technologies": "Penetration Testing Tools, Python, Java",
            "Documentation": "Ethical Hacking Documentation"
        },
        {
            "Category": "Security Development",
            "Job Title": "Application Security Engineer",
            "Description": "Focuses on securing applications during the development lifecycle.",
            "Technologies": "Application Security Tools, C, C++",
            "Documentation": "Secure Coding Guidelines"
        },
        {
            "Category": "Testing and QA",
            "Job Title": "Software Development Engineer in Test (SDET)",
            "Description": "Writes software for verifying quality and creating automated tests.",
            "Technologies": "Testing Frameworks, Java, Python, Selenium, JUnit",
            "Documentation": "Testing Documentation"
        },
        {
            "Category": "Testing and QA",
            "Job Title": "QA Tester",
            "Description": "Tests applications to ensure they meet quality standards.",
            "Technologies": "Testing Tools, N/A",
            "Documentation": "QA Documentation"
        },
        {
            "Category": "Testing and QA",
            "Job Title": "Performance Tester",
            "Description": "Focuses on testing application performance under various conditions.",
            "Technologies": "Performance Testing Tools, Java, Python, JMeter, LoadRunner",
            "Documentation": "Performance Testing Documentation"
        },
        {
            "Category": "DevOps Development",
            "Job Title": "DevOps Developer",
            "Description": "Builds and integrates systems while managing backend software.",
            "Technologies": "DevOps Tools, Python, Bash, Kubernetes, Docker",
            "Documentation": "DevOps Documentation"
        },
        {
            "Category": "DevOps Development",
            "Job Title": "Site Reliability Engineer (SRE)",
            "Description": "Ensures the reliability and uptime of services.",
            "Technologies": "Monitoring Tools, Python, Go",
            "Documentation": "SRE Documentation"
        },
        {
            "Category": "DevOps Development",
            "Job Title": "Release Manager",
            "Description": "Manages the release process of software applications.",
            "Technologies": "Release Management Tools, N/A",
            "Documentation": "Release Management Documentation"
        },
        {
            "Category": "Data Science and Big Data Development",
            "Job Title": "Data Science Developer",
            "Description": "Analyzes data sets and performs machine learning and predictive modeling.",
            "Technologies": "Data Science Libraries, Python, R, TensorFlow, Scikit-learn",
            "Documentation": "Data Science Documentation"
        },
        {
            "Category": "Data Science and Big Data Development",
            "Job Title": "Big Data Developer",
            "Description": "Handles large data sets using frameworks like Hadoop and Spark.",
            "Technologies": "Big Data Technologies, Java, Python, Hadoop, Spark",
            "Documentation": "Big Data Documentation"
        },
        {
            "Category": "Data Science and Big Data Development",
            "Job Title": "Data Engineer",
            "Description": "Designs and builds data pipelines and architectures for processing large data sets.",
            "Technologies": "ETL Tools, Python, SQL, Apache Kafka, Airflow",
            "Documentation": "Data Engineering Documentation"
        },
        {
            "Category": "Game Development",
            "Job Title": "Game Developer",
            "Description": "Designs and creates interactive games.",
            "Technologies": "Game Engines, C#, C++, Python, Unity, Unreal Engine",
            "Documentation": "Game Development Documentation"
        },
        {
            "Category": "Game Development",
            "Job Title": "VR Developer",
            "Description": "Specializes in developing virtual reality applications and games.",
            "Technologies": "VR Platforms, C#, C++, Java, Unity, Unreal Engine",
            "Documentation": "VR Development Documentation"
        },
        {
            "Category": "Game Development",
            "Job Title": "Game Designer",
            "Description": "Focuses on the conceptualization and design of gameplay mechanics.",
            "Technologies": "Game Design Tools, N/A",
            "Documentation": "Game Design Documentation"
        },
        {
            "Category": "Graphics Development",
            "Job Title": "Graphic Developer",
            "Description": "Works on rendering and scene management in games and videos.",
            "Technologies": "Graphics APIs, C++, Python, OpenGL, DirectX",
            "Documentation": "Graphics Programming Documentation"
        },
        {
            "Category": "Graphics Development",
            "Job Title": "3D Artist",
            "Description": "Creates 3D models and animations for games or movies.",
            "Technologies": "3D Modeling Software, N/A",
            "Documentation": "3D Modeling Documentation"
        },
        {
            "Category": "Graphics Development",
            "Job Title": "Visual Effects Artist",
            "Description": "Specializes in creating visual effects for films and games.",
            "Technologies": "Visual Effects Software, C++, Python, Nuke, After Effects",
            "Documentation": "VFX Documentation"
        },
        {
            "Category": "AI Engineering",
            "Job Title": "AI Engineer",
            "Description": "Develops AI-based solutions and applications.",
            "Technologies": "AI Frameworks, Python, R, TensorFlow, PyTorch",
            "Documentation": "AI Development Documentation"
        },
        {
            "Category": "AI Engineering",
            "Job Title": "Machine Learning Engineer",
            "Description": "Specializes in creating and optimizing machine learning models.",
            "Technologies": "Machine Learning Libraries, Python, R, TensorFlow, Scikit-learn",
            "Documentation": "Machine Learning Documentation"
        },
        {
            "Category": "AI Engineering",
            "Job Title": "Natural Language Processing Engineer",
            "Description": "Focuses on language-related AI applications.",
            "Technologies": "NLP Libraries, Python, Java, NLTK, spaCy",
            "Documentation": "NLP Documentation"
        }
    ];
 

    function displayJobs(category) {
        const resultsDiv = document.getElementById('results');
        resultsDiv.innerHTML = ''; // Clear previous results
    
        const filteredJobs = jobData.filter(job => job.Category === category);
    
        if (filteredJobs.length > 0) {
            filteredJobs.forEach(job => {
                const jobDiv = document.createElement('div');
                jobDiv.classList.add('job');
    
                const jobTitle = document.createElement('h4');
                jobTitle.textContent = job["Job Title"];
                jobDiv.appendChild(jobTitle);
    
                const jobDescription = document.createElement('p');
                jobDescription.classList.add('Description');
                jobDescription.textContent = `Description: ${job["Description"]}`;
                jobDiv.appendChild(jobDescription);
    
                const jobTechnologies = document.createElement('p');
                jobTechnologies.textContent = `Technologies: ${job["Technologies"]}`;
                jobDiv.appendChild(jobTechnologies);
    
                const jobDocumentation = document.createElement('p');
                jobDocumentation.textContent = `Documentation: ${job["Documentation"]}`;
                jobDiv.appendChild(jobDocumentation);
    
                resultsDiv.appendChild(jobDiv);
            });
        } else {
            resultsDiv.innerHTML = '<p>No jobs found for the selected category.</p>';
        }
    }
    

    jobs.forEach(job => {
        const jobElement = document.createElement('div');
        jobElement.classList.add('job'); // Add a class for styling
        jobElement.innerHTML = `
            <h4>${job["Job Title"]}</h4>
            <p><strong>Description:</strong> ${job.Description}</p>
            <p><strong>Technologies:</strong> ${job.Technologies}</p>
            <p><strong>Documentation:</strong> ${job.Documentation}</p>
        `;
        resultsDiv.appendChild(jobElement);
    });



