import React, {Component} from 'react'
import Button from '../src/js/Button'
import './example.scss'

export default class Example extends Component {
    constructor(props){
        super(props)
        this.state = {
            success: false,
            error: false
        }
    }

    successClick = () => {
        this.setState({
            success: true
        })
    }

    render() {
        return <div className="example-button">
            <h2 className="title">按钮<span>Button</span></h2>
            <h3 className="sub-title">演示</h3>
            <div className="example">
                <h4 className="final-title">主题</h4>
                <div>
                    <Button className="primary">一级按钮</Button>
                    <Button>次级按钮</Button>
                    <Button className="green">成功按钮</Button>
                </div>
                <h4 className="final-title">图标按钮</h4>
                <div>
                    <Button className="primary" icon="loading">加载中…</Button>
                    <Button
                        className=""
                        onClick={this.successClick}
                        icon={this.state.success&&'success'}>
                        点击后成功
                    </Button>
                    <Button
                        className=""
                        onClick={this.errorClick}
                        icon={this.state.error&&'error'}>
                        点击后失败
                    </Button>
                </div>
            </div>
        </div>
    }
}
