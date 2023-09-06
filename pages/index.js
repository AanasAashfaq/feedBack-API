import { useRef,useState } from "react";

function HomePage() {

  const [loadedItems, setLoadedItems] = useState([])
  const emailRef= useRef();
  const feebackRef =  useRef();

   function submitHandler(event){
    event.preventDefault()
    const emailInput = emailRef.current.value;
    const feedbackInput = feebackRef.current.value;

    const data ={email: emailInput , text:feedbackInput};

    console.log(data);

    fetch('/api/feedback',{
      method:'POST',
      body:JSON.stringify(data),
      headers:{
        'Content-Type':'application/json'
      }
    }).then((resposne) => resposne.json())
    .then((data) => console.log(data));
  }

  function loadFeedbackHandler()
  {
    fetch('/api/feedback').then((resposne) => resposne.json())
    .then((data) => setLoadedItems(data.feedback));

    console.log(loadedItems)
  }

  return (
    <div>
    <form onSubmit={submitHandler}>
      <div>
        <label htmlFor="email">Enter your Email:</label>
        <input id="email" type="email" ref={emailRef}/>
      </div>
      <div>
        <label htmlFor="feedback">Enter your Feedback:</label>
        <textarea id="feedback" rows={5} ref={feebackRef} />
      </div>
      <button>submit</button>
    </form>
    <hr />
    <button onClick={loadFeedbackHandler}>Load Feedback</button>
    <ul>
      {loadedItems.map((e)=>(<li key={e.id}>{e.email}</li>))}
    </ul>
    </div>
  );
}

export default HomePage;
