import React from "react";
import ReactAudioPlayer from "react-audio-player";
import music from "./music.wav";

const MusicPlayer = () => {
	console.log(music);
	return (
		<div className="col-12 mb-4">
			<ReactAudioPlayer className="col-12" src={music} controls loop />
		</div>
	);
};

export default MusicPlayer;
