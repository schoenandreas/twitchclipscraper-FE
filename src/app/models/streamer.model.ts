export class Streamer {
    streamerName: string = "";
    recordings: Array<string> = [];

    constructor(streamerName:string,recordings:Array<string>){
        this.streamerName = streamerName;
        this.recordings = recordings;
    }
}