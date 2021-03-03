import { Component, h } from "preact";

import SnakeGame from "./SnakeGame";

export default class App extends Component {
	render() {
		return (
			<div style={{ width: "100%", height: "100%", margin: 0 }}>
				<SnakeGame />
			</div>
		);
	}
}
