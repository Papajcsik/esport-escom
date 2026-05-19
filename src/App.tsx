import { NavLink } from "react-router-dom";

type Props = {};

export default function LandingPage({}: Props) {
	return (
		<div>
			<span>Landing Page</span>
			<NavLink to={"/test"} end>
				go to test
			</NavLink>
		</div>
	);
}
