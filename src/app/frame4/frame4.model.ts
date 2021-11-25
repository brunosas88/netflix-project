export interface DataRequested {
	token:string;
	users:Array<{
		id: number,
		name: string,
		avatarUrl: string
	}>
}
