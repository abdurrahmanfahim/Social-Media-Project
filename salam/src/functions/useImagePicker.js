const useImagePicker = (setImage) => (e) => {
  const files = Array.from(e.target.files);
  const validTypes = ["image/jpeg", "image/jpg", "image/png", "image/webp", "image/gif"];
  
  files.forEach((img) => {
    if (!validTypes.includes(img.type)) return;
    
    const reader = new FileReader();
    reader.readAsDataURL(img);
    reader.onload = (e) => setImage((prev) => [...prev, e.target.result]);
  });
};

export default useImagePicker;
