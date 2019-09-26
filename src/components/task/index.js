import React from 'react'
import UserItem from './user-item'
import UserModal from './user-modal'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {
  fetchUsers,
  updateUser
} from '../../redux/actions/user'

class Task extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      showUserModal: false,
      editingUser: null
    }

    this.openEditUserModal = this.openEditUserModal.bind(this);
    this.getUserRow = this.getUserRow.bind(this);
    this.saveUser = this.saveUser.bind(this);
  }

  componentDidMount() {
    if(!this.props.users || !this.props.users.length){
      this.props.fetchUsers()
    }
  }

  openEditUserModal(user){
    // console.log(`editing user `, user);
    this.setState({
      showUserModal: true,
      editingUser: user
    })
  }

  getUserRow(){
    let rows = [];
    let rowItems = [];
    let itemPerRows = 3;
    for(let i =0; i<this.props.users.length; i++){
      if(i % itemPerRows == 0 ){
        rowItems = [];
      }

      rowItems.push(<div className={'col-md-'+(12/itemPerRows)} key={this.props.users[i].id}>
        <UserItem onClick={this.openEditUserModal} onEditClick={this.openEditUserModal} user={this.props.users[i]}/>
      </div>)

      if(i % itemPerRows == itemPerRows - 1 || i == this.props.users.length - 1){
        rows.push(rowItems);
      }
    }
    return rows;
  }

  saveUser (values){
    this.props.updateUser(values);
    this.setState({
      showUserModal: false,
      editingUser: null
    })
  }

  render(){
    return <div className={'container task-page-wrapper'}>
      <h4>Task Page</h4>
      <h6>List of users</h6>
      {this.getUserRow().map((row, index) => <div className={'row'} key={index}>{row}</div>)}
      <UserModal
        onSubmit={this.saveUser.bind(this)}
        show={this.state.showUserModal}
        onHide={()=>{this.setState({showUserModal: false, editingUser: null})}}
        initialValues={this.state.editingUser}
      />
    </div>
  }
}

const mapStateToProps = ({ user }) => ({
  users: user ? user.list : []
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fetchUsers,
      updateUser
    },
    dispatch
  )

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Task)
