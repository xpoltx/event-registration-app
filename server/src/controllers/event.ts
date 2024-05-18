import  express from "express";
import { createEvent, deleteEvent, getEvents, getEventsSortedByDate, getEventsSortedByOrganizer, getEventsSortedByTitle, updateEvent } from "../db/event";
import { UpdateEventDto } from "../dtos/events/UpdateEvent.dto";
import { CreateEventDto } from "../dtos/events/CreateEvent.dto";

export const getAllEvents = async(req: express.Request, res: express.Response)=>{
    try {
        const events = await getEvents();

        return res.status(200).json(events);
    } catch (error) {
        return res.status(500).json({error});
    }
}

export const getSortedByTitle = async(req: express.Request, res: express.Response)=>{
    try {
        const events = await getEventsSortedByTitle();

        return res.status(200).json(events);
    } catch (error) {
        return res.status(500).json({error});
    }
}

export const getSortedByDate = async(req: express.Request, res: express.Response)=>{
    try {
        const events = await getEventsSortedByDate();

        return res.status(200).json(events);
    } catch (error) {
        return res.status(500).json({error});
    }
}

export const getSortedByOrg = async(req: express.Request, res: express.Response)=>{
    try {
        const events = await getEventsSortedByOrganizer();

        return res.status(200).json(events);
    } catch (error) {
        return res.status(500).json({error});
    }
}

export const delEvent = async (req: express.Request, res: express.Response) => {
    try {
        const { id } = req.params;
        const deletedEvent = await deleteEvent(id);
        return res.status(200).json(deletedEvent);
    } catch (error) {
        return res.status(500).json({error});
    }
}

export const updEvent = async (req: express.Request, res: express.Response) => {
    try {
        const { id } = req.params;
        const values: UpdateEventDto = req.body;

        if (!values) {
            return res.status(400).json({error: "Mising request body"});
        }
        const updatedEvent = await updateEvent(id, values);

        return res.status(200).json(updatedEvent);
    } catch (error) {
        return res.status(500).json({error});
    }
}

export const createNewEvent = async( req: express.Request, res: express.Response)=>{
    try {
        const values: CreateEventDto = req.body;
        if (!values) {
            return res.status(400).json({error: "Mising request body"});
        }
        const event = await createEvent(values);
        return res.status(200).json(event);
    } catch (error) {
        return res.status(500).json({error});
    }
}