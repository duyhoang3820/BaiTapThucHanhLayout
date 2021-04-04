import React, { Component } from 'react'

export default class HandleEvent extends Component {

    handleCLick = () => {
        alert("hello cybersoft");
    }
    showMess = (mess) => {
        alert(mess)
    }

    render() {
        return (
            <div className="container">
                <button id="btnSubmit" onClick={this.handleCLick}>Click</button>
                <button className="btn btn-success" onClick={() => {
                    this.showMess('cybersoft-fe58')
                    // Gọi hàm xử lý khác
                }}>Show mess</button>
            </div>
        )
    }
}
