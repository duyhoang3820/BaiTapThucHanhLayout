import React, { Component } from 'react'

export default class Databinding extends Component {

    name = 'fronend58';

    renderSinhVien = () => {
        let sinhVien = {
            ma: 1,
            ten: 'Nguyễn văn a'
        }
        // Nội dung hiển thị lên phương thức render phải trả về 1 component, hoặc chuỗi, số...
        return <div>
            <p>Mã: {sinhVien.ma}</p>
            <p>Tên: {sinhVien.ten}</p>
        </div>
    }
    render() {
        let title = 'cybersoft';
        let renderTitle = () => {
            return <div>Cybersoft</div>
        }
        return (
            <div className="container">
                <p id="title" className="display-4">{title}</p>
                <p>{this.name}</p>
                {this.renderSinhVien()}
                {renderTitle()}
            </div>
        )
    }
}
