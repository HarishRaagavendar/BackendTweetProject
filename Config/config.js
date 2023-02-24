import morgan from "morgan";

const logger = morgan("combined");

const mongoUrl = `mongodb+srv://harishraagavendar03:harishraagavendar12345@tweetproj.su8t03f.mongodb.net/?retryWrites=true&w=majority`;

export { logger, mongoUrl };
