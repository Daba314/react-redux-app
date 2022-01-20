import React, { Component } from 'react'
import {connect} from 'react-redux'


class UserHeader extends React.Component{

    render(){
        const user = this.props.user
        if (!user){
            return null;
        }
        return <div className='header'>{user.name}</div>
    }
}
const mapStatetoProps = (state,ownProps) =>{   // state is actually store reducers(Provider)
    return {user: state.users.find((user)=>user.id === ownProps.userId)}
}
//anytime our reducers store  is changed provider will authomatically notify connect function
export default connect(mapStatetoProps)(UserHeader)
