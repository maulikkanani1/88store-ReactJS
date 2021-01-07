import React from "react";
import Select from "react-select";
import { useFormContext, Controller } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

const Custome_Input = ({ label, name, placeholder, type, option, isrequired, disabled, tag, isSearchable }) => {
  const { register, errors, control } = useFormContext();

  const InputTag = tag ? tag : "input";
  switch (type) {
    case "select":
      return (
        <div className="form-group">
          <label>{`${label} ${isrequired ? "*" : ""}`}</label>
          <Controller
            name={name}
            control={control}
            rules={{ required: isrequired ? `${label} field is required` : false }}
            render={(props) => (
              <Select
                placeholder={placeholder ? placeholder : `Enter ${label}`}
                options={option}
                isSearchable={isSearchable}
                isClearable
                onChange={({ value }) => props.onChange(value)}
                value={option.find(({ value }) => value === props.value)}
              />
            )}
          />
          <ErrorMessage
            render={({ message }) => (
              <span className="text-danger" key={type}>
                {message}
              </span>
            )}
            errors={errors}
            name={name}
          />
        </div>
      );
    default:
      return (
        <div className="form-group">
          <label>{`${label} ${isrequired ? "*" : ""}`}</label>
          <InputTag
            ref={register({ required: isrequired ? `${label} field is required` : false })}
            name={name}
            type={type ? type : "text"}
            disabled={disabled}
            className={errors[name] ? "form-control is-invalid" : "form-control"}
            placeholder={placeholder ? placeholder : `Enter ${label}`}
          />

          <ErrorMessage
            render={({ message }) => (
              <span className="text-danger" key={type}>
                {message}
              </span>
            )}
            errors={errors}
            name={name}
          />
        </div>
      );
  }
};

export default Custome_Input;
