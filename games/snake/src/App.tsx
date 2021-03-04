import { Component, h } from "preact";

import SnakeGame from "./SnakeGame";

export default class App extends Component {
	render() {
		return (
			<div style={{ fontFamily: "Muli" }}>
				<SnakeGame percentageWidth={60} />
			</div>
		);
	}
}
