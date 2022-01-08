import React from 'react';

class PostRequest extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            practice_id: 2,
            user_code: "print(num1 + num2)",
            run_type: "submit",
            result: "",
            error_message: "",
        };
    }

    handleUserCodeChange = (e) => {
        this.setState({user_code: e.target.value});
    }

    handleSubmit = (e) => {
        e.preventDefault();
        // Simple POST request with a JSON body using fetch
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'Central-Api-Key':'u5zgIU-FAx_dLUAE29t-xw' },
            body: JSON.stringify({ "practice_id": this.state.practice_id, "user_code": this.state.user_code, "run_type": this.state.run_type})
        };
        fetch('https://reqres.in/api/posts', requestOptions)
            .then(response => response.json())
            .then(data => this.setState({ result: data.practice_run_result.successful }));        
    }

    render() {
        const { result} = this.state;
        const { error_message} = this.state;

        return (
            <div className="card text-center m-3">
                <h5 className="card-header">Python &gt; Basic &gt; İki Sayıyı Topla</h5>
                <div className="card-body">
                    <form onSubmit = {this.handleSubmit}>
                        <input type="textarea" id="ucode" name="ucode" value={this.state.user_code} onChange={this.handleUserCodeChange}></input>
                        <br />
                        <input type="submit" value="Gönder"></input>
                        <br />
                    </form>
                </div>
                <div className="card-body">
                    <p>Result: {result}</p>
                    <p>Error message: {error_message}</p>
                </div>
            </div>
        );
    }
}

export { PostRequest }; 