
const stateGioHang = {
    gioHang: [
        { maSP: 1, tenSP: 'IPhone', hinhAnh: './img/vsphone.jpg', soLuong: 1, giaBan: 1000 }
    ]
}

export const gioHangReducer = (state = stateGioHang, action) => {

    switch (action.type) {
        case 'THEM_GIO_HANG': {
            let gioHangCapNhat = [...state.gioHang];
            // Kiểm tra sản phẩm có trong giỏ hàng hay ko
            let index = gioHangCapNhat.findIndex(spGH => spGH.maSP === action.spGioHang.maSP);
            if (index !== -1) {
                gioHangCapNhat[index].soLuong += 1;
            } else {
                gioHangCapNhat.push(action.spGioHang);
            }
            // Cập nhật lại state
            state.gioHang = gioHangCapNhat;

            return { ...state }; //immutable
        }
        case 'XOA_GIO_HANG': {
            const gioHangCapNhat = [...state.gioHang];
            // Cách xóa khác dùng filter để loại sản phẩm đó khỏi danh sách
            state.gioHang = gioHangCapNhat.filter(spGH => spGH.maSP !== action.maSP);
            return { ...state };
        }
        case 'TANG_GIAM_SO_LUONG': {
            const gioHangCapNhat = [...state.gioHang];
            let spTangGiamSL = gioHangCapNhat.find(spGH => spGH.maSP === action.maSP);
            if (spTangGiamSL) {
                spTangGiamSL.soLuong += action.soLuong;
                if (spTangGiamSL.soLuong < 1) {
                    alert('Số lượng tối thiểu phải là 1');
                    spTangGiamSL.soLuong -= action.soLuong;
                }
            }
            state.gioHang = gioHangCapNhat;
            return { ...state };
        }
    }
    return state;
}