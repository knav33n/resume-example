import React, { memo } from 'react'
import Button from '../../../../components/common/button/button'
import "./delete-account.css"

const DeleteAccount = memo(() => {
    return (
        <section className='da-container'>
            <h6>Delete Account</h6>
            <p>If you delete your account you'll be permanently removing it from our systems - you can't undo it.</p>
            <Button type="link">Yes, Delete my account</Button>
        </section>
    )
})

export default DeleteAccount