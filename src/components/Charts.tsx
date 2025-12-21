"use client"

import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip, Legend, BarChart, Bar, XAxis, YAxis, CartesianGrid } from "recharts"

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8'];

export function SimplePieChart({ data, title }: { data: { name: string; value: number }[], title: string }) {
  return (
    <div className="h-[300px] w-full flex flex-col items-center">
      <h3 className="text-lg font-semibold mb-2 text-center">{title}</h3>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={({ name, percent }) => `${name} ${(percent ? percent * 100 : 0).toFixed(0)}%`}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}

export function SimpleBarChart({ data, title, xKey, yKey }: { data: any[], title: string, xKey: string, yKey: string }) {
  return (
    <div className="h-[300px] w-full flex flex-col items-center">
      <h3 className="text-lg font-semibold mb-2 text-center">{title}</h3>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey={xKey} />
          <YAxis />
          <Tooltip cursor={{fill: 'transparent'}} />
          <Legend />
          <Bar dataKey={yKey} fill="#8884d8" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
