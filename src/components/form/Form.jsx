import React, {useState, useEffect} from 'react'
import '../form/form.css'
import { Link } from 'react-router-dom'
import Todo from '../todo/Todo'

function Form() {
  const [value, setValue] = useState(false)
    const [userInfo, setUserInfo] = useState({
      firstName: "", 
      lastName: "", 
      email: "", 
      location: "", 
      password: ""
    })
    const submitForm = (e) => {
       e.preventDefault()
       if (userInfo.first !=="" && userInfo.last !=="" && userInfo.email !=="" && userInfo.location !=="" && userInfo.password !=="") { 
         localStorage.setItem("userInfo", JSON.stringify(userInfo))
       console.log("code ran2")
        setValue(true)
       }else{
        alert("fill in all")
       }
    }
useEffect(() => {
  const data = JSON.parse(localStorage.getItem("userInfo")) 
  if(data.firstName !== ""){
    console.log("code running")
   setValue(true)
  }
}, [])
console.log(userInfo)
 return (
    <div>
{value ? <Todo /> : <form onSubmit={submitForm}>
    
<label htmlFor="First Name">
        <input type="text" name="First Name"  id="First name" value={userInfo.firstName} 
         onChange={e => setUserInfo({...userInfo,firstName: e.target.value})
        }
        placeholder="First Name" required />
    </label>

    <label htmlFor="Last Name">
        <input type="text" name="Last Name" id="Last Name" 
         value={userInfo.lastName}
         onChange={e => setUserInfo({...userInfo,lastName: e.target.value})
         }
        placeholder="Last Name" required />
    </label>

    <label htmlFor="Email">
        <input type="email" name="Email" id="Email" value={userInfo.email}
         onChange={e => setUserInfo({...userInfo,email: e.target.value})
        }
        placeholder="Email" required />
    </label>

    <label htmlFor="Location">
        <input type="location" name="Location" id="location" value={userInfo.location}
         onChange={e => setUserInfo({...userInfo,location: e.target.value})
        }
        placeholder="location" required />
    </label>


    <label htmlFor="Password">
        <input type="password" name="Password" id="password" value={userInfo.password}  
         onChange={e => setUserInfo({...userInfo,password: e.target.value})
         }
        placeholder="password" required />
    </label>
  
   <button>Submit</button>

</form>}

    </div>
  )
}

export default Form
