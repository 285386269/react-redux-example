import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createPost } from '../actions/postActions';

class postForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            body: ''
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    onChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }
    onSubmit(e) {
        e.preventDefault();
        const post = {
            title: this.state.title,
            body: this.state.body,
        }

        //触发action
        this.props.createPost(post);
    }
    render() {
        return (
            <div>
                <h1>添加内容</h1>
                <form onSubmit={this.onSubmit}>
                    <div>
                        <label>title</label>
                        <br></br>
                        <input type="text" name="title" onChange={this.onChange} value={this.state.title}></input>
                    </div>
                    <div>
                        <label>body</label>
                        <br></br>
                        <textarea type="textarea" name="body" onChange={this.onChange} value={this.state.body}></textarea>
                        <br></br>
                        <button type="submit">添加</button>
                    </div>
                </form>
            </div>
        )
    }
}

postForm.propTypes = {
    fetchPosts: PropTypes.func.isRequired,
    posts: PropTypes.array.isRequired
}

export default connect(null, { createPost })(postForm);
