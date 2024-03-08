import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = () => {
	const [data, setData] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);

	const options = {
		method: "GET",
		url: `https://jsearch.p.rapidapi.com/${endpoint}`,
		params: {
			query: "Python developer in Texas, USA",
			page: "1",
			num_pages: "1",
		},
		headers: {
			"X-RapidAPI-Key":
				"7b3f04ad5amshed841176ba11474p1597fajsn3c4d5ada7b9e",
			"X-RapidAPI-Host": "jsearch.p.rapidapi.com",
		},
	};
};
