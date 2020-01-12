import React, {Component} from 'react';

class Posts extends Component {

    state = {
        posts: []
    } 
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(json => {
            // console.log(json);
            this.setState({
                posts: [...json]
            })
            console.log(this.state);
        })
    }

    render() {
        
        return (
            this.state.posts.length ? 
            this.state.posts.map((post) => {
                return (
                    <div className="col">
                        <h1>{post.title}</h1>
                        <p>{post.body}</p>
                    </div>
                )
            }) : <div className="col"><h1>No Posts Found</h1></div>
        )
    }
}

export default Posts;