import React, { useState, useEffect } from "react";
import alarm from "./alarm.wav";

const Session = () => {
	const [second, setSecond] = useState("00");
	const [minute, setMinute] = useState("15");
	const [isActive, setIsActive] = useState(false);
	const [counter, setCounter] = useState(0);
	const [sessionLength, setSessionLength] = useState(15);
	const [breakLength, setBreakLength] = useState(5);
	const [isSession, setIsSession] = useState(true);

	const increaseSessionLength = () => {
		if (sessionLength === 60) return;
		var length = sessionLength;
		length++;
		setSessionLength(length);
		setCounter(length * 60);
		setMinute(String(length).length === 1 ? `0${length}` : length);
		setSecond("00");
	};

	const decreaseSessionLength = () => {
		if (sessionLength === 1) return;
		var length = sessionLength;
		length--;
		setSessionLength(length);
		setCounter(length * 60);
		setMinute(String(length).length === 1 ? `0${length}` : length);
		setSecond("00");
	};

	const increaseBreakLength = () => {
		if (breakLength === 60) return;
		var length = breakLength;
		length++;
		setBreakLength(length);
	};

	const decreaseBreakLength = () => {
		if (breakLength === 1) return;
		var length = breakLength;
		length--;
		setBreakLength(length);
	};

	const handleStartPause = () => {
		setIsActive(!isActive);
	};

	const reset = () => {
		setSessionLength(15);
		setBreakLength(5);
		setCounter(15 * 60);
		setMinute(15);
		setSecond("00");
		setIsActive(false);
		setIsSession(true);
	};

	useEffect(() => {
		let intervalId;

		if (isActive) {
			if (counter === -1) {
				var audio = new Audio(alarm);
				audio.play();
				setCounter(isSession ? breakLength * 60 : sessionLength * 60);
				setIsSession(!isSession);
			}
			intervalId = setInterval(() => {
				const secondCounter = counter % 60;
				const minuteCounter = Math.floor(counter / 60);

				const computedSecond =
					String(secondCounter).length === 1
						? `0${secondCounter}`
						: secondCounter;
				const computedMinute =
					String(minuteCounter).length === 1
						? `0${minuteCounter}`
						: minuteCounter;

				setSecond(computedSecond);
				setMinute(computedMinute);

				setCounter((counter) => counter - 1);
			}, 1000);
		}

		return () => clearInterval(intervalId);
	}, [isActive, counter, isSession, breakLength, sessionLength]);

	return (
		<div className="px-2">
			<div className="col-12 d-flex mb-4">
				<div
					className="col-6 d-flex flex-column justify-content-center align-items-center"
					style={{
						height: "100px",
						fontWeight: "bold",
						fontSize: "1.65rem",
					}}
				>
					<div
						className="border border-warning d-flex flex-column justify-content-center align-items-center rounded-circle"
						style={{
							padding: "1.5rem 1.5rem",
						}}
					>
						<div>
							{isSession ? "Session" : "Break"}
							<br></br>
						</div>
						<div className="time">
							<span className="minute">{minute}</span>
							<span>:</span>
							<span className="second">{second}</span>
						</div>
					</div>
				</div>
				<div className="col-6 d-flex justify-content-between">
					<button
						onClick={handleStartPause}
						className="start col-5 h-100"
					>
						{isActive ? "Pause" : "Start"}
					</button>
					<button onClick={reset} className="reset col-5 h-100">
						Reset
					</button>
				</div>
			</div>
			<div className="col-12 d-flex mb-4">
				<div className="col-6 d-flex justify-content-center align-items-center text-muted">
					Session Length
				</div>
				<button
					type="button"
					onClick={increaseSessionLength}
					className="add btn btn-primary btn-lg col-2"
				>
					+
				</button>
				<span className="col-2 d-flex justify-content-center align-items-center">
					{sessionLength}
				</span>
				<button
					onClick={decreaseSessionLength}
					className="subtract btn btn-primary btn-lg col-2"
				>
					-
				</button>
			</div>
			<div className="col-12 d-flex">
				<div className="col-6 d-flex justify-content-center align-items-center text-muted">
					Break Length
				</div>
				<button
					onClick={increaseBreakLength}
					className="add btn btn-primary btn-lg col-2"
				>
					+
				</button>
				<span className="col-2 d-flex justify-content-center align-items-center">
					{breakLength}
				</span>
				<button
					onClick={decreaseBreakLength}
					className="subtract btn btn-primary btn-lg col-2"
				>
					-
				</button>
			</div>
		</div>
	);
};

export default Session;
