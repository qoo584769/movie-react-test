import { useState, useEffect } from 'react'
import axios from 'axios'

export const Member = () => {
  const [formData, setFormData] = useState({
    account: '',
    password: '',
    phoneNumber:'',
    birthdayDay:'',
    email:''
  })

  const handleInput = (e) => {
    const value = e.target.value
    const name = e.target.name
    setFormData({
      ...formData,
      [name]: value,
    })
  }
  const handleSubmit = async(e) => {
    e.preventDefault()
    console.log(formData)
    const data = JSON.stringify(formData)
    try {
      const res = await axios.post('https://movietest-production.up.railway.app/user/signup',{data})
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  }

  // useEffect(()=>{    
    // axios.get('https://movietest-production.up.railway.app/movieInfo').then(res=>{
    //   console.log(res);
    // }).catch(err=>{
    //   console.log(err);
    // })
  // },[])
  return (
    <>
      <form>
        <div className="mb-3">
          <label htmlFor="exampleInputaccount" className="form-label">
            accountName
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputaccount"
            aria-describedby="emailHelp"
            onChange={handleInput}
            name="account"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={handleInput}
            name="email"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            onChange={handleInput}
            name="password"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputphoneNumber" className="form-label">
          phoneNumber
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputphoneNumber"
            onChange={handleInput}
            name="phoneNumber"
          />
        </div>
        
        <div className="mb-3">
          <label htmlFor="exampleInputbirthdayDay" className="form-label">
          birthdayDay
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputbirthdayDay"
            onChange={handleInput}
            name="birthdayDay"
          />
        </div>
        
        <button type="button" className="btn btn-primary" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </>
  )
}
