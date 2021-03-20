import React, { Component } from 'react'
import ProductComponent from './ProductComponent'

export default class ProductListComponent extends Component {
    render() {
        return (
            <div className="container-fluid bg-dark">
                <div className="display-4 text-center text-white">BEST SMARTPHONE</div>
                <div className="row">
                    <div className="col-3">
                        <ProductComponent/>
                    </div>
                    <div className="col-3">
                        <ProductComponent/>
                    </div>
                    <div className="col-3">
                        <ProductComponent/>
                    </div>
                    <div className="col-3">
                        <ProductComponent/>
                    </div>
                </div>
                <div className="display-4 text-center text-white">BEST LAPTOP</div>
                <div className="row">
                    <div className="col-3">
                        <ProductComponent/>
                    </div>
                    <div className="col-3">
                        <ProductComponent/>
                    </div>
                    <div className="col-3">
                        <ProductComponent/>
                    </div>
                    <div className="col-3">
                        <ProductComponent/>
                    </div>
                </div>
            </div> 
        )
    }
}
