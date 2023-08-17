import React from "react";
import { TextField, Button } from "@mui/material";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import { ref, uploadBytesResumable} from 'firebase/storage';
import { storage } from "../../FirebaseConfig";

const descDefaultVal = `Type: House/Apartment/Condo/Villa/Other
Bedrooms: 
Bathrooms: 
Furnishing: Non/Semi/Fully Furnished
Listed by: 
Super Built up area (ft²): 
Carpet Area (ft²): 
Bachelors Allowed: 
Maintenance (Monthly): 
Total Floors: 
Floor No: 
Car Parking: Yes/No
Facing: North/East/West/South
Project Name: `;

const CreateAdPage = () => {
  const [imagePaths, setImagePaths] = React.useState([]);
  const [files, setFiles] = React.useState(null);
  const title = React.useRef();
  const location = React.useRef();
  const price = React.useRef();
  const description = React.useRef();

  const onImageChange = (event) => {
    if (event.target.files) {
      setFiles(event.target.files);
      let imagePathList = [];
      for (const file of event.target.files) {
        imagePathList.push(URL.createObjectURL(file))
      }
      setImagePaths(imagePathList);
    }
  }

  const submitAd = (event) => {
    event.preventDefault();

    const storageRef = ref(storage, `/ad-imgs/${files[0].name}`);
    const upload = uploadBytesResumable(storageRef, files[0])

    console.log('hey htere');
  }

  return (
    <div className="create-ad-page">
      <div className="create-ad-container">
        <div className="create-ad-form">
          <h1>List My Property</h1>
          <form onSubmit={submitAd}>
            <FormLabel id="demo-row-radio-buttons-group-label" required>Listing Type</FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
            >
              <FormControlLabel value="RENT" control={<Radio />} label="Rent"/>
              <FormControlLabel value="SELL" control={<Radio />} label="Sell" />
            </RadioGroup>
            <FormLabel id="demo-row-radio-buttons-group-label" required>Upload Images</FormLabel>
            <CreateAdImgGallery imagePaths={imagePaths} />
            <input type="file" accept="image/*" onChange={onImageChange} multiple />
            <TextField
              fullWidth
              id="filled-basic"
              label="Title"
              variant="filled"
              inputRef={title}
              autoComplete="off"
              required
            />
            <TextField
              fullWidth
              id="filled-basic"
              label="location"
              variant="filled"
              inputRef={location}
              autoComplete="off"
              required
            />
            <TextField
              fullWidth
              type="number"
              id="filled-basic"
              label="Price"
              variant="filled"
              inputRef={price}
              autoComplete="off"
              required
            />
            <TextField
              fullWidth
              id="filled-multiline-static"
              label="Description"
              multiline
              rows={14}
              defaultValue={descDefaultVal}
              inputRef={description}
              autoComplete="off"
              variant="filled"
            />
            <Button
              variant="contained"
              sx={{ marginTop: "20px", width: "100%" }}
              type="submit"
            >
              List Now
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

function CreateAdImgGallery({imagePaths}) {
  if (imagePaths) {
    return (
      <div className="create-ad-img-container">
        {
          imagePaths.map((imgPath) => (
            <div className="create-ad-img">
              <img src={imgPath} alt="" />
            </div>
          ))
        }
      </div>
    )
  }
}

export default CreateAdPage;