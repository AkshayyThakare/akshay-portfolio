// src/app/page.tsx
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "EMS Dispatch Simulator (Capstone)",
    description:
      "Client-style capstone project to analyze EMS call patterns and predict resource requirements using ML. Includes full documentation + final presentation.",
    tags: ["Python", "scikit-learn", "Analytics", "Simulation"],
    repo: "https://github.com/AkshayyThakare/Capstone-Project-Simcoe-County-Client",
    highlight: "Featured",
  },
  {
    title: "Data Analytics Portfolio (Excel • SQL • Hive • Spark)",
    description:
      "Multi-project analytics repository including Excel statistical analysis (hypothesis testing, regression), SQL exploration, and big-data processing with Hive/Spark.",
    tags: ["Excel", "SQL", "Hive", "Spark", "ETL"],
    repo: "https://github.com/AkshayyThakare/AkshayyThakareDataAnalysis",
    highlight: "Featured",
  },
  {
    title: "Machine Learning Projects",
    description:
      "Notebook-based ML projects including supervised learning workflows and reinforcement learning (Q-Learning & Deep Q Networks).",
    tags: ["Python", "ML", "Reinforcement Learning"],
    repo: "https://github.com/AkshayyThakare/Machine-Learning-ProjectsAkshay",
  },
  {
    title: "Real-Time Stock Market Dashboard (MERN)",
    description:
      "Full-stack dashboard for live market data visualization and news aggregation using APIs.",
    tags: ["React", "Node", "MongoDB", "APIs", "Chart.js"],
    repo: "https://github.com/AkshayyThakare/StockMarket",
  },
  {
    title: "Cricket Analytics",
    description:
      "Domain analytics project exploring cricket datasets for performance insights and trends.",
    tags: ["Python", "Pandas", "Visualization"],
    repo: "https://github.com/AkshayyThakare/Cricket-Analytics",
  },
  {
    title: "EMS Frontend (Wouessi)",
    description:
      "Frontend for an Employee Management System demonstrating UI workflows and component-based development.",
    tags: ["React", "Frontend"],
    repo: "https://github.com/AkshayyThakare/wouessi-ems-frontend",
  },
];

const skills = [
  { group: "Data & BI", items: ["Excel", "SQL", "Power BI (in progress)", "Tableau"] },
  { group: "Python & ML", items: ["Pandas", "NumPy", "scikit-learn", "Jupyter", "TensorFlow (basic)"] },
  { group: "Big Data & ETL", items: ["Spark", "Hive", "Talend", "Azure (learning)"] },
  { group: "Web & Tools", items: ["React", "Node.js", "Git/GitHub", "APIs"] },
];

const LINKS = {
  github: "https://github.com/AkshayyThakare",
  linkedin: "https://www.linkedin.com/in/thakare26/",
  email: "thackarey.akshay@gmail.com",
  // Optional: put your resume PDF link here (Google Drive share link / hosted pdf)
  resume: "https://drive.google.com/file/d/1yTK7e20Z5mWE9GnN-uYfutfE2ivpbUCG/view?usp=sharing",
};

export default function Page() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      {/* Top bar */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <div className="font-semibold tracking-tight">Akshaykumar Thakare</div>
          <nav className="hidden gap-6 text-sm md:flex">
            <a className="hover:text-slate-300" href="#projects">Projects</a>
            <a className="hover:text-slate-300" href="#skills">Skills</a>
            <a className="hover:text-slate-300" href="#about">About</a>
            <a className="hover:text-slate-300" href="#contact">Contact</a>
          </nav>
          <a
            className="rounded-full border border-white/20 px-4 py-2 text-sm font-medium hover:bg-white/10"
            href="#contact"
          >
            Hire / Contact
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-4 py-16 md:py-20">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-sm font-medium text-slate-300">
              Data Analyst • AI & Big Data Analytics
            </p>
            <h1 className="mt-3 text-4xl font-bold leading-tight md:text-5xl">
              I turn messy data into clear decisions.
            </h1>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-200">
              I build analytics projects using <b>Excel/SQL</b>, create predictive models in <b>Python</b>,
              and work with <b>Hive/Spark</b> for big-data processing. My portfolio includes a client-style
              EMS dispatch simulation capstone and multiple end-to-end analysis projects.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-slate-950 hover:bg-slate-200"
                href="#projects"
              >
                View Projects <ExternalLink size={16} />
              </a>

              <a
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-2.5 text-sm font-semibold hover:bg-white/10"
                href={LINKS.resume}
                target={LINKS.resume === "#" ? undefined : "_blank"}
                rel={LINKS.resume === "#" ? undefined : "noreferrer"}
              >
                Download Resume <ExternalLink size={16} />
              </a>
            </div>

            <div className="mt-6 flex flex-wrap gap-4">
              <a
                className="inline-flex items-center gap-2 text-sm hover:text-slate-300"
                href={LINKS.github}
                target="_blank"
                rel="noreferrer"
              >
                <Github size={18} /> GitHub
              </a>
              <a
                className="inline-flex items-center gap-2 text-sm hover:text-slate-300"
                href={LINKS.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                <Linkedin size={18} /> LinkedIn
              </a>
              <a
                className="inline-flex items-center gap-2 text-sm hover:text-slate-300"
                href={`mailto:${LINKS.email}`}
              >
                <Mail size={18} /> Email
              </a>
            </div>
          </div>

          {/* Right side card */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-sm">
            <p className="text-sm font-semibold text-slate-200">Quick Highlights</p>
            <ul className="mt-4 space-y-3 text-sm text-slate-200">
              <li className="rounded-xl border border-white/10 bg-slate-950/40 p-4">
                <b>Capstone:</b> EMS dispatch simulation & resource planning using ML.
              </li>
              <li className="rounded-xl border border-white/10 bg-slate-950/40 p-4">
                <b>Excel Stats:</b> hypothesis testing, regression, ANOVA, chi-square on real datasets.
              </li>
              <li className="rounded-xl border border-white/10 bg-slate-950/40 p-4">
                <b>Big Data:</b> Hive cleaning + Spark EDA & analytics pipeline.
              </li>
            </ul>
            <p className="mt-4 text-xs text-slate-400">
              Tip: Add screenshots in <code className="rounded bg-white/10 px-1 py-0.5">/public</code> later for each project.
            </p>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="border-t border-white/10 bg-slate-950">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <div className="flex items-end justify-between gap-6">
            <div>
              <h2 className="text-2xl font-bold">Projects</h2>
              <p className="mt-2 text-sm text-slate-300">
                A focused set of projects showcasing analytics, ML, and real-world delivery.
              </p>
            </div>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {projects.map((p) => (
              <article
                key={p.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-sm hover:bg-white/10 transition-colors"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-semibold">{p.title}</h3>
                    {p.highlight ? (
                      <span className="mt-2 inline-block rounded-full bg-white px-3 py-1 text-xs font-semibold text-slate-950">
                        {p.highlight}
                      </span>
                    ) : null}
                  </div>
                  <a
                    className="inline-flex items-center gap-2 rounded-full border border-white/20 px-3 py-2 text-xs font-semibold hover:bg-white/10"
                    href={p.repo}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Repo <ExternalLink size={14} />
                  </a>
                </div>

                <p className="mt-3 text-sm leading-relaxed text-slate-200">{p.description}</p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-slate-200"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="border-t border-white/10 bg-slate-950">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <h2 className="text-2xl font-bold">Skills</h2>
          <p className="mt-2 text-sm text-slate-300">
            Grouped to match how recruiters scan resumes.
          </p>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {skills.map((s) => (
              <div key={s.group} className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-sm">
                <h3 className="font-semibold">{s.group}</h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {s.items.map((i) => (
                    <span key={i} className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-slate-200">
                      {i}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="border-t border-white/10 bg-slate-950">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <h2 className="text-2xl font-bold">About</h2>
          <div className="mt-4 max-w-3xl space-y-3 text-sm leading-relaxed text-slate-200">
            <p>
              I have a background in <b>Artificial Intelligence</b> and <b>Big Data Analytics</b>, and I enjoy building
              projects that combine clean analysis with practical delivery.
            </p>
            <p>
              My strengths include data cleaning, SQL exploration, dashboard thinking, and machine learning workflows —
              especially when projects require clear documentation and business storytelling.
            </p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="border-t border-white/10 bg-slate-950">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <h2 className="text-2xl font-bold">Contact</h2>
          <p className="mt-2 text-sm text-slate-300">
            Want to discuss a Data Analyst / BI / ML opportunity? Let’s connect.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-slate-950 hover:bg-slate-200"
              href={`mailto:${LINKS.email}`}
            >
              <Mail size={16} /> Email Me
            </a>
            <a
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-2.5 text-sm font-semibold hover:bg-white/10"
              href={LINKS.github}
              target="_blank"
              rel="noreferrer"
            >
              <Github size={16} /> GitHub
            </a>
            <a
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-2.5 text-sm font-semibold hover:bg-white/10"
              href={LINKS.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              <Linkedin size={16} /> LinkedIn
            </a>
          </div>

          <p className="mt-10 text-xs text-slate-400">
            © {new Date().getFullYear()} Akshaykumar Thakare • Built with Next.js + Tailwind
          </p>
        </div>
      </section>
    </main>
  );
}
