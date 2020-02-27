class Render extends React.Component {
	render() {
		return <span>I got rendered by React</span>
    }
}

class Spring extends React.Component {
	render() {
		return <span>I am a spring boot application</span>
    }
}

ReactDOM.render(<Render />, document.getElementById('testDiv'))
ReactDOM.render(<Spring />, document.getElementById('testDiv2'))