export interface IMainStatistics {
	id: number
	name: string
	value: number
}

export interface IMonthlySales {
	date: string
	value: number
}

export interface ILastUsers {
	id: string
	name: string
	email: string
	total: number
	picture: string
}

export interface IMiddleStatistics {
	monthlySales: IMonthlySales[]
	lastUsers: ILastUsers[]
}
