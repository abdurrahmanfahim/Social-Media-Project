import React from "react";

const BirthDate = ({ formik }) => {
  const tooChild = new Date(1970 + 14, 0, 1);
  const tooOld = new Date(1970 + 70, 0, 1);
  const currentDate = new Date();
  const pickedDate = new Date(
    formik.values.birthYear,
    formik.values.birthMonth - 1,
    formik.values.birthDay
  );

  const tempYears = new Date().getFullYear();
  const years = Array.from(new Array(105), (val, index) => tempYears - index);

  const months = [];
  for (let i = 0; i < 12; i++) {
    const date = new Date(2000, (0 + i) % 12, 1);
    months.push(date.toLocaleString("default", { month: "long" }));
  }

  const getDay = () => {
    return new Date(
      formik.values.birthYear,
      formik.values.birthMonth,
      0
    ).getDate();
  };
  const days = Array.from(new Array(getDay()), (val, index) => 1 + index);

  const { errors, touched } = formik;
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        Date of Birth
      </label>
      <div className="flex flex-col sm:flex-row gap-3 sm:gap-2">
        <div className="flex-1">
          <select
            name="birthYear"
            onChange={formik.handleChange}
            autoComplete="off"
            onBlur={formik.handleBlur}
            value={formik.values.birthYear}
            className={`w-full px-3 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-white transition-all duration-200 ${
              errors.birthYear && touched.birthYear
                ? "border-red-500"
                : "border-gray-300"
            }`}
          >
            <option value="">Year</option>
            {years.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>

        <div className="flex-1">
          <select
            name="birthMonth"
            onChange={formik.handleChange}
            autoComplete="off"
            onBlur={formik.handleBlur}
            value={formik.values.birthMonth}
            className={`w-full px-3 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-white transition-all duration-200 ${
              errors.birthMonth && touched.birthMonth
                ? "border-red-500"
                : "border-gray-300"
            }`}
          >
            <option value="">Month</option>
            {months.map((month, index) => (
              <option key={month} value={index + 1}>
                {month}
              </option>
            ))}
          </select>
        </div>

        <div className="flex-1">
          <select
            name="birthDay"
            onChange={formik.handleChange}
            autoComplete="off"
            onBlur={formik.handleBlur}
            value={formik.values.birthDay}
            className={`w-full px-3 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-white transition-all duration-200 ${
              errors.birthDay && touched.birthDay
                ? "border-red-500"
                : "border-gray-300"
            }`}
          >
            <option value="">Day</option>
            {days.map((day) => (
              <option key={day} value={day}>
                {day}
              </option>
            ))}
          </select>
        </div>
      </div>
      {currentDate - pickedDate < tooChild && touched.birthYear ? (
        <p className="text-red-500 text-sm mt-1">underage! you are not 14!</p>
      ) : (
        <></>
      )}
      {currentDate - pickedDate > tooOld && touched.birthYear ? (
        <p className="text-red-500 text-sm mt-1">
          Overage! you are upper 70! you should pray this time!
        </p>
      ) : (
        <></>
      )}
    </div>
  );
};

export default BirthDate;
