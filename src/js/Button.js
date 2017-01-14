import React, {Component} from 'react'
import classNames from 'classnames'
import Icon from './icon.js'

import '../css/button.scss'

export default class Button extends Component {
    constructor(props) {
        super(props)
        this.state = {
            cname: 'button',
            disable: false,
            icon: null
        }
    }

    render() {
        let classes = classNames('rui-button', this.props.className)
        return <a {...this.props} className={classes}>
            {this.props.icon && (<Icon name={this.props.icon} />)}
            {this.props.children}
        </a>
    }
}
