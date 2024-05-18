import mongoose from "mongoose";
import { CreateParticipantDto } from "../dtos/participants/CreateParticipant.dto";
import { UpdateParticipantDto } from "../dtos/participants/UpdateParticipant.dto";

const ParticipantSchema = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    dob: {type: String, required: true},
    heardAbout: {type: String, required: true},
    eventId: {type: String, required: true}
});

export const ParticipantModel = mongoose.model('Participant', ParticipantSchema);

export const getAllParticipants = () => ParticipantModel.find();
export const getParticipantsByEvent = (eventId: string) => ParticipantModel.find({eventId : eventId});

export const createParticipant = (values: CreateParticipantDto) => new ParticipantModel(values).save().then((participant) => participant.toObject());
export const deleteParticipant = (id: string) => ParticipantModel.findByIdAndDelete({_id: id});
export const updateParticipant = (id: string, values: UpdateParticipantDto ) => ParticipantModel.findByIdAndUpdate({ _id: id }, values, {new: true});