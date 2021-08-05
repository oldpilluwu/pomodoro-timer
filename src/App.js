import MusicPlayer from "./components/Music/MusicPlayer";
import Session from "./components/Session/Session";

function App() {
	return (
		<div
			className="App col-md-6 col-sm-12 d-flex flex-column justify-content-center p-4"
			style={{
				fontSize: "1.25rem",
			}}
		>
			<MusicPlayer />
			<Session />
		</div>
	);
}

export default App;
