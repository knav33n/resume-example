import React, { memo } from 'react'
import User from "../../../../assets/carla.jpg"
import "./personal-information.css"
import Input from '../input/input'
import Button from '../../../../components/common/button/button'

const PersonalInformation = memo(() => {
    return (
        <form>
            <fieldset className='pi-fieldset'>
                <legend>Personal Information</legend>
                <div className='flex-spaced'>
                    <section>
                        <div className='my-1 flex-spaced gap'>
                            <Input label="First Name" />
                            <Input label="Last Name" />
                        </div>

                        <div className='my-1 flex-spaced gap'>
                            <Input label="City" />
                            <Input label="Postal Code" />
                        </div>

                        <div className='my-1'>
                            <Input label="Address" />
                        </div>


                        <div className='my-1 flex-spaced gap'>
                            <Input label="Email" />
                            <Input label="Phone" />
                        </div>

                        <div className='my-1 flex-spaced gap'>
                            <Input label="Password" type="password" />
                            <div></div>
                        </div>

                        <div className='my-1'>
                            <p className='my-1'>Use this email to log in to your <a href="/">resumedone.io</a> account and receive notifications.</p>
                            <Button>Save</Button>
                        </div>

                        <div className='flex-center my-2'>
                            <input type="checkbox" id="opt-in" name="opt-in" />
                            <label htmlFor="opt-in"><small>Show my profile to serious employers on <a href="/">hirethebest.io</a> for free.</small></label>
                        </div>
                    </section>
                    <section>
                        <img className="form-profile" src={User} alt="user-profile" />
                    </section>
                </div>
            </fieldset>
        </form>
    )
})

export default PersonalInformation