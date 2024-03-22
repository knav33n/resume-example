import React, { memo } from 'react'
import Banner from './components/banner/banner'
import PersonalInformation from './components/personal-information/personal-information'
import Button from '../../components/common/button/button'
import DeleteAccount from './components/delete-account/delete-account'

const UserProfile = memo(() => {
    return (
        <>
            <Banner heading="Premium Account" content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam, iste? Provident alias quia iusto sint ipsam incidunt culpa, qui exercitationem! Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, placeat?" />
            <PersonalInformation />
            <DeleteAccount />
            <p className='my-2'>
                <a href="">Get in touch with our support team</a> if you have any question or want to leave some feedback.
                <br /> We'll be happy to hear from you.
            </p>
        </>
    )
})

export default UserProfile