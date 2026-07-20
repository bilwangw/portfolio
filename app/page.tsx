const experiences = [
  {
    role: "EDG Software Engineering Intern — Modeling Framework Team",
    company: "MathWorks",
    date: "May 2026 – Aug 2026",
    bullets: [
      "Building a lightweight C++ runtime infrastructure for embedded Simulink Real-Time applications that replaces native reflection with custom code generation, improving efficiency and reducing memory overhead.",
    ],
  },
  {
    role: "Machine Learning Robotics Software Intern",
    company: "Shanghai Spider Robot Co., LTD",
    date: "Dec 2025 – Jan 2026",
    bullets: [
      "Integrated the HIL-SERL reinforcement learning algorithm onto an X-ARM manipulator using Python and Gymnasium to perform manufacturing tasks with a 90% success rate.",
      "Built debugging and teleoperation tools including realtime camera streaming, Spacemouse control, and Gymnasium environment tests.",
      "Improved portability through Docker-based containerization and maintained detailed documentation.",
    ],
  },
  {
    role: "Undergraduate Researcher",
    company: "Johns Hopkins University — The Barman Laboratory",
    date: "Jun 2025 – Present",
    bullets: [
      "Implemented autonomous UAV swarm missions and simulations with Python, C++, ArduPilot, and Webots for multi-drone coordination, computer vision, and reinforcement learning landing strategies.",
      "Designed and prototyped drone hardware components in Fusion 360 and Blender, then used 3D printing and custom PCBs to enable specialized functionality.",
    ],
  },
  {
    role: "Full Stack Software Engineer Intern",
    company: "World Salon",
    date: "Jun 2025 – Sep 2025",
    bullets: [
      "Built an automated content pipeline with TypeScript, Node.js, Canva API, and OpenAI API to turn raw data into promotional assets, reducing manual processing time by 60%.",
      "Improved scalability and reliability across Express.js, AWS, and PostgreSQL infrastructure.",
    ],
  },
  {
    role: "Software Engineer Intern",
    company: "Eth Tech",
    date: "Jun 2024 – Dec 2024",
    bullets: [
      "Developed scalable Python backend services for an online fishing game using Django and REST APIs, increasing user session length by 43%.",
      "Managed game data with MyBatis and MySQL while deploying AI-driven microservices with Docker, Kubernetes, Spring Security, and AWS EC2.",
    ],
  },
];

const projects = [
  {
    title: "Car Sharing Website",
    description:
      "Developed a ride-sharing platform with user accounts, trip creation, route planning, and embedded Google Maps support, with data persisted in MySQL.",
    stack: ["JavaScript", "PHP", "MySQL", "AJAX", "JSON"],
  },
  {
    title: "AI Resume Checker",
    description:
      "Built an AI-driven resume analysis tool that extracts keywords, compares them against job descriptions, and suggests improvements with NLP and visualization workflows.",
    stack: ["Python", "spaCy", "KeyBERT", "Pandas", "Seaborn"],
  },
];

const skillGroups = [
  {
    title: "Programming Languages",
    items: ["MATLAB", "Python", "C++", "C", "C#", "Java", "Kotlin", "Rust", "R", "Go", "x86 Assembly", "TypeScript"],
  },
  {
    title: "Full Stack & Cloud",
    items: ["CSS", "HTML", "JavaScript", "React", "Node.js", "Django", "REST", "Ruby", "Git", "Linux", "Android Studio", "AWS", "Azure", "Docker", "Postman", "MySQL", "PostgreSQL", "MongoDB", "Kubernetes", "Canva API"],
  },
  {
    title: "AI / Robotics",
    items: ["TensorFlow", "NumPy", "PyTorch", "Scikit-learn", "Keras", "Pandas", "OpenCV", "OpenAI API", "DeepSeek API", "spaCy", "Seaborn", "KeyBERT", "ROS", "Unity", "ArduPilot", "Webots", "Arduino", "Raspberry Pi", "IsaacSim"],
  },
  {
    title: "Engineering & CAD",
    items: ["Inventor", "SolidWorks", "Fusion 360", "Creo", "EasyEDA", "Blender", "Ansys"],
  },
];

const certifications = ["DeepLearning.ai Machine Learning Specialization — Oct 2025", "Train to Work at a YC Startup (Java Fullstack) — Nov 2025"];

export default function Home() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(99,102,241,0.18),_transparent_35%),linear-gradient(135deg,_#f8fafc_0%,_#eef2ff_100%)] text-zinc-900">
      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6 sm:px-8 lg:px-12">
        <a href="#home" className="rounded-lg border border-zinc-300 bg-white/70 px-4 py-2 text-sm font-semibold tracking-[0.2em] text-zinc-700 backdrop-blur">
          BILL W.
        </a>
        <nav className="hidden items-center gap-6 text-sm font-medium text-zinc-600 md:flex">
          <a href="#experience" className="transition hover:text-zinc-950">
            Experience
          </a>
          <a href="#projects" className="transition hover:text-zinc-950">
            Projects
          </a>
          <a href="#contact" className="transition hover:text-zinc-950">
            Contact
          </a>
        </nav>
      </header>

      <main id="home" className="mx-auto flex max-w-6xl flex-col gap-10 px-6 pb-20 sm:px-8 lg:px-12">
        <section className="grid items-center gap-8 rounded-xl border border-white/70 bg-white/80 p-8 shadow-[0_30px_80px_-35px_rgba(15,23,42,0.32)] backdrop-blur md:grid-cols-[1.1fr_0.9fr] md:p-12 lg:p-16">
          <div className="space-y-6">
            <div className="space-y-4">
              <h1 className="max-w-2xl text-4xl font-semibold tracking-tight text-zinc-950 sm:text-5xl lg:text-6xl">
                Bill Wang
              </h1>
              <span className="inline-flex rounded-full border border-violet-200 bg-violet-50 px-3 py-1 text-sm font-medium text-violet-700">
                Computer Science, Mechanical Engineering, Robotics @ Johns Hopkins
              </span>
              <p className="max-w-xl text-lg leading-8 text-zinc-600">
                I do things
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3 rounded-full border border-zinc-200 bg-zinc-50 px-3 py-2 text-sm text-zinc-700 shadow-sm">
              <span className="font-medium text-zinc-600">Get in touch:</span>
              <div className="flex items-center gap-2">
                <a
                  href="https://www.linkedin.com/in/bill-wang-6681ba231/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-zinc-300 bg-white transition hover:border-zinc-400 hover:bg-zinc-100"
                  aria-label="Visit LinkedIn"
                >
                  <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
                    <path d="M6.94 8.5A1.56 1.56 0 1 0 6.94 5.38a1.56 1.56 0 0 0 0 3.12ZM5.5 9.75h2.88V18H5.5zM10.3 9.75h2.76v1.12h.04c.38-.72 1.32-1.48 2.72-1.48 2.91 0 3.45 1.92 3.45 4.4V18H16.3v-7.5h-2.76v1.02h-.04c-.4-.76-1.33-1.56-2.74-1.56-2.63 0-3.46 1.73-3.46 4.09z" />
                  </svg>
                </a>
                <a
                  href="mailto:billandoel123@gmail.com"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-zinc-300 bg-white transition hover:border-zinc-400 hover:bg-zinc-100"
                  aria-label="Send email"
                >
                  <svg viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current stroke-2" aria-hidden="true">
                    <path d="M4 6h16v12H4z" />
                    <path d="m4 7 8 6 8-6" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="rounded-lg border border-zinc-200 bg-zinc-950 p-6 text-white shadow-2xl">
            <p className="text-sm font-medium text-zinc-400">Highlights</p>
            <div className="mt-6 space-y-4">
              <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-zinc-200">
                Researching autonomous UAV swarms and robotics systems
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-zinc-200">
                Shipping backend infrastructure and AI-enabled products
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-zinc-200">
                Building with Python, C++, TypeScript, and modern cloud tooling
              </div>
            </div>
          </div>
        </section>

        <section className="grid gap-8 rounded-xl border border-zinc-200 bg-white/80 p-8 shadow-sm md:grid-cols-[0.9fr_1.1fr] md:p-10">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-violet-700">Education</p>
            <h2 className="mt-3 text-3xl font-semibold text-zinc-950">Johns Hopkins University</h2>
            <p className="mt-3 text-lg font-medium text-zinc-700">Class of 2027</p>
            <ul className="mt-3 space-y-2 text-zinc-600">
              <li>BS Computer Science</li>
              <li>BS Mechanical Engineering</li>
              <li>Minor in Robotics</li>
            </ul>
            <p className="mt-2 text-sm font-semibold text-zinc-700">GPA: 3.72/4.0 • Dean&apos;s List</p>
          </div>
          <div className="rounded-lg border border-zinc-200 bg-zinc-50 p-6">
            <h3 className="text-lg font-semibold text-zinc-950">Certifications</h3>
            <ul className="mt-4 space-y-3 text-sm leading-7 text-zinc-700">
              {certifications.map((item) => (
                <li key={item} className="rounded-xl bg-white px-3 py-2">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="experience" className="rounded-xl border border-zinc-200 bg-white/80 p-8 shadow-sm md:p-10">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-violet-700">Experience</p>
          </div>
          <div className="mt-8 space-y-6 border-l border-zinc-200 pl-6 md:pl-8">
            {experiences.map((experience, index) => (
              <article key={experience.role} className="relative">
                <span className="absolute left-[-0.6rem] top-1/2 h-3.5 w-3.5 -translate-y-1/2 rounded-full border-2 border-violet-600 bg-white md:left-[-2.45rem]" />
                <div className="rounded-lg border border-zinc-200 bg-zinc-50 p-6">
                  <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-violet-700">
                        {index === 0 ? "Current" : ""}
                      </p>
                      <h3 className="mt-2 text-lg font-semibold text-zinc-950">{experience.role}</h3>
                      <p className="mt-1 text-sm font-medium text-zinc-700">{experience.company}</p>
                    </div>
                    <p className="text-sm font-medium text-zinc-500">{experience.date}</p>
                  </div>
                  <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-zinc-600">
                    {experience.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className="space-y-6 rounded-xl border border-zinc-200 bg-white/80 p-8 shadow-sm md:p-10">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-violet-700">Personal Projects</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((project) => (
              <article key={project.title} className="rounded-lg border border-zinc-200 bg-zinc-50 p-6">
                <h3 className="text-xl font-semibold text-zinc-950">{project.title}</h3>
                <p className="mt-4 text-sm leading-7 text-zinc-600">{project.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span key={item} className="rounded-full border border-zinc-200 bg-white px-3 py-1 text-sm text-zinc-700">
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-xl border border-zinc-200 bg-zinc-950 p-8 text-white shadow-[0_30px_80px_-35px_rgba(15,23,42,0.8)] md:p-10">
          <div className="grid gap-8 md:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-zinc-400">Skills</p>
              <h2 className="mt-2 text-3xl font-semibold">Interdisciplinary skillset spanning computer science, mechanical engineering, robotics, and AI</h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {skillGroups.map((group) => (
                <div key={group.title} className="rounded-lg border border-white/10 bg-white/5 p-4">
                  <h3 className="text-sm font-semibold uppercase tracking-[0.25em] text-zinc-300">{group.title}</h3>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span key={item} className="rounded-full bg-white/10 px-3 py-1 text-sm text-zinc-200">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="rounded-xl border border-zinc-200 bg-white/80 p-8 shadow-sm md:p-10">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-violet-700">Contact</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a href="mailto:billandoel123@gmail.com" className="inline-flex items-center justify-center rounded-full bg-zinc-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-zinc-800">
                Email me
              </a>
              <a href="https://linkedin.com" className="inline-flex items-center justify-center rounded-full border border-zinc-300 bg-white px-5 py-3 text-sm font-semibold text-zinc-700 transition hover:border-zinc-400 hover:bg-zinc-50">
                LinkedIn
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
