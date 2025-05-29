import {React, useContext }from 'react'
import CreateListingForm from '../../Components/CreateListingForm/CreateListingForm'
import { listingDetails } from '../../Reducer/CreateListing/CreateListingState'

const CreateListingPage = () => {
   
  return (
    <div>
        <CreateListingForm/>
    </div>
  )
}

export default CreateListingPage