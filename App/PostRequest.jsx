import React from 'react';

class PostRequest extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            postId: null
        };
    }

    handleSubmit = (e) => {
        e.preventDefault();
        // Simple POST request with a JSON body using fetch
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title: 'my user code' })
        };
        fetch('https://reqres.in/api/posts', requestOptions)
            .then(response => response.json())
            .then(data => this.setState({ postId: data.id }));        
    }

    render() {
        const { postId } = this.state;
        return (
            <div className="card text-center m-3">
                <h5 className="card-header">Python &gt; Basic &gt; İki Sayıyı Topla</h5>
                <div className="card-body">
                    <form onSubmit = {this.handleSubmit}>
                        <input type="textarea" id="ucode" name="ucode"></input>
                        <br />
                        <input type="submit" value="Gönder"></input>
                        <br />
                    </form>
                    Returned Id: {postId}
                </div>
            </div>
        );
    }
}

export { PostRequest }; 