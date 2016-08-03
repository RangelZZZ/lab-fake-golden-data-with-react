'use strict';

const App = React.createClass({

    getInitialState: function () {
        return {
            isEditor: true,
            elements: []
        }
    },

    taggle: function () {
        this.setState({
            isEditor: !this.state.isEditor
        });
    },

    render: function () {
        const isEditor = this.state.isEditor;
        return <div>
            <button onClick={this.taggle}>{isEditor ? "Preview" : "Edit"}</button>
            <div className={isEditor ? 'hidden' : ''}>
                <Editor/>
            </div>
            <div className={isEditor ? '' : 'hidden'}>
                <Preview/>
            </div>
        </div>
    }
});

const Editor = React.createClass({
    render: function () {
        return <div>
            hello
        </div>
    }
});

const Preview = React.createClass({
    render: function () {
        return <div>
            world
        </div>
    }
});

ReactDOM.render(<App/>, document.getElementById("content"));