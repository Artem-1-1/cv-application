import letter from '../assets/letter.svg'
import phone from '../assets/phone.svg'
import '../styles/App.css'

export default function Resume({ general, education }) {
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