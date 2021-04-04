import React, { Component } from 'react';
// Thư viện giúp kết nối giữa component với redux
import { connect } from 'react-redux';


class SP extends Component {
    render() {
        const { product, viewProductDetail } = this.props;
        return (
            <div>
                <div className="card text-white bg-dark ">
                    <img className="card-img-top" height={300} src={product.hinhAnh} alt />
                    <div className="card-body">
                        <h4 className="card-title">{product.tenSP}</h4>
                        <p className="card-text">{product.manHinh}</p>
                        <button className="btn btn-success mr-2" onClick={() => {
                            viewProductDetail(product);
                        }}>Xem chi tiết</button>
                        <button className="btn btn-danger" onClick={() => {
                            this.props.themSanPham(product);
                        }}>Thêm sản phẩm</button>
                    </div>
                </div>
            </div>
        )
    }
}

// Hàm này cũng giống mapStateToProps tuy nhiên tạo ra 1 props là 1 hàm chứ không phải giá trị => Thông qua hàm này sẽ gửi giá trị mới lên redux
const mapDispatchToProps = (dispatch) => {
    return {
        themSanPham: (spClick) => {
            // console.log('maSP', maSP);
            // action là dữ liệu gửi lên redux
            let spGioHang = { ...spClick, soLuong: 1 }
            const action = {
                type: 'THEM_GIO_HANG', //Thuộc tính bắt buộc
                spGioHang: spGioHang //Giá trị gửi lên redux xử lý
            };

            // Dùng hàm dispatch mà redux cấp để gửi dữ liệu đi
            dispatch(action);
        },
    }
}

// Tạo ra 1 component mới chứa các props của redux
export default connect(null, mapDispatchToProps)(SP);
