import React, { Component } from 'react';
import _ from 'lodash';
// Thư viện kết nối reactComponent - redux Store
import { connect } from 'react-redux';

class GioHang extends Component {
    renderGioHang = () => {
        return this.props.gioHangRedux.map((spGH, index) => {
            return <tr key={index}>
                <td>{spGH.maSP}</td>
                <td><img width={50} src={spGH.hinhAnh} /></td>
                <td>{spGH.tenSP}</td>
                <td>
                    <button className="btn btn-success mr-3" onClick={(
                    ) => {
                        this.props.tangGiamSoLuong(spGH.maSP, 1);
                    }}>+</button>
                    {spGH.soLuong}
                    <button className="btn btn-success ml-3" onClick={() => {
                        this.props.tangGiamSoLuong(spGH.maSP, -1);
                    }}>-</button>
                </td>
                <td>{spGH.giaBan}</td>
                <td>{spGH.soLuong * spGH.giaBan}</td>
                <td><button className="btn btn-danger" onClick={() => {
                    this.props.xoaGioHang(spGH.maSP);
                }}>Xóa</button></td>
            </tr>
        })
    }

    render() {
        console.log('props', this.props);
        return (
            <div className="mt-5">
                <h3>Giỏ hàng</h3>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Mã sản phẩm</th>
                            <th>Hình ảnh</th>
                            <th>Tên sản phẩm</th>
                            <th>Số lượng</th>
                            <th>Giá bán</th>
                            <th>Thành tiền</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderGioHang()}
                    </tbody>
                </table>
            </div>
        )
    }
}
// Hàm lấy giá trị  từ state của redux về biến thành props ở component
const mapStateToProps = (state) => {
    // state: rootReducer
    const props = {
        gioHangRedux: state.gioHangReducer.gioHang
    }
    return props

}

const mapDispatchToProps = (dispatch) => {
    return {
        xoaGioHang: (maSPClick) => {
            // console.log('SPClick', SPClick);
            const action = {
                type: 'XOA_GIO_HANG',
                maSP: maSPClick,
            };
            dispatch(action);
        },
        tangGiamSoLuong: (maSP, soLuong) => {
            const action = {
                type: 'TANG_GIAM_SO_LUONG',
                maSP: maSP,
                soLuong
            };
            dispatch(action);
        }
    }
}


// Kết nối giỏ hàng component và redux => tạo 1 component mới chưa các state của redux
export default connect(mapStateToProps, mapDispatchToProps)(GioHang);
