interface DictionaryEntry {
  Blog: string;
  AboutUs: string;
  Pricing: string;
  Products: string;
  LoginTo: string;
  Login: string;
  LoginG: string;
  LoginQR: string;
  NoAcounte: string;
  SignUp: string;
  Scan: string;
  Forgot: string;
}

export const dictionary: Record<string, DictionaryEntry> = {
  en: {
    Blog: "Blog",
    AboutUs: "About us",
    Pricing: "Pricing",
    Products: "Products",
    LoginTo: "Log in to Iran source",
    Login: "Log in",
    LoginG: "Log in with google",
    LoginQR: "Log in with QR code",
    NoAcounte: "Don't have an account?",
    SignUp: "Sign up",
    Scan: "Scan this code with your mobile to login",
    Forgot: "Forgot your password?",
  },
  fa: {
    Blog: "بلاگ",
    AboutUs: "درباره ما",
    Pricing: "Pricing",
    Products: "Products",
    LoginTo: "Log in to Iran source",
    Login: "Log in",
    LoginG: "Log in with google",
    LoginQR: "Log in with QR code",
    NoAcounte: "Don't have an account?",
    SignUp: "Sign up",
    Scan: "Scan this code with your mobile to login",
    Forgot: "Forgot your password?",
  },
};
