import { tweetModel } from "../Schema/tweetSchema.js"

export const DeleteTweet = (req, res) => {

    tweetModel.deleteOne({
        tweetId: req.params.tweetId
    }, (err, data) => {
        return res.send({
            status: 200,
            message: "Data deleted",
            data: data
        });
    })
}
