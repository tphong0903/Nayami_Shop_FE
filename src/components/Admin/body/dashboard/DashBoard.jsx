import Chart from 'react-apexcharts';
import ChartCardSection from './ChartCardSection';
import RevenueChart from './RevenueChart';
import ProfitChart from './ProfitChart';
import BestSelling from './BestSelling';
import OutOfStock from './OutOfStock';
export default function DashBoard() {
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
    yaxis: { title: { text: 'Số lượng' } },
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

  const series = [
    { name: 'Doanh thu', data: [30, 50, 35, 60, 70, 90, 100] },
  ];
  return (
    <div className="page-body">
      <div className="container-fluid">
        <div className="row">
          <ChartCardSection />
          <RevenueChart />
          <ProfitChart />
          <BestSelling />
          <OutOfStock />
        </div>
      </div>
    </div>

  )
}
