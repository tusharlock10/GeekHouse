import React from 'react';
import {COLORS_LIGHT_THEME} from '../Constants';

export default class Login extends React.Component{

  state = {flexDirectionOn: (1<(window.innerWidth/window.innerHeight))}

  componentDidMount(){
    window.addEventListener('resize', ()=>{
      if (1>(window.innerWidth/window.innerHeight)){
        this.setState({flexDirectionOn:false})
      }
      else{
        this.setState({flexDirectionOn:true})
      }
    })
  }

  geekHouseLogo(){
    return (
      <div style={{flex1:1,alignItems:'center',
        justifyContent:'center', flexBasis:"50%", flexDirection:'column',
        }}>
        <img src={'logo.png'} style={{width:"50%",minWidth:150}}/>
        <div className="font_product_sans"
          style={{color:COLORS_LIGHT_THEME.LIGHT, wordBreak:'break-word',textAlign:'center', 
          width:"40%",fontSize:"20"}}>
          ALL NEW PLATFORM FOR SHARING KNOWLEDGE
        </div>
      </div>
    )
  }

  renderGoogleButton(){
    return(
      <div className="button_box" style={{backgroundColor:COLORS_LIGHT_THEME.LIGHT, alignItems:'center', 
        color:COLORS_LIGHT_THEME.LESS_DARK, height:48, width:"68%",
        maxWidth:250, margin:10,fontSize:18,
        justifyItems:'center', flexDirection:'row',
        justifyContent:'space-evenly', borderRadius:12}}>
        <div>
          <img src={'google.png'} style={{height:32}} />
        </div>
        <div className="font_product_sans" >
          SignIn With Google
        </div>
      </div>
    )
  }

  renderFacebookButton(){
    return(
      <div className="button_box" style={{backgroundColor:'rgb(24, 119, 242)', alignItems:'center', 
        color:COLORS_LIGHT_THEME.LIGHT, height:48,
        maxWidth:(this.state.flexDirectionOn)?"70%":250, margin:10,fontSize:16,
        justifyItems:'center', flexDirection:'row',
        justifyContent:'space-evenly', borderRadius:12}}>
        <div>
          <img src={'facebook.png'} style={{height:32}} />
        </div>
        <div className="font_helvetica_neue" >
          Continue with Facebook
        </div>
      </div>
    )
  }

  loginButtons(){
    return (
      <div style={{flex1:1,alignItems:'center',
        justifyContent:'center', flex:"50%", flexDirection:'column'}}>
        {this.renderGoogleButton()}
        {this.renderFacebookButton()}        
      </div>
    )
  }

  render(){
    return(
      <div style={{height:'100%',background: `linear-gradient(
        ${COLORS_LIGHT_THEME.THEME1}, ${COLORS_LIGHT_THEME.THEME2})`,
        flexDirection:(this.state.flexDirectionOn)?'row':'column', flex:1,}}>
        {this.geekHouseLogo()}
        {this.loginButtons()}
      </div>
    )
  }
}