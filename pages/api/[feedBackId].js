import { buildFeedbackPath, extractFeedback } from "./feedback";

function FeedBackIdHandler(req,res)
{
    const FeedBackId = req.query.feedBackId;
    console.log(FeedBackId);
    const filePath = buildFeedbackPath();
    const data = extractFeedback(filePath);

    const selectedObject = data.find(x => x.id === FeedBackId) 

    res.status(200).json({feedBack: selectedObject})
}

export default FeedBackIdHandler;