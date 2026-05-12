import  { useState } from 'react';

const App = () =>{
  const [liked, setLiked] = useState(false);

 let likeButtonStyle = {
    fontSize: '44px',
    cursor: 'pointer',
    color: liked ? 'red' : 'white',
  };
  return(
    <div >
   
      <p style={likeButtonStyle} onMouseEnter={() => setLiked(!liked)} onMouseLeave={() => setLiked(!liked)}>
        {liked ? "You liked this." : "You haven't liked this yet."} <br /><br />
        {liked ? <i className="fas fa-heart"></i> : <i className="far fa-heart"></i>}
      </p>
    </div>
  )
}
export default App;