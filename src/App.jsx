import { useState, useEffect } from "react";

export default function App() {
	const [count, setCount] = useState(0);
	const [count2, setCount2] = useState(0);
	function increase() {
		setCount((c) => c + 1);
	}
	function decrease() {
		setCount2((c) => c - 1);
	}
	return (
		<div>
			<Counter count={count} count2={count2} />
			<button onClick={increase}>increase</button>
			<button onClick={decrease}>decrease</button>
			after counter
		</div>
	);
}
function Counter(props) {
	useEffect(function () {
		console.log("mount");

		return function () {
			console.log("unmount");
		};
	}, []);

	useEffect(
		function () {
			console.log("count has changed");
		},
		[props.count]
	);

	return (
		<div>
			Counter1 {props.count}
			Counter2 {props.count2}
		</div>
	);
}
