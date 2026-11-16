
import Link from "next/link";

export default function Home() {
  return (
    <main className="home-container">
      <header className="home-header">
        <p className="home-label">NEXT.JS COURSE PROJECT</p>

        <h1>Fundamentals of Next.js</h1>

        <p className="home-intro">
          This project includes three small applications built
          with Next.js: a calculator, a text editor and a quiz.
          Each one demonstrates what I learned during the course.
        </p>
      </header>

      <section className="project-section">
        <h2>Explore the applications</h2>

        <div className="project-grid">

          <article className="project-card">
            <span className="project-number">01</span>

            <h3>Calculator</h3>

            <p>
              A simple calculator for adding, subtracting,
              multiplying and dividing numbers.
            </p>

            <p className="project-tech">
              Uses React state and event handlers.
            </p>

            <Link href="/calculator" className="project-link">
              Open Calculator →
            </Link>
          </article>

          <article className="project-card">
            <span className="project-number">02</span>

            <h3>Text Editor</h3>

            <p>
              Write text, change it to uppercase or lowercase,
              clear it and see the word and character counts.
            </p>

            <p className="project-tech">
              Uses React state and JavaScript string methods.
            </p>

            <Link href="/editor" className="project-link">
              Open Text Editor →
            </Link>
          </article>

          <article className="project-card">
            <span className="project-number">03</span>

            <h3>Software Engineering Quiz</h3>

            <p>
              Answer three multiple-choice questions and
              see your score when you submit your answers.
            </p>

            <p className="project-tech">
              Uses React state and conditional rendering.
            </p>

            <Link href="/quiz" className="project-link">
              Start Quiz →
            </Link>
          </article>

        </div>
      </section>

      <section className="about-section">
        <h2>About the project</h2>

        <p>
          This project was created for the Fundamentals of Next.js
          course. It gave me the opportunity to practise building
          pages, working with React components, handling user input
          and styling applications with CSS.
        </p>
      </section>
    </main>
  );
}
