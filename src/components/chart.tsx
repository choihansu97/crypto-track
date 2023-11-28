import {useQuery} from "@tanstack/react-query";
import {getCoinChartData} from "../apis/api";
import Loading from "./loading";
import ApexChart from 'react-apexcharts';
import {darkTheme} from "../theme/theme";

interface ChartProps {
    state: string;
}

interface IHistorical {
    time_open: string;
    time_close: number;
    open: number;
    high: number;
    low: number;
    close: string;
    volume: number;
    market_cap: number;
}

export default function Chart(props: ChartProps) {
    const {isLoading, data} = useQuery<IHistorical[]>({
        queryKey: ["ohlcv", props.state],
        queryFn: () => getCoinChartData(props.state),
        refetchInterval: 100000
    });

    return (
        <>
            {isLoading ?
                <Loading/> :
                <ApexChart
                    type={"line"}
                    series={[
                        {
                            name: "Price",
                            data: Array.isArray(data) ? data.map(price => parseFloat(price.close)) : [],
                        },
                    ]}
                    options={{
                        theme: {mode: darkTheme ? "dark" : "light"},
                        chart: {
                            height: 500,
                            width: 860,
                            toolbar: {show: false},
                            background: "transparent"
                        },
                        grid: {
                            show: false,
                        },
                        yaxis: {
                            show: false,
                        },
                        xaxis: {
                            axisBorder: {show: false},
                            axisTicks: {show: false},
                            labels: {
                                show: false,
                            },
                            type: "datetime",
                            categories: data?.map(price =>
                                new Date(price.time_close * 1000).toISOString()
                            ),
                        },
                        stroke: {
                            curve: "smooth",
                            width: 4,
                        },
                        fill: {
                            type: "gradient",
                            gradient: {
                                gradientToColors: ["#0be881"],
                                stops: [0, 100],
                            },
                        },
                        colors: ["#0fbcf9"],
                        tooltip: {
                            y: {
                                formatter: value => `$${value.toFixed(2)}`,
                            },
                        },
                    }
                    }
                />
            }
        </>
    )
}