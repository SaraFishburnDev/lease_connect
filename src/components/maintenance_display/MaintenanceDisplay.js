import "./styles.scss"

import {Icon} from "@iconify/react";
import bxImageAlt from "@iconify-icons/bx/bx-image-alt";
import API from "../../helpers/api";

export default function MaintenanceDisplay(props) {
    const updateStatus = (e) => {
        const status = e.currentTarget.value
        API.request(`houses/${props.house_id}/maintenances/${props.id}`, {
            method: "PATCH",
            data: {status: status},
            headers: {
                "Content-Type": "application/json",
            }
        }).then(() => props.updateStatus(status))
    }

    return (

        <div className="formDiv">

            <div className="house-card">
                <div className="card-content">
                    <h1>{props.title}</h1>
                    <div>{new Date(props.updated_at).toDateString()}</div>
                    <div>{props.description}</div>
                    <div className="card-middle">
                        <div className='img-frame'>
                            <Icon icon={bxImageAlt} className="img-placeholder" color="#2A2B77"/>
                            <img src={props.image_url} height="150px" alt={`${props.title}`}/>
                        </div>
                        <div>
                            <div className="radio-buttons" name='role_name'>
                                <label htmlFor="tenant_radio_button" className="status_displayer">
                                    <input 
                                        id="tenant_radio_button" 
                                        name='role_name' 
                                        type="radio" 
                                        value="unread" 
                                        checked={props.status === 'unread'}
                                        onChange={updateStatus}/>
                                    <div className="custom-radio">
                                        <div className="selected-fill"></div>
                                    </div>
                                    Unread
                                </label>
                            </div>
                            <div className="radio-buttons" name='role_name'>
                                <label htmlFor="pm_radio_button" className="status_displayer">
                                    <input 
                                        id="pm_radio_button" 
                                        name='role_name' 
                                        type="radio" 
                                        value="pending" 
                                        checked={props.status === 'pending'}
                                        onClick={updateStatus}/>
                                    <div className="custom-radio">
                                        <div className="selected-fill"></div>
                                    </div>
                                    Pending
                                </label>
                            </div>
                            <div className="radio-buttons" name='role_name'>
                                <label htmlFor="pm_radio_button" className="status_displayer">
                                    <input
                                        id="pm_radio_button"
                                        name='role_name'
                                        type="radio"
                                        value="actioned"
                                        checked={props.status === 'actioned'}
                                        onClick={updateStatus}/>
                                    <div className="custom-radio">
                                        <div className="selected-fill"></div>
                                    </div>
                                    Actioned
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )}