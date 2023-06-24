import SignupBtn from './components/SignupBtn';

export default function SignupForm() {
  return (
    <form>
      <h1>Sign Up</h1>
      <label htmlFor="firstname">
        First name
        <input type="text" id="firstname" name="firstname" placeholder="First name" />
      </label>
      <label htmlFor="lastname">
        Last name(optional)
        <input type="text" id="lastname" name="lastname" placeholder="Last name(optional)" />
      </label>
      <label htmlFor="username">
        Username
        <input type="text" id="username" name="username" placeholder="Username" />
      </label>
      <div>
        Birth Date
        <label htmlFor="month">
          Month
          <select name="cars" id="cars" placeholder="Month" className="capitalize">
            <option value="" disabled selected>Month</option>
            <option value="january">january</option>
            <option value="february">february</option>
            <option value="march">march</option>
            <option value="april">april</option>
            <option value="may">may</option>
            <option value="june">june</option>
            <option value="july">july</option>
            <option value="august">august</option>
            <option value="september">september</option>
            <option value="october">october</option>
            <option value="november">november</option>
            <option value="december">december</option>
          </select>
        </label>
        <label htmlFor="date">
          Date
          <input
            type="number"
            id="date"
            name="date"
            placeholder="Date"
            maxLength="2"
            min={1}
            max={31}
          />
        </label>
        <label htmlFor="year">
          Year
          <input
            type="number"
            id="year"
            name="year"
            placeholder="Year"
            min={1}
            // check current year and put to max
            max={2023}
          />
        </label>
      </div>

      <div>
        <label htmlFor="password">
          Password
          <input type="password" id="password" name="password" placeholder="Password" />
        </label>
        <label htmlFor="confirmPassword">
          Confirm Password
          <input type="password" id="confirmPassword" name="confirmPassword" placeholder="Confirm Password" />
        </label>
      </div>
      <SignupBtn />
    </form>
  );
}
