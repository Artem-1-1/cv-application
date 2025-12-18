import { useState } from "react";

export default function DropDown({
  FormComponent,
  formClass,
  formName,
  ariaLabel,
}) {
	const [isOpen, setIsOpen] = useState(false);

	const toggleDropDown = () => {
    isOpen ? setIsOpen(false) : setIsOpen(true);
  };

	return (
		<>
			<div className={formClass}>
				<h2
					onClick={toggleDropDown}
					aria-label={ariaLabel}
					tabIndex={0}
					role="button"
					onKeyDown={(e) => {
						if (e.key === 'Enter' || e.key === ' ') {
							e.preventDefault();
							toggleDropDown();
						}
					}}>
				{formName}
			</h2>
			{isOpen && FormComponent}
		</div>
		</>
	)
}