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
        justifyContent:'center', flexBasis:"50%", flexDirection:'column',}}>
        <img src={'logo.svg'} style={{width:"50%",minWidth:150, alignSelf:'center'}}/>
        <div className="font_lato"
          style={{color:COLORS_LIGHT_THEME.LIGHT, wordBreak:'break-word',textAlign:'center', 
          width:"60%",fontSize:(this.state.flexDirectionOn)?"3vh":"2vh", 
          justifyContent:'center', alignItems:'center'}}>
          ALL NEW PLATFORM FOR SHARING KNOWLEDGE
        </div>
      </div>
    )
  }

  renderGoogleButton(){
    return(
      <div className="button_box" style={{backgroundColor:COLORS_LIGHT_THEME.LIGHT,
        alignItems:'center', 
        color:COLORS_LIGHT_THEME.LIGHT, height:"7vh", width:"65%",
        maxWidth:(!this.state.flexDirectionOn)?null:250, margin:'0.7vh',fontSize:"2vh",
        justifyItems:'center', flexDirection:'row',
        justifyContent:'space-evenly', borderRadius:"1.8vh"}}>
        <div>
          <img src={'google.png'} style={{height:"4.5vh"}} />
        </div>
        <div className="font_product_sans" style={{fontSize:"2.4vh",
          color:COLORS_LIGHT_THEME.LESS_DARK}}>
          SignIn With Google
        </div>
      </div>
    )
  }

  renderFacebookButton(){
    return(
      <div className="button_box" style={{backgroundColor:'rgb(24, 119, 242)', alignItems:'center', 
        color:COLORS_LIGHT_THEME.LIGHT, height:"7vh", width:"65%",
        maxWidth:(!this.state.flexDirectionOn)?null:250, margin:'0.7vh',fontSize:"2vh",
        justifyItems:'center', flexDirection:'row',
        justifyContent:'space-evenly', borderRadius:"1.8vh"}}>
        <div>
          <img src={'facebook.png'} style={{height:"4.5vh"}} />
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