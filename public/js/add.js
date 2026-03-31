/*All Specefication Sections*/
const readymade_section = document.querySelector(".section-readymade")
const saree_section = document.querySelector(".section-sarees")
const wrap_section = document.querySelector(".section-wrap")
const jew_section = document.querySelector(".section-jewellary")
const blouse_section = document.querySelector(".section-blouse")
const decor_section = document.querySelector(".section-homeDecor")
const category = document.querySelector("#category");
const submit = document.querySelector("#submit")
const categories = [readymade_section,saree_section,wrap_section,jew_section,blouse_section,decor_section]


/* Disable all Display and Inputs */
categories.forEach(section => {
    if(section) {
        section.style.display = "none"
        section.querySelectorAll("input , select, textarea")
        .forEach(el=>{
            el.disabled = true
        })
    }
})


category.addEventListener("change",()=>{
    console.log(category.value)
        categories.forEach(section => {
        if(section) {
            section.style.display = "none"
            section.querySelectorAll("input , select, textarea")
            .forEach(el=>{
                el.disabled = true
            })
        }
    })
    

    //readymade
    if(category.value == "readymade"){
        readymade_section.style.display = "block"
        readymade_section.style.border = "none"
        const blouse_readymade_stitched_box = readymade_section.querySelector(".blouse-readymade-stitched-box")
        blouse_readymade_stitched_box.style.display = "none"
        blouse_readymade_stitched_box.querySelectorAll("input,select")
        .forEach(input=>{
            input.disabled = true
        })
        readymade_section.querySelectorAll("input, select")
        .forEach(input => {
            input.disabled = false
        })
        const readymadeType = readymade_section.querySelector("#readymadeType")
        readymadeType.addEventListener("change",()=>{
            if(readymadeType.value == "blouseStitched"){
                blouse_readymade_stitched_box.style.display = "block"
                blouse_readymade_stitched_box.querySelectorAll("input,select")
                .forEach(input=>{
                    input.disabled = false
                })

            }
        })
    //Home Decor
    }else if(category.value == "homeDecor"){
        decor_section.style.display = "block"
        decor_section.style.border = "none"
        decor_section.querySelectorAll("input,select")
        .forEach(input=>{
            input.disabled = false
            console.log("hello")
        })

    }
    //Sarees
    else if(category.value == "sarees"){
        saree_section.style.display = "block"
        //Set Display : none of all Sections inside saree
        const blouse_included_box = document.querySelector(".blouse-included-box")
        const blouse_semi_box = document.querySelector(".blouse-semi-box")
        const blouse_stitched_box = document.querySelector(".blouse-stitched-box")
        const blouse_unstitched_box = document.querySelector(".blouse-unstitched-box")
        const inner_sections = [blouse_included_box,blouse_semi_box,blouse_stitched_box,blouse_unstitched_box]
        inner_sections.forEach(el=>{
            el.style.display = "none"
            console.log(el)
        })
        //Saree Common Section Code
        const saree_common_box = document.querySelector(".saree-common-box")
        saree_common_box.style.display = "block"
        saree_common_box.querySelectorAll("input, select")
        .forEach(el=>{
            el.disabled = false
        })
        const saree_blouse_choice = document.querySelector("#saree-blouse-choice")
        saree_blouse_choice.addEventListener("change",()=>{
            //Saree blouse is included code - 
            if(saree_blouse_choice.value == "yes"){
                blouse_included_box.style.display = "block"
                blouse_included_box.querySelectorAll("select")
                .forEach(el=>{
                    el.disabled = false
                })
                const saree_blouse_type = document.querySelector("#saree-blouse-type")
                saree_blouse_type.addEventListener("change",()=>{
                    if(saree_blouse_type.value == "stitched"){
                        blouse_stitched_box.style.display = "block"
                        blouse_stitched_box.querySelectorAll("input, select")
                        .forEach(el=>{
                            el.disabled = false
                        })
                    }else if(saree_blouse_type.value == "semi-stitched"){
                        blouse_semi_box.style.display = "block"
                        blouse_semi_box.querySelectorAll("input, select")
                        .forEach(el=>{
                            el.disabled = false
                        })
                    }else if(saree_blouse_type.value == "unstitched"){
                        blouse_unstitched_box.style.display = "block"
                        blouse_unstitched_box.querySelectorAll("input, select")
                        .forEach(el=>{
                            el.disabled = false
                        })
                    }
                })


            }else{
                console.log("no")
            }
        })


    
    }
    //wrap
    else if(category.value == "wraps"){
        wrap_section.style.display = "block"
        wrap_section.querySelectorAll("input, select")
        .forEach(input => {
            input.disabled = false
        })


    }
    //jewellary
    else if(category.value == "jewellery"){
        jew_section.style.display = "block"
        jew_section.querySelectorAll("input, select")
        .forEach(input => {
            input.disabled = false
        })


    }
    //blouse
    else if(category.value == "blouse"){
        blouse_section.style.display = "block"
        const blouse_included_box = blouse_section.querySelector(".blouse-included-box")
        const blouse_semi_box = blouse_section.querySelector(".blouse-semi-box")
        const blouse_unstitched_box = blouse_section.querySelector(".blouse-unstitched-box")
        const inner_sections = [blouse_included_box,blouse_semi_box,blouse_unstitched_box]
        inner_sections.forEach(el=>{
            el.style.display = "none"
            console.log("done")
        })
        blouse_included_box.style.display = "block"
        blouse_included_box.querySelectorAll("select")
        .forEach(el=>{
            el.disabled = false
        })
        const saree_blouse_type = blouse_section.querySelector("#saree-blouse-type")
        saree_blouse_type.addEventListener("change",()=>{
            if(saree_blouse_type.value == "semi-stitched"){
                blouse_semi_box.style.display = "block"
                blouse_semi_box.querySelectorAll("input, select")
                .forEach(el=>{
                    el.disabled = false
                })
            }else if(saree_blouse_type.value == "unstitched"){
                blouse_unstitched_box.style.display = "block"
                blouse_unstitched_box.querySelectorAll("input, select")
                .forEach(el=>{
                    el.disabled = false
                })

            }
        })


    }
})
const formButton = document.querySelector(".form-button")
formButton.addEventListener("click",()=>{
   const SUPABASE_URL = window.SUPABASE_URL;
const SUPABASE_KEY = window.SUPABASE_KEY;

if (!window.supabase) {
  console.error("Supabase NOT loaded");
}

const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);
const form = document.querySelector("form");


// ===================== IMAGE COMPRESSION =====================
async function compressImage(file, quality = 0.7, maxWidth = 1200) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    const reader = new FileReader();

    reader.onload = (e) => {
      img.src = e.target.result;
    };

    img.onload = () => {
      const canvas = document.createElement("canvas");

      const scale = maxWidth / img.width;
      const width = img.width > maxWidth ? maxWidth : img.width;
      const height = img.width > maxWidth ? img.height * scale : img.height;

      canvas.width = width;
      canvas.height = height;

      const ctx = canvas.getContext("2d");
      ctx.drawImage(img, 0, 0, width, height);

      canvas.toBlob(
        (blob) => {
          if (!blob) return reject("Compression failed");

          const compressedFile = new File([blob], file.name, {
            type: "image/jpeg",
          });

          console.log(
            `Compressed: ${(file.size / 1024 / 1024).toFixed(2)}MB → ${(compressedFile.size / 1024 / 1024).toFixed(2)}MB`
          );

          resolve(compressedFile);
        },
        "image/jpeg",
        quality
      );
    };

    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}


// ===================== UPLOAD FUNCTION =====================
async function uploadFile(file, index) {
  const fileName = `${Date.now()}-${index}-${file.name}`;

  console.log("Uploading:", fileName);

  const { data, error } = await supabase.storage
    .from("products")
    .upload(`images/${fileName}`, file);

  if (error) {
    console.error("UPLOAD ERROR:", error);
    throw error;
  }

  const { data: urlData } = supabase.storage
    .from("products")
    .getPublicUrl(data.path);

  console.log("Uploaded URL:", urlData.publicUrl);

  return urlData.publicUrl;
}


// ===================== MAIN SUBMIT HANDLER =====================
form.addEventListener("submit", async function (e) {
  e.preventDefault();

  const submitBtn = document.getElementById("submit");
  submitBtn.disabled = true;
  submitBtn.innerText = "Uploading...";

  console.log("=== SUBMIT START ===");

  try {
    const imageFields = [
      { file: "image1_file", hidden: "image1" },
      { file: "image2_file", hidden: "image2" },
      { file: "image3_file", hidden: "image3" },
      { file: "image4_file", hidden: "image4" },
      { file: "image5_file", hidden: "image5" },
      { file: "image6_file", hidden: "image6" }
    ];

    const uploadPromises = imageFields.map(async (field, index) => {
      const fileInput = document.getElementById(field.file);
      const hiddenInput = document.getElementById(field.hidden);

      if (!fileInput) {
        console.error("Missing input:", field.file);
        hiddenInput.value = "";
        return "";
      }

      let file = fileInput.files?.[0];

      if (!file) {
        hiddenInput.value = "";
        return "";
      }

      // 🔥 COMPRESS FIRST
      const compressedFile = await compressImage(file);

      // 🔥 THEN UPLOAD
      const url = await uploadFile(compressedFile, index);

      hiddenInput.value = url;

      return url;
    });

    await Promise.all(uploadPromises);

    console.log("=== ALL UPLOADS DONE ===");

    // ✅ submit after everything ready
    HTMLFormElement.prototype.submit.call(form);

  } catch (err) {
    console.error("FINAL ERROR:", err);
    alert("Upload failed");

    submitBtn.disabled = false;
    submitBtn.innerText = "Add Item";
  }
});
})


