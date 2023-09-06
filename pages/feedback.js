
import { extractFeedback, buildFeedbackPath } from "./api/feedback";
import { Fragment, useState } from "react";



function FeedBack(props) {
    const [loadedObj , setLoadedObj]= useState();
    function detailHandler(id)
{
    fetch(`/api/${id}`).then(response => response.json()).then(data=>{

        setLoadedObj(data.feedBack);
        console.log(data.feedBack)
    }
    )
}
    return (
        <Fragment>
            {loadedObj && <p>{loadedObj.feebackText}</p>}
        <ul>{props.items.map((e) => (<li key={e.id}>{e.email}
        <button onClick={detailHandler.bind(null, e.id)}>Give Me Details</button></li>))}</ul>
        </Fragment>
    );
}

export async function getStaticProps() {
    const filePath = buildFeedbackPath();
    const data = extractFeedback(filePath);
    console.log(data);
    return {
        props: {
            items: data
        }
    }
}

export default FeedBack;