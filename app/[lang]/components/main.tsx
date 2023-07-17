import { Button, Input } from "@mui/base";
import FormControl from "@mui/base";
export const Main = () => {
  return (
    <div className="shadow-card py-[30px] px-[40px] rounded-[5px] mt-[97px] w-fit">
      <h1>Login to Iran source</h1>
      <div>
        <form>
          <Input placeholder="Email address or Username" />
          <Button type="submit" />
        </form>
      </div>
    </div>
  );
};
