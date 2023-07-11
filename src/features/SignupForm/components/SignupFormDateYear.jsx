export default function SignupFormDateYear() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="flex space-x-4">
      <label htmlFor="date" className="flex flex-col">
        Date
        <input
          type="number"
          id="date"
          name="date"
          placeholder="Date"
          maxLength="2"
          min={1}
          max={31}
          className="
          border-dark-2 border border-r-2 border-b-2
            mb-3 p-1
            rounded
            outline-none
            focus:border-blue
          "
        />
      </label>
      <label htmlFor="year" className="flex flex-col">
        Year
        <input
          type="number"
          id="year"
          name="year"
          placeholder="Year"
          min={1}
          max={currentYear}
          className="
          border-dark-2 border border-r-2 border-b-2
            mb-3 p-1
            rounded
            outline-none
            focus:border-blue
          "
        />
      </label>
    </div>
  );
}
