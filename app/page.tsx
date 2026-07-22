"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const contactBubbleId = "contact-bubble";

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
    role: "Undergraduate Researcher under Dr. Ishaan Barman",
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
    role: "Undergraduate Researcher under Dr. Chen Li",
    company: "Johns Hopkins University - Terradynamics Lab",
    date: "Jan 2024 – Jan 2025",
    bullets: [
      "Designed and performed data collection experiments and analysis for biomimetic robots",
      "Created a multicam high speed video setup to record animal movement from multiple directions to 3D track using MATLAB DLTdv8",
      "Developed batch video processes using MATLAB, Virtualdub, AviSynth and batch scripting"
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
  {
    role: "Undergraduate Researcher under Dr. Xiaorong Cai",
    company: "Shanghai Jiaotong University - Institute of Medical Robotics",
    date: "Jun 2024 - Aug 2024",
    bullets: [
      "Prototyped a shape memory alloy glove using CAD for stroke patient rehabilitation and flexible MRI RF receive coils using a network analyzer"
    ],
  },
  {
    role: "Undergraduate Researcher under Dr. Ruwen Qin",
    company: "Stony Brook University - Human-AI Collaboration (HAIC) Laboratory",
    date: "May 2020 - Jun 2023",
    bullets: [
      "Built 3D models in Blender 3D, programmed Unity simulations in C#, produced audio"
    ],
  },
];

const publications = [
  {
    title: "A Simulation Study of Passing Drivers' Responses to the Automated Truck-Mounted Attenuator System in Road Maintenance",
    link: "https://arxiv.org/abs/2208.07303"
  },
  {
    title: "A Multi-tasking Model of Speaker-Keyword Classification for Keeping Human in the Loop of Drone-assisted Inspection",
    link: "https://arxiv.org/abs/2207.04027"
  },
];

const csProjects = [
  {
    title: "Car Sharing Website",
    description:
      "Developed a ride-sharing platform with user accounts, trip creation, route planning, and embedded Google Maps support, with data persisted in MySQL",
    stack: ["JavaScript", "PHP", "MySQL", "AJAX", "JSON"],
    image: undefined as string | undefined,
  },
  {
    title: "AI Resume Checker",
    description:
      "Built an AI-driven resume analysis tool that extracts keywords, compares them against job descriptions, and suggests improvements with NLP and visualization workflows",
    stack: ["Python", "spaCy", "KeyBERT", "Pandas", "Seaborn"],
    image: undefined as string | undefined,
  },
  {
    title: "This website!",
    description:
      "Leveraging an agentic workflow to generate a personal portfolio website, leaving me with creative control",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "React", "Node.js"],
    image: undefined as string | undefined,
  },
];

const mechProjects = [
  {
    title: "Stirling Engine",
    description:
      "Manufactured a functional stirling engine from scratch",
    stack: ["lathe", "mill", "sand casting", "metal bending", "technical drawing"],
    image: "/stirling.png",
  },
  {
    title: "Mechatronics Hockey Robot",
    description:
      "Designed a robot to play autonomously play hocking, utilizing a sensor suite and PID control",
    stack: ["Arduino", "Sensor fusion", "PID control", "C++"],
    image: undefined as string | undefined,
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

const certifications = ["DeepLearning.ai Machine Learning Specialization — Oct 2025", "Train to Work at a YC Startup (Java Fullstack) — Nov 2025","Tripoli Level 1 Rocketry Certification — Nov 2023"];

export default function Home() {
  const [activeProjectType, setActiveProjectType] = useState<"CS" | "MechE">("CS");
  const [isContactHighlighted, setIsContactHighlighted] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [showAllExperiences, setShowAllExperiences] = useState(false);
  const projects = activeProjectType === "CS" ? csProjects : mechProjects;
  const visibleExperiences = showAllExperiences ? experiences : experiences.slice(0, 3);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!isContactHighlighted) return;

    const timeoutId = window.setTimeout(() => {
      setIsContactHighlighted(false);
    }, 1200);

    return () => window.clearTimeout(timeoutId);
  }, [isContactHighlighted]);

  const highlightContactBubble = () => {
    const element = document.getElementById(contactBubbleId);
    if (!element) return;

    element.scrollIntoView({ behavior: "smooth", block: "center" });
    setIsContactHighlighted(true);
  };

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(250,204,21,0.22),_transparent_35%),linear-gradient(135deg,_#f8fafc_0%,_#fff7ed_100%)] text-zinc-900">
      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6 sm:px-8 lg:px-12">
        <nav className="hidden items-center gap-6 text-large font-medium text-zinc-600 md:flex">
          <a
            href="#contact-bubble"
            onClick={(event) => {
              event.preventDefault();
              highlightContactBubble();
            }}
            className="transition hover:text-zinc-950"
          >
            Contact
          </a>
          <a href="#experience" className="transition hover:text-zinc-950">
            Experience
          </a>
          <a href="#publications" className="transition hover:text-zinc-950">
            Publications
          </a>
          <a href="#projects" className="transition hover:text-zinc-950">
            Projects
          </a>
          <a href="#skills" className="transition hover:text-zinc-950">
            Skills
          </a>
        </nav>
      </header>

      <main id="home" className="mx-auto flex max-w-6xl flex-col gap-10 px-6 pb-20 sm:px-8 lg:px-12">
        <section className="grid items-center gap-8 rounded-xl border border-white/70 bg-white/80 p-8 shadow-[0_30px_80px_-35px_rgba(15,23,42,0.32)] backdrop-blur md:grid-cols-[1.1fr_0.9fr] md:p-12 lg:p-16">
          <div className="space-y-6">
            <div className="flex justify-center md:justify-start">
              <Image
                src="/pfp.jpg"
                alt="Bill Wang profile"
                width={1200}
                height={1200}
                quality={75}
                unoptimized
                className="aspect-square w-full max-w-[300px] rounded-full border border-white/20 object-cover shadow-xl sm:max-w-[360px] md:max-w-[380px]"
                priority
              />
            </div>
            <div className="space-y-4">
              <h1 className="max-w-2xl text-4xl font-semibold tracking-tight text-zinc-950 sm:text-5xl lg:text-6xl">
                Bill Wang
              </h1>
              <span className="inline-flex rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-sm font-medium text-amber-700">
                Computer Science, Mechanical Engineering, Robotics @ Johns Hopkins
              </span>
              <p className="max-w-xl text-lg leading-8 text-zinc-600">
                I do things <br />Software + Hardware = Robotics
              </p>
            </div>
            <div
              id={contactBubbleId}
              className={`flex flex-wrap items-center gap-3 rounded-full border px-3 py-2 text-sm text-zinc-700 shadow-sm transition-all duration-300 ${isContactHighlighted ? "border-amber-300 bg-amber-100 ring-2 ring-amber-200" : "border-zinc-200 bg-zinc-50"}`}
            >
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
                  onClick={() => {
                    highlightContactBubble();
                  }}
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

          <div className="flex min-h-[35rem] flex-col justify-top space-y-4 rounded-lg border border-zinc-200 bg-zinc-950 p-6 text-white shadow-2xl">
            <p className="text-large font-medium text-zinc-400">Highlights</p>
            <div className="space-y-4">
              <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-medium text-zinc-200">
                Autonomous AI UAV swarm R&D, both software and hardware @Johns Hopkins University
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-medium text-zinc-200">
                Developed model framework infrastructure for embedded applications @MathWorks
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-medium text-zinc-200">
                Building with Python, C++, TypeScript, and modern cloud tooling
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-medium text-zinc-200">
                Extensive hardware experience with 3D printing, machining, PCBs, and CAD design
              </div>
            </div>
          </div>
        </section>

        <section className="grid gap-8 rounded-xl border border-zinc-200 bg-white/80 p-8 shadow-sm md:grid-cols-[0.9fr_1.1fr] md:p-10">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-amber-700">Education</p>
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
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-amber-700">Experience</p>
          </div>
          <div className="mt-8 space-y-6 border-l border-zinc-200 pl-6 md:pl-8">
            {visibleExperiences.map((experience, index) => (
              <article key={experience.role} className="relative">
                <span className="absolute left-[-0.6rem] top-1/2 h-3.5 w-3.5 -translate-y-1/2 rounded-full border-2 border-amber-500 bg-white md:left-[-2.45rem]" />
                <div className="rounded-lg border border-zinc-200 bg-zinc-50 p-6">
                  <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-700">
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
          {experiences.length > 4 ? (
            <div className="mt-6 flex justify-center">
              <button
                type="button"
                onClick={() => setShowAllExperiences((value) => !value)}
                className="rounded-full border border-zinc-300 bg-zinc-50 px-4 py-2 text-sm font-semibold text-zinc-700 transition hover:border-amber-300 hover:bg-amber-50 hover:text-amber-700"
              >
                {showAllExperiences ? "Show less" : "Show more"}
              </button>
            </div>
          ) : null}
        </section>

        <section id="publications" className="rounded-xl border border-zinc-200 bg-white/80 p-8 shadow-sm md:p-10">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-amber-700">Publications</p>
            </div>
          </div>
          <div className="mt-8 grid gap-5 lg:grid-cols-2">
            {publications.map((publication) => (
              <a
                key={publication.title}
                href={publication.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-2xl border border-zinc-200 bg-zinc-50 p-6 transition hover:-translate-y-1 hover:border-amber-300 hover:bg-white"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-amber-700">Paper</p>
                <h3 className="mt-3 text-lg font-semibold text-zinc-950">{publication.title}</h3>
                <p className="mt-3 text-sm leading-7 text-zinc-600">
                  Open the publication on arXiv to read more.
                </p>
                <span className="mt-4 inline-flex items-center text-sm font-semibold text-zinc-800 transition group-hover:text-amber-700">
                  Read paper →
                </span>
              </a>
            ))}
          </div>
        </section>

        <section id="projects" className="space-y-6 rounded-xl border border-zinc-200 bg-white/80 p-8 shadow-sm md:p-10">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-amber-700">Projects</p>
            </div>
            <div className="flex items-center gap-2 rounded-full border border-zinc-300 bg-zinc-50 p-1">
              <button
                type="button"
                onClick={() => setActiveProjectType("CS")}
                className={`rounded-full px-3 py-1.5 text-sm font-semibold transition ${activeProjectType === "CS" ? "bg-amber-500 text-white" : "text-zinc-700 hover:bg-white"}`}
              >
                Software
              </button>
              <button
                type="button"
                onClick={() => setActiveProjectType("MechE")}
                className={`rounded-full px-3 py-1.5 text-sm font-semibold transition ${activeProjectType === "MechE" ? "bg-amber-500 text-white" : "text-zinc-700 hover:bg-white"}`}
              >
                Hardware
              </button>
            </div>
            <a
              href="https://jhu.digication.com/bill-wang/projects"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-zinc-300 bg-white px-4 py-2 text-sm font-semibold text-zinc-700 transition hover:border-zinc-400 hover:bg-zinc-50"
            >
              View more projects →
            </a>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((project) => (
              <article key={project.title} className="overflow-hidden rounded-lg border border-zinc-200 bg-zinc-50">
                {project.image ? (
                  <div className="relative h-80 w-full">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      unoptimized
                      className="object-cover"
                    />
                  </div>
                ) : null}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-zinc-950">{project.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-zinc-600">{project.description}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.stack.map((item) => (
                      <span key={item} className="rounded-full border border-zinc-200 bg-white px-3 py-1 text-sm text-zinc-700">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="skills" className="rounded-xl border border-zinc-200 bg-zinc-950 p-8 text-white shadow-[0_30px_80px_-35px_rgba(15,23,42,0.8)] md:p-10">
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
      </main>

      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Back to top"
        className={`fixed bottom-6 right-6 z-50 flex h-15 w-45 items-center justify-center rounded-full border border-amber-200 bg-white/90 text-zinc-800 shadow-lg backdrop-blur transition-all duration-300 ${showBackToTop ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0"}`}
      >Back to top
        <svg viewBox="0 0 24 24" className="h-6 w-6 fill-none stroke-current stroke-2" aria-hidden="true">
          <path d="m6 14 6-6 6 6" />
          <path d="M12 8v10" />
        </svg>
      </button>
    </div>
  );
}
