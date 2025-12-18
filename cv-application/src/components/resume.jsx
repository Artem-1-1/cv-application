import letter from '../assets/letter.svg'
import phone from '../assets/phone.svg'
import '../styles/App.css'

export default function Resume({ general, education, work }) {
  const {name, email, phoneNum} = general;

  return (
		<div className="resume">
			<header className="resume-header">
				<h1>{name}</h1>
				<div className="contact">
					<span>
						<img src={letter} alt="" />
						{email}
					</span>
					<span>
						<img src={phone} alt="" />
						{phoneNum}
					</span>
				</div>
			</header>

			<Section title="Education">
        {education.map((edu, i) => (
          <EducationEntry key={i} {...edu} />
        ))}
      </Section>

      <Section title="Professional Experience">
        {work.map((job, i) => (
          <WorkEntry key={i} {...job} />
        ))}
      </Section>
		</div>
	)
}

export function Section({ title, children }) {
  return (
    <section className="resume-section">
      <h2>{title}</h2>
      <div>{children}</div>
    </section>
  );
}

export function EducationEntry({ degree, school, startDate, endDate }) {
  return (
    <div className="edu-entry">
      <div className="edu-dates">
        {startDate} – {endDate}
      </div>
      <div className="edu-main">
        <h3>{school}</h3>
        <p>{degree}</p>
      </div>
    </div>
  );
}

export function WorkEntry({
  jobTitle,
  company,
  startDate,
  endDate,
  description,
}) {
  return (
    <div className="work-entry">
      <div className="work-dates">
        {startDate} – {endDate}
      </div>

      <div className="work-main">
        <h3>{company}</h3>
        <h4>{jobTitle}</h4>
        <p>{description}</p>
      </div>
    </div>
  );
}