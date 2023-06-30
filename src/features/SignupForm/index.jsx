import { Form } from 'react-router-dom';
import LoginBtn from '@components/LoginBtn';
import SignupBtn from './components/SignupBtn';

export default function SignupForm() {
  return (
    <Form
      method="post"
      className="
        bg-orange
        text-base font-bold text-dark-2
        px-9 py-5
        max-w-[22em]
        m-auto my-8
        border-dark-2 border border-b-2 border-r-2
        rounded-lg
      "
    >
      <div className="text-center mb-3">
        <h1 className="
      bg-dark-2 text-2xl font-LM text-purple drop-shadow-md
        inline
        px-2 py-1
        rounded-full
        hover:bg-green
        shadow
      "
        >
          Sign Up
        </h1>
      </div>

      <label htmlFor="firstname" className="block">
        First name
        <input
          type="text"
          id="firstname"
          name="firstname"
          placeholder="First name"
          className="
                border-dark-2 border border-r-2 border-b-2
                  mb-3 p-1
                  w-full
                  rounded
                  outline-none
                  focus:border-blue
                "
          required
        />
      </label>
      <label htmlFor="lastname">
        Last name(optional)
        <input
          type="text"
          id="lastname"
          name="lastname"
          placeholder="Last name(optional)"
          className="
                border-dark-2 border border-r-2 border-b-2
                  mb-3 p-1
                  w-full
                  rounded
                  outline-none
                  focus:border-blue
                "
        />
      </label>
      <label htmlFor="email">
        email
        <input
          type="email"
          id="email"
          name="email"
          placeholder="email"
          className="
                border-dark-2 border border-r-2 border-b-2
                  mb-3 p-1
                  w-full
                  rounded
                  outline-none
                  focus:border-blue
                "
          required
        />
      </label>
      <div>
        <h1 className="block font-bold text-lg">Birth Date</h1>
        <label htmlFor="month" className="flex flex-col">
          Month
          <select
            name="month"
            id="month"
            placeholder="Month"
            className="
                border-dark-2 border border-r-2 border-b-2
                  mb-3 p-1
                  rounded
                  outline-none
                  focus:border-blue
                  capitalize
                "
            defaultValue="DEFAULT"
          >
            <option value="DEFAULT" disabled className="text-gray-dark opacity-80">Month</option>
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
            // check current year and put to max
              max={2023}
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
      </div>

      <div>
        <label htmlFor="password">
          Password
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            className="
                border-dark-2 border border-r-2 border-b-2
                  mb-3 p-1
                  w-full
                  rounded
                  outline-none
                  focus:border-blue
                "
            required
            autoComplete="off"
          />
        </label>
        <label htmlFor="confirmPassword">
          Confirm Password
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            placeholder="Confirm Password"
            className="
                border-dark-2 border border-r-2 border-b-2
                  mb-3 p-1
                  w-full
                  rounded
                  outline-none
                  focus:border-blue
                "
            required
            autoComplete="off"
          />
        </label>
      </div>
      <SignupBtn />
      <LoginBtn />
    </Form>
  );
}
