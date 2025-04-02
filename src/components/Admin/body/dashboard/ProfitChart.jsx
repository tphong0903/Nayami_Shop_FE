import dayjs from 'dayjs';
import { useEffect, useState } from 'react';
import Chart from 'react-apexcharts';
import MyDatePicker from './MyDatePicker';

const options = {
  chart: {
    type: 'area',
    toolbar: { show: false },
  },
  dataLabels: { enabled: false },
  stroke: { curve: 'smooth' },
  xaxis: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
  },
  yaxis: {
    title: {
      text: 'Lợi nhuận',
      style: {
        fontFamily: '"Public Sans",sans-serif',
        fontSize: '14px',
      },
    },
    labels: {
      style: {
        fontFamily: '"Public Sans",sans-serif',
        fontSize: '12px',
      },
      formatter: (value) => `${value} VND`,
    },
  },
  colors: ['#0da487', '#33FF77'],
  fill: {
    type: 'gradient',
    gradient: { shadeIntensity: 0.4, opacityFrom: 0.9, opacityTo: 0.3 },
  },
  markers: {
    size: 5,
    colors: ['#FFFFFF'],
    strokeColor: '#0da487',
    strokeWidth: 3
  },
};

export default function ProfitChart() {
  const startOfMonth = dayjs().startOf('month');
  const endOfMonth = dayjs().endOf('month');
  const [dateRange, setDateRange] = useState([startOfMonth, endOfMonth]);
  const [filteredSeries, setFilteredSeries] = useState([]);
  const originalSeries = [
    { name: 'Doanh thu', data: [30, 50, 35, 60, 70, 90, 100] },
  ];
  useEffect(() => {
    setFilteredSeries(originalSeries);
  }, [dateRange]);
  return (
    <div className="col-xl-6">
      <div className="card o-hidden card-hover">
        <div className="card-header border-0 pb-1">
          <div className="card-header-title" style={{ display: 'flex', justifyContent: 'space-between' }}>
            <h4>Báo cáo lợi nhuận</h4>
            <MyDatePicker dateRange={dateRange} setDateRange={setDateRange} />
          </div>
        </div>
        <div className="card-body p-0">
          <Chart options={options} series={filteredSeries} type='area' height={350} />
        </div>
      </div>
    </div>
  )
}
