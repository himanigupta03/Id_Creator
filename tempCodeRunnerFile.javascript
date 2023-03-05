const pickImage = async () => {
    const result = await launchImageLibrary({
     
    });

    console.log(result);
    setUri(result?.assets[0]?.uri); // optional chaining

};
