"use client"
import React from "react"
import { Bar, BarChart, ResponsiveContainer, XAxis, Tooltip, } from "recharts"
// Legend
const data = [
    { name: "01", last6Days: 400, lastWeek: 240 },
    { name: "02", last6Days: 300, lastWeek: 139 },
    { name: "03", last6Days: 500, lastWeek: 380 },
    { name: "04", last6Days: 200, lastWeek: 390 },
    { name: "05", last6Days: 278, lastWeek: 480 },
]

export function MembershipChart() {
    return (
        <div className="h-[300px] w-full p-4">
            <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data} barGap={8}>
                    <XAxis
                        dataKey="name"
                        axisLine={false}
                        tickLine={false}
                        tick={{ fill: '#9ca3af', fontSize: 12 }}
                    />
                    <Tooltip
                        cursor={{ fill: 'transparent' }}
                        contentStyle={{ borderRadius: '10px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                    />
                    {/* Figma ke mutabiq Legend */}
                    {/* <Legend verticalAlign="top" align="left" iconType="circle" wrapperStyle={{ paddingBottom: '20px' }} /> */}

                    {/* Pehli Bar: Last 6 Days (Teal) */}
                    <Bar
                        dataKey="last6Days"
                        name="Last 6 days"
                        fill="#2D8B8B"
                        radius={[2, 2, 0, 0]}
                        barSize={6}
                    />

                    {/* Doosri Bar: Last Week (Light Grey/Teal) */}
                    <Bar
                        dataKey="lastWeek"
                        name="Last Week"
                        fill="#CBD5E1"
                        radius={[2, 2, 0, 0]}
                        barSize={6}
                    />
                </BarChart>
            </ResponsiveContainer>
        </div>
    )
}