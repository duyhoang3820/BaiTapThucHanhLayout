import React, { Component } from 'react'
import GioHang from './GioHang'
import SP from './SP'

export default class BTQuanLySanPham extends Component {
    dataProduct = [
        {
            "maSP": 1,
            "tenSP": "VinSmart Live",
            "manHinh": "AMOLED, 6.2\", Full HD+",
            "heDieuHanh": "Android 9.0 (Pie)",
            "cameraTruoc": "20 MP",
            "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP",
            "ram": "4 GB",
            "rom": "64 GB",
            "giaBan": 5700000,
            "hinhAnh": "./img/vsphone.jpg"
        },

        {
            "maSP": 2,
            "tenSP": "Meizu 16Xs",
            "manHinh": "AMOLED, FHD+ 2232 x 1080 pixels",
            "heDieuHanh": "Android 9.0 (Pie); Flyme",
            "cameraTruoc": "20 MP",
            "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP",
            "ram": "4 GB",
            "rom": "64 GB",
            "giaBan": 7600000,
            "hinhAnh": "./img/meizuphone.jpg"
        },

        {
            "maSP": 3,
            "tenSP": "Iphone XS Max",
            "manHinh": "OLED, 6.5\", 1242 x 2688 Pixels",
            "heDieuHanh": "iOS 12",
            "cameraSau": "Chính 12 MP & Phụ 12 MP",
            "cameraTruoc": "7 MP",
            "ram": "4 GB",
            "rom": "64 GB",
            "giaBan": 27000000,
            "hinhAnh": "./img/applephone.jpg"
        }
    ]

    state = {
        productDetail: {
            "maSP": 1,
            "tenSP": "VinSmart Live",
            "manHinh": "AMOLED, 6.2\", Full HD+",
            "heDieuHanh": "Android 9.0 (Pie)",
            "cameraTruoc": "20 MP",
            "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP",
            "ram": "4 GB",
            "rom": "64 GB",
            "giaBan": 5700000,
            "hinhAnh": "./img/vsphone.jpg"
        },
        // gioHang: [
        //     { maSP: 1, tenSP: 'IPhone', hinhAnh: './img/vsphone.jpg', soLuong: 1, giaBan: 1000 }
        // ]
    }

    // themSanPham = (spClick) => {
    //     console.log('spClick', spClick);
    //     // Từ sản phẩm đc click tạo ra sp giỏ hàng
    //     const spGH = { ...spClick, soLuong: 1 };
    //     // Thêm sản phẩm vừa click vào this.state.gioHang
    //     let gioHangCapNhat = [...this.state.gioHang];
    //     // Kiểm tra sản phẩm có trong giỏ hàng chưa
    //     let index = gioHangCapNhat.findIndex(sp => sp.maSP === spGH.maSP);
    //     if (index !== -1) {
    //         gioHangCapNhat[index].soLuong += 1;
    //     } else {
    //         gioHangCapNhat.push(spGH);
    //     }
    //     // Cập nhật lại state
    //     this.setState({
    //         gioHang: gioHangCapNhat
    //     })
    // }

    // // State nắm tại component nào thì phương thức xử lý setState xây dựng tại component đó
    // xoaGioHang = (maSP) => {
    //     console.log('maSP', maSP);

    //     let gioHangCapNhat = [...this.state.gioHang];
    //     // Xử lý setState
    //     let index = gioHangCapNhat.findIndex(spGH => spGH.maSP === maSP);
    //     if (index !== -1) {
    //         gioHangCapNhat.splice(index, 1);
    //     }

    //     this.setState({
    //         gioHang: gioHangCapNhat
    //     })
    // }

    // tangGiamSoLuong = (maSP, soLuong) => {
    //     console.log('maSPClick', maSP);
    //     console.log('soLuong', soLuong);

    //     let gioHangCapNhat = [...this.state.gioHang];
    //     // Tìm sp trong giỏ hàng hàng
    //     let spTangGiamSL = gioHangCapNhat.find(spGH => spGH.maSP === maSP);
    //     if (spTangGiamSL) {
    //         spTangGiamSL.soLuong += soLuong;
    //         if (spTangGiamSL.soLuong < 1) {
    //             alert('Số lượng tối thiểu phải là 1');
    //             spTangGiamSL.soLuong -= soLuong;
    //         }
    //     }

    //     // setState giỏ hàng 
    //     this.setState({
    //         gioHang: gioHangCapNhat
    //     })
    // }

    renderProduct = () => {
        return this.dataProduct.map((product, index) => {
            return <div className="col-4" key={index}>
                <SP  product={product} viewProductDetail={this.viewProductDetail}
                /> {/* sử dụng props */}
            </div>
        })
    }

    viewProductDetail = (productClick) => {
        this.setState({
            productDetail: productClick
        })
    }

    render() {
        let { productDetail } = this.state;
        return (
            <div className="container">
                <GioHang />
                <h3 className="text-center display-4">Danh sách sản phẩm</h3>
                <div className="row">
                    {this.renderProduct()}
                </div>

                <div className="m-5">
                    <div className="row">
                        <div className="col-4">
                            <h3 className="text-center">{productDetail.tenSP}</h3>
                            <img src={productDetail.hinhAnh} height={300} />
                        </div>
                        <div className="col-8">
                            <h3 className="text-center">Thông tin sản phẩm</h3>
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>Tên sản phẩm</th>
                                        <th>{productDetail.tenSP}</th>
                                    </tr>
                                    <tr>
                                        <th>Màn hình</th>
                                        <th>{productDetail.manHinh}</th>
                                    </tr>
                                    <tr>
                                        <th>Hệ điều hành</th>
                                        <th>{productDetail.heDieuHanh}</th>
                                    </tr>
                                    <tr>
                                        <th>Camera trước</th>
                                        <th>{productDetail.cameraTruoc}</th>
                                    </tr>
                                    <tr>
                                        <th>Camera sau</th>
                                        <th>{productDetail.cameraSau}</th>
                                    </tr>
                                    <tr>
                                        <th>RAM</th>
                                        <th>{productDetail.ram}</th>
                                    </tr>
                                    <tr>
                                        <th>ROM</th>
                                        <th>{productDetail.rom}</th>
                                    </tr>
                                </thead>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
