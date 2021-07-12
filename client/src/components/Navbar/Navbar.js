import React from 'react';
import './assets/navbar.css';
import mail from './assets/icons/fluent_mail-28-regular.png';
import phone from './assets/icons/akar-icons_phone.png';
import facebook from './assets/icons/facebook.png';
import twitter from './assets/icons/et_twitter.png';
import instagram from './assets/icons/ion_logo-instagram.png';
import { Col, Row, Navbar, Container, Nav, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const Header = () => {
	return (
		<Col>
			<Row>
				<Navbar collapseOnSelect expand="lg">
					<Navbar.Text>
						<span className="pr-4">
							<img src={mail} className="pr-3" />
							silkskashmir@example.com
						</span>
						<span>
							<img src={phone} className="pr-3" />
							+(12) 123 123 123
						</span>
					</Navbar.Text>
					<Navbar.Toggle aria-controls="responsive-navbar-nav" />
					<Navbar.Collapse
						id="responsive-navbar-nav"
						className="justify-content-end"
					>
						<Nav>
							<Nav.Link href="#deets">
								<img src={facebook} className="pr-4" />
							</Nav.Link>
							<Nav.Link href="#memes">
								<img src={twitter} alt="" className="pr-4" />
							</Nav.Link>
							<Nav.Link href="#memes">
								<img src={instagram} alt="" className="pr-4" />
							</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Navbar>
			</Row>
			<Row>
				<Navbar>
					<Navbar.Brand>
						<a href="/">SILKS OF KASHMIR</a>
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="responsive-navbar-nav" />
					<Navbar.Collapse
						id="responsive-navbar-nav"
						className="justify-content-center"
					>
						<Nav activeKey="/home">
							<Nav.Item>
								<Nav.Link href="/home">Active</Nav.Link>
							</Nav.Item>
							<Nav.Item>
								<Nav.Link eventKey="link-1">Link</Nav.Link>
							</Nav.Item>
							<Nav.Item>
								<Nav.Link eventKey="link-2">Link</Nav.Link>
							</Nav.Item>
							<Nav.Item>
								<Nav.Link eventKey="disabled" disabled>
									Disabled
								</Nav.Link>
							</Nav.Item>
						</Nav>
					</Navbar.Collapse>

					<Button variant="outline-dark" className="shop-btn">
						Shop
					</Button>
					<Button variant="dark" className="account-btn">
						Account
					</Button>
				</Navbar>
			</Row>
		</Col>
	);
};

export default Header;
