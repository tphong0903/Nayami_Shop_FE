import axios from "axios";
import { useState } from "react";

export default function BarcodeViewer({ productId }) {
  const [pdfUrl, setPdfUrl] = useState(null);

  const fetchBarcode = async () => {
    try {
      const response = await axios.get(`/api/products/barcode/pdf/${productId}`, {
        responseType: "blob",
      });

      const url = window.URL.createObjectURL(
        new Blob([response.data], { type: "application/pdf" })
      );
      setPdfUrl(url);
    } catch (error) {
      console.error("Không thể tải barcode:", error);
    }
  };

  return (
    <div>
      <button className="btn btn-primary" onClick={fetchBarcode}>
        In Barcode
      </button>

      {pdfUrl && (
        <div className="mt-3" style={{ height: "500px" }}>
          <iframe
            src={pdfUrl}
            title="Barcode PDF"
            width="100%"
            height="100%"
          />
        </div>
      )}
    </div>
  );
}
