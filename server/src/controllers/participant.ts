import express from "express";
import { createParticipant, deleteParticipant, getAllParticipants, getParticipantsByEvent, updateParticipant } from "../db/participant";
import { UpdateParticipantDto } from "../dtos/participants/UpdateParticipant.dto";
import { CreateParticipantDto } from "../dtos/participants/CreateParticipant.dto";

export const getParticipants = async(req: express.Request, res: express.Response)=>{
    try {
        const users = await getAllParticipants();

        return res.status(200).json(users);
    } catch (error) {
        console.log(error);
        return res.status(500).json({error});
    }
}

export const getEventParticipants = async(req: express.Request, res: express.Response)=>{
    try {
        const {eventId} = req.params;
        const users = await getParticipantsByEvent(eventId);

        return res.status(200).json(users);
    } catch (error) {
        console.log(error);
        return res.status(500).json({error});
    }
}

export const delParticipant = async (req: express.Request, res: express.Response) => {
    try {
        const { id } = req.params;
        const deletedUser = await deleteParticipant(id);
        return res.status(200).json(deletedUser);
    } catch (error) {
        console.log(error);
        return res.status(500).json({error});
    }
}

export const updParticipant = async (req: express.Request, res: express.Response) => {
    try {
        const { id } = req.params;
        const values: UpdateParticipantDto = req.body;

        if (!values) {
            return res.status(400).json({error: "Mising request body"});
        }
        const updatedUser = await updateParticipant(id, values);

        return res.status(200).json(updatedUser);
    } catch (error) {
        console.log(error);
        return res.status(500).json({error});
    }
}

export const createNewParticipant = async( req: express.Request, res: express.Response)=>{
    try {
        const values: CreateParticipantDto = req.body;
        if (!values) {
            return res.status(400).json({error: "Mising request body"});
        }
        const user = await createParticipant(values);
        return res.status(200).json(user);
    } catch (error) {
        console.log(error);
        return res.status(500).json({error});
    }
}