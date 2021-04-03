import {useState, useEffect} from 'react';
import {useRouter} from 'next/router'
import {connect} from 'react-redux'
import {SAVE_TOKEN} from '../shared/backend'
import {loginUser, clearuserstatus} from '../store/actions'

const Login = (props) => {
    const router = useRouter()

    const [data, setData] = useState({
        staff_id: '',
        password: ''
    })

    useEffect(() => {
       props.clearuserstatus()
    }, [])

    useEffect(() => {
      if (props.user.status === 200) {
          SAVE_TOKEN('token', props.user.data.token)
          SAVE_TOKEN('user', props.user.data.staff_id)
          router.push('/dashboard')
      }
    }, [props.user])
    

    const goToDashboard = () => {
        props.loginUser(data)
    }

    const mapItemToData = (e, key) => {
        
     setData({
         ...data,
         [key]: e.target.value
     })
    }
    return (
        <div style={{width: '40%', margin: '100px auto'}}>
            <input style={{margin: '10px 0'}} type="text" onChange={(val) => mapItemToData(val, 'staff_id')} className="form-control mb-3" placeholder="Enter Staff Id"/>
            <input  style={{margin: '10px 0'}} type="password" onChange={(val) => mapItemToData(val, 'password')}  className="form-control mb-3" placeholder="Enter Password"/>
            <button style={{width: '100%'}} className="btn btn-primary" onClick={goToDashboard}>Submit</button>
        </div>
    )
}

const mapStateToProps = state => state.userReducer

const mapDispatchToProps = {
    loginUser,
    clearuserstatus
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);