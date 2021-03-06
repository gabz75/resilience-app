import React from "react";
import PropTypes from "prop-types";
import Input from "../../component/Input";
import Button from "../../component/Button";
import { Header, Container, SubText, Upload } from "./Request.style";
import { Page } from "../../layout";

function RequestForm({ handleChange, values, onSubmit, getFile }) {
  return (
    <Page>
      <Container>
        <Header className="bold">What help do you need?</Header>
        <SubText>Describe the task</SubText>
        <Input
          value={values.description || ""}
          inputName="description"
          onChange={handleChange}
          label="Short Description"
        />
        <Input
          value={values.details || ""}
          inputName="details"
          onChange={handleChange}
          inputType="textarea"
          label="Task Details"
        />
        <Header>Where do you need help?</Header>
        <Input
          value={values.address || ""}
          inputType="text"
          inputName="address"
          onChange={handleChange}
          label="address"
        />
        <Input
          value={values.city || ""}
          inputType="text"
          inputName="city"
          onChange={handleChange}
          label="City"
        />
        <Input
          value={values.state || ""}
          inputType="text"
          inputName="state"
          onChange={handleChange}
          label="State"
        />
        <Input
          value={values.postalCode || ""}
          inputType="number"
          inputName="postalCode"
          onChange={handleChange}
          label="Postal Code"
        />
        <Header>Add a photo</Header>
        <SubText>Help volunteers better understand what you need</SubText>
        <Upload getFile={getFile} values={values} />
        <Button
          onClick={onSubmit}
          secondary
          text="Make Request"
          style={{ float: "right", marginRight: "10%" }}
        />
      </Container>
    </Page>
  );
}

RequestForm.propTypes = {
  handleChange: PropTypes.func,
  value: PropTypes.object,
  onSubmit: PropTypes.func,
  getFile: PropTypes.func,
};

export default RequestForm;
