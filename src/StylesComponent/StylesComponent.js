import React, { Component } from 'react'
// Cách 1: import css đường dẫn (Phạm vi ảnh hưởng tất cả component trong ứng dụng )
import './Styles1.css'
// Cách 2:
import style from './Styles.module.css'
export default class StylesComponent extends Component {
    render() {
        return (
            <div className="container">
                <p className="text-red">Hello cybercoft</p>
                {/* Cách 2: */}
                <div className={`p-5 ${style.textGreen} ${style['background-black']} display-4`}>
                    ahihi
                </div>
                {/* Cách 3: */}
                <p style={{ backgroundColor: 'black', padding: '15px', color: 'white', marginTop: '5px' }}>Helloooooooo</p>
            </div>
        )
    }
}
