import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
import { AiOutlineHome, AiOutlineProject } from "react-icons/ai";
import { IoMdContact } from "react-icons/io";
import { MdOutlineConnectWithoutContact } from "react-icons/md";

export const Nav = styled.nav`
	background: black;
	height: 80px;
	display: flex;
	opacity: 0.9;
	justify-content: space-between;
	padding: 0.5rem calc(100vw - 1000px) / 2);
	z-index: 10;
`

export const NavLink = styled(Link)`
	color: #F22;
	display: flex;
	align-items: center;
	text-decoration: none;
	padding: 0 1rem;
	height: 100%
	cursor: pointer;

	&.active {
		color: #142cf1;
	}
`

export const NavLogo = styled(Link)`
	color: #F22;
	display: flex;
	align-items: center;
	text-decoration: none;
	padding: 0 1rem;
	height: 100%
	cursor: pointer;
	transform: translate(100%, 0);

	@media screen and (max-width: 820px) {
		display: none;
	}
`

export const BarsHome = styled(AiOutlineHome)`
display: none;

color: #ffff;

	@media screen and (max-width: 820px) {
		color: #ffff;
		display: block;
		positon: absolute;
		top: 0;
		right: 0;
		transform: translate(200%, 75%);
		font-size: 1.8rem;
		cursor: pointer;
	}
`

export const BarsAbout = styled(IoMdContact)`
display: none;

color: #ffff;

	@media screen and (max-width: 820px) {
		color: #ffff;
		display: block;
		positon: absolute;
		top: 0;
		right: 0;
		transform: translate(300%, 75%);
		font-size: 1.8rem;
		cursor: pointer;
	}
`

export const BarsProjects = styled(AiOutlineProject)`
display: none;

color: #ffff;

	@media screen and (max-width: 820px) {
		color: #ffff;
		display: block;
		positon: absolute;
		top: 0;
		right: 0;
		transform: translate(60%, 75%);
		font-size: 1.8rem;
		cursor: pointer;
	}
`

export const BarsContact = styled(MdOutlineConnectWithoutContact)`
display: none;

color: #ffff;

	@media screen and (max-width: 820px) {
		color: #ffff;
		display: block;
		positon: absolute;
		top: 0;
		right: 0;
		transform: translate(-130%, 75%);
		font-size: 1.8rem;
		cursor: pointer;
	}
`

export const NavMenu = styled.div`
	display: flex;
	align-items: center;
	color: #F223;
	transform: translate(-100%, 0);

	@media screen and (max-width: 820px) {
		display: none;
		color: #ffffff';

	}
`
