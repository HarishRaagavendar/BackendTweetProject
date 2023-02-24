import express from "express";
import { User } from "../Controllers/userSignup.js";
import { login } from "../Controllers/login.js";
import { tweets } from "../Controllers/tweet.js";
import { tweetlist } from "../Controllers/listTweet.js";
import { DeleteTweet } from "../Controllers/deleteTweet.js";

const Route = express.Router();

Route.post("/signup", User);
Route.post("/login", login);
Route.post("/tweet", tweets);
Route.get("/tweetlist", tweetlist);
Route.delete("/deleteTweet", DeleteTweet);

export default Route;
