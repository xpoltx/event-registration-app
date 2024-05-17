import { Router } from "express";
import { createNewEvent, delEvent, getAllEvents, updEvent } from "../controllers/event";

export default (router: Router)=>{
    router.post('/events', createNewEvent);
    router.get('/events', getAllEvents);
    router.delete('/event/del/:id', delEvent);
    router.patch('/event/upd/:id', updEvent);
}