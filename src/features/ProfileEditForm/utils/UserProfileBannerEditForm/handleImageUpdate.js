export default function handleImageUpdate(event, setUData) {
  const { target } = event;
  const { name, files } = target;
  const [imageData] = files;
  // get the name key and add File at the end
  const updateFile = `${name}File`;

  const setLocalUrl = URL.createObjectURL(imageData);

  setUData((prevData) => ({
    ...prevData,
    [name]: setLocalUrl,
    [updateFile]: imageData,
  }));
}
