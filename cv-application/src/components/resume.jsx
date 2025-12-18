import letter from '../assets/letter.svg'
import phone from '../assets/phone.svg'

export default function Resume({ general }) {
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
		</div>
	)
}