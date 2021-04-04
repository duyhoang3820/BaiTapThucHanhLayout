import React, { Component } from 'react'

export default class BaiTapChonXe extends Component {

    // B1: Nắm nghiệp vụ của ứng dụng (bao gồm các chức năng và xử lý)
    // B2: Xây dựng giao diện (dàn layout html,css) binding dữ liệu..
    // B3: Xác địn state (thành phần làm thay đổi giao diện khi người dùng thao tác)
    // B4: Xử lý thay đổi state cho các sự kiện click, change, blur

    state = {
        src: "./img/car/products/red-car.jpg"
    }
    changeColor = (color) => {
        this.setState({
            src: `./img/car/products/${color}-car.jpg`
        })
    }

    render() {
        return (
            <div className="container">
                <div className="row my-5">
                    <div className="col-6">
                        <p>Please choose your favorite about car's color</p>
                        <img src={this.state.src} width="400"></img>
                    </div>
                    <div className="col-6">
                        <p>Change color</p>
                        <div className="form-coltrol">
                            <button className="btn-danger mr-5" onClick={() => {
                                this.changeColor('red')
                            }}>Red color</button>
                            <button className="btn-secondary mr-5" onClick={() => {
                                this.changeColor('silver')
                            }}>Silver color</button>
                            <button className="btn-dark mr-5" onClick={() => {
                                this.changeColor('black')
                            }}>Black color</button>
                            <button style={{ background: 'steel' }} onClick={() => {
                                this.changeColor('steel')
                            }}>Steel color</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
