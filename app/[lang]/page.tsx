import { Main } from "./components/main";
import { Locale } from "../../i18n-config";

export default async function IndexPage({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <Main />
      {/* <LocaleSwitcher /> */}
      {/* <p>Current locale: {lang}</p>
      <p>
        This text is rendered on the server:{" "}
        {dictionary["server-component"].welcome}
      </p> */}
    </div>
  );
}
