import React, { startTransition } from 'react';
import './Wrapper.css';
import { useLocation, useNavigate } from 'react-router-dom';
import tabs from '../tabs.json';

export default function Wrapper({ children }) {
	const { pathname } = useLocation();
	const navigate = useNavigate();

	function handleClick(path) {
		startTransition(() => navigate(path));
	}

	function renderTabs() {
		return tabs.map((item) => (
			<div
				key={item.path}
				className={`tab ${pathname.split('/')[2] === item.id ? 'selected' : ''}`}
				onClick={() => handleClick(`/cms-app/${item.id}`)}
			>
				{item.title}
			</div>
		));
	}

	return (
		<div className="wrapper">
			<div className="tabs">
				{renderTabs()}
			</div>
			<div>{children}</div>
		</div>
	);
}
