import React from 'react';
// import faker from 'faker'
// import CommentDetail from './components/CommentDetail'
// import ApprovalCard from './components/ApprovalCard'
import SeasonDisplay from './components/SeasonDisplay'
import Spinner from './components/Spinner';
class App extends React.Component {
     state = {
      latitude:null,
      errorMessage:''
   }

    componentDidMount(){
      window.navigator.geolocation.getCurrentPosition(
        (position)=>{
          this.setState({latitude:position.coords.latitude})
        }
        ,
        err=>{
          this.setState({
            errorMessage:err.message
          })
        }
      )
    }

      render() {
        if(this.state.errorMessage && !this.state.latitude){
          return <div>Error:{this.state.errorMessage}</div>
        }
        if(!this.state.errorMessage && this.state.latitude){
        return <SeasonDisplay latitude={this.state.latitude}/>
        }
        return <Spinner message='Please Accept Location Request'/>
      }
    }
    
    
      // <div className='ui container comments'>
      // <ApprovalCard>
      //  <CommentDetail name='Sam' text='nice post' time='Today at 5:00 PM' avatar={faker.image.avatar()} />
      //  </ApprovalCard>
      //  <ApprovalCard>
      //  <CommentDetail name='Jane' text='Cooool' time='Today at 4:00 PM' avatar={faker.image.avatar()}/>
      //  </ApprovalCard>
      //  <ApprovalCard>
      //   <CommentDetail name='Doe' text='Hey Good' time='Today at 6:00 PM' avatar={faker.image.avatar()}/>
      //  </ApprovalCard>

      // </div>
    
 
export default App;
