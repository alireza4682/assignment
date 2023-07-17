import { Main } from "./components/main";
import { getDictionary } from "../../get-dictionary";
import { Locale } from "../../i18n-config";
import LocaleSwitcher from "./components/locale-switcher";

export default async function IndexPage({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary(lang);

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
