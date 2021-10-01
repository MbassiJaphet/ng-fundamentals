import { Injectable } from "@angular/core";
import { EventService, ISession } from "../../shared";

@Injectable(

)
export class VoterService {
    
    constructor(private eventService: EventService) {}

    addVoter(session: ISession, voterName: string) {
        session.voters.push(voterName);
    }

    deleteVoter(session: ISession, voterName: string) {
        session.voters.splice(session.voters.findIndex(item => item === voterName),1);
    }

    userHasVoted(session: ISession, voterName: string) {
        return session.voters.some(voter => voter === voterName);
    }
}