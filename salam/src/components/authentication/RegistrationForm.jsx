import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { signUp } from "../../validations";
import BirthDate from "./BirthDate";
import Gender from "./Gender";
import { useAddUserMutation } from "../../features/api/authApi";
import { PulseLoader } from "react-spinners";

const initialState = {
  fName: "",
  lName: "",
  email: "",
  password: "",
  birthYear: new Date().getFullYear(),
  birthMonth: new Date().getMonth() + 1,
  birthDay: new Date().getDay(),
  gender: "",
};

const RegistrationForm = ({ toast }) => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: initialState,
    validationSchema: signUp,
    onSubmit: () => {
      console.log("submitted");
      registration();
      formik.resetForm();
    },
  });

  const [addUser, { isLoading }] = useAddUserMutation();

  const registration = async () => {
    const signUpMutation = await addUser({
      fName: formik.values.fName,
      lName: formik.values.lName,
      email: formik.values.email,
      password: formik.values.password,
      birthYear: formik.values.birthYear,
      birthMonth: formik.values.birthMonth,
      birthDay: formik.values.birthDay,
      gender: formik.values.gender,
    });

    if (signUpMutation?.data) {
      toast.success(signUpMutation?.data?.message, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: false,
        pauseOnHover: false,
        theme: "light",
      });

      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } else if (signUpMutation?.error) {
      toast.error(signUpMutation?.error?.data?.message, {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: false,
        pauseOnHover: false,
        theme: "light",
      });
    }
  };

  const { errors, touched } = formik;
  // console.log(formik.values);

  return (
    <div className="registration">
      <div className="form-container">
        <form className="form" onSubmit={formik.handleSubmit}>
          <div className="input-group">
            <label className="label">First Name</label>
            <input
              name="fName"
              type="text"
              onChange={formik.handleChange}
              autoComplete="off"
              onBlur={formik.handleBlur}
              value={formik.values.fName}
              className={`input ${
                errors.fName && touched.fName ? "input-error" : ""
              }`}
              placeholder="Enter your first name"
            />
            {errors.fName && touched.fName && (
              <p className="error-text">{errors.fName}</p>
            )}
          </div>

          <div className="input-group">
            <label className="label">Last Name</label>
            <input
              name="lName"
              type="text"
              onChange={formik.handleChange}
              autoComplete="off"
              onBlur={formik.handleBlur}
              value={formik.values.lName}
              className={`input ${
                errors.lName && touched.lName ? "input-error" : ""
              }`}
              placeholder="Enter your last name"
            />
            {errors.lName && touched.lName && (
              <p className="error-text">{errors.lName}</p>
            )}
          </div>

          <div className="input-group">
            <label className="label">Email</label>
            <input
              name="email"
              type="email"
              onChange={formik.handleChange}
              autoComplete="off"
              onBlur={formik.handleBlur}
              value={formik.values.email}
              className={`input ${
                errors.email && touched.email ? "input-error" : ""
              }`}
              placeholder="Enter your email address"
            />
            {errors.email && touched.email && (
              <p className="error-text">{errors.email}</p>
            )}
          </div>

          <div className="input-group">
            <label className="label">Password</label>
            <input
              name="password"
              type="password"
              onChange={formik.handleChange}
              autoComplete="off"
              onBlur={formik.handleBlur}
              value={formik.values.password}
              className={`input ${
                errors.password && touched.password ? "input-error" : ""
              }`}
              placeholder="Create a strong password"
            />
            {errors.password && touched.password && (
              <p className="error-text">{errors.password}</p>
            )}
          </div>

          <BirthDate formik={formik} />
          <Gender formik={formik} />

          <div className="pt-2">
            {isLoading ? (
              <button disabled type="submit" className="submit-btn">
                <PulseLoader color="#fff" size={8} />
              </button>
            ) : (
              <button type="submit" className="submit-btn">
                Create Account
              </button>
            )}

            <div className="text-center mt-4">
              <p className="link-text">
                Already have an account?{" "}
                <Link to={"/login"} className="link">
                  Sign In
                </Link>
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;
