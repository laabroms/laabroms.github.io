import React from 'react';
import './keywords.css';

class Keywords extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            keywords: '',
        }
    }

    render() {
        return (
            <div>
                <p className="titleText1">
                12. What keywords would you type in a search bar to find this book and
                other books like it?
                </p>

                <textarea className="textarea" required value={this.state.keywords}
                onChange={(e) => this.setState({ keywords: e.target.value })}></textarea>
            </div>
        );
    }
}

export default Keywords;