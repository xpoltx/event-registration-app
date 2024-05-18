import { Router } from "express";
import { createNewParticipant, delParticipant, getByEmail, getByName, getEventParticipants, getParticipants } from "../controllers/participant";
import { updEvent } from "../controllers/event";

export default (router: Router)=>{
    router.post('/event/participant', createNewParticipant);
    router.get('/participants', getParticipants);
    router.get('/event/:eventId/participants', getEventParticipants);
    router.get('/event/:eventId/participants/:name', getByName);
    router.get('/event/:eventId/participants/:email', getByEmail);
    router.delete('/participant/del/:id', delParticipant);
    router.patch('/participant/upd/:id',updEvent);
}