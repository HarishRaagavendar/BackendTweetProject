import { tweetModel } from "../Schema/tweetSchema.js";

export const tweetlist = (req, res) => {
    tweetModel.find((err, data) => {
        if (err) {
            console.log(err);
        } else {
            return res.send({
                status: 200,
                message: "Data found",
                data: data,
            });
        }
    });
};
