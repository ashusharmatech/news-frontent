import React, { useContext, useEffect, useState } from 'react';
import NewsCard from '../components/NewsCard';
import DatabaseContext from '../db';
import { writeUserData, getData } from '../firebase';

const Entertainment = () => {
	const { articles, getArticles } = useContext(DatabaseContext);

	useEffect(() => {
		getArticles();
	}, []);

	useEffect(
		() => {
			console.log('Printing Articles ' + JSON.stringify(articles));
			if (articles) {
			}
		},
		[ articles ]
	);

	return (
		<div>
			{articles.map((article) => (
				<NewsCard
					title={article.title}
					timestamp={article.publishedAt}
					image={article.urlToImage}
					author={article.author}
					url={article.url}
				/>
			))}
		</div>
	);
};

export default Entertainment;
