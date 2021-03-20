import React, { Component } from 'react'
import FooterComponent from './FooterComponent'
import HeaderComponent from './HeaderComponent'
import ProductComponent from './ProductComponent'
import ProductListComponent from './ProductListComponent'
import SlideComponent from './SlideComponent'

export default class BaiTapLayout extends Component {
    render() {
        return (
            <div>
                <HeaderComponent />
                <SlideComponent />
                <ProductListComponent />
                <FooterComponent />
            </div>
        )
    }
}
