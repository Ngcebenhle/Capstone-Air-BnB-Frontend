import React, {
  useRef,
  useContext,
  useState,
  useEffect
 
} from "react";
import "./CreateListingForm.css";
import { listingDetails } from "../../Reducer/CreateListing/CreateListingState";
import axios from "axios";
import { LocationSearch } from "../../Context/LocationSearchContext";
import { useHistory } from "react-router-dom";
import { LoginContext } from "../../Context/LogInContext";
import { ReactComponent as CloseX } from "../../Assets/CloseX.svg";
const CreateListingForm = () => {
 
  
  
  
  const [imagePath, setImagePath] = useState();
  const [options, setOptions] = useState([
    {value:true,text:'True'},
     {value:false,text:'False'}                              
  ]);
  const [displayedImages, setDisplayedImages] = useState([]);
  const [imagesLinks, setImagesLinks] = useState([]);


  // const {updateListing,
  //          setUpdateListing}  = useContext(listingDetails);
  const {
    state,
    changeInput,
    addImage,
    addAmenitiesMethod,
    images,
    type,
    location,
    guests,
    bedrooms,
    bathrooms,
    amenities,
    rating,
    reviews,
    price,
    title,
    weeklyDiscount,
    cleaningFee,
    serviceFee,
    occupancyTaxes,
    enhancedCleaning,
    selfCheckIn,
    description,
    cleanliness,
    communication,
    checkIn,
    accuracy,
    locationRating,
    value,
    updateListing,
    listingName,
    listingFormDetails, 
        setListingFormDetail
  } = useContext(listingDetails);

  const { token } = useContext(LoginContext);
  const history = useHistory();

  const amenitiesReff = useRef();

  
  // useEffect(() => {
  //   // do the URL convertion
  //   if(displayedImages){
  //     displayedImages.map((mag)=>{
  //       const reader = new FileReader
       
  //        reader.onload = () => {
  //         imagesLinks.push(reader.result)
  //        }
  //       reader.readAsDataURL(mag)
  //     })
        
  //   }
  // },[images]);

  const CreateListing = (e) => {
    e.preventDefault();

    // if all fields are filled and if they are send to backend but if not specify which one
    //  and give an error

    //send data/state to the back end.
    //

    // check if fields are not empty and if 5 images are uploaded
    // const formData =

    const params = new FormData();

    images.map((img) => {
      // console.log(img);
      for (let i = 0; i < img.length; i++) {
        params.append("images", img[i]);
      }
    });
    // params.append("images",imag);
    params.append("type", type);
    params.append("listingName", listingName);
    params.append("location", location);
    params.append("guests", guests);
    params.append("bedrooms", bedrooms);
    params.append("bathrooms", bathrooms);
    params.append("amenities", amenities);
    params.append("rating", rating);
    params.append("reviews", reviews);
    params.append("price", price);
    params.append("title", title);
    params.append("weeklyDiscount", weeklyDiscount);
    params.append("cleaningFee", cleaningFee);
    params.append("serviceFee", serviceFee);
    params.append("occupancyTaxes", occupancyTaxes);
    params.append("enhancedCleaning", enhancedCleaning);
    params.append("selfCheckIn", selfCheckIn);
    params.append("description", description);
    params.append("cleanliness", cleanliness);
    params.append("communication", communication);
    params.append("checkIn", checkIn);
    params.append("accuracy", accuracy);
    params.append("locationRating", locationRating);
    params.append("value", value);

    axios
      .post(
        "https://newairbnbbackend-2c630f16ea66.herokuapp.com/api/accommodation/add/accommodation",
        params,
        { headers: { Authorization: `Bearer ${token}` } }
      )
      .then(function (response) {
        // console.log(response);
        setImagePath(response.data.AccommodationData.images[1]);
        alert("Accommodation Created Congratulation!!!!!!!!!!!!!!");
        //set form to empty
        // see if we need redirection
      })
      .catch(function (error) {
        console.log(error.response);
      });

   
  };

  const Cancel = (e) => {
    e.preventDefault();
    // clear our the state to it initial state
    history.push("/admin");
  };

  const Update = (e) => {
    e.preventDefault();

     console.log(listingFormDetails.listingID)
    const params = new FormData();

    images.map((img) => {
      console.log(img);
      for (let i = 0; i < img.length; i++) {
        params.append("images", img[i]);
      }
    });
    
    params.append("listingID",listingFormDetails.listingID);
    params.append("type", listingFormDetails.type);
    params.append("listingName", listingFormDetails.listingName);
    params.append("location", listingFormDetails.location);
    params.append("guests", listingFormDetails.guests);
    params.append("bedrooms", listingFormDetails.bedrooms);
    params.append("bathrooms", listingFormDetails.bathrooms);
    params.append("amenities", listingFormDetails.amenities);
    params.append("rating", listingFormDetails.rating);
    params.append("reviews", listingFormDetails.reviews);
    params.append("price", listingFormDetails.price);
    params.append("title", listingFormDetails.title);
    params.append("weeklyDiscount", listingFormDetails.weeklyDiscount);
    params.append("cleaningFee", listingFormDetails.cleaningFee);
    params.append("serviceFee", listingFormDetails.serviceFee);
    params.append("occupancyTaxes", listingFormDetails.occupancyTaxes);
    params.append("enhancedCleaning", listingFormDetails.enhancedCleaning);
    params.append("selfCheckIn", listingFormDetails.selfCheckIn);
    params.append("description", listingFormDetails.description);
    params.append("cleanliness", listingFormDetails.cleanliness);
    params.append("communication", listingFormDetails.communication);
    params.append("checkIn", listingFormDetails.checkIn);
    params.append("accuracy", listingFormDetails.accuracy);
    params.append("locationRating", listingFormDetails.locationRating);
    params.append("value", listingFormDetails.value);

    axios
      .patch(
        "https://newairbnbbackend-2c630f16ea66.herokuapp.com/api/accommodation/update/accommodation",
        params,
        { headers: { Authorization: `Bearer ${token}` } }
      )
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error.response);
      });

    alert("Accommodation Updated Congratulation!!!!!!!!!!!!!!");
  };

  const addDataOnChange = (e) => {
    changeInput(e);
  };

  const addAmenities = () => {
    //   invoke state change add Amenities to a list array or object
    const amenity = amenitiesReff.current.value.split(",");
    amenity.forEach((ameni) => {

      addAmenitiesMethod(ameni);
    });
  };
  let ImageLinks = []

  const AddObjectOnChange = (e) => {
    addImage(e.target.files);
      
    // console.log(e.target.files)
    // // get image Urls

    //  let imag = []
    //  imag.push(e.target.files)
    //  console.log(imag)
    //  imag.forEach((elm) => {
    //   const ImageURL = URL.createObjectURL(elm)
    //   ImageLinks.push(ImageLinks)
    // })
    // // set in here the url versions and their index
     setDisplayedImages(e.target.files)

  };

  const RemoveImage = (e) => {
    //  Remove an image in the array through dispatch
    e.preventDefault();
  }

  return (
    <div>
      {/* <img src={imagePath} alt="" /> */}
      {!updateListing ? (
        <div className="CreateListingForm">
          <h2>Create Listing</h2>

          <div className="form">
            <div className="section1">
              <div className="sideA">
                <div className="listingName">
                  <span>Listing Name</span>
                  <input
                    type="text"
                    name="listingName"
                    id=""
                    // value={selectedListing.name}
                    onChange={addDataOnChange}
                  />
                </div>

                <div className="location">
                  <span>Location</span>
                  <input
                    type="text"
                    name="location"
                    id=""
                    // value={selectedListing.location}
                    onChange={addDataOnChange}
                  />
                </div>

                <div className="Description">
                  <span>Description</span>
                  <input
                    type="text"
                    name="description"
                    id=""
                    // value={selectedListing.description}
                    onChange={addDataOnChange}
                  />
                </div>
              </div>

              <div className="sideB">
                <div className="roomsBathsTypes">
                  <div className="rooms">
                    <span>Rooms</span>
                    <input
                      name="bedrooms"
                      type="number"
                      min="1"
                      step={1}
                      // value={selectedListing.bedrooms}
                      onChange={addDataOnChange}
                    />
                  </div>

                  <div className="baths">
                    <span>Bath</span>
                    <input
                      name="bathrooms"
                      type="number"
                      min="1"
                      step={1}
                      // value={selectedListing.bathrooms}
                      onChange={addDataOnChange}
                    />
                  </div>

                  <div className="types">
                    <span>Type</span>
                    <input
                      type="text"
                      name="type"
                      id=""
                      // value={selectedListing.type}
                      onChange={addDataOnChange}
                    />
                  </div>
                </div>

                <div className="roomsBathsTypes">
                  <div className="rooms">
                    <span>Guest</span>
                    <input
                      name="guests"
                      type="number"
                      min="1"
                      step={1}
                      // value={selectedListing.guests}
                      onChange={addDataOnChange}
                    />
                  </div>

                  <div className="baths">
                    <span>Price</span>
                    <input
                      name="price"
                      type="number"
                      min="0"
                      step={1}
                      // value={selectedListing.price}
                      onChange={addDataOnChange}
                    />
                  </div>

                  <div className="types">
                    <span>Title</span>
                    <input
                      type="text"
                      name="title"
                      id=""
                      // value={selectedListing.title}
                      onChange={addDataOnChange}
                    />
                  </div>
                </div>

                <div className="roomsBathsTypes">
                  <div className="rooms">
                    <span>Rating</span>
                    <input
                      name="rating"
                      type="number"
                      min="1"
                      max="10"
                      step={0.5}
                      // value={selectedListing.rating}
                      onChange={addDataOnChange}
                    />
                  </div>

                  <div className="baths">
                    <span>location Rating</span>
                    <input
                      name="locationRating"
                      type="number"
                      min="1"
                      max="10"
                      step={0.1}
                      // value={selectedListing.locationRating}
                      onChange={addDataOnChange}
                    />
                  </div>

                  <div className="types">
                    <span>checkIn</span>
                    <input
                      name="checkIn"
                      type="number"
                      min="1"
                      max="10"
                      step={0.1}
                      // value={selectedListing.checkIn}
                      onChange={addDataOnChange}
                    />
                  </div>
                </div>

                <div className="roomsBathsTypes">
                  <div className="rooms">
                    <span>cleaning Fee</span>
                    <input
                      name="cleaningFee"
                      type="number"
                      min="0"
                      step={1}
                      // value={selectedListing.cleaningFee}
                      onChange={addDataOnChange}
                    />
                  </div>

                  <div className="baths">
                    <span>accuracy</span>
                    <input
                      name="accuracy"
                      type="number"
                      min="1"
                      max="10"
                      step={0.1}
                      // value={selectedListing.accuracy}
                      onChange={addDataOnChange}
                    />
                  </div>

                  <div className="types">
                    <span>Enhanced Cleaning</span>
                    {
                      options.map((val)=>{
                        return(
                          <div>
                          <input
                            type="radio"
                            id="enhancedCleaning"
                            name="enhancedCleaning"
                            value={val.value}
                            // checked
                            onChange={addDataOnChange}
                          />
                          <label for="enhancedCleaning">{val.text}</label>
                          <br />
                        </div>
                        )
                      })
                    }
                    {/* <div>
                      <input
                        type="radio"
                        id="true"
                        name="enhanncedCleaing"
                        // value={true}
                        onChange={addDataOnChange}
                      />
                      <label for="true">True</label>
                      <br />
                    </div>

                    <div>
                      <input
                        type="radio"
                        id="false"
                        name="enhanncedCleaing"
                        // value={false}
                        onChange={addDataOnChange}
                      />
                      <label for="false">False</label>
                      <br />
                    </div> */}

                  </div>
                </div>

                <div className="roomsBathsTypes">
                  <div className="rooms">
                    <span>selfCheckIn</span>
                    {
                      options.map((val)=>{
                        return(
                          <div>
                          <input
                            type="radio"
                            id="selfCheckIn"
                            name="selfCheckIn"
                            value={val.value}
                            // checked
                            onChange={addDataOnChange}
                          />
                          <label for="selfCheckIn">{val.text}</label>
                          <br />
                        </div>
                        )
                      })
                    }

                    {/* <div>
                      <input
                        type="radio"
                        id="true"
                        name="selfCheckIn"
                        // value={true}
                        onChange={addDataOnChange}
                      />
                      <label for="true">True</label>
                      <br />
                    </div>

                    <div>
                      <input
                        type="radio"
                        id="false"
                        name="selfCheckIn"
                        // value={false}
                        onChange={addDataOnChange}
                      />
                      <label for="false">False</label>
                      <br />
                    </div> */}
                  </div>

                  <div className="baths">
                    <span>cleanliness</span>
                    <input
                      name="cleanliness"
                      type="number"
                      min="1"
                      max="10"
                      step={0.1}
                      // value={selectedListing.cleanliness}
                      onChange={addDataOnChange}
                    />
                  </div>

                  <div className="types">
                    <span>communication</span>
                    <input
                      name="communication"
                      type="number"
                      min="1"
                      max="10"
                      step={0.1}
                      // value={selectedListing.communication}
                      onChange={addDataOnChange}
                    />
                  </div>
                </div>

                <div className="roomsBathsTypes">
                  <div className="rooms">
                    <span>Occupancy Taxes</span>
                    <input
                      name="occupancyTaxes"
                      type="number"
                      min="0"
                      step={1}
                      // value={selectedListing.occupancyTaxes}
                      onChange={addDataOnChange}
                    />
                  </div>

                  <div className="baths">
                    <span>service Fee</span>
                    <input
                      name="serviceFee"
                      type="number"
                      min="0"
                      step={1}
                      // value={selectedListing.serviceFee}
                      onChange={addDataOnChange}
                    />
                  </div>

                  <div className="types">
                    <span>weekly Discount</span>
                    <input
                      name="weeklyDiscount"
                      type="number"
                      min="0"
                      step={1}
                      // value={selectedListing.weeklyDiscount}
                      onChange={addDataOnChange}
                    />
                  </div>
                </div>

                <div className="amenities">
                  <span>Amenities</span>
                  <div className="content">
                    <input
                      ref={amenitiesReff}
                      type="text"
                      name="amenities"
                      id=""
                      // value={selectedListing.amenities}
                      // onClick={addAmenities}
                    />
                    <button onClick={addAmenities}>Add</button>
                  </div>
                </div>
              </div>
            </div>

            <div className="section2">
              <div className="createListingFormDetails">
                <span>Images</span>
                <button onChange={AddObjectOnChange}>Upload Images</button>
              </div>
               
                 <div className="importantNote">
                    <h3>{`Make Sure to Upload (5 min) Display Images`}</h3>
                       </div>

              <input
                type="file"
                multiple
                enctype="multipart/form-data"
                name="images"
                id=""
                // value={selectedListing.images}
                onChange={AddObjectOnChange}
              />



               {/* {imagesLinks?  
                 imagesLinks.map((link)=>{
                  console.log(link)
                    return(
                      <div className="imageDisplay"> 

                      <div className="displayedImage">
                            <img src={link} alt="" />
    
                            <div className="RemoveImageButton" onClick={RemoveImage}>
                            In here add a small round, X button with a grayed out background
                            which becomes solid on hover
    
                            Function: to remove Images from the array list
                             <CloseX/>
                           </div>
    
                      </div>
    
                      
                  </div>
                    )
                 })
              : null} */}
              
            </div>

            

            <div className="submitButtons">
              <button onClick={CreateListing} className="create">
                Create
              </button>
              <button onClick={Cancel} className="cancel">
                Cancel
              </button>
            </div>
          </div>
        </div>
      ) : (
        updateListing.map((update) => {
           
          return (
            <div className="CreateListingForm">
              <h2>Create Listing</h2>

              <div className="form">
                <div className="section1">
                  <div className="sideA">

                    <div className="listingName">
                      <span>Listing Name</span>
                      <input
                        type="text"
                        name="listingName"
                        id=""
                        defaultValue={listingFormDetails.listingName}
                        onChange={(e)=>{
                          e.preventDefault();
                          setListingFormDetail({
                            ...listingFormDetails,
                            listingName:e.target.value
                           })
                        }}
                      />
                    </div>

                    <div className="location">
                      <span>Location</span>
                      <input
                        type="text"
                        name="location"
                        id=""
                        defaultValue={listingFormDetails.location}
                        onChange={(e)=>{
                          e.preventDefault();
                          setListingFormDetail({
                            ...listingFormDetails,
                            location:e.target.value
                           })
                        }}
                      />
                    </div>

                    <div className="Description">
                      <span>Description</span>
                      <input
                        type="text"
                        name="description"
                        id=""
                        defaultValue={listingFormDetails.description}
                        onChange={(e)=>{
                          e.preventDefault();
                          setListingFormDetail({
                            ...listingFormDetails,
                            description:e.target.value
                           })
                        }}
                      />
                    </div>
                  </div>

                  <div className="sideB">

                    <div className="roomsBathsTypes">
                      <div className="rooms">
                        <span>Rooms</span>
                        <input
                          name="bedrooms"
                          type="number"
                          min="1"
                          step={1}
                          defaultValue={listingFormDetails.bedrooms}
                          onChange={(e)=>{
                            e.preventDefault();
                            setListingFormDetail({
                              ...listingFormDetails,
                              bedrooms:e.target.value
                             })
                          }}
                        />
                      </div>

                      <div className="baths">
                        <span>Bath</span>
                        <input
                          name="bathrooms"
                          type="number"
                          min="1"
                          step={1}
                          defaultValue={listingFormDetails.bathrooms}
                          onChange={(e)=>{
                            e.preventDefault();
                            setListingFormDetail({
                              ...listingFormDetails,
                              bathrooms:e.target.value
                             })
                          }}
                        />
                      </div>

                      <div className="types">
                        <span>Type</span>
                        <input
                          type="text"
                          name="type"
                          defaultValue={listingFormDetails.type}
                          onChange={(e)=>{
                            e.preventDefault();
                            setListingFormDetail({
                              ...listingFormDetails,
                              type:e.target.value
                             })
                          }}
                        />
                      </div>
                    </div>

                    <div className="roomsBathsTypes">

                      <div className="rooms">
                        <span>Guest</span>
                        <input
                          name="guests"
                          type="number"
                          min="1"
                          step={1}
                          defaultValue={listingFormDetails.guests}
                          onChange={(e)=>{
                            e.preventDefault();
                            setListingFormDetail({
                              ...listingFormDetails,
                              guests:e.target.value
                             })
                          }}
                        />
                      </div>

                      <div className="baths">
                        <span>Price</span>
                        <input
                          name="price"
                          type="number"
                          min="1"
                          step={1}
                          defaultValue={listingFormDetails.price}
                          onChange={(e)=>{
                            e.preventDefault();
                            setListingFormDetail({
                              ...listingFormDetails,
                              price:e.target.value
                             })
                          }}
                        />
                      </div>

                      <div className="types">
                        <span>Title</span>
                        <input
                          type="text"
                          name="title"
                          id=""
                          defaultValue={listingFormDetails.title}
                          onChange={(e)=>{
                            e.preventDefault();
                            setListingFormDetail({
                              ...listingFormDetails,
                              title:e.target.value
                             })
                          }}
                        />
                      </div>
                    </div>

                    <div className="roomsBathsTypes">

                      <div className="rooms">
                        <span>Rating</span>
                        <input
                          name="rating"
                          type="number"
                          min="1"
                          max="5"
                          step={0.5}
                          defaultValue={listingFormDetails.rating}
                          onChange={(e)=>{
                            e.preventDefault();
                            setListingFormDetail({
                              ...listingFormDetails,
                              rating:e.target.value
                             })
                          }}
                        />
                      </div>

                      <div className="baths">
                        <span>location Rating</span>
                        <input
                          name="locationRating"
                          type="number"
                          min="1"
                          max="10"
                          step={0.1}
                          defaultValue={listingFormDetails.locationRating}
                          onChange={(e)=>{
                            e.preventDefault();
                            setListingFormDetail({
                              ...listingFormDetails,
                              locationRating:e.target.value
                             })
                          }}
                        />
                      </div>

                      <div className="types">
                        <span>checkIn</span>
                        <input
                          name="checkIn"
                          type="number"
                          min="1"
                          max="10"
                          step={0.1}
                          defaultValue={listingFormDetails.checkIn}
                          onChange={(e)=>{
                            e.preventDefault();
                            setListingFormDetail({
                              ...listingFormDetails,
                              checkIn:e.target.value
                             })
                          }}
                        />
                      </div>
                    </div>

                    <div className="roomsBathsTypes">

                      <div className="rooms">
                        <span>cleaning Fee</span>
                        <input
                          name="cleaningFee"
                          type="number"
                          min="1"
                          max="10"
                          step={1}
                          defaultValue={listingFormDetails.cleaningFee}
                          onChange={(e)=>{
                            e.preventDefault();
                            setListingFormDetail({
                              ...listingFormDetails,
                              cleaningFee:e.target.value
                             })
                          }}
                        />
                      </div>

                      <div className="baths">
                        <span>accuracy</span>
                        <input
                          name="accuracy"
                          type="number"
                          min="1"
                          max="10"
                          step={0.1}
                          defaultValue={listingFormDetails.accuracy}
                          onChange={(e)=>{
                            e.preventDefault();
                            setListingFormDetail({
                              ...listingFormDetails,
                              accuracy:e.target.value
                             })
                          }}
                        />
                      </div>

                      <div className="radio">
                        <span>Enhanced Cleaning</span>
                         
                        {
                      options.map((val)=>{
                        return(
                          <div>
                          <input
                            type="radio"
                            id="enhancedCleaning"
                            name="enhancedCleaning"
                            value={val.value}
                            defaultChecked={listingFormDetails.enhancedCleaning}
                            onChange={addDataOnChange}
                          />
                          <label for="enhancedCleaning">{val.text}</label>
                          <br />
                        </div>
                        )
                      })
                    }

                        {/* <div>
                          <input
                            type="radio"
                            id="true"
                            name="enhanncedCleaing"
                            defaultValue={true}
                            onChange={addDataOnChange}
                          />
                          <label for="true">True</label>
                          <br />
                        </div>

                        <div>
                          <input
                            type="radio"
                            id="false"
                            name="enhanncedCleaing"
                            value={false}
                            onChange={addDataOnChange}
                          />
                          <label for="false">False</label>
                          <br />
                        </div> */}
                      </div>
                    </div>

                    <div className="roomsBathsTypes">
                      <div className="radio">
                      {
                      options.map((val)=>{
                        return(
                          <div>
                          <input
                            type="radio"
                            id="selfCheckIn"
                            name="selfCheckIn"
                            value={val.value}
                            defaultChecked={listingFormDetails.selfCheckIn}
                            onChange={addDataOnChange}
                          />
                          <label for="selfCheckIn">{val.text}</label>
                          <br />
                        </div>
                        )
                      })
                    }
 
                        {/* <div>
                          <input
                            type="radio"
                            id="true"
                            name="selfCheckIn"
                            defaultValue={true}
                            onChange={addDataOnChange}
                          />
                          <label for="true">True</label>
                          <br />
                        </div>

                        <div>
                          <input
                            type="radio"
                            id="false"
                            name="selfCheckIn"
                            value={false}
                            onChange={addDataOnChange}
                          />
                          <label for="false">False</label>
                          <br />
                        </div> */}
                      </div>
                      <div className="baths">
                        <span>cleanliness</span>
                        <input
                          name="cleanliness"
                          type="number"
                          min="1"
                          max="10"
                          step={0.1}
                          defaultValue={listingFormDetails.cleanliness}
                          onChange={(e)=>{
                            e.preventDefault();
                            setListingFormDetail({
                              ...listingFormDetails,
                              cleanliness:e.target.value
                             })
                          }}
                        />
                      </div>

                      <div className="types">
                        <span>communication</span>
                        <input
                          name="communication"
                          type="number"
                          min="1"
                          max="10"
                          step={0.1}
                          defaultValue={listingFormDetails.communication}
                          onChange={(e)=>{
                            e.preventDefault();
                            setListingFormDetail({
                              ...listingFormDetails,
                              communication:e.target.value
                             })
                          }}
                        />
                      </div>
                    </div>

                    <div className="roomsBathsTypes">
                      <div className="rooms">
                        <span>Occupancy Taxes</span>
                        <input
                          name="occupancyTaxes"
                          type="number"
                          min="0"
                          step={1}
                          defaultValue={update.occupancyTaxes}
                          onChange={addDataOnChange}
                        />
                      </div>
                      <div className="baths">
                        <span>service Fee</span>
                        <input
                          name="serviceFee"
                          type="number"
                          min="0"
                          step={1}
                          defaultValue={update.serviceFee}
                          onChange={addDataOnChange}
                        />
                      </div>
                      <div className="types">
                        <span>weekly Discount</span>
                        <input
                          type="text"
                          name="weeklyDiscount"
                          id=""
                          defaultValue={update.weeklyDiscount}
                          onChange={addDataOnChange}
                        />
                      </div>
                    </div>

                    <div className="amenities">
                      <span>Amenities</span>
                      <div className="content">
                        <input
                          ref={amenitiesReff}
                          type="text"
                          name="amenities"
                          id=""
                          defaultValue={update.amenities}
                          // onClick={addAmenities}
                        />
                        <button onClick={()=>{
                           const amenity = amenitiesReff.current.value.split(",");
                           amenity.forEach((ameni) => {
                             
                            setListingFormDetail({
                              ...listingFormDetails,
                              amenities:[...listingFormDetails.amenities,ameni]
                             })
                           });
                        }}>Add</button>
                      </div>
                    </div>
                  </div>
                </div>

              

                <div className="section2">
                   

                  <div className="createListingFormDetails">
                    <span>Images</span>
                    <button onChange={AddObjectOnChange}>Upload Images</button>
                  </div>
                   
                       <div className="importantNote">
                    <h3>{`Make Sure to Re-Upload (5 min) Display Images`}</h3>
                       </div>

                  <input
                    type="file"
                    multiple
                    name="images"
                    id=""
                    onChange={AddObjectOnChange}
                    // value={update.images}
                  />
                </div>

                <div className="submitButtons">
                  <button onClick={Update} className="create">
                    update
                  </button>
                  <button onClick={Cancel} className="cancel">
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
};

export default CreateListingForm;
