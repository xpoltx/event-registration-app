import express from "express";
import events from "./events";
import participants from "./participants";
import path from "path";

const router = express.Router();

export default (): express.Router => {
    router.get('/', (req, res) =>{
        res.sendFile(path.join(__dirname, '../../../client/pages/index.html'));
    });
    events(router);
    participants(router);
    return router;
}