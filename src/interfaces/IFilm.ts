import { Types } from 'mongoose'

export interface IFilm {
    _id: Types.ObjectId,
    name: string,
    year: number,
	genr: Array<string>,
    type: string,
    director: string,
    describe: string,
    duration: string,
    country: string,
    release: string,
    audio: string,
    subtitles: Array<string>,
    company: string,
    tags: Array<string>,
    series: Array<object>
    img: string
    wallpaper: string
}

export interface IFilmCreate {
    _id: Types.ObjectId,
    name: string,
    year: number,
	genr: Array<string>,
    type: string,
    director: string,
    describe: string,
    duration: string,
    country: string,
    release: string,
    audio: string,
    subtitles: Array<string>,
    company: string,
    tags: Array<string>,
    series: Array<object>
}