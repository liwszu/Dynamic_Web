// import React, {Component} from 'react';
// import {db} from '../Fire'
// import {Button, Card} from 'react-bootstrap';
// // import Post from '../Components/Post'


// export default class Home extends Component{
    
    
//     state={
//         posts: null
        
//     }

//     // componentWillMount(){
//     //     db.collection('posts')
//     //         .get()
//     //         .then(snapshot => {
                
//     //             const posts = []
//     //             snapshot.forEach(doc => {
//     //                 const data = doc.data()
//     //                 posts.push(data)
//     //             })
//     //         this.setState({posts: posts})
//     //         console.log(snapshot)
//     //         })
//     //         .catch(error => console.log(error))
            
        
//     // }
//     sendPost = () => {
//         Fire.shared
//             .addPost({text: this.state.text.trim(), localUri: this.state.image})
//             .then(ref => {
//                 this.setState({text: text, image: null})
//                 this.props.navigation.goBack()
//             })
//             .catch(error => {
//                 alert(error)
//             })
//     }

    



//     // addNewPost = ({user}) => {
//     //     db.collection('posts')
//     //         .add({

//     //         })
//     // }

 

//     render(){
//         return(
//         <div className = "col=md-6">
//         <h1>hello</h1>
     
//             {/* <div> 
//                 <Card>
//                     <Card.Header > Location <input/></Card.Header>
//                     <Card.Body>
//                         <Card.Title >Author: {props.user && user.displayName}</Card.Title>
//                         <Card.Text>
//                             <input/>
//                         </Card.Text>
//                         <Button variant="primary">Go somewhere</Button>
//                     </Card.Body>
//                 </Card>
//             </div> */}

//             {/* <Post/> */}
            
//             {this.state.posts && this.state.posts.map(post => {
//                 return(
//                     <div>
                        
//                         <div>
//                             <Card>
//                                 <Card.Header> {post.title}</Card.Header>
//                                 <Card.Body>
//                                     <Card.Title>{post.text}</Card.Title>
//                                     <Card.Text>
//                                     {post.timestamp.toDate().toString()}
//                                     </Card.Text>
//                                     <Button variant="primary">Go somewhere</Button>
//                                 </Card.Body>
//                             </Card>
//                         </div>

                        

//                     </div>
//                 )
//             })
//             }
            
//             </div>
            
       
//         )}
// }

// import React, {Component} from 'react'
// import FireFunction from '../FireFunction'
// class Home extends Component {
//     // state = { title: '', text: '' }
//     // constructor(props) {
//     //     super(props);
//     //     this.state = {value: ''};
    
//     //     this.onChangeTitle = this.onChangeTitle.bind(this);
//     //     this.onChangeText = this.onChangeText.bind(this);
//     //     this.onSubmit = this.handleSubmit.bind(this);
//     //   }
//     state={
        
//         text:'',
//         title: '',
     
//     errorMessage: null
    
// }
    
    
  
  
    // sendPost = () => {
        
    //         FireFunction.shared
    //         .addPost({text: this.state.text.trim(), title: this.state.title.trim()})
    //         .then(ref => {
    //             this.setState({text: ref.text, title: ref.title})
    //             // this.props.navigation.goBack()
    //         })
    //         .catch(error => {
    //             alert(error)
    //         })
    // }
  
    
  
    // render() {
    //   return (
        
          
//           <div>
//             <h1 category='h4'>Post Details</h1>
//             <input
//               placeholder='Enter title of the post'
//             //   style={{ margin: 20 }}
//             //   value={this.state.title}
//             // onChangeTitle={(title) => this.setState({title})}
          
 
//             />
//             <input
//               placeholder='Enter text'
//             //   multiline={true} 
//             //   numberOfLines={5} 

//             //   style={{ margin: 20 }}
//             //   value={this.state.user}
//             // value={this.state.text}
//             // onChangeText={(text) => this.setState({text})}
            
 
//             />
//             <button
//               status='success'
//               onClick={this.sendPost}
//             //   disabled={
//             //     this.state.title && this.state.text
//             //       ? false
//             //       : true}
//               >
//               Add post
//             </button>
//           </div>
        
//       )
//     }
//   }
  
//   export default Home
// 
import React, {Component} from 'react';
import firebase, {db,fire} from './src/Fire'
import moment from 'moment'

    export default class Home extends React.Component{

        renderPost = post => {
            const list = (
                <ul>
                  {props.posts.map((post) =>
                    <li key={post.id}>
                      {post.title}
                    </li>
                  )}
                </ul>
              );
            return(
                <div>
                    <div>
                        <div >
                            
                                 <h1 >
                                    {post.title}
                                </h1>
                                <h1 >
                                    {moment(post.timestamp).fromNow()}
                                </h1>
                            
                        </div>
    
                        <h1 >{post.text}</h1>
                
                    </div>
                </div>
            )
        }
        
        render(){
            
            return(
                <div>
                    <div>
                        <h1>Post Page</h1>
                    </div>
                {/* </View> */}
    
                <li
                    
                    data={posts}
                    renderItem={({ item }) => this.renderPost(item)}
                    keyExtractor ={item => item.id}
                    // showsVerticalScrollIndicator={false}
                    >
    
                </li>
                
                </div>
    
            )
        }
    }

   
    // ReactDOM.render(
    //     <Blog posts={posts} />,
    //     document.getElementById('root')
    //   )

    //             <h2>{currUser[0] && currUser[0].displayName}</h2>
    //             <AddPost postFunction={postFunction} />
    //             <div >
    //                 {}
    //                 {posts[0] && posts.map((posts, i) => 
    //                 <PostSection user={user[i] && user[i]}  
    //                 author={posts.user} 
    //                 title={posts.title} 
    //                 text={posts.text}  />)}
    //             </div>
    //         </div>
            
    // }


// }