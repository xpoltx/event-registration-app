import { Router } from "express";
import { createNewEvent, delEvent, getAllEvents, getSortedByDate, getSortedByOrg, getSortedByTitle, updEvent } from "../controllers/event";

export default (router: Router)=>{
    router.post('/events', createNewEvent);
    router.get('/events', getAllEvents);
    router.get('/events/title', getSortedByTitle);
    router.get('/events/date', getSortedByDate);
    router.get('/events/org', getSortedByOrg);
    router.delete('/event/del/:id', delEvent);
    router.patch('/event/upd/:id', updEvent);
}