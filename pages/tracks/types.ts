export interface IComments {
    _id: string;
    username: string;
    text: string;
}
export interface ITrack {
    _id: string;
    name: string;
    text: string;
    artist: string;
    audio: string;
    picture: string;
    listens: number;
    comments: IComments[];
}