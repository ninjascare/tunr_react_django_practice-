import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

class ArtistList extends Component {
    state = {
        artists: []
    }

   componentDidMount() {
        axios.get('/api/artists').then((res)=>{
            console.log(res.data)
            this.setState({
                artists: res.data
            })
        })
    }

    render() {
        return (
            <div>
                <h1>All Artists</h1>
                {this.state.artists.map((artist)=>(
                    <div key={artist._id}>
                        <Link to={`/artist/${artist.id}`}>
                        {artist.name}
                        </Link>
                    </div>
                ))}
            </div>
        );
    }
}

export default ArtistList;