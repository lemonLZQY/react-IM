
import React,{Component} from 'react'
import './index.scss'
import saferender from '../../decorator/saferender'
import Dialog from '../common/dialog/dialog'
import {showTip} from '../common/showTip/tiptool'
import {history} from 'react-router-dom'

// @saferender 相当于已经执行了这个函数(不用加())
// @saferender() 相当于执行renturn的函数
@saferender({
    errorHandler: (error) => {
        //错误处理
    }
})
class signin extends Component{
    constructor(){
        super()
        this.state = {
            name:'chiuyung'
        }

        this.signin = this.signin.bind(this)
    }

    signin = () => {
        let username = this.refs.username.value.trim()
        let password = this.refs.password.value.trim()
        if (!username || !password) {
            showTip({
                title: '请将信息填写完整',
                type: 'error'
            })
            return
        }
    }
    render(){
        return(
            <div className='BG'>
                <section className='sign-wrapper'>
                    <h3>登录</h3>
                    <input ref='username' type="text" name='username' placeholder='用户名'/>
                    <input ref='password' type="password" name='password' placeholder='密码'/>
                    <button onClick={this.signin}>登录</button>
                </section>
            </div>
        )
    }
}
export default  signin