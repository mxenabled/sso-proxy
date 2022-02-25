import { readFileSync } from "fs"

const { repository, version } = JSON.parse(readFileSync("./package.json"))

const header = `
 /$$      /$$ /$$       /$$                       /$$            /$$$$$$   /$$$$$$   /$$$$$$
| $$  /$ | $$|__/      | $$                      | $$           /$$__  $$ /$$__  $$ /$$__  $$
| $$ /$$$| $$ /$$  /$$$$$$$  /$$$$$$   /$$$$$$  /$$$$$$        | $$  \\__/| $$  \\__/| $$  \\ $$
| $$/$$ $$ $$| $$ /$$__  $$ /$$__  $$ /$$__  $$|_  $$_/        |  $$$$$$ |  $$$$$$ | $$  | $$
| $$$$_  $$$$| $$| $$  | $$| $$  \\ $$| $$$$$$$$  | $$           \\____  $$ \\____  $$| $$  | $$
| $$$/ \\  $$$| $$| $$  | $$| $$  | $$| $$_____/  | $$ /$$       /$$  \\ $$ /$$  \\ $$| $$  | $$
| $$/   \\  $$| $$|  $$$$$$$|  $$$$$$$|  $$$$$$$  |  $$$$/      |  $$$$$$/|  $$$$$$/|  $$$$$$/
|__/     \\__/|__/ \\_______/ \\____  $$ \\_______/   \\___/         \\______/  \\______/  \\______/
                            /$$  \\ $$
                           |  $$$$$$/
                            \\______/

       /$$$$$$  /$$$$$$$  /$$$$$$       /$$$$$$$
      /$$__  $$| $$__  $$|_  $$_/      | $$__  $$
     | $$  \\ $$| $$  \\ $$  | $$        | $$  \\ $$ /$$$$$$   /$$$$$$  /$$   /$$ /$$   /$$
     | $$$$$$$$| $$$$$$$/  | $$        | $$$$$$$//$$__  $$ /$$__  $$|  $$ /$$/| $$  | $$
     | $$__  $$| $$____/   | $$        | $$____/| $$  \\__/| $$  \\ $$ \\  $$$$/ | $$  | $$
     | $$  | $$| $$        | $$        | $$     | $$      | $$  | $$  >$$  $$ | $$  | $$
     | $$  | $$| $$       /$$$$$$      | $$     | $$      |  $$$$$$/ /$$/\\  $$|  $$$$$$$
     |__/  |__/|__/      |______/      |__/     |__/       \\______/ |__/  \\__/ \\____  $$
                                                                               /$$  | $$
                                                                              |  $$$$$$/
                                                                               \\______/

                                                                                (v${version})`

export const printWelcome = () =>
  console.log(header)

export const printApiDocs = (port) => {
  console.log(`
Refer to the documentation in ${repository.url}
for instructions on how to use this server.\n`)
}
