import { useFormik } from "formik";
import React from "react";
import { toast } from "react-toastify";
import * as yup from "yup";

const Form = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      mobile: "",
    },
    validationSchema: yup.object({
      email: yup.string().required().email(),
      mobile: yup.string().required().min(1).max(10),
    }),
    onSubmit: (values) => {
      console.log(values);
      toast.success("From Submit Succesfully. ");
    },
  });

  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col-sm-6 offset-sm-3">
            <div className="card">
              <div className="card-header text-center bg-info">
                Validation From
              </div>
              <form onSubmit={formik.handleSubmit}>
                <div className="card-body">
                  <div className="mt-2">
                    <label for="email" className="form-label">
                      Enter Your Email
                    </label>
                    <input
                      type="text"
                      className={`form-control
                    ${
                      formik.touched.email &&
                      (formik.errors.email ? "is-invalid" : "is-valid")
                    }
                    `}
                      id="email"
                      {...formik.getFieldProps("email")}
                      placeholder="Enter Your Email"
                    />
                    <div className="valid-feedback">Looks good!</div>
                    <div className="invalid-feedback">
                      Please Enter Your Email
                    </div>
                  </div>
                  <div className="mt-2">
                    <label for="password" className="form-label">
                      Please Enter Your Mobile
                    </label>
                    <input
                      type="text"
                      className={`form-control
                    ${
                      formik.touched.mobile &&
                      (formik.errors.mobile ? "is-invalid" : "is-valid")
                    }
                    `}
                      id="mobile"
                      {...formik.getFieldProps("mobile")}
                      placeholder="Enter Your Mobile "
                    />
                    <div className="valid-feedback">Looks good!</div>
                    <div className="invalid-feedback">
                      Please Enter Your Mobile
                    </div>
                  </div>
                  <button type="submit" className="btn btn-primary w-100 mt-3">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Form;
