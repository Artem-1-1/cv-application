import { useState } from "react";

export default function GeneralInfo({ onSubmit }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNum, setPhoneNum] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({name, email, phoneNum});
  };

  return (
    <form onSubmit={handleSubmit}>
			<label>
				Full Name 
				<input type="text"
				value={name}
				onChange={(e) => setName(e.target.value)}
				placeholder="Enter your full name." 
				aria-label="full name"
				required/>
			</label>

			<label>
				Email 
				<input type="email"
				onChange={(e) => setEmail(e.target.value)}
				placeholder="Enter your email address."
				aria-label="Email address" 
				required />
			</label>

			<label>
				Phone Number 
				<input type="tel"
				onChange={(e) => setPhoneNum(e.target.value)}
				placeholder="Enter phone number"
				aria-label="Phone number"
				required />
			</label>

			<button type="submit">Save</button>
    </form>
    )
}