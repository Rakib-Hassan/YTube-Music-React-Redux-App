import { combineReducers } from "redux";
import youtubeReducer from "./youtubeReducer";
import lyricsReducer from "./lyricsReducer";
import authReducer from "./authReducer";

export default combineReducers({
	youtube: youtubeReducer,
	lyrics: lyricsReducer,
	auth: authReducer,
});
