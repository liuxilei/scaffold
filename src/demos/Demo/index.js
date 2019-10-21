import React, { Component } from 'react';
import { Helmet } from "react-helmet";

class Demo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: []
        }
    }

    componentDidMount() {
        fetch("./api/data.json").then(res => {
            return JSON.parse(res);
        }).then(data => {
            console.log(data);
        })
    }

    render() {
        return (
            <div>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>临时使用</title>
                </Helmet>
            </div>
        )
    }
}

export default Demo;