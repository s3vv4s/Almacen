import * as FileSystem from 'expo-file-system';


class FormatImg {

    public async RenamePhoto( pathuri: string): Promise<string> {
    console.log("En el rename ");

    const imgB = await fetch(pathuri);
    const blobe: Blob = await imgB.blob();
    const reader = new FileReader();
    reader.readAsDataURL(blobe);


    //let name = await ChangeEvidencias.PathImg();
    let rutaname = `${FileSystem.cacheDirectory}asdasda.jpg`;
    console.log(rutaname);

    FileSystem.moveAsync({
      from: pathuri,
      to: rutaname
    });
    return rutaname;
  }

}

export default FormatImg;