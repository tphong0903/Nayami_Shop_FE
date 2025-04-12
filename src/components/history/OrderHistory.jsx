import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import { useState } from "react";

export default function OrderHistory() {

    const [selectedValue, setSelectedValue] = useState("All");

    const handleChange = (event, newValue) => {
        if (newValue !== null) {
            setSelectedValue(newValue);
        }
    };

    return (
        <>
            <div className="container-fluid-lg">
                <div className="row">
                    <div className="col-12 d-flex justify-content-center">
                        <ToggleButtonGroup
                            value={selectedValue}
                            exclusive
                            onChange={handleChange}
                        >
                            <ToggleButton value="All">Tất cả</ToggleButton>
                            <ToggleButton value="pending">Chờ xác nhận</ToggleButton>
                            <ToggleButton value="confirmed">Đã xác nhận</ToggleButton>
                            <ToggleButton value="shipping">Đang giao</ToggleButton>
                            <ToggleButton value="shipped">Đã giao</ToggleButton>
                            <ToggleButton value="completed">Hoàn thành</ToggleButton>
                            <ToggleButton value="cancelled">Đã hủy</ToggleButton>
                        </ToggleButtonGroup>
                    </div>
                </div>
            </div>
        </>
    )
}