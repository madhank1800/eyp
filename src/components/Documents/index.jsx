import React, { useEffect, useState } from "react";
import { UploadOutlined } from "@ant-design/icons";
import { message } from "antd";
import { Grid } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { getAllEmployeeIds } from "../../reducers/employeeReducer";
// import { Form, Select } from "antd";
import FormControl from "@mui/material/FormControl";
import { uploadDocument } from "../../reducers/documentReducer";
import FormHelperText from "@mui/material/FormHelperText";
import { Button, InputLabel, MenuItem, Select, TextField } from "@mui/material";
// const { Option } = Select;

const Documents = () => {
  const empIds = useSelector((state) => state.employees.empIds || []);
  // console.log(empIds);
  const dispatch = useDispatch();
  const [fileList, setFileList] = useState([]);
  const [empId, setEmpId] = useState(0);
  const [selectedFile, setSelectedFile] = useState(null);
  const [formData, setFormData] = useState(
    {
    // empId: "",
    // files: [],
  }
  );
  const [options, setOptions] = useState([]);
  const [errors, setErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);


  const handleDelete = (index) => {
    const newFiles = [...formData?.files];
    newFiles.splice(index, 1);
    setFormData(newFiles);
  };
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (event) => {
    const files = event.target.files;
    console.log(event.target.files);
    setFormData({ ...formData, files });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      // Form submission logic here
      console.log("Form submitted:", formData);
      dispatch(uploadDocument(formData))
        .then((res) => {
          console.log(res);
          if (res?.meta.requestStatus === "fulfilled") {
            // setLoading(false);
            message.success(res?.payload?.message);
            // handleClose()
          } else if (res?.meta.requestStatus === "rejected") {
            // setLoading(false);
            console.log("rejected");

            message.error("some thing went wrong");
            // handleClose()
          }
        })
        .catch((err) => {
          message.error(err);
        });
    } else {
      console.log("Form validation failed:", errors);
    }
  };

  const validateForm = () => {
    let isValid = true;
    let newErrors = {};

    // Validate selected option
    if (!formData.empId) {
      isValid = false;
      newErrors.selectedOption = "Please select an option";
    }

    // Validate files field
    if (formData.files.length === 0) {
      isValid = false;
      newErrors.files = "Please upload at least one file";
    }

    setErrors(newErrors);
    setIsFormValid(isValid);
    return isValid;
  };

  useEffect(() => {
    dispatch(getAllEmployeeIds());
  }, []);
  return (
    <>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <FormControl fullWidth>
              <InputLabel id="selected-option-label">Select Option</InputLabel>
              <Select
                labelId="selected-option-label"
                id="selected-option"
                name="empId"
                value={formData.selectedOption}
                onChange={handleInputChange}
                label="Select Option"
                error={!!errors.selectedOption}
              >
                {empIds.map((option, index) => (
                  <MenuItem key={index} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </Select>
              {errors.selectedOption && (
                <FormHelperText error>{errors.selectedOption}</FormHelperText>
              )}
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <input
              accept=".pdf,.doc,.docx"
              style={{ display: "none" }}
              id="upload-files"
              name="file"
              // multiple
              type="file"
              onChange={handleFileChange}
            />
            <label htmlFor="upload-files">
              <Button variant="contained" component="span">
                Upload Files
              </Button>
            </label>
            {errors.files && (
              <FormHelperText error>{errors.files}</FormHelperText>
            )}
          </Grid><Grid item xs={12}>{formData?.files &&(<>{formData?.files[0].name}</>)}</Grid>
          <Grid item xs={12}>
            <Button
              variant="contained"
              color="primary"
              type="submit"
              // disabled={!isFormValid}
            >
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
      {/* 
      <div>
      <Input
        type="file"
        inputProps={{ accept: 'application/pdf' }} // Limit file type to PDF
        onChange={handleFileChange}
      />
      <Button onClick={handleUpload} variant="contained" color="primary" disabled={!selectedFile}>
        Upload
      </Button> */}
      {/* </div> */}
    </>
  );
};

export default Documents;

// dispatch(uploadDocument(values))
//   .then((res) => {
//     console.log(res);
//     if (res?.meta.requestStatus === "fulfilled") {
//       // setLoading(false);
//       message.success(res?.payload?.message);
//       // handleClose()
//     } else if (res?.meta.requestStatus === "rejected") {
//       // setLoading(false);
//       console.log("rejected");

//       message.error("some thing went wrong");
//       // handleClose()
//     }
//   })
//   .catch((err) => {
//     message.error(err);
//   });
