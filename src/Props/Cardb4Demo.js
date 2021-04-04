import React, { Component } from 'react'

export default class Cardb4Demo extends Component {
    render() {
        // this.props là thuộc tính có sẵn của component dùng nhận giá trị tùe component cha truyền vào
        // this.props không thể gán lại giá trị

        // let productName = this.props.productName;
        // let price = this.props.price;
        let { productName, price } = this.props;
        return (
            <div>
                <div className="card text-white bg-dark">
                    <img className="card-img-top" src="http://picsum.photos/300/300" alt />
                    <div className="card-body">
                        <h4 className="card-title">{productName}</h4>
                        <p className="card-text">{price}</p>
                    </div>
                </div>

            </div>
        )
    }
}
