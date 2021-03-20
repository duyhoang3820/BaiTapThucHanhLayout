import React, { Component } from 'react'
import BT3ProductItems from './BT3ProductItems'

export default class BT3ProductList extends Component {
    render() {
        return (
            <div className="row text-center">
                <div className="col-lg-3 col-md-6 mb-4">
                    <BT3ProductItems />
                </div>
                <div className="col-lg-3 col-md-6 mb-4">
                    <BT3ProductItems />
                </div>
                <div className="col-lg-3 col-md-6 mb-4">
                    <BT3ProductItems />
                </div>
                <div className="col-lg-3 col-md-6 mb-4">
                    <BT3ProductItems />
                </div>
            </div>
        )
    }
}
