import React, { Component } from 'react'

export default class FormValidation extends Component {

    state = {
        maSinhVien: '',
        tenSinhVien: '',
        soDienThoai: '',
        email: '',
    }

    handleChangeInput = (event) => {
        const { value, name } = event.target;// event.target => thẻ input đang xảy ra sự kiện
        // let value = tagInput.value;
        // let name = tagInput.name;
        // let {value,name} = tagInput
        this.setState({
            [name]: value
        }, () => {
            console.log('state', this.state);
        })
    }

    render() {
        return (
            <form className="container">
                <div className="card text-white bg-dark">
                    <div className="card-header">THÔNG TIN SINH VIÊN</div>
                    <div className="card-body">
                        <div className="row">
                            <div className="col-6">
                                <div className="form-group">
                                    <p>Mã sinh viên</p>
                                    <input className="form-control" name="maSinhVien" onChange={
                                        this.handleChangeInput
                                    } />
                                </div>
                                <div className="form-group">
                                    <p>Số điện thoại</p>
                                    <input className="form-control" name="soDienThoai" onChange={
                                        this.handleChangeInput
                                    } />
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="form-group">
                                    <p>Tên sinh viên</p>
                                    <input className="form-control" name="tenSinhVien" onChange={
                                        this.handleChangeInput
                                    } />
                                </div>
                                <div className="form-group">
                                    <p>Email</p>
                                    <input className="form-control" name="email" onChange={
                                        this.handleChangeInput
                                    } />
                                </div>
                                <div className="form-group">
                                    <button className="btn btn-success">Thêm sinh viên</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        )
    }
}

