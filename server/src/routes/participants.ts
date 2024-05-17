import { Router } from "express";
import { createNewParticipant, delParticipant, getEventParticipants, getParticipants } from "../controllers/participant";
import { updEvent } from "../controllers/event";

export default (router: Router)=>{
    router.post('/event/participant', createNewParticipant);
    router.get('/participants', getParticipants);
    router.get('/event/:eventId/participants', getEventParticipants);
    router.delete('/participant/del/:id', delParticipant);
    router.patch('/participant/upd/:id',updEvent);
}