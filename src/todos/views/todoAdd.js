import React, { Component } from 'react';
import { addTodo } from '../actions';
import { connect } from 'react-redux';
import propTypes from 'prop-types';

class TodoAdd extends Component {
	constructor(props) {
		super(props);
		this.state = {
			inputValue: ''
		}
	}
	onSubmit = (e) => {
		e.preventDefault();
		let inputValue = this.state.inputValue;
		if (!inputValue.trim) {
			return;
		}
		this.props.onAdd(inputValue);
		this.setState({
			inputValue: ''
		})
	};
	onInputChange = (e) => {
		this.setState({
			inputValue: e.target.value
		})
	};
	render() {
		return (
			<div className="add-todo" onSubmit={this.onSubmit}>
				<form>
					<input className="new-todo" onChange={this.onInputChange} value={this.state.inputValue} />
					<button className="add-btn" type="submit">
						添加
        	</button>
				</form>
			</div>
		)
	}
}

TodoAdd.propTypes = {
	onAdd: propTypes.func.isRequired
};

const mapDispatchToProps = (dispatch) => {
	return {
		onAdd: (text) => {
			dispatch(addTodo(text))
		}
	}
};

export default connect(null, mapDispatchToProps)(TodoAdd)