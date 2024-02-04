import { useState } from "react";
import { Button } from "antd";
import { EyeOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

export default function Show_Detail({ item }) {
    const [loading, setLoading] = useState(false);
    const Show_Page = () => {
        //setLoading(true);
        // Thực hiện chuyển page qua item.id và truyền dữ liệu id đi qua page đó
    };
    return (

        <Link to={`/detail/${item.id}`}>
            <Button
                type="link"
                onClick={() => {
                    Show_Page();
                }}
                loading={loading}
                style={{ fontSize: 24 }}
            >
                <EyeOutlined />
            </Button>
        </Link>
    );
}