import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
export default function JokesList() {
	const [jokesResponse, setJokesResponse] = useState(null);
	const [isLoading, setIsLoading] = useState(true);
	const fetchJokes = async () => {
		try {
			const response = await axios.get("https://v2.jokeapi.dev/joke/Dark");
			setJokesResponse(response.data);
		} catch (err) {
			console.log(err);
		} finally {
			setIsLoading(false);
		}
	};
	useEffect(() => {
		fetchJokes();
	}, []);

	return (
		<div>
			{isLoading ? (
				<h1> Loading...</h1>
			) : (
				<div>
					<h1>the joke goes like</h1>
					<h2> category : {jokesResponse.category}</h2>
					<h2> setup : {jokesResponse.setup}</h2>
					<h2> delivery : {jokesResponse.delivery}</h2>
				</div>
			)}
		</div>
	);
}
