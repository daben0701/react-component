import React, {Component} from 'react'
import classNames from 'classnames'
import '../css/icon.scss'

export default class Icon extends Component{
    constructor(props){
        super(props)
        this.state = {
            cname: 'icon',
            name: ''
        }
    }

    render() {
        let classes = classNames('rui-icon', this.props.className)
        if(this.props.name){
            classes += ' ' + 'rui-icon-' + this.props.name;
        }
        return <i {...this.props} className={classes}>&nbsp; &nbsp;
            {this.props.children}
        </i>
    }
}
