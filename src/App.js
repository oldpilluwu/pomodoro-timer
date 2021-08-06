import MusicPlayer from "./components/Music/MusicPlayer";
import Timer from "././components/Timer/Timer";

function App() {
	return (
		<div
			className="App col-md-6 col-sm-12 d-flex flex-column justify-content-center p-4"
			style={{
				fontSize: "1.25rem",
			}}
		>
			<MusicPlayer />
			<Timer />
		</div>
	);
}

export default App;
