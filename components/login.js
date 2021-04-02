import {useState, useEffect} from 'react';
import {useRouter} from 'next/router'
import {connect} from 'react-redux'
import {SAVE_TOKEN} from '../shared/backend'
import {loginUser} from '../store/actions'

const Login = (props) => {
    const router = useRouter()

    const [data, setData] = useState({
        staff_id: '',
        password: ''
    })

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
        <div>
            <input type="text" onChange={(val) => mapItemToData(val, 'staff_id')} className="form-control mb-3" placeholder="Enter Staff Id"/>
            <input type="password" onChange={(val) => mapItemToData(val, 'password')}  className="form-control mb-3" placeholder="Enter Password"/>
            <button className="btn btn-primary" onClick={goToDashboard}>Submit</button>
        </div>
    )
}

const mapStateToProps = state => state.userReducer

const mapDispatchToProps = {
    loginUser
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);