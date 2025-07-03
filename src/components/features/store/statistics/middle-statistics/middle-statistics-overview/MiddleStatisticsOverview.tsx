import cn from 'clsx'
import {
	Area,
	AreaChart,
	CartesianGrid,
	ResponsiveContainer,
	Tooltip,
	XAxis
} from 'recharts'

import { Title } from '@/components/ui/common'
import { ErrorLoadData } from '@/components/ui/elements'

import { IMonthlySales } from '@/shared/types'

import { formatPrice } from '@/utils/string/format-price'

import styles from './MiddleStatisticsOverview.module.scss'

interface Props {
	data: IMonthlySales[]
	className?: string
}

export function MiddleStatisticsOverview({ data, className }: Props) {
	return (
		<div className={cn(styles.root, className)}>
			<Title className={styles.title} size='md'>
				Прибыль
			</Title>
			<div className={styles.chart}>
				{data.length !== 0 ? (
					<ResponsiveContainer>
						<AreaChart
							accessibilityLayer
							className={styles.area}
							data={data}
							margin={{
								top: 10,
								right: 0,
								left: 0,
								bottom: 0
							}}
						>
							<CartesianGrid vertical={false} />
							<XAxis
								dataKey='date'
								tickLine={false}
								axisLine={false}
								tickMargin={8}
							/>
							<Tooltip
								labelFormatter={date => `Дата: ${date} `}
								formatter={value => [`${formatPrice(Number(value))}`, 'Цена']}
							/>
							<Area
								type='natural'
								dataKey='value'
								stroke='var(--primary)'
								fill='var(--primary)'
							/>
						</AreaChart>
					</ResponsiveContainer>
				) : (
					<ErrorLoadData text='Нет данных...' />
				)}
			</div>
		</div>
	)
}
