import React, { useState, useEffect } from 'react'
import API from '../../helpers/api';
import './styles.scss'

function NewUser() {
    const defaultFormValues = {
        name: "",
        email: "",
        password: "",
        phone_number: "",
        role_name: "Tenant",
        house_id: "",
        houses: [],
    }

    const [formValues, setFormValues] = useState(defaultFormValues);

    const getHouses = () => {
        API.request('houses')
            .then (results => results.data)
            .then (results => setFormValues({
                ...formValues,
                houses: results
            }))
    }

    useEffect(() => {
        getHouses()
    }, [])


    const handleChange = (e) => {
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (event) => {
        alert(`${formValues.name} Registered Successfully!`)
        event.preventDefault()
        const res = await API.request("users", {
            method: "POST",
            data: JSON.stringify(formValues),
            headers: {
                "Content-Type": "application/json",
            },
        });
        setFormValues(defaultFormValues)
    }

    return (
        <div class="formDiv">
            <form onSubmit={handleSubmit}>
                <h1>Create Account</h1>
                <label className="role">Role:
                    <div className="radio-buttons" name='role_name' onChange={handleChange} defaultValue="Select Role">
                        <label htmlFor="tenant_radio_button">
                            <input id="tenant_radio_button" name='role_name' type="radio" value="Tenant" checked={formValues.role_name === "Tenant"} onChange={handleChange}/>
                            <div className="custom-radio">
                                <div className="selected-fill"></div>
                            </div> Tenant
                        </label>
                        <label htmlFor="pm_radio_button">
                            <input id="pm_radio_button" name='role_name' type="radio" value="Property Manager" checked={formValues.role_name === "Property Manager"} onChange={handleChange} />
                            <div className="custom-radio">
                                <div className="selected-fill"></div>
                            </div> PM
                        </label>
                    </div>
                </label>
                <label>Name :</label><input name='name' type="text" value={formValues.name} onChange={handleChange} />
                <label>Email :</label><input name='email' type="text" value={formValues.email} onChange={handleChange} />
                <label>Phone :</label><input name='phone_number' type="text" value={formValues.phone_number} onChange={handleChange} />
                <label>Temp Password :</label><input name='password' type="text" value={formValues.password} onChange={handleChange} />
                <select name='house_id' value={formValues.house_id} onChange={handleChange}>
                    <option value='' disabled selected>Select Property</option>
                    {formValues.houses.map(house => (
                        <option value={house.id}>{house.title}</option>
                    ))}
                </select>
                <input type="submit" value="Create Account" />
            </form>
        </div>
    )
}



export default NewUser
