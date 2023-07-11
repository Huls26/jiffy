export default function SignupSelectMonth() {
  return (
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
        required
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
  );
}
