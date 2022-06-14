import React, { Component } from 'react'
import PubSub from 'pubsub-js'
// import axios from 'axios';

export default class Search extends Component {

    search = async() =>{    
      const {keyWordElement:{value:keyWord}} = this     
      PubSub.publish('atguigu',{isFirst:false,isLoading:true})
      // axios.get(`/api1/search/users?q=${keyWord}`).then(
      //   response =>{
      //     PubSub.publish('atguigu',{isLoading:false,users:response.data.items})
      //   },
      //   error => {
      //     PubSub.publish('atguigu',{iisLoading:false,err:error.message})
      //   }
      // )

    //   fetch(`/api1/search/users2?q=${keyWord}`).then(
    //     response =>{
    //       console.log('联系服务器成功了');
    //       return response.json()
    //     },
    //     error => {
    //       console.log('联系服务器失败了',error);
    //       return new Promise(()=>{})
    //   }
    //   ).then(
    //     response => {console.log('获取数据成功了',response);},
    //     error => {console.log('获取数据失败了',error);}
    //   )
    // }
        //    fetch(`/api1/search/users2?q=${keyWord}`).then(
        //      response =>{
        //      console.log('联系服务器成功了');
        //      return response.json()
        //    },
        //  ).then(
        //      response => {console.log('获取数据成功了',response);},
        //    ).catch(
        //      error =>{console.log('请求出错',error);}
        //    )
        //  }
      try {
        const response= await fetch(`/api1/search/users2?q=${keyWord}`)
        const data = await response.json()
        console.log(data);
        PubSub.publish('atguigu',{isLoading:false,uers:data.items})
      } catch (error){
        console.log('请求出错',error);
        PubSub.publish('atguigu',{isLoading:false,err:error.message})
      }
    }

  render() {
    return (
        <section className="jumbotron">
        <h3 className="jumbotron-heading">Search Github Users</h3>
        <div>
          <input ref={c => this.keyWordElement = c} type="text" placeholder="enter the name you search"/>&nbsp;
          <button onClick={this.search}>Search</button>
        </div>
      </section>
    )
  }
}
