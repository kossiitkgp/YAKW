export interface IEventDate {
  day: number;
  month: number;
  year: number;
}
export interface IEvent {
  title: string;
  description: string;
  date: IEventDate;
  time: string;
  location: string;
  poster_img: string;
  id: string;
}
