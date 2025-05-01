import styles from './Table.module.scss'

export interface Column {
	key: string
	label: string
}

type TableData = {
	name: string
	age: number
	email: string
}
interface Props {
	columns: Column[]
	data: TableData[]
}

export function Table({ columns, data }: Props) {
	return (
		<table className={styles.table}>
			<thead>
				<tr>
					{columns.map(column => (
						<th key={column.key}>{column.label}</th>
					))}
				</tr>
			</thead>
			<tbody>
				{data.map((row, rowIndex) => (
					<tr key={rowIndex}>
						{columns.map(column => (
							<td key={column.key}>{row[column.key as keyof TableData]}</td>
						))}
					</tr>
				))}
			</tbody>
		</table>
	)
}
