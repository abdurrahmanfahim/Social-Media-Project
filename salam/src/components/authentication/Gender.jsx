import React from "react";

const Gender = ({formik}) => {
  const {errors, touched} = formik
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        Gender
      </label>
      <div className="flex gap-6">
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            name="gender"
            onChange={formik.handleChange}
            autoComplete="off"
            onBlur={formik.handleBlur}
            value="male"
            className="w-4 h-4 text-primary "
          />
          <span className="text-gray-700">Male</span>
        </label>

        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            name="gender"
            onChange={formik.handleChange}
            autoComplete="off"
            onBlur={formik.handleBlur}
            value="female"
            className="w-4 h-4 text-primary "
          />
          <span className="text-gray-700">Female</span>
        </label>
      </div>
      {errors.gender && touched.gender && (
        <p className="text-red-500 text-sm mt-1">{errors.gender}</p>
      )}
    </div>
  );
};

export default Gender;
