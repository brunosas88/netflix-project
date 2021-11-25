export default interface Series {
	cardImage: string;
	titleImage: string;
	backgroundImage: string;
	relevance: number;
	year: number;
	minAge: number;
	time: number;
	season?: number;
	descpription: string;
	cast: Array<string>;
	genre: Array<string>;
	scenes: Array<string>;
}
