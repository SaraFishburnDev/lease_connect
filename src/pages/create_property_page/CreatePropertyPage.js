import React, { useState, useEffect } from 'react'
import NewHouse from "../../components/house/NewHouse"

const CreatePropertyPage = () => {
  const [uploadImage, setUploadImage] = useState(() => () => {})

  const defaultFormValues = {
      title: "",
      address: "",
      image_url: "",
  }

  const [formValues, setFormValues] = useState(defaultFormValues);

  const handleChange = (e) => {
      setFormValues({
          ...formValues,
          [e.target.name]: e.target.value
      })
  }

  const handleSubmit = (event) => {
      event.preventDefault()

      uploadImage()
      .then(url => {
          fetch("http://localhost:4000/api/houses", {
              method: "POST",
              body: JSON.stringify({...formValues, image_url: url}),
              headers: {
                  "Content-Type": "application/json",
              },
          })
      })
      .catch(err => console.log(err))
      setFormValues(defaultFormValues)
  }

  return (
    
    <NewHouse handleChange={handleChange} formValues={formValues} setUploadImage={setUploadImage}/>

  )
}

export default CreatePropertyPage