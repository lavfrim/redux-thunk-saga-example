import React from 'react';
import { connect } from 'react-redux';

import { createPost, showAlert, hideAlert } from '../../redux/actions';
import { NON_EMPTY_TITLE } from '../../constants/alert-message';


class PostForm extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            isShowAlert: false,
        };
    }

    submitHandler = (submitEvent) => {
        const { title } = this.state;
        const { createPost, showAlert } = this.props;

        submitEvent.preventDefault();
        if (title.length > 1) {
            createPost({
                id: Date.now(),
                title,
            });

            this.setState({
                title: '',
            })
        } else {
            showAlert(NON_EMPTY_TITLE);

            this.setState({
                isShowAlert: true,
            });
        }
    }

    changeInputHandler = (changeEvent) => {
        const { currentTarget: { name, value } } = changeEvent;
        const { isShowAlert } = this.state;
        const { hideAlert } = this.props;

        this.setState({
            [name]: value,
        });

        if (isShowAlert && (name === 'title' && value.length > 1)) {
            hideAlert();

            this.setState({
                isShowAlert: false,
            })
        }
    }

    render() {
        const { title } = this.state;

        return (
            <form onSubmit={this.submitHandler} className="mb-5">
                <div className="form-group">
                    <label htmlFor="title" className="w-100 text-center">
                        <h1>Post title</h1>
                    </label>
                    <input
                        id="title"
                        name="title"
                        type="text"
                        className="form-control"
                        placeholder="Enter title of post"
                        value={title}
                        onChange={this.changeInputHandler}
                    />
                </div>
                <button className="btn btn-success w-100" type="submit">
                    Create post
                </button>           
            </form>
        )
    }
}

const mapDispatchToProps = {
    createPost,
    showAlert,
    hideAlert,
};

export default connect(null, mapDispatchToProps)(PostForm);