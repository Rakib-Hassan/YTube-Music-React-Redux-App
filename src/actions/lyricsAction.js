import axios from "axios";
import { GET_LYRICS } from "./types";

export const getLyricsAction = (title) => async (dispatch) => {
	const regex = /[[].+|\(.+/;
	title = title.replace(regex, "");
	const artist = title.split("-")[0];
	let splittedTitle = title.split("-")[1];
	splittedTitle = splittedTitle && splittedTitle.trim();
	const url = `https://api.lyrics.ovh/v1/${artist}/${splittedTitle}`;
	const res = await axios.get(url);
	dispatch({
		type: GET_LYRICS,
		payload: res.data.lyrics,
	});
};
