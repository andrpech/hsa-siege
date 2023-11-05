const { exec } = require('child_process')
const path = require('path')
require('dotenv').config({ path: path.resolve(process.cwd(), '.env') })
/**
 * Executes a shell command and return it as a Promise.
 * @param cmd {string}
 * @return {Promise<string>}
 */
function execShellCommand(cmd) {
    return new Promise((resolve, reject) => {
        exec(cmd, (error, stdout, stderr) => {
            if (error) {
                console.warn(error)
            }
            resolve(stdout ? stdout : stderr)
        })
    })
}

async function run() {
    await execShellCommand('npx prisma db pull --schema=./prisma/schema.prisma')
    process.chdir('./prisma')
    await execShellCommand('npx prisma-case-format')
    process.chdir('..')
    await execShellCommand('npx prisma generate --schema=./prisma/schema.prisma')
}

run()
