import mongoose from "mongoose";
import { CreateEventDto } from "../dtos/events/CreateEvent.dto";
import { UpdateEventDto } from "../dtos/events/UpdateEvent.dto";

const EventSchema = new mongoose.Schema({
    title: {type: String, required: true},
    description: {type: String, required: true},
    eventDate: {type: String, required: true},
    organizer: {type: String, required: true},
});

export const EventModel = mongoose.model('Event', EventSchema);

export const getEvents = () => EventModel.find();

export const createEvent = (values: CreateEventDto) => new EventModel(values).save().then((user)=> user.toObject()).catch(err => console.log(err));
export const deleteEvent = (id: string) => EventModel.findByIdAndDelete({_id: id});
export const updateEvent = (id: string, values: UpdateEventDto ) => EventModel.findByIdAndUpdate({ _id: id }, values, {new: true});
