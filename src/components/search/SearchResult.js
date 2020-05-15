import React from "react";
import { useDispatch } from "react-redux";
import { setModalOpenAction } from "../../actions/youtubeAction";
import { getLyricsAction } from "../../actions/lyricsAction";

const SearchResult = ({
	searchResult: {
		id: { videoId },
		snippet: { thumbnails, title },
	},
}) => {
	const dispatch = useDispatch();
	const setModalOpen = (videoId) => dispatch(setModalOpenAction(videoId));
	const getLyrics = (searchQuery) => dispatch(getLyricsAction(searchQuery));

	const playMusic = (videoId) => {
		setModalOpen(videoId);
		const artist = title.split("-")[0];
		const splittedTitle = title.split("-")[1];
		getLyrics({ artist, title: splittedTitle });
	};

	return (
		<li key={videoId}>
			<img
				src={thumbnails.default.url}
				alt=""
				className="clickable"
				onClick={() => playMusic(videoId)}
			/>

			<h3 className="clickable" onClick={() => playMusic(videoId)}>
				{title}
			</h3>
			<i className="fas fa-play-circle" onClick={() => playMusic(videoId)}></i>
		</li>
	);
};

export default SearchResult;
