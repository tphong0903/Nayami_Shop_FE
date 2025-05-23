import dayjs from 'dayjs';
import { useEffect, useState } from 'react';
import Chart from 'react-apexcharts';
import MyDatePicker from './MyDatePicker';
import axios from 'axios';
import Swal from 'sweetalert2';
import { formatCurrency } from '~/utils/formatCurrency';


export default function ProfitChart() {
  const startOfMonth = dayjs().startOf('month');
  const endOfMonth = dayjs().endOf('month');

  const [dateRange, setDateRange] = useState([startOfMonth, endOfMonth]);
  const [chartDataY, setChartDataY] = useState([{ name: 'Lợi nhuận', data: [] }]);
  const [chartDataX, setChartDataX] = useState([]);

  const getRevenueByTime = (startDate, endDate) => {
    const dashboardDateDTO = {
      startDate: startDate.format('YYYY-MM-DD'),
      endDate: endDate.format('YYYY-MM-DD'),
    };

    axios
      .post(`${import.meta.env.VITE_API_BASE_URL}/api/dashboard/profitByTime`, dashboardDateDTO)
      .then((response) => {
        const newChartDataY = response.data.data.data;
        const newChartDataX = response.data.data.time
        setChartDataY([{ name: 'Doanh thu', data: newChartDataY }]);
        setChartDataX(newChartDataX);
      })
      .catch(() => {
        Swal.fire('Lỗi!', 'Không thể lấy dữ liệu.', 'error');
      });
  };
  useEffect(() => {
    getRevenueByTime(dateRange[0], dateRange[1]);
  }, [dateRange]);
  const options = {
    chart: {
      type: 'area',
      toolbar: { show: false },
    },
    dataLabels: { enabled: false },
    stroke: { curve: 'smooth' },
    xaxis: {
      categories: chartDataX,
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
        formatter: (value) => `${formatCurrency(value)}`,
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
          <Chart options={options} series={chartDataY} type='area' height={350} />
        </div>
      </div>
    </div>
  )
}
