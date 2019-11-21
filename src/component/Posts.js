import React, { Component } from 'react'

export default class Posts extends Component {
   
   state={
       posts:[]
   }
   
    //Para cargar primero los datoa antes de renderizar usamos CompDidMnt
   //async await es para esperar la respuesta de la peticion primero porque tomara tiempo
   //const res es para guardar loque nos envie el fetch en la constante res de response
   //vamos a guardar los data en un estado, state
   //hemos agregado el state de la clase para ser un post con un array que está vacio
   //ahora vamos a jalar con this.setState, que data se pase dentro del state.posts
    async componentDidMount(){
      const res = await fetch('https://jsonplaceholder.typicode.com/posts')
      const data = await res.json();
      console.log(data);
      this.setState({posts: data})
    }
   
    render() {
        return (
            <div>
                <h1>POSTSs</h1>
                {
                    this.state.posts.map(post =>{
                        return <div key={post.id}>
                            <h1>{post.title}</h1>
                            <p>{post.body}</p>
                        </div>
                    })
                }
            </div>
        )
    }
}
//desde el estado y su parte posts vamos a recorrer por cada post que empiece a recorrer
//voy a returnar un elemento html entre comillas (un jsx realmente)