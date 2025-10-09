import FileDownloadIcon from '@mui/icons-material/FileDownload';
import axios from 'axios';

export default function ExportExcel() {
  const handleExport = () => {
    console.log("Đang in");
    downloadReport()
  };
  async function downloadReport() {
    try {
      const response = await axios.get('/api/dashboard/report/excel', {
        responseType: 'blob',
      });

      const disposition = response.headers["content-disposition"];
      const filenameMatch = disposition?.match(/filename="?(.*)"?/);
      const filename = filenameMatch?.[1] || "report.xlsx";

      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", filename);
      document.body.appendChild(link);
      link.click();
      link.remove();

    } catch (error) {
      console.error("Lỗi khi tải báo cáo:", error);
      alert("Có lỗi khi tạo báo cáo");
    }
  }
  return (
    <div className="col-12 d-flex justify-content-end align-items-center mb-3">
      <button
        className='btn btn-animation btn-md fw-bold cart-button'
        color='#0da487'
        onClick={handleExport}
      >
        <FileDownloadIcon />
        Export Report
      </button>
    </div>
  );
}
