
//import axios from 'axios'; for when uploading to database
import React,{ useState} from 'react';

function ImageUpload(){
    const [coverArt, setcoverArt] = useState();
    function handleChange(e) {
        console.log(e.target.files);
     setcoverArt(URL.createObjectURL(e.target.files[0]));
    }
     return (
            <div>
                <h3>Image Upload</h3>
                <div>
                    <input type ="file" accept="image/*" onChange={handleChange} alt="choose file" />
                    <img src={coverArt} width="400" height="400" alt="Images Preview"/>
                    <button >
                        Upload
                    </button>
                </div>
            </div>

        )

    }
export default ImageUpload;
/*import axios from 'axios';
import React,{Component} from 'react';

class Upload extends Component {
    state = {
        coverArt: null,
        imageArt: null
    };

    onfileChange = event => {
        this.setState({ coverArt: event.target.files[0]});
        this.setState({imageArt: URL.createObjectURL(event.target.files[0])});
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
                    <div>
                    <img alt="not found" width={"250px"} src={this.state.imageArt} />
                    </div>
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
                    <input type ="file" accept="image/*" onChange={this.onFileChange} alt="choose file" />
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