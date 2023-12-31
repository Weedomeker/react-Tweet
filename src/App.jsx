import { useState } from 'react'
import {TweetForm} from './TweetForm';
import TweetList from './TweetList';

const DEFAULT_TWEET = [{
  id:0, name:"Nina", content:"Hey", like:100
},
];

const useTweet = () => {
  const [tweets, setTweets] = useState(DEFAULT_TWEET);

const addTweet = (tweet) => {
  setTweets((curr) => {
    const newTweet = {
    id: curr[curr.length - 1]?.id + 1 || 0,
    name: tweet.name,
    content: tweet.content,
    like: 0,
  };

   return [...tweets, newTweet];
  });
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
  return { onLike, onDelete, addTweet, tweets }
}

function App() {

  const { onLike, onDelete, addTweet, tweets } = useTweet()

  return (
  <div>
    <TweetForm onSubmit={addTweet} />
    <TweetList tweets={tweets} onDelete={onDelete} onLike={onLike}/>
    </div>
  )
}

export default App
