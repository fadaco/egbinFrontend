import {useState, useEffect} from 'react';
import {connect} from 'react-redux'
import Alayout from '../components/Layout/alayout';
import {fetchAllStaff, addNewStaff, editStaff, deleteStaff} from '../store/actions'

const Staff = (props) => {

  const [data, setData] = useState({
    staff_id: "",
    first_name: "",
    last_name: "",
    password:"password"
  })
  const [edit, setEdit] = useState(false)

  useEffect(() => {
    props.fetchAllStaff()
  }, [])

  const mapDataToForm = (e, key) => {
     setData({
       ...data,
       [key]: e.target.value
     })
  }

  const saveChanges = () => {
    console.log(data)
    if(edit) {
      props.editStaff(data)
    } else {
    props.addNewStaff(data)
    }
  }

  const openModal = (index) => {
    if(index !== 'new'){
      setEdit(true)
      const value = props.staff.data[index];
      setData(value)
    } else {
      setEdit(false)
       setData({
        staff_id: "",
        first_name: "",
        last_name: "",
        password:"password"
      })
    }
    
    $('#exampleModal').modal('show');
  }

  const deleteData = (id, index) => {
    let data = {
      id
    }
    props.deleteStaff(data);
    props.staff.data.slice(index, 1)

  }


    return (
        <Alayout>
            <div style={{margin: '20px'}}>
                <button style={{float: 'right'}} className="btn btn-primary" onClick={() => openModal('new')}>Add a Staff</button>
            </div>
            <table className="table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Staff Id</th>
                        <th>Line Manager's Id</th>
                        <th>Sick Leave Balance</th>
                        <th>Exam Leave Balance</th>
                        <th>Annual Leave Balance</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                  {Array.isArray(props.staff.data) && props.staff.data.length > 0 && props.staff.data.map((item, key) => (
      <tr key={key}> 
      <td>{item.first_name + ' ' + item.last_name}</td>
      <td>{item.staff_id}</td>
      <td>admin</td>
      <td>{item.sick_leave_balance}</td>
      <td>{item.exam_leave_balance}</td>
      <td>{item.annual_leave_balance}</td>
      <td>
          <button className="btn btn-sm btn-success" onClick={() => openModal(key)}>Edit</button>
          <button className="btn btn-sm btn-danger" onClick={() => deleteData(item.id, key)}>Delete</button>
      </td>
  </tr>
                  ))}
              
                </tbody>
            </table>


            <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">{edit ? 'Edit User' : 'Add New Staff'}</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">

      <div>
            <label>Staff Id</label>
            <input type="text" value={data.staff_id} className="form-control" onChange={(val) => mapDataToForm(val, 'staff_id')}/>
        </div>
         
        <div>
            <label>First Name</label>
            <input type="text" value={data.first_name} className="form-control" onChange={(val) => mapDataToForm(val, 'first_name')}/>
        </div>
        <div>
            <label>Last Name</label>
            <input type="text" value={data.last_name} className="form-control" onChange={(val) => mapDataToForm(val, 'last_name')}/>
        </div>

        {edit && (
          <div>
            <div>
            <label>Sick leave</label>
          <input type="text" value={data.sick_leave_balance} className="form-control" onChange={(val) => mapDataToForm(val, 'sick_leave_balance')}/>
          </div>

          <div>
            <label>Exam leave</label>
          <input type="text" value={data.exam_leave_balance} className="form-control" onChange={(val) => mapDataToForm(val, 'exam_leave_balance')}/>
          </div>

          <div>
            <label>Annual leave</label>
          <input type="text" value={data.annual_leave_balance} className="form-control" onChange={(val) => mapDataToForm(val, 'annual_leave_balance')}/>
          </div>
          </div>
        )}
        
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary" onClick={saveChanges}>Save changes</button>
      </div>
    </div>
  </div>
</div>

        </Alayout>
    )
}

const mapStateToProps = state => state.userReducer


const mapDispatchToProps = {
  fetchAllStaff,
  addNewStaff,
  editStaff,
  deleteStaff
}

export default connect(mapStateToProps, mapDispatchToProps)(Staff); 