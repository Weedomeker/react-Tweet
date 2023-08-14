export function TweetForm({ onSubmit }) {

  const handleSubmit = (e) => {
    e.preventDefault()

    const name = e.target.name.value;
    const content = e.target.content.value;
    
    const newTweet = {
      name,
      content,
      like: 0,
    }
    //if(name !== undefined && name !== "" && content !== undefined && content !== "")
    onSubmit(newTweet)
}

  return (
    <div>
      <form onSubmit={handleSubmit} className="tweet-form">
        <h4>New Tweet</h4>
        <input  placeholder="name" type="text" name="name" />
        <input  placeholder="content" type="content" name="content" />
        <button type="submit">Envoyer</button>
      </form>
    </div>
  );
}

