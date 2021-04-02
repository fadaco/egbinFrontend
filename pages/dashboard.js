import {useState, useEffect} from 'react'
import {connect} from 'react-redux'
import Alayout from '../components/Layout/alayout';
import {getAllLeaveRequest, manageAleaveRequest, createLeaveRequest, getYourLeaveRequest} from '../store/actions'
import moment from 'moment-business-days'
import Cookies from 'js-cookie'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const Dashboard = (props) => {

   const [data, setData] = useState({
    typeOfLeave: "sick leave",
    startDate: "",
    endDate: "",
    resumptionDate: ""
   })
   const [error, setError] = useState(null)

   const loadData = () => {
    if(Cookies.get('user') === 'admin') {
        props.getAllLeaveRequest()
          } else {
              props.getYourLeaveRequest()
          }
   }

   useEffect(() => {
    loadData()
   }, [])

   useEffect(() => {
       if(props.leave_request_response.status === 201) {
        setError(props.leave_request_response.message)
        loadData()

       } else if (props.leave_request_response.status === 400) {
             setError(props.leave_request_response.message)
       }

   }, [props.leave_request_response])

   const manageLeaveRequest = (status, id) => {
       let data = {
         id, status
       }
       props.manageAleaveRequest(data)
   }

   const leaveRequestChanges = () => {
       console.log(data)
       props.createLeaveRequest(data)
   }

   const mapDataToFormEnd = (e, key) => {
       setError(null)
        setData({
            ...data,
            resumptionDate: moment(e.target.value, 'YYYY-MM-DD').nextBusinessDay().format('YYYY-MM-DD'),
            endDate: e.target.value
        })
    }


   const mapDataToForm = (e, key) => {
      setError(null)
       setData({
           ...data,
           [key]: e.target.value
       })
       
   }
    return (
        <Alayout>
            <div style={{margin: '20px'}}>
                <button style={{float: 'right'}} className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">Create a Leave</button>
            </div>
            <table className="table">
                <thead>
                    <tr>
                        <th>Type of Leave</th>
                        <th>Status of Leave</th>
                        <th>Date Requested</th>
                        <th>Date Approved</th>
                        <th>Initial Leave Balance</th>
                        <th>Final Leave Balance</th>
                        {Cookies.get('user') === 'admin' && <th>Action</th>}
                    </tr>
                </thead>
                <tbody>
                    {Array.isArray(props.leave_request) && props.leave_request.map((item, key) => (
 <tr key={key}>
 <td>{item.typeOfLeave}</td>
 <td>{item.status}</td>
 <td>{item.dateRequested}</td>
 <td>{item.dateApproved ? item.dateApproved : 'Not yet approved'}</td>
 <td>{item.initialLeaveBalance}</td>
 <td>{item.finalLeaveBalanceAfterApproval}</td>
 {Cookies.get('user') === 'admin' && 
 <td>
     <button className="btn btn-sm btn-success" onClick={() => manageLeaveRequest('approved', item.id)}>Approve</button>
     <button className="btn btn-sm btn-danger" onClick={() => manageLeaveRequest('rejected', item.id)}>Reject</button>
 </td>
}
</tr>
                    ))}
                   
                </tbody>
            </table>


            <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Leave Request</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
          <div style={{textAlign: 'center', fontWeight: 'bold', color: 'tomato'}}>{error}</div>
          <div>
          <label>Type of Leave</label>
        <select className="form-control" onChange={(val) => mapDataToForm(val, 'typeOfLeave')}>
            <option>sick leave</option>
            <option>exam leave</option>
            <option>annual leave</option>
        </select>
        </div>

        <div>
            <label>Start Date</label>
            <input type="date" className="form-control" onChange={(val) => mapDataToForm(val, 'startDate')}/>
        </div>
        <div>
            <label>End date</label>
            <input type="date"  className="form-control" onChange={(val) => mapDataToFormEnd(val, 'endDate')}/>
        </div>
        <div>
            <label>Resumption date</label>
            <input readOnly type="date" value={data.resumptionDate} className="form-control" onChange={(val) => mapDataToForm(val, 'resumptionDate')}/>
        </div>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary" onClick={leaveRequestChanges}>Save changes</button>
      </div>
    </div>
  </div>
</div>

        </Alayout>
    )
}

const mapStateToProps = state => state.leaveRequestReducer

const mapDispatchToProps = {
    getAllLeaveRequest,
    manageAleaveRequest,
    createLeaveRequest,
    getYourLeaveRequest
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard); 