/**
 * School & online courses data.
 *
 * Each section holds an array of entries. Every entry can use these fields:
 *   - id:         unique identifier (kebab-case)
 *   - title:      School => institution name; Online course => course name
 *   - subtitle:   School => program / degree; Online course => platform (Coursera, Udemy, ...)
 *   - period:     when it took place (e.g. "Sep 2019 – Jun 2022")
 *   - summary:    one-line highlight shown in italic under the title
 *   - description: short paragraphs / bullet points
 *   - classes:    list of classes. Either a flat array of names, OR an array of
 *                 subsections: [ { label: "Semester 1", items: ["Class A", "Class B"] }, ... ].
 *                 Subsection groups are handy for semesters / sessions. Mainly for the School section.
 *   - tech:       list of topics, languages or tools covered
 *   - link:       optional external URL (certification, institution, course page)
 */
export default [
  {
    section: "School",
    entries: [
      {
        id: "master",
        title: "Master's Degree in Computer Science for Video Game Development",
        subtitle: "Université de Sherbrooke - Quebec, Canada",
        logo: "/images/logos/sherbrooke.png",
        period: "August 2025 - October 2026",
        summary: "Specialized graduate program in game programming delivered by industry professionals from leading video game companies",
        description: [
          "Focused on the game programming pipeline: advanced object-oriented programming in C++, game engines, computer graphics, math & physics for games and applied AI",
          "Hands-on production work including an integrative game project and a full game production process, from prototype to playable build",
          "Also covered distributed programming, digital media integration, gameplay design and the broader video game industry",
        ],
        classes: [
          {
            label: "Fall 2025",
            items: [
              "Advanced Object-Oriented Programming (C++)",
              "Mathematical and Physical Concepts Applied to Video Games",
              "Fundamentals of Computer Graphics in Video Games",
              "Artificial Intelligence Applied to Video Games",
              "Video Game Project Management",
              "Introduction to the Video Game Industry",
              "Video Game Production Process",
            ],
          },
          {
            label: "Winter 2026",
            items: [
              "Specialized Video Game Programming Concepts (C++)",
              "Integrative Video Game Project",
              "Digital Media Integration in Video Games",
              "Gameplay in Video Games",
              "Distributed Programming",
              "Video Game Technology Conference Series",
            ],
          },
        ],
        tech: [
          "C++",
          "Computer Graphics",
          "Game Engine",
          "Unreal Engine",
          "Game AI",
          "Maths & Physics",
          "Gameplay Programming",
          "Distributed Programming",
          "Multiplayer / Networking",
          "Performance Optimization",
          "Project Management",
          "Team Work",
        ],
      },
      {
        id: "engineering",
        title: "Engineering Degree in Computer Science (Master's equivalent)",
        subtitle: "Polytech Tours - France",
        logo: "/images/logos/polytech.jpg",
        period: "September 2023 - October 2026",
        summary: "Focused on building a broad foundation in software engineering, from C/C++ to databases, networks, web and distributed systems",
        description: [
          "Progressive curriculum from imperative C programming and operating systems up to object-oriented programming in C++/Java",
          "Practical projects in C/C++, web (front-end JS / back-end Java), databases, mobile development and a cross-disciplinary project",
          "Later semesters covered data science, AI, distributed systems, parallel computing and algorithms & complexity",
        ],
        classes: [
          {
            label: "Semester 1",
            items: [
              "Calculus & Algebra",
              "Algorithms & Data Structures",
              "Imperative Programming in C",
              "Operating Systems",
              "Parallel Programming",
              "Software Quality",
              "Graphical Interfaces",
              "Cross-Disciplinary Project",
            ],
          },
          {
            label: "Semester 2",
            items: [
              "Statistics & Probabilities",
              "Object-Oriented Programming (C++ & Java)",
              "Advanced Object-Oriented Design (Modern C++ & Design Patterns)",
              "Databases",
              "Networking",
            ],
          },
          {
            label: "Semester 3",
            items: [
              "Data Science & Analysis",
              "Project Management",
              "Software Quality & Testing",
              "Frontend Web Development (JS)",
              "Backend Web Development (Java)",
              "Operations Research & Optimization",
              "Mobile Development Project (JS & Java)",
            ],
          },
          {
            label: "Semester 4",
            items: [
              "Problem Complexity",
              "Graph Theory",
              "Linear Programming",
              "Distributed Systems",
              "Parallel Computing",
              "Responsible Digital Development & Rust",
              "Mobile Development Project (JS & Java)",
              "TOEIC Certification (English)",
            ],
          },
        ],
        tech: [
          "C / C++",
          "Java",
          "Object-Oriented Programming",
          "Design Patterns",
          "Maths",
          "Algorithms & Data Structures",
          "Databases & SQL",
          "Computer Networks",
          "Web Development (JS & Java)",
          "Data Science & AI",
          "Distributed Systems",
          "Parallel Computing",
          "Software Testing",
          "Project Management",
        ],
      },
      {
        id: "bts",
        title: "BTS in Computer Science & Networking (Two-year technical degree)",
        subtitle: "Lycée Grandmont - France",
        logo: "/images/logos/grandmont.jpg",
        period: "September 2021 - August 2023",
        summary: "Centered on computer networks, embedded systems and software programming",
        description: [
          "Hands-on programming across C, C++ and embedded systems, with object-oriented modeling and software quality",
          "Strong focus on networks, telecommunications, operating systems, real-time & mobile computing and system administration",
          "Included technical communication, project management, documentation and general education subjects",
        ],
        classes: [
          {
            label: "Programming",
            items: [
              "Algorithms & Data Structures",
              "Embedded Programming (C)",
              "Object-Oriented Programming (C++)",
              "Object-Oriented Modeling",
              "Network Programming",
              "Event-Driven Programming",
              "Mobile Programming Project",
              "Software Quality",
            ],
          },
          {
            label: "Networks & Operating Systems",
            items: [
              "Operating Systems",
              "Networks & Telecommunications",
              "Real-Time & Mobile Computing",
              "Transmission Modes & Protocols",
            ],
          },
          {
            label: "Communication & Management",
            items: [
              "Technical Communication",
              "Technical Presentation",
              "Contractual Documents",
              "Project Management",
              "Documentation",
            ],
          },
          {
            label: "General Subjects",
            items: [
              "Mathematics",
              "Physics",
              "English",
              "General Education",
            ],
          },
        ],
        tech: [
          "C / C++",
          "Embedded Programming",
          "Object-Oriented Programming",
          "Operating Systems",
          "Computer Networks & Protocols",
          "Real-Time & Embedded Systems",
          "Mobile Development",
          "UML",
          "Web Development",
          "SQL / Databases",
          "System Administration",
          "Cybersecurity Basics",
        ],
      },
    ],
  },
];