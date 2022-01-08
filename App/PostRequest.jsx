import React from 'react';

class PostRequest extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            postId: null,
            practice_id: 2,
            user_code: null,
            run_type: "submit",
            result: "",
            error_message: "",
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
        const { practice_id} = this.state;
        const { result} = this.state;
        const { error_message} = this.state;

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
                </div>
                <div className="card-body">                    
                    <p>Returned Id: {postId}</p>
                    <p>Result: {result}</p>
                    <p>Error message: {error_message}</p>
                </div>
            </div>
        );
    }
}

export { PostRequest }; 