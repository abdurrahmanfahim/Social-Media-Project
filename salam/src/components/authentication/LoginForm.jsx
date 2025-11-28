import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { signIn } from "../../validations";
import { useLoginUserMutation } from "../../features/api/authApi";
import { PulseLoader } from "react-spinners";
import { useDispatch } from "react-redux";
import { loggedInUser } from "../../features/users/authSlice";

const initialState = {
  email: "",
  password: "",
};

const LoginForm = ({ toast }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: initialState,
    validationSchema: signIn,
    onSubmit: () => {
      console.log("submitted");
      login();
      formik.resetForm();
    },
  });

  const [loginUser, { isLoading }] = useLoginUserMutation();

  const login = async () => {
    const signInMutation = await loginUser({
      email: formik.values.email,
      password: formik.values.password,
    });

    if (signInMutation?.error) {
      toast.error(signInMutation?.error?.data?.message, {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: false,
        pauseOnHover: false,
        theme: "light",
      });

      return;
    }
    navigate("/");
    console.log(signInMutation.data);
    const { message, ...userData } = signInMutation.data;
    dispatch(loggedInUser(userData));
  };

  const { errors, touched } = formik;
  // console.log(formik.values);

  return (
    <div className="registration">
      <div className="form-container">
        <form className="form" onSubmit={formik.handleSubmit}>
          <div className="input-groIn">
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

          <div className="input-groIn">
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
              placeholder="Enter Your password"
            />
            {errors.password && touched.password && (
              <p className="error-text">{errors.password}</p>
            )}
          </div>

          <div className="pt-2">
            {isLoading ? (
              <button disabled type="submit" className="submit-btn">
                <PulseLoader />
              </button>
            ) : (
              <button type="submit" className="submit-btn">
                Login
              </button>
            )}

            <div className="text-center mt-4">
              <p className="link-text">
                Don't have any account?{" "}
                <Link to={"/registration"} className="link">
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

export default LoginForm;
