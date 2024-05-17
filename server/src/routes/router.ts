import express from "express";
import events from "./events";
import participants from "./participants";

const router = express.Router();

export default (): express.Router => {
    events(router);
    participants(router);
    return router;
}