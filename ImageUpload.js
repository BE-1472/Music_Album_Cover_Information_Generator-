import axios from 'axios';
import React,{Component} from 'react';

class Upload extends Component {
    state = {
        coverArt: null
    };

    onfileChange = event => {
        this.setState({ coverArt: event.target.files[0]});
    };

    onFileUpload = () => {
        const cover = new FormData();

        cover.append("myImage", this.state.coverArt, this.state.coverArt.name);

        console.log(this.state.coverArt);

        axios.post("api/uploadfile", cover);
    };

    fileData = () => {
        if(this.state.coverArt){
            return(
                <div>
                    <p>File Name:{this.state.coverArt.name}</p>
                </div>
            );
        }
        else{
            return(
                <div>
                    <br />
                    <h2>Choose file before pressing upload</h2>
                </div>
            );

        }
    };
        
    render() {
        return (
            <div>
                <h3>Image Upload</h3>
                <div>
                    <input type ="image" onChange={this.onFileChange} alt="choose file" />
                    <button onClick={this.onFileUpload}>
                        Upload
                    </button>
                </div>
                {this.fileData()}
            </div>

        )

    }
}

export default Upload;