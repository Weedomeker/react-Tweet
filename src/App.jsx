import { useRef, useState } from 'react'
import {Tweet} from './Tweet'
const DEFAULT_TWEET = [{
  id:0, name:"Nina", content:"Hey", like:100
},
]



function App() {
  const [tweets, setTweets] = useState(DEFAULT_TWEET);
  const nameRef = useRef();
  const contentRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault()
    const name = nameRef.current.value;
    const content = contentRef.current.value;
    const newTweet = {
      id: tweets[tweets.length - 1]?.id + 1 ?? 0,
      name,
      content,
      like: 0,
    }

    if(name !== undefined && name !== "" && content !== undefined && content !== "")
    addTweet(newTweet)
}



const addTweet = (tweet) => {
  setTweets([...tweets, tweet]);
  }

  const onDelete = (tweetId) => {
    setTweets(curr => curr.filter(tweet => tweet.id !== tweetId));
  }

  const onLike = (tweetId) => {
    setTweets((curr) => {
      const copyTweet = [...curr];
      const likedTweet = copyTweet.find((tweet) => tweet.id === tweetId);
      likedTweet.like += 1;

      return copyTweet;
    })
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="tweet-form">
        <h4>New Tweet</h4>
        <input ref={nameRef} placeholder="name" type="text" name="name" />
        <input ref={contentRef} placeholder="content" type="content" name="content" />
        <button type="submit">Envoyer</button>
      </form>
<div className="tweet-container">
       {tweets.map((tweet) => {
        
  return (
    <Tweet
    key={tweet.id}
    id={tweet.id}
    name={tweet.name}
    content={tweet.content}
    like={tweet.like}
    onDelete={(id) => {
      onDelete(id)
    }}
    onLike={(id) => {
      onLike(id)
    }}
    />
  )
 })}
      </div>
    </div>
    
  )
}

export default App
