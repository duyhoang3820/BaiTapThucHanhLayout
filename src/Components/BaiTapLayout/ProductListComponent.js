import React, { Component } from 'react'
import ProductComponent from './ProductComponent'

export default class ProductListComponent extends Component {
    arrProduct = [
        { maSP: 1, tenSP: 'Black Berry', hinhAnh: './img/sp_blackberry.png', gia: 1000 },
        { maSP: 2, tenSP: 'Iphone X', hinhAnh: './img/sp_iphoneX.png', gia: 2000 },
        { maSP: 3, tenSP: 'Note 7', hinhAnh: './img/sp_note7.png', gia: 3000 },
        { maSP: 3, tenSP: 'Vivo 850', hinhAnh: './img/sp_vivo850.png', gia: 3000 }
    ]
    rendenProductItem = () => {
        return this.arrProduct.map((product, index) => {
            return <div className="col-3" key={index}>
                <ProductComponent product={product} />
            </div>
        })
    };
    render() {
        return (
            <div className="container-fluid bg-dark">
                <div className="display-4 text-center text-white">BEST SMARTPHONE</div>
                <div className="row">
                    {this.rendenProductItem()};
                    {/* <div className="col-3">
                        <ProductComponent product={this.arrProduct[0]} />
                    </div>
                    <div className="col-3">
                        <ProductComponent product={this.arrProduct[1]} />
                    </div>
                    <div className="col-3">
                        <ProductComponent product={this.arrProduct[2]} />
                    </div>
                    <div className="col-3">
                        <ProductComponent product={this.arrProduct[3]} />
                    </div> */}
                </div>
                <div className="display-4 text-center text-white">BEST LAPTOP</div>
                {/* <div className="row">
                    <div className="col-3">
                        <ProductComponent />
                    </div>
                    <div className="col-3">
                        <ProductComponent />
                    </div>
                    <div className="col-3">
                        <ProductComponent />
                    </div>
                    <div className="col-3">
                        <ProductComponent />
                    </div>
                </div> */}
            </div>
        )
    }
}
