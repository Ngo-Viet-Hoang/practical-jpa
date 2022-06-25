import React from "react";
import { Component } from "react";
import CreateEmployee from "../Employee/CreateEmployee";
import { View } from "../View/View";

export class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <>
                <CreateEmployee/>
                <View/>
            </>


        )
    }
}