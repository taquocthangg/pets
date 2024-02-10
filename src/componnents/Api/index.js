const api = "http://localhost:8000/api/v1/"
// Đăng nhập
export const login = (data) => {
    return fetch(api + "users/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(
            data
        ),
    }).then((res) => res.json());
};
// Đăng ký
export const register = (data) => {
    return fetch(api + "users/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(
            data
        ),
    }).then((res) => res.json());
};
// Quên mật khẩu
export const forgotPassword = (email) => {
    return fetch(api + "users/forgotPassword", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            email
        }),
    }).then((res) => res.json());
};

// .....Phương thức get....... //
// ........................... //
// ........................... //


// Lấy tất cả sản phẩm
export const getAllProDucts = () => {
    return fetch(api + 'users/getAllThuCung')
        .then(res => res.json())
}
// Lấy tất cả danh mục
export const getAllCategory = () => {
    return fetch(api + 'users/getAllDanhMuc')
        .then(res => res.json())
}
// Lấy thú cưng theo danh mục
export const getCategoryThuCung = (idDanhMuc) => {
    return fetch(api + 'users/getCategoryThuCung/' + idDanhMuc)
        .then(res => res.json())
}
// Lấy danh sách giỏ hàng theo id người dùng
export const getCart = (idUser) => {
    return fetch(api + 'users/getCart/' + idUser)
        .then(res => res.json())
}
// Lấy thông tin tất cả người dùng
export const getAllUser = () => {
    return fetch(api + 'users/getAllUser')
        .then(res => res.json())
}
// Lấy thông tin tất cả người dùng
export const getUser = (userId) => {
    return fetch(api + 'users/getUser/' + userId)
        .then(res => res.json())
}
// Lấy thông tin khách hàng
export const getAllCustomer = () => {
    return fetch(api + 'users/getAllCustomer')
        .then(res => res.json())
}
// Lấy thông tin nhân viên
export const getAllEmployee = () => {
    return fetch(api + 'users/getAllEmployee')
        .then(res => res.json())
}
// Lấy thông tin 1 thú cưng
export const getThuCung = (idThuCung) => {
    return fetch(api + 'users/getThuCung/' + idThuCung)
        .then(res => res.json())
}
// Lấy thông tin tất cả hóa đơn
export const getAllBill = () => {
    return fetch(api + 'users/getAllBill')
        .then(res => res.json())
}
// Lấy thông tin 1 hóa đơn
export const getBill = () => {
    return fetch(api + 'users/getBill')
        .then(res => res.json())
}
// Lấy tất cả thông tin về tin tức
export const getAllNews = () => {
    return fetch(api + 'users/getAllNews')
        .then(res => res.json())
}
// Lấy thông tin về 1 tin tức
export const getNew = (idNew) => {
    return fetch(api + 'users/getAllNews' + idNew)
        .then(res => res.json())
}
// Lấy thông tin trả về 3 danh mục đầu tiên getDanhMuc
export const getDanhMucLM3 = () => {
    return fetch(api + 'users/getDanhMuc')
        .then(res => res.json())
}
// .....Phương thức post....... //
// ........................... //
// ........................... //

// Thêm sp vào giỏ hàng
export const addToCart = (userId, idPet) => {
    return fetch(api + "users/insertCart/" + userId, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            idPet
        }),
    }).then((res) => res.json());
};
// Thêm danh mục
export const themDanhMuc = (name) => {
    return fetch(api + "users/themDanhMuc", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            name
        }),
    }).then((res) => res.json());
};
export const suaDanhMuc = (idDanhMuc, data) => {
    return fetch(api + "users/suaThuCung" + idDanhMuc, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            data
        }),
    }).then((res) => res.json());
};
// Thêm thú cưng
export const themThuCung = (data) => {
    return fetch(api + "users/themThuCung", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            data
        }),
    }).then((res) => res.json());
};
export const suaThuCung = (idThuCung, data) => {
    return fetch(api + "users/suaThuCung" + idThuCung, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            data
        }),
    }).then((res) => res.json());
};
export const addNews = (data) => {
    return fetch(api + "users/themNews", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            data
        }),
    }).then((res) => res.json());
};
export const suaNews = (idNew, data) => {
    return fetch(api + "users/updateNews/" + idNew, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            data
        }),
    }).then((res) => res.json());
};
export const updateCart = (idCart, quantity) => {
    return fetch(api + "users/updateCart/" + idCart, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            quantity
        }),
    }).then((res) => res.json());
};
// ....Phương thức delete..... //
// ........................... //
// ........................... //


// Xóa sp khỏi giỏ hàng
export const deleteCart = (idCart) => {
    return fetch(api + 'users/deleteCart/' + idCart, { method: 'DELETE' })
        .then(res => res.json())
}