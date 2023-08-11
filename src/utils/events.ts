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
	link: string;
}

function eventDateToJSDate(event_date: IEventDate): Date {
	const date = new Date();

	date.setFullYear(event_date.year);
	date.setMonth(event_date.month - 1); // It's zero indexed :dead:
	date.setDate(event_date.day);

	return date;
}

function isEventUpcoming(event: IEvent): boolean {
	const date_now = new Date();

	return eventDateToJSDate(event.date) >= date_now;
}

function eventDatewiseSort(event1: IEvent, event2: IEvent): number {
	return eventDateToJSDate(event1.date) < eventDateToJSDate(event2.date) ? -1 : 1;
}

export function getUpcomingEvents(events: IEvent[]): IEvent[] {
	return events.filter(isEventUpcoming).sort(eventDatewiseSort);
}

export function getFormattedDate(date: IEventDate): string {
	return eventDateToJSDate(date).toLocaleString('en-in', {
		month: 'short',
		day: '2-digit'
	})
}