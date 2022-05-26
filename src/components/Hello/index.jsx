import React,{Component} from 'react'
import hello from './index.module.css'

export default class Hello extends Component{
  render(){
    return <h2 className={hello.title}>Hello,welcome to a new shopping experience!</h2>
  }
}