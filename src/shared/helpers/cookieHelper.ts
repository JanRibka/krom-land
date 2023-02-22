export class CookieHelper {
  Set(name: string, value: string, exDays: number) {
    const d = new Date();

    d.setTime(d.getTime() + exDays * 24 * 60 * 60 * 1000);

    const expires: string = "expires=" + d.toUTCString();

    document.cookie = name + "=" + value + ";" + expires + ";path=/";
  }

  Get(name: string) {
    const cName = name + "=";
    const ca = document.cookie.split(";");

    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) === " ") {
        c = c.substring(1);
      }
      if (c.indexOf(cName) === 0) {
        return c.substring(cName.length, c.length);
      }
    }
    return "";
  }

  GetNames() {
    let result: string[] = [];
    const ca = document.cookie.split(";");

    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) === " ") {
        c = c.substring(1);
      }

      const cookieName: string = c.split("=")[0];

      result.push(cookieName);
    }

    return result;
  }

  Remove(name: string, domain?: string) {
    let auxDomain: string = "";

    if (!!domain) {
      auxDomain = " domain=" + domain + ";";
    }

    document.cookie = name + "=;" + auxDomain + " max-age=0;";
  }
}
