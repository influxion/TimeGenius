import {
  readDir,
  BaseDirectory,
  createDir,
  writeFile,
  readTextFile,
} from "@tauri-apps/api/fs"

const dataFileName = "data.json"
const dataFolder = "data"
const dir = BaseDirectory.AppData

const _checkDataFolder = async () => {
  try {
    const files = await readDir(dataFolder, {
      dir: dir,
    })

    const fileNames = files.map(({ name }) => name)

    return fileNames.includes(dataFileName)
  } catch (e) {
    return false
  }
}

const _createDatabase = async () => {
  try {
    await createDir(dataFolder, {
      dir: dir,
      recursive: true,
    })

    await writeFile(
      {
        contents: "[]",
        path: `./${dataFolder}/${dataFileName}`,
      },
      {
        dir: dir,
      },
    )
    return true
  } catch (e) {
    return false
  }
}

export const initStorage = async () => {
  let hasDataFolder = await _checkDataFolder()

  if (!hasDataFolder) {
    hasDataFolder = await _createDatabase()
  }

  return hasDataFolder
}

export const getStoredData = async () => {
  try {
    const res = await readTextFile(`${dataFolder}/${dataFileName}`, {
      dir: dir,
    })
    return JSON.parse(res)
  } catch (e) {
    return []
  }
}

export const saveState = async (data: any) => {
  await writeFile(
    {
      contents: data,
      path: `./${dataFolder}/${dataFileName}`,
    },
    {
      dir: dir,
    },
  )
}
