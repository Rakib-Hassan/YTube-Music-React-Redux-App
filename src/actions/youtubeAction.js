import axios from "axios";
import {
	GET_YOUTUBE_POPULAR_MUSIC,
	GET_YOUTUBE_SEARCH_RESULT,
	NOT_FOUND,
	CLEAR_SEARCH_RESULT,
} from "./types";

const API_KEY = "AIzaSyD3kwwIJVOaEdie8g_PJs5-dxl-OGZe-80";

export const getYoutubeSearchResultAction = ({ artist, title }) => async (
	dispatch
) => {
	const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${artist}${title}&key=${API_KEY}`;
	const res = await axios.get(url);
	if (!res.data.items.length) return dispatch({ type: NOT_FOUND });
	dispatch({
		type: GET_YOUTUBE_SEARCH_RESULT,
		payload: res.data.items,
	});
};

export const getYoutubePopularMusicAction = () => async (dispatch) => {
	const url = `https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&videoCategoryId=10&maxResults=20&key=${API_KEY}`;

	const res = await axios.get(url);
	dispatch({
		type: GET_YOUTUBE_POPULAR_MUSIC,
		payload: res.data.items,
	});
};

export const clearSearchAction = () => {
	return { type: CLEAR_SEARCH_RESULT };
};
