dataset = window.dataset
console.log(dataset)
console.log(window.newAlert)
if(window.newAlert === "true"){
    window.showAlert("success","Product Successfuly Updated")
}
const inputs = document.querySelectorAll("input")
const form = document.querySelector("form")
if(dataset[0].category == "sarees"){
    form.innerHTML +=
    `<div class = "seperator"></div> 
    <div class = "input-row" >
        <div class = "form-item">
            <label for="length"> Saree Length</label>
            <input type="text" id="length" name="sareeLength" value="${dataset[0].attributes.sareeLength}">
        </div>
        <div class="form-item">
                <label for="saree-width">Saree Width</label>
                <input type="text" id="saree-width" name="sareeWidth" required value = "${dataset[0].attributes.sareeWidth}">
        </div>
        <div class = "form-item">
            <label for="design"> Saree Design</label>
            <select id="design" name="sareeDesign">
                <option value="${dataset[0].attributes.sareeDesign}">${dataset[0].attributes.sareeDesign}</option>
                    <optgroup label = "Embroidery">
                        <option value="zari">Zari Work</option>
                        <option value="kantha">Kantha</option>
                        <option value="aari">Aari</option>
                        <option value="sozni">Sozni</option>
                        <option value="sujni">Sujni</option>
                        <option value="kashmiri">Kashmiri</option>
                        <option value="Kachh">Kachh Work</option>
                        <option value="kasuti">Kasuti</option>
                        <option value="lambani">Lambani</option>
                        <option value="toda">Toda</option>
                        <option value="mirror">Mirror Work</option>
                        <option value="sequin">Sequin Work</option>
                        <option value="stone">Stone Work</option>
                    </optgroup>
                    <optgroup label="Handloom Weave">
                        <option value="jamdani">Jamdani</option>
                        <option value="bhujodi">Bhujodi</option>
                        <option value="kashida">Kashida</option>
                        <option value="khadi">Khadi</option>
                        <option value="chanderi">Chanderi</option>
                        <option value="maheshwari">Maheshwari</option>
                        <option value="kumaoni">Kumaoni</option>
                        <option value="kanjivaram">Kanjivaram</option>
                        <option value="gadual">Gadual</option>
                        <option value="odishaWeave">Odisha Weave</option>
                        <option value="kerela Weave">Kerela Weave</option>
                        <option value="venkatgiri">Venkatgiri</option>
                        <option value="madurai">madurai</option>
                        <option value="kosa">Kosa</option>
                        <option value="mangalgiri">mangalgiri</option>
                        <option value="ikkat">Ikkat</option>
                        <option value="bhagalpuri">Bhagalpuri</option>
                        <option value="bengalWeave">Bengal Weave</option>
                        <option value="assamWeave">Assam Weave</option>
                        <optgroup label="Banarasi">
                            <option value="tanchoi">Tanchoi</option>
                            <option value="brocade">Brocade</option>
                            <option value="chicarga">Chicarga</option>
                            <option value="kinkhap">Kinkhap</option>
                        </optgroup>   
                    </optgroup>
                        <optgroup label = "Handblock">
                        <option value="ajrakh">Ajrakh</option>
                        <option value="pigmentBlock">Pigment Block</option>
                        <option value="dabu">Dabu</option>
                        <option value="batique">Batique</option>
                        <option value="ecoPrint">Eco Print</option>
                        <option value="bagh">Bagh</option>
                    </optgroup>
                    <optgroup label = "Hand Painting">
                        <option value="penKalamkari">Pen Kalamkari</option>
                        <option value="silkDyePaint">Silk Dye Paint</option>
                        <option value="waxBatique">Wax batique</option>
                        <option value="resistDye">Resist Dye</option>
                        <option value="madhubani">Madhubani</option>
                        <option value="saura">Saura</option>
                        <option value="rogan">Rogan</option>
                        <option value="gondha">Gondha</option>
                        <option value="gond">Gond</option>
                        <option value="pattachitra">Pattachitra</option>
                        <option value="potPainting">Pot Painting</option>
                        <option value="fudPainting">Fud Painting</option>
                        <option value="devotional">Devotional</option>
                    </optgroup>
                    <optgroup label = "Tie-Dye">
                        <option value="bandhani">Bandhani</option>
                        <option value="japaneseShibori">Japanese Shibori</option>
                        <option value="nuiShibori">Nui Shibori</option>
                        <option value="bandej">Bandej</option>
                        <option value="ecoPrint">Eco Print</option>
                        <option value="bagh">Bagh</option>
                    </optgroup>
            </select>
        </div>
        </div>
        <div class = "input-row">
        <div class = "form-item">
            <label for="blouse">Blouse Included</label>
            <input type="text" id="blouse" name="blouseIncluded" value="${dataset[0].attributes.blouseIncluded}" readonly>
        </div>

        <div class="form-item">
                    <label for="fabric-type"> Saree Fabric</label>
                    <select id="fabric-type" name="sareeFabricType">
                        <option value="${dataset[0].attributes.sareeFabricType}">${dataset[0].attributes.sareeFabricType}</option>
                        <optgroup label="Plain Weave Based">
                        <option value="plainWeave">Plain Weave</option>
                        <option value="chiffon">Chiffon</option>
                        <option value="georgette">Georgette</option>
                        <option value="organza">Organza</option>
                        <option value="voile">Voile</option>
                        <option value="crepe">Crepe</option>
                        <option value="cambric">Cambric</option>
                        <option value="poplin">Poplin</option>
                        <option value="muslin">Muslin</option>
                        <option value="lawn">Lawn</option>
                        </optgroup>
                        <optgroup label="Twill Based">
                        <option value="twill">Twill</option>
                        <option value="drill">Drill</option>
                        <option value="gabardine">Gabardine</option>
                        <option value="denim">Denim</option>
                        </optgroup>
                        <optgroup label="Satin Based">
                        <option value="satin">Satin</option>
                        <option value="sateen">Sateen</option>
                        <option value="duchessSatin">Duchess Satin</option>
                        </optgroup>
                        <optgroup label="Jacquard & Figured">
                        <option value="jacquard">Jacquard</option>
                        <option value="brocade">Brocade</option>
                        <option value="damask">Damask</option>
                        </optgroup>
                        <optgroup label="Open / Mesh">
                        <option value="net">Net</option>
                        <option value="mesh">Mesh</option>
                        <option value="lace">Lace</option>
                        </optgroup>
                        <optgroup label="Pile / Raised">
                        <option value="velvet">Velvet</option>
                        <option value="corduroy">Corduroy</option>
                        <option value="terry">Terry</option>
                        </optgroup>
                        <optgroup label="Knitted Constructions">
                        <option value="singleJersey">Single Jersey</option>
                        <option value="ribKnit">Rib Knit</option>
                        <option value="interlock">Interlock</option>
                        </optgroup>
                        <optgroup label="Special Constructions">
                        <option value="chanderiWeave">Chanderi Weave</option>
                        <option value="kotaDoria">Kota Doria</option>
                        <option value="doubleCloth">Double Cloth</option>
                        <option value="crepeWeave">Crepe Weave</option>
                        </optgroup>
                    </select>
                </div>
    </div>
    <div class = "seperator"></div> 
    `
    if(dataset[0].attributes.blouseIncluded == "yes"){
        form.innerHTML += 
        `<div class = "input-row">
            <div class="form-item">
                    <label for="saree-blouse-type">Blouse Type</label>
                    <input id="saree-blouse-type" type = "text" name = "blouseType" value = "${dataset[0].attributes.blouseType}" readonly>
                </div>
                <div class="form-item">
                    <label for="fabric-type">Blouse Fabric</label>
                    <select id="fabric-type" name="blouseFabricType">
                        <option value="${dataset[0].attributes.blouseFabricType}">${dataset[0].attributes.blouseFabricType}</option>
                        <optgroup label="Plain Weave Based">
                        <option value="plainWeave">Plain Weave</option>
                        <option value="chiffon">Chiffon</option>
                        <option value="georgette">Georgette</option>
                        <option value="organza">Organza</option>
                        <option value="voile">Voile</option>
                        <option value="crepe">Crepe</option>
                        <option value="cambric">Cambric</option>
                        <option value="poplin">Poplin</option>
                        <option value="muslin">Muslin</option>
                        <option value="lawn">Lawn</option>
                        </optgroup>
                        <optgroup label="Twill Based">
                        <option value="twill">Twill</option>
                        <option value="drill">Drill</option>
                        <option value="gabardine">Gabardine</option>
                        <option value="denim">Denim</option>
                        </optgroup>
                        <optgroup label="Satin Based">
                        <option value="satin">Satin</option>
                        <option value="sateen">Sateen</option>
                        <option value="duchessSatin">Duchess Satin</option>
                        </optgroup>
                        <optgroup label="Jacquard & Figured">
                        <option value="jacquard">Jacquard</option>
                        <option value="brocade">Brocade</option>
                        <option value="damask">Damask</option>
                        </optgroup>
                        <optgroup label="Open / Mesh">
                        <option value="net">Net</option>
                        <option value="mesh">Mesh</option>
                        <option value="lace">Lace</option>
                        </optgroup>
                        <optgroup label="Pile / Raised">
                        <option value="velvet">Velvet</option>
                        <option value="corduroy">Corduroy</option>
                        <option value="terry">Terry</option>
                        </optgroup>
                        <optgroup label="Knitted Constructions">
                        <option value="singleJersey">Single Jersey</option>
                        <option value="ribKnit">Rib Knit</option>
                        <option value="interlock">Interlock</option>
                        </optgroup>
                        <optgroup label="Special Constructions">
                        <option value="chanderiWeave">Chanderi Weave</option>
                        <option value="kotaDoria">Kota Doria</option>
                        <option value="doubleCloth">Double Cloth</option>
                        <option value="crepeWeave">Crepe Weave</option>
                        </optgroup>
                    </select>
                </div>
            <div class="form-item">
                    <label for="blouse-pattern">Blouse Design</label>
                    <select id="blouse-pattern" name="blouseDesign">
                       <option value="${dataset[0].attributes.blouseDesign}">${dataset[0].attributes.blouseDesign}</option>
                    <optgroup label = "Embroidery">
                        <option value="zari">Zari Work</option>
                        <option value="kantha">Kantha</option>
                        <option value="aari">Aari</option>
                        <option value="sozni">Sozni</option>
                        <option value="sujni">Sujni</option>
                        <option value="kashmiri">Kashmiri</option>
                        <option value="Kachh">Kachh Work</option>
                        <option value="kasuti">Kasuti</option>
                        <option value="lambani">Lambani</option>
                        <option value="toda">Toda</option>
                        <option value="mirror">Mirror Work</option>
                        <option value="sequin">Sequin Work</option>
                        <option value="stone">Stone Work</option>
                    </optgroup>
                    <optgroup label="Handloom Weave">
                        <option value="jamdani">Jamdani</option>
                        <option value="bhujodi">Bhujodi</option>
                        <option value="kashida">Kashida</option>
                        <option value="khadi">Khadi</option>
                        <option value="chanderi">Chanderi</option>
                        <option value="maheshwari">Maheshwari</option>
                        <option value="kumaoni">Kumaoni</option>
                        <option value="kanjivaram">Kanjivaram</option>
                        <option value="gadual">Gadual</option>
                        <option value="odishaWeave">Odisha Weave</option>
                        <option value="kerela Weave">Kerela Weave</option>
                        <option value="venkatgiri">Venkatgiri</option>
                        <option value="madurai">madurai</option>
                        <option value="kosa">Kosa</option>
                        <option value="mangalgiri">mangalgiri</option>
                        <option value="ikkat">Ikkat</option>
                        <option value="bhagalpuri">Bhagalpuri</option>
                        <option value="bengalWeave">Bengal Weave</option>
                        <option value="assamWeave">Assam Weave</option>
                        <optgroup label="Banarasi">
                            <option value="tanchoi">Tanchoi</option>
                            <option value="brocade">Brocade</option>
                            <option value="chicarga">Chicarga</option>
                            <option value="kinkhap">Kinkhap</option>
                        </optgroup>   
                    </optgroup>
                        <optgroup label = "Handblock">
                        <option value="ajrakh">Ajrakh</option>
                        <option value="pigmentBlock">Pigment Block</option>
                        <option value="dabu">Dabu</option>
                        <option value="batique">Batique</option>
                        <option value="ecoPrint">Eco Print</option>
                        <option value="bagh">Bagh</option>
                    </optgroup>
                    <optgroup label = "Hand Painting">
                        <option value="penKalamkari">Pen Kalamkari</option>
                        <option value="silkDyePaint">Silk Dye Paint</option>
                        <option value="waxBatique">Wax batique</option>
                        <option value="resistDye">Resist Dye</option>
                        <option value="madhubani">Madhubani</option>
                        <option value="saura">Saura</option>
                        <option value="rogan">Rogan</option>
                        <option value="gondha">Gondha</option>
                        <option value="gond">Gond</option>
                        <option value="pattachitra">Pattachitra</option>
                        <option value="potPainting">Pot Painting</option>
                        <option value="fudPainting">Fud Painting</option>
                        <option value="devotional">Devotional</option>
                    </optgroup>
                    <optgroup label = "Tie-Dye">
                        <option value="bandhani">Bandhani</option>
                        <option value="japaneseShibori">Japanese Shibori</option>
                        <option value="nuiShibori">Nui Shibori</option>
                        <option value="bandej">Bandej</option>
                        <option value="ecoPrint">Eco Print</option>
                        <option value="bagh">Bagh</option>
                    </optgroup>
                    </select>
                    
            </div>
        </div>
        </div>
        <div class = "input-row">
         <div class="form-item">
                    <label for="blouse-lining">Lining of Blouse</label>
                    <select id="blouse-lining" name="blouseLining">
                        <option value = "${dataset[0].attributes.blouseLining}">${dataset[0].attributes.blouseLining}</option>
                        <option value = "yes">Yes</option>
                        <option value = "no">No</option>
                    </select>
        </div>
         <div class="form-item">
                        <label for="blouse-material">Blouse Material</label>
                        <select id="blouse-material" name="blouseMaterial">
                        <option value="${dataset[0].attributes.blouseMaterial}">${dataset[0].attributes.blouseMaterial}</option>

                        <optgroup label="Natural Fabrics">
                            <option value="cotton">Cotton</option>
                            <option value="silk">Silk</option>
                            <option value="linen">Linen</option>
                            <option value="wool">Wool</option>
                            <option value="khadi">Khadi</option>
                            <option value="jute">Jute</option>
                            <option value="resham">Resham</option>
                        </optgroup>
                        <optgroup label="Blended Fabrics">
                            <option value="tasarCotton">Tasar-Cotton</option>
                            <option value="silkCotton">Silk-Cotton</option>
                            <option value="silkLinen">Silk-Linen</option>
                            <option value="silkWool">Silk-Wool</option>
                        </optgroup>

                        <optgroup label="Semi-Synthetic Fabrics">
                            <option value="rayon">Rayon</option>
                            <option value="modal">Modal</option>
                            <option value="viscose">Viscose</option>
                            <option value="bamboo">Bamboo Fabric</option>
                        </optgroup>

                        <optgroup label="Synthetic Fabrics">
                            <option value="polyester">Polyester</option>
                            <option value="nylon">Nylon</option>
                            <option value="acrylic">Acrylic</option>
                            <option value="net">Net</option>
                            <option value="satin">Satin</option>
                            <option value="velvet">Velvet</option>
                        </optgroup>
                    </select>

                </div>


        </div>
        <div class = "seperator"></div>
        `
        if(dataset[0].attributes.blouseType == "semi-stitched"){
            form.innerHTML += 
            `<div class = "input-row">
                <div class="form-item">
                    <label for="blouse-chest">Chest Size of Blouse</label>
                    <input type="text" id="blouse-chest" name="blouseChest" value = "${dataset[0].attributes.blouseChest}">
                </div>
                <div class="form-item">
                    <label for="blouse-length">Length of Blouse</label>
                    <input type="text" id="blouse-length" name="blouseLength" placeholder="Enter Length of Blouse (Inches)" required value = "${dataset[0].attributes.blouseLength}">
                </div>
                <div class="form-item">
                    <label for="blouse-sleeve">Sleeve Type of Blouse</label>
                    <select id="blouse-sleeve" name="blouseSleeve">
                        <option value="${dataset[0].attributes.blouseSleeve}">${dataset[0].attributes.blouseSleeve}</option>
                        <option value="sleeveless">Sleeveless</option>
                        <option value="cap-sleeve">Cap Sleeve</option>
                        <option value="short-sleeve">Short Sleeve</option>
                        <option value="elbow-length">Elbow Length</option>
                        <option value="three-quarter">Three-Quarter Sleeve</option>
                        <option value="full-sleeve">Full Sleeve</option>
                    </select>
                </div>
            </div>
            `

        }else if(dataset[0].attributes.blouseType == "unstitched"){
            form.innerHTML += 
            ` <div class="form-item">
                <label for="blouse-length">Length of Blouse</label>
                <input type="text" id="blouse-length" name="blouseLength" placeholder="Enter Length of Blouse (Inches)" required value = "${dataset[0].attributes.blouseLength}">
            </div>
             `
        }
        else if(dataset[0].attributes.blouseType == "stitched"){
            form.innerHTML += 
            `
            <div class="input-row">
                <div class="form-item">
                    <label for="blouseSize">Size of Blouse</label>
                    <select id="blouseSize" name="blouseSize">
                        <option value="${dataset[0].attributes.blouseSize}">${dataset[0].attributes.blouseSize}</option>
                        <option value="freeSize">Free Size</option>
                        <option value="small">Small [ S ]</option>
                        <option value="medium">Medium [ M ]</option>
                        <option value="large">Large [ L ]</option>
                        <option value="extraLarge">Extra Large [ XL ]</option>
                        
                    </select>
                </div>
                
                <div class="form-item">
                    <label for="blouse-sleeve">Sleeve Type of Blouse</label>
                    <select id="blouse-sleeve" name="blouseSleeve">
                        <option value="${dataset[0].attributes.blouseSleeve}">${dataset[0].attributes.blouseSleeve}</option>
                        <option value="sleeveless">Sleeveless</option>
                        <option value="cap-sleeve">Cap Sleeve</option>
                        <option value="short-sleeve">Short Sleeve</option>
                        <option value="elbow-length">Elbow Length</option>
                        <option value="three-quarter">Three-Quarter Sleeve</option>
                        <option value="full-sleeve">Full Sleeve</option>
                    </select>
                </div>
            </div>

            <div class="input-row">
                <div class="form-item">
                    <label for="blouse-clouse">Closure Type</label>
                    <select id="blouse-closure" name="blouseClosure">
                        <option value="${dataset[0].attributes.blouseClosure}">${dataset[0].attributes.blouseClosure}</option>
                        <option value="backHooks">Back Hooks</option>
                        <option value="frontHooks">Front Hooks</option>
                        <option value="tieUp">Tie-up Back (Dori)</option>
                        <option value="backButton">Buttoned Back</option>
                        <option value="backZipper">Back Zipper</option>
                        <option value="sideZipper">Side Zipper</option>
                    </select>
                </div>
                <div class="form-item">
                    <label for="blouse-back">Back Type</label>
                    <select id="blouse-back" name="blouseBack">
                        <option value="${dataset[0].attributes.blouseBack}">${dataset[0].attributes.blouseBack}</option>
                        <option value="closedBack">Closed Back</option>
                        <option value="highBack">High Back</option>
                        <option value="buttonedBack">Buttoned Back</option>
                        <option value="zipperBack">Zipper Back</option>
                        <option value="hookedBack">Hooked Back</option>
                        <option value="deepUBack">Deep U Back</option>
                        <option value="deepVBack">Deep V Back</option>
                        <option value="roundBack">Round Back</option>
                        <option value="squareBack">Square Back</option>
                        <option value="keyholeBack">Keyhole Back</option>
                        <option value="doriTieUpBack">Dori Tie-Up Back</option>
                        <option value="crissCrossTieBack">Criss-Cross Tie Back</option>
                        <option value="tieUpWithTassels">Tie-Up with Tassels</option>
                        <option value="cutOutBack">Cut-Out Back</option>
                        <option value="multipleCutOutBack">Multiple Cut-Out Back</option>
                        <option value="sheerNetBack">Sheer / Net Back</option>
                        <option value="borderPanelBack">Back with Border Panel</option>
                        <option value="backless">Backless</option>
                        <option value="cagedBack">Caged Back</option>
                        <option value="corsetBack">Corset Back</option>
                        <option value="bowTieBack">Bow Tie Back</option>
                    </select>
                </div>

            </div>
            `

        }
    
    }
    
}else if(dataset[0].category == "readymade"){
    form.innerHTML += 
    `<div class = "seperator"></div>
    <div class="input-row">

            <div class="form-item">
                    <label for="readymadeLength">Length</label>
                    <select id="readymadeLength" name="readymadeLength" placeholder="Enter Length of ReadyMade Dress (inches)" required>
                        <option value="${dataset[0].attributes.readymadeLength}">${dataset[0].attributes.readymadeLength}</option>
                        <option value = "notRequired">Not Required</option>
                        <option value = "short">Short</option>
                        <option value = "regular">Regular</option>
                        <option value = "kneeLength">Knee Length</option>
                        <option value = "calfLength">Calf Length</option>
                        <option value = "ankleLength">Ankle Length</option>
                        <option value = "fullLength">Full Length</option>

                    </select>
            </div>

            <div class="form-item">
                    <label for="readymadeFit">Fit-Type</label>
                    <select id="readymadeFit" name="readymadeFit">
                        <option value="${dataset[0].attributes.readymadeFit}">${dataset[0].attributes.readymadeFit}</option>
                        <option value = "notRequired">Not Required</option>
                        <option value = "freeFit">Free Fit</option>
                        <option value="straight-fit">Straight Fit</option>
                        <option value="regular-fit">Regular Fit</option>
                        <option value="slim-fit">Slim Fit</option>
                        <option value="a-line">A-Line</option>
                        <option value="anarkali-fit">Anarkali Fit</option>
                        <option value="angrakha-fit">Angrakha Fit</option>
                        <option value="front-slit-fit">Front Slit Fit</option>
                        <option value="high-low-fit">High-Low Fit</option>
                        <option value="long-straight-fit">Long Straight Fit</option>
                    </select>
            </div>

            <div class="form-item">
                    <label for="readymadeSize">Size</label>
                    <select id="readymadeSize" name="readymadeSize">
                        <option value="${dataset[0].attributes.readymadeSize}">${dataset[0].attributes.readymadeSize}</option>
                        <option value="freeSize">Free Size [ F ]</option>
                        <option value="small">Small [ S ]</option>
                        <option value="medium">Medium [ M ]</option>
                        <option value="large">Large [ L ]</option>
                        <option value="extraLarge">Extra Large [ XL ]</option>
                        
                    </select>
            </div>

        </div>
        <div class="input-row">
            <div class="form-item">
                    <label for="readymadedesign">Design</label>
                <select id="readymadedesign" name="readymadeDesign">
                   <option value="${dataset[0].attributes.readymadeDesign}">${dataset[0].attributes.readymadeDesign}</option>
                    <optgroup label = "Embroidery">
                        <option value="zari">Zari Work</option>
                        <option value="kantha">Kantha</option>
                        <option value="aari">Aari</option>
                        <option value="sozni">Sozni</option>
                        <option value="sujni">Sujni</option>
                        <option value="kashmiri">Kashmiri</option>
                        <option value="Kachh">Kachh Work</option>
                        <option value="kasuti">Kasuti</option>
                        <option value="lambani">Lambani</option>
                        <option value="toda">Toda</option>
                        <option value="mirror">Mirror Work</option>
                        <option value="sequin">Sequin Work</option>
                        <option value="stone">Stone Work</option>
                    </optgroup>
                    <optgroup label="Handloom Weave">
                        <option value="jamdani">Jamdani</option>
                        <option value="bhujodi">Bhujodi</option>
                        <option value="kashida">Kashida</option>
                        <option value="khadi">Khadi</option>
                        <option value="chanderi">Chanderi</option>
                        <option value="maheshwari">Maheshwari</option>
                        <option value="kumaoni">Kumaoni</option>
                        <option value="kanjivaram">Kanjivaram</option>
                        <option value="gadual">Gadual</option>
                        <option value="odishaWeave">Odisha Weave</option>
                        <option value="kerela Weave">Kerela Weave</option>
                        <option value="venkatgiri">Venkatgiri</option>
                        <option value="madurai">madurai</option>
                        <option value="kosa">Kosa</option>
                        <option value="mangalgiri">mangalgiri</option>
                        <option value="ikkat">Ikkat</option>
                        <option value="bhagalpuri">Bhagalpuri</option>
                        <option value="bengalWeave">Bengal Weave</option>
                        <option value="assamWeave">Assam Weave</option>
                        <optgroup label="Banarasi">
                            <option value="tanchoi">Tanchoi</option>
                            <option value="brocade">Brocade</option>
                            <option value="chicarga">Chicarga</option>
                            <option value="kinkhap">Kinkhap</option>
                        </optgroup>   
                    </optgroup>
                        <optgroup label = "Handblock">
                        <option value="ajrakh">Ajrakh</option>
                        <option value="pigmentBlock">Pigment Block</option>
                        <option value="dabu">Dabu</option>
                        <option value="batique">Batique</option>
                        <option value="ecoPrint">Eco Print</option>
                        <option value="bagh">Bagh</option>
                    </optgroup>
                    <optgroup label = "Hand Painting">
                        <option value="penKalamkari">Pen Kalamkari</option>
                        <option value="silkDyePaint">Silk Dye Paint</option>
                        <option value="waxBatique">Wax batique</option>
                        <option value="resistDye">Resist Dye</option>
                        <option value="madhubani">Madhubani</option>
                        <option value="saura">Saura</option>
                        <option value="rogan">Rogan</option>
                        <option value="gondha">Gondha</option>
                        <option value="gond">Gond</option>
                        <option value="pattachitra">Pattachitra</option>
                        <option value="potPainting">Pot Painting</option>
                        <option value="fudPainting">Fud Painting</option>
                        <option value="devotional">Devotional</option>
                    </optgroup>
                    <optgroup label = "Tie-Dye">
                        <option value="bandhani">Bandhani</option>
                        <option value="japaneseShibori">Japanese Shibori</option>
                        <option value="nuiShibori">Nui Shibori</option>
                        <option value="bandej">Bandej</option>
                        <option value="ecoPrint">Eco Print</option>
                        <option value="bagh">Bagh</option>
                    </optgroup>
                </select>
                

            </div>
            <div class="form-item">
                <label for="fabric-type">Fabric Type</label>
                <select id="fabric-type" name="readymadeFabricType">
                    <option value="${dataset[0].attributes.readymadeFabricType}">${dataset[0].attributes.readymadeFabricType}</option>
                    <optgroup label="Plain Weave Based">
                    <option value="plainWeave">Plain Weave</option>
                    <option value="chiffon">Chiffon</option>
                    <option value="georgette">Georgette</option>
                    <option value="organza">Organza</option>
                    <option value="voile">Voile</option>
                    <option value="crepe">Crepe</option>
                    <option value="cambric">Cambric</option>
                    <option value="poplin">Poplin</option>
                    <option value="muslin">Muslin</option>
                    <option value="lawn">Lawn</option>
                    </optgroup>
                    <optgroup label="Twill Based">
                    <option value="twill">Twill</option>
                    <option value="drill">Drill</option>
                    <option value="gabardine">Gabardine</option>
                    <option value="denim">Denim</option>
                    </optgroup>
                    <optgroup label="Satin Based">
                    <option value="satin">Satin</option>
                    <option value="sateen">Sateen</option>
                    <option value="duchessSatin">Duchess Satin</option>
                    </optgroup>
                    <optgroup label="Jacquard & Figured">
                    <option value="jacquard">Jacquard</option>
                    <option value="brocade">Brocade</option>
                    <option value="damask">Damask</option>
                    </optgroup>
                    <optgroup label="Open / Mesh">
                    <option value="net">Net</option>
                    <option value="mesh">Mesh</option>
                    <option value="lace">Lace</option>
                    </optgroup>
                    <optgroup label="Pile / Raised">
                    <option value="velvet">Velvet</option>
                    <option value="corduroy">Corduroy</option>
                    <option value="terry">Terry</option>
                    </optgroup>
                    <optgroup label="Knitted Constructions">
                    <option value="singleJersey">Single Jersey</option>
                    <option value="ribKnit">Rib Knit</option>
                    <option value="interlock">Interlock</option>
                    </optgroup>
                    <optgroup label="Special Constructions">
                    <option value="chanderiWeave">Chanderi Weave</option>
                    <option value="kotaDoria">Kota Doria</option>
                    <option value="doubleCloth">Double Cloth</option>
                    <option value="crepeWeave">Crepe Weave</option>
                    </optgroup>
                </select>
            </div>
            <div class="form-item">
                    <label for="readymadeSleeve">Sleeve Type</label>
                    <select id="readymadeSleeve" name="readymadeSleeve">
                        <option value="${dataset[0].attributes.readymadeSleeve}">${dataset[0].attributes.readymadeSleeve}</option>
                        <option value = "notRequired">Not Required</option>
                        <option value="sleeveless">Sleeveless</option>
                        <option value="cap-sleeve">Cap Sleeve</option>
                        <option value="short-sleeve">Short Sleeve</option>
                        <option value="elbow-length">Elbow Length</option>
                        <option value="three-quarter">Three-Quarter Sleeve</option>
                        <option value="full-sleeve">Full Sleeve</option>
                    </select>
        </div>

    </div>
    <div class = "input-row">
        <div class="form-item">
                <label for="readymadeType">Dress Type</label>
                <select id="readymadeType" name="readymadeType">
                    <option value="${dataset[0].attributes.readymadeType}">${dataset[0].attributes.readymadeType}</option>
                    <option value="kurta">Kurta</option>
                    <option value="tuniq">Tunique</option>
                    <option value="shrug">Shrug</option>
                    <option value="kaftan">Kaftan</option>
                    <option value="suit">Suit</option>
                    <option value="kimono">Kimono</option>
                    <option value="poncho">Poncho</option>
                    <option value="jacket">Jacket</option>
                    <option value="maxi">Maxi</option>
                    <option value="cape">Cape</option>
                    <option value = "blouseStitched">Full Stitched Blouse</option>
                </select>
            </div>
            <div class="form-item">
                <label for = "readymadeNeckline">Neckline</label>
                <select name="readymadeNeckline" id="readymadeNeckline">
                <option value="${dataset[0].attributes.readymadeNeckline}">${dataset[0].attributes.readymadeNeckline}</option>
                <option value = "notRequired">Not Required</option>
                <option value="roundNeck">Round Neck</option>
                <option value="vNeck">V Neck</option>
                <option value="deepVNeck">Deep V Neck</option>
                <option value="uNeck">U Neck</option>
                <option value="squareNeck">Square Neck</option>
                <option value="boatNeck">Boat Neck</option>
                <option value="scoopNeck">Scoop Neck</option>
                <option value="sweetheartNeck">Sweetheart Neck</option>
                <option value="halterNeck">Halter Neck</option>
                <option value="oneShoulderNeck">One-Shoulder Neck</option>
                <option value="offShoulderNeck">Off-Shoulder Neck</option>
                <option value="collaredNeck">Collared Neck</option>
                <option value="chineseCollar">Chinese Collar</option>
                <option value="mandarinCollar">Mandarin Collar</option>
                <option value="keyholeNeck">Keyhole Neck</option>
                <option value="notchNeck">Notch Neck</option>
                <option value="asymmetricNeck">Asymmetric Neck</option>
                </select>

            </div>
    </div>
    `
    if(dataset[0].attributes.readymadeType == "blouseStitched"){
         form.innerHTML += 
            `
            <div class="input-row">
                <div class="form-item">
                        <label for="blouse-lining">Blouse Lining</label>
                        <select id="blouse-lining" name="readymadeBlouseLining">
                            <option value = "${dataset[0].attributes.readymadeBlouseLining}">${dataset[0].attributes.readymadeBlouseLining}</option>
                            <option value = "yes">Yes</option>
                            <option value = "No">No</option>
                        </select>
                </div>

            <div class="input-row">
                <div class="form-item">
                    <label for="blouse-clouse">Closure Type</label>
                    <select id="blouse-closure" name="readymadeBlouseClosure">
                        <option value="${dataset[0].attributes.readymadeBlouseClosure}">${dataset[0].attributes.readymadeBlouseClosure}</option>
                        <option value="backHooks">Back Hooks</option>
                        <option value="frontHooks">Front Hooks</option>
                        <option value="tieUp">Tie-up Back (Dori)</option>
                        <option value="backButton">Buttoned Back</option>
                        <option value="backZipper">Back Zipper</option>
                        <option value="sideZipper">Side Zipper</option>
                    </select>
                </div>
                <div class="form-item">
                    <label for="blouse-back">Back Type</label>
                    <select id="blouse-back" name="readymadeBlouseBack">
                        <option value="${dataset[0].attributes.readymadeBlouseBack}">${dataset[0].attributes.readymadeBlouseBack}</option>
                        <option value="closedBack">Closed Back</option>
                        <option value="highBack">High Back</option>
                        <option value="buttonedBack">Buttoned Back</option>
                        <option value="zipperBack">Zipper Back</option>
                        <option value="hookedBack">Hooked Back</option>
                        <option value="deepUBack">Deep U Back</option>
                        <option value="deepVBack">Deep V Back</option>
                        <option value="roundBack">Round Back</option>
                        <option value="squareBack">Square Back</option>
                        <option value="keyholeBack">Keyhole Back</option>
                        <option value="doriTieUpBack">Dori Tie-Up Back</option>
                        <option value="crissCrossTieBack">Criss-Cross Tie Back</option>
                        <option value="tieUpWithTassels">Tie-Up with Tassels</option>
                        <option value="cutOutBack">Cut-Out Back</option>
                        <option value="multipleCutOutBack">Multiple Cut-Out Back</option>
                        <option value="sheerNetBack">Sheer / Net Back</option>
                        <option value="borderPanelBack">Back with Border Panel</option>
                        <option value="backless">Backless</option>
                        <option value="cagedBack">Caged Back</option>
                        <option value="corsetBack">Corset Back</option>
                        <option value="bowTieBack">Bow Tie Back</option>
                    </select>
                </div>

            </div>
            `

    }
}else if(dataset[0].category == "blouse"){
    form.innerHTML +=
        `
        <div class = "seperator"></div>
        <div class = "input-row">
            <div class="form-item">
                        <label for="blouse-type">Blouse Type</label>
                        <input id = "blouse-type" type = "text" name = "blouseType" value = ${dataset[0].attributes.blouseType} readonly>
                    </div>
                <div class="form-item">
                        <label for="blouse-lining">Lining of Blouse</label>
                        <select id="blouse-lining" name="blouseLining">
                            <option value = "${dataset[0].attributes.blouseLining}">${dataset[0].attributes.blouseLining}</option>
                            <option value = "yes">Yes</option>
                            <option value = "No">No</option>
                        </select>
                </div>
            </div>
            <div class = "input-row">
            <div class="form-item">
                        <label for="blouse-pattern">Blouse Design</label>
                        <select id="blouse-pattern" name="blouseDesign">
                            <option value="${dataset[0].attributes.blouseDesign}">${dataset[0].attributes.blouseDesign}</option>
                        <optgroup label = "Embroidery">
                            <option value="zari">Zari Work</option>
                            <option value="kantha">Kantha</option>
                            <option value="aari">Aari</option>
                            <option value="sozni">Sozni</option>
                            <option value="sujni">Sujni</option>
                            <option value="kashmiri">Kashmiri</option>
                            <option value="Kachh">Kachh Work</option>
                            <option value="kasuti">Kasuti</option>
                            <option value="lambani">Lambani</option>
                            <option value="toda">Toda</option>
                            <option value="mirror">Mirror Work</option>
                            <option value="sequin">Sequin Work</option>
                            <option value="stone">Stone Work</option>
                        </optgroup>
                        <optgroup label="Handloom Weave">
                            <option value="jamdani">Jamdani</option>
                            <option value="bhujodi">Bhujodi</option>
                            <option value="kashida">Kashida</option>
                            <option value="khadi">Khadi</option>
                            <option value="chanderi">Chanderi</option>
                            <option value="maheshwari">Maheshwari</option>
                            <option value="kumaoni">Kumaoni</option>
                            <option value="kanjivaram">Kanjivaram</option>
                            <option value="gadual">Gadual</option>
                            <option value="odishaWeave">Odisha Weave</option>
                            <option value="kerela Weave">Kerela Weave</option>
                            <option value="venkatgiri">Venkatgiri</option>
                            <option value="madurai">madurai</option>
                            <option value="kosa">Kosa</option>
                            <option value="mangalgiri">mangalgiri</option>
                            <option value="ikkat">Ikkat</option>
                            <option value="bhagalpuri">Bhagalpuri</option>
                            <option value="bengalWeave">Bengal Weave</option>
                            <option value="assamWeave">Assam Weave</option>
                            <optgroup label="Banarasi">
                                <option value="tanchoi">Tanchoi</option>
                                <option value="brocade">Brocade</option>
                                <option value="chicarga">Chicarga</option>
                                <option value="kinkhap">Kinkhap</option>
                            </optgroup>   
                        </optgroup>
                            <optgroup label = "Handblock">
                            <option value="ajrakh">Ajrakh</option>
                            <option value="pigmentBlock">Pigment Block</option>
                            <option value="dabu">Dabu</option>
                            <option value="batique">Batique</option>
                            <option value="ecoPrint">Eco Print</option>
                            <option value="bagh">Bagh</option>
                        </optgroup>
                        <optgroup label = "Hand Painting">
                            <option value="penKalamkari">Pen Kalamkari</option>
                            <option value="silkDyePaint">Silk Dye Paint</option>
                            <option value="waxBatique">Wax batique</option>
                            <option value="resistDye">Resist Dye</option>
                            <option value="madhubani">Madhubani</option>
                            <option value="saura">Saura</option>
                            <option value="rogan">Rogan</option>
                            <option value="gondha">Gondha</option>
                            <option value="gond">Gond</option>
                            <option value="pattachitra">Pattachitra</option>
                            <option value="potPainting">Pot Painting</option>
                            <option value="fudPainting">Fud Painting</option>
                            <option value="devotional">Devotional</option>
                        </optgroup>
                        <optgroup label = "Tie-Dye">
                            <option value="bandhani">Bandhani</option>
                            <option value="japaneseShibori">Japanese Shibori</option>
                            <option value="nuiShibori">Nui Shibori</option>
                            <option value="bandej">Bandej</option>
                            <option value="ecoPrint">Eco Print</option>
                            <option value="bagh">Bagh</option>
                        </optgroup>
                        </select>
                </div>

             <div class="form-item">
                <label for="fabric-type">Fabric Type</label>
                <select id="fabric-type" name="blouseFabricType">
                    <option value="${dataset[0].attributes.blouseFabricType}">${dataset[0].attributes.blouseFabricType}</option>
                    <optgroup label="Plain Weave Based">
                    <option value="plainWeave">Plain Weave</option>
                    <option value="chiffon">Chiffon</option>
                    <option value="georgette">Georgette</option>
                    <option value="organza">Organza</option>
                    <option value="voile">Voile</option>
                    <option value="crepe">Crepe</option>
                    <option value="cambric">Cambric</option>
                    <option value="poplin">Poplin</option>
                    <option value="muslin">Muslin</option>
                    <option value="lawn">Lawn</option>
                    </optgroup>
                    <optgroup label="Twill Based">
                    <option value="twill">Twill</option>
                    <option value="drill">Drill</option>
                    <option value="gabardine">Gabardine</option>
                    <option value="denim">Denim</option>
                    </optgroup>
                    <optgroup label="Satin Based">
                    <option value="satin">Satin</option>
                    <option value="sateen">Sateen</option>
                    <option value="duchessSatin">Duchess Satin</option>
                    </optgroup>
                    <optgroup label="Jacquard & Figured">
                    <option value="jacquard">Jacquard</option>
                    <option value="brocade">Brocade</option>
                    <option value="damask">Damask</option>
                    </optgroup>
                    <optgroup label="Open / Mesh">
                    <option value="net">Net</option>
                    <option value="mesh">Mesh</option>
                    <option value="lace">Lace</option>
                    </optgroup>
                    <optgroup label="Pile / Raised">
                    <option value="velvet">Velvet</option>
                    <option value="corduroy">Corduroy</option>
                    <option value="terry">Terry</option>
                    </optgroup>
                    <optgroup label="Knitted Constructions">
                    <option value="singleJersey">Single Jersey</option>
                    <option value="ribKnit">Rib Knit</option>
                    <option value="interlock">Interlock</option>
                    </optgroup>
                    <optgroup label="Special Constructions">
                    <option value="chanderiWeave">Chanderi Weave</option>
                    <option value="kotaDoria">Kota Doria</option>
                    <option value="doubleCloth">Double Cloth</option>
                    <option value="crepeWeave">Crepe Weave</option>
                    </optgroup>
                </select>
            </div>
            </div>
                
            <div class = seperator></div>
        `
    if(dataset[0].attributes.blouseType == "semi-stitched"){
        form.innerHTML += 
        `
        <div class="input-row">

            <div class="form-item">
                <label for="blouse-chest">Blouse Chest Size</label>
                <input type="text" id="blouse-chest" name="blouseChest" value = "${dataset[0].attributes.blouseChest}">
            </div>

            <div class="form-item">
                <label for="blouse-length">Blouse Length</label>
                <input type="text" id="blouse-length" name="blouseLength" value = "${dataset[0].attributes.blouseLength}">
            </div>
            <div class="form-item">
                <label for="blouse-sleeve">Sleeve Type of Blouse</label>
                <select id="blouse-sleeve" name="blouseSleeve">
                    <option value="${dataset[0].attributes.blouseSleeve}">${dataset[0].attributes.blouseSleeve}</option>
                    <option value="sleeveless">Sleeveless</option>
                    <option value="cap-sleeve">Cap Sleeve</option>
                    <option value="short-sleeve">Short Sleeve</option>
                    <option value="elbow-length">Elbow Length</option>
                    <option value="three-quarter">Three-Quarter Sleeve</option>
                    <option value="full-sleeve">Full Sleeve</option>
                </select>
            </div>

        </div>
        `

    }else if(dataset[0].attributes.blouseType == "unstitched"){
        form.innerHTML += 
        `
        <div class="input-row">
            <div class="form-item">
                <label for="blouse-length">Length of Blouse</label>
                <input type="text" id="blouse-length" name="blouseLength" value = "${dataset[0].attributes.blouseLength}">
            </div>
        </div>
        `
    }
}else if(dataset[0].category == "wraps"){
    form.innerHTML += 
    `
    <div class = "seperator"></div>
    <div class="input-row">

        <div class="form-item">
            <label for="wrap-length">Length of Wrap</label>
            <input type="text" id="wrap-length" name="wrapLength" value = "${dataset[0].attributes.wrapLength}">
        </div>

        <div class="form-item">
            <label for="wrap-width">Width of Wrap</label>
            <input type="text" id="wrap-width" name="wrapWidth" value = "${dataset[0].attributes.wrapWidth}">
        </div>
    </div>
    <div class = "input-row">
        <div class="form-item">
            <label for="wrap-pattern">Design Type of wrap</label>
            <select id="wrap-pattern" name="wrapDesign">
                <option value="${dataset[0].attributes.wrapDesign}">${dataset[0].attributes.wrapDesign}</option>
                    <optgroup label = "Embroidery">
                        <option value="zari">Zari Work</option>
                        <option value="kantha">Kantha</option>
                        <option value="aari">Aari</option>
                        <option value="sozni">Sozni</option>
                        <option value="sujni">Sujni</option>
                        <option value="kashmiri">Kashmiri</option>
                        <option value="Kachh">Kachh Work</option>
                        <option value="kasuti">Kasuti</option>
                        <option value="lambani">Lambani</option>
                        <option value="toda">Toda</option>
                        <option value="mirror">Mirror Work</option>
                        <option value="sequin">Sequin Work</option>
                        <option value="stone">Stone Work</option>
                    </optgroup>
                    <optgroup label="Handloom Weave">
                        <option value="jamdani">Jamdani</option>
                        <option value="bhujodi">Bhujodi</option>
                        <option value="kashida">Kashida</option>
                        <option value="khadi">Khadi</option>
                        <option value="chanderi">Chanderi</option>
                        <option value="maheshwari">Maheshwari</option>
                        <option value="kumaoni">Kumaoni</option>
                        <option value="kanjivaram">Kanjivaram</option>
                        <option value="gadual">Gadual</option>
                        <option value="odishaWeave">Odisha Weave</option>
                        <option value="kerela Weave">Kerela Weave</option>
                        <option value="venkatgiri">Venkatgiri</option>
                        <option value="madurai">madurai</option>
                        <option value="kosa">Kosa</option>
                        <option value="mangalgiri">mangalgiri</option>
                        <option value="ikkat">Ikkat</option>
                        <option value="bhagalpuri">Bhagalpuri</option>
                        <option value="bengalWeave">Bengal Weave</option>
                        <option value="assamWeave">Assam Weave</option>
                        <optgroup label="Banarasi">
                            <option value="tanchoi">Tanchoi</option>
                            <option value="brocade">Brocade</option>
                            <option value="chicarga">Chicarga</option>
                            <option value="kinkhap">Kinkhap</option>
                        </optgroup>   
                    </optgroup>
                        <optgroup label = "Handblock">
                        <option value="ajrakh">Ajrakh</option>
                        <option value="pigmentBlock">Pigment Block</option>
                        <option value="dabu">Dabu</option>
                        <option value="batique">Batique</option>
                        <option value="ecoPrint">Eco Print</option>
                        <option value="bagh">Bagh</option>
                    </optgroup>
                    <optgroup label = "Hand Painting">
                        <option value="penKalamkari">Pen Kalamkari</option>
                        <option value="silkDyePaint">Silk Dye Paint</option>
                        <option value="waxBatique">Wax batique</option>
                        <option value="resistDye">Resist Dye</option>
                        <option value="madhubani">Madhubani</option>
                        <option value="saura">Saura</option>
                        <option value="rogan">Rogan</option>
                        <option value="gondha">Gondha</option>
                        <option value="gond">Gond</option>
                        <option value="pattachitra">Pattachitra</option>
                        <option value="potPainting">Pot Painting</option>
                        <option value="fudPainting">Fud Painting</option>
                        <option value="devotional">Devotional</option>
                    </optgroup>
                    <optgroup label = "Tie-Dye">
                        <option value="bandhani">Bandhani</option>
                        <option value="japaneseShibori">Japanese Shibori</option>
                        <option value="nuiShibori">Nui Shibori</option>
                        <option value="bandej">Bandej</option>
                        <option value="ecoPrint">Eco Print</option>
                        <option value="bagh">Bagh</option>
                    </optgroup>
            </select>
        </div>
        <div class="form-item">
            <label for="wrap-type">Type of Wrap</label>
            <select id = "wrap-type" name = "wrapType">
            <option value = "${dataset[0].attributes.wrapType}">${dataset[0].attributes.wrapType}</option>
            <option value = "stoles">stoles</option>
            <option value = "dupattas">dupattas</option>
            </select>
        </div>
        <div class="form-item">
            <label for="fabric-type">Fabric Type</label>
            <select id="fabric-type" name="fabricType">
                <option value="${dataset[0].attributes.wrapFabricType}">${dataset[0].attributes.wrapFabricType}</option>
                <optgroup label="Plain Weave Based">
                <option value="plainWeave">Plain Weave</option>
                <option value="chiffon">Chiffon</option>
                <option value="georgette">Georgette</option>
                <option value="organza">Organza</option>
                <option value="voile">Voile</option>
                <option value="crepe">Crepe</option>
                <option value="cambric">Cambric</option>
                <option value="poplin">Poplin</option>
                <option value="muslin">Muslin</option>
                <option value="lawn">Lawn</option>
                </optgroup>
                <optgroup label="Twill Based">
                <option value="twill">Twill</option>
                <option value="drill">Drill</option>
                <option value="gabardine">Gabardine</option>
                <option value="denim">Denim</option>
                </optgroup>
                <optgroup label="Satin Based">
                <option value="satin">Satin</option>
                <option value="sateen">Sateen</option>
                <option value="duchessSatin">Duchess Satin</option>
                </optgroup>
                <optgroup label="Jacquard & Figured">
                <option value="jacquard">Jacquard</option>
                <option value="brocade">Brocade</option>
                <option value="damask">Damask</option>
                </optgroup>
                <optgroup label="Open / Mesh">
                <option value="net">Net</option>
                <option value="mesh">Mesh</option>
                <option value="lace">Lace</option>
                </optgroup>
                <optgroup label="Pile / Raised">
                <option value="velvet">Velvet</option>
                <option value="corduroy">Corduroy</option>
                <option value="terry">Terry</option>
                </optgroup>
                <optgroup label="Knitted Constructions">
                <option value="singleJersey">Single Jersey</option>
                <option value="ribKnit">Rib Knit</option>
                <option value="interlock">Interlock</option>
                </optgroup>
                <optgroup label="Special Constructions">
                <option value="chanderiWeave">Chanderi Weave</option>
                <option value="kotaDoria">Kota Doria</option>
                <option value="doubleCloth">Double Cloth</option>
                <option value="crepeWeave">Crepe Weave</option>
                </optgroup>
            </select>
        </div>

    </div>
    `
}

form.innerHTML +=
`
<div class = "seperator"></div>
<div class="input-row">

        <div class="form-item">
            <label for="image1">Image 1</label>
            <input type="text" id="image1" name="image1" value = ${dataset[0].images[0]}>
        </div>

        <div class="form-item">
            <label for="image2">Image 2</label>
            <input type="text" id="image2" name="image2" value = ${dataset[0].images[1]}>
        </div>

</div>

<div class="input-row">

        <div class="form-item">
            <label for="image3">Image 3</label>
            <input type="text" id="image3" name="image3" value = ${dataset[0].images[2]}>
        </div>

        <div class="form-item">
            <label for="image4">Image 4</label>
            <input type="text" id="image4" name="image4" value = ${dataset[0].images[3]}>
        </div>

</div>
<div class="input-row">

        <div class="form-item">
            <label for="image5">Image 5</label>
            <input type="text" id="image5" name="image5" value = ${dataset[0].images[4]}>
        </div>

        <div class="form-item">
            <label for="image6">Image 6</label>
            <input type="text" id="image6" name="image6" value = ${dataset[0].images[5]}>
        </div>

</div>

</div>
`
form.innerHTML += 
`
<div class = "buttonGroup">
<a class ="barcode-button" href = "/admin/products/regenerate/${dataset[0].barcode}" id = "barcode"><i data-lucide="scan-barcode" class = "save_icon"></i>Barcode</a>
<button class = "change-button"><i data-lucide="save" class = "save_icon"></i>Save</button> 
<a href="/admin/products/delete/${dataset[0].id}" class="buttonDelete" id="delete"><i data-lucide="x" class = "save_icon" style = "margin-right:0;"></i> Delete</a>
</div>
`
const fields = form.querySelectorAll("input");
fields.forEach(x=>{
    if(x.readOnly == true){
        x.style.opacity = "0.6";

    }
})
document.querySelector(".barcode-button")
.addEventListener("click",()=>{
    window.showAlert("success","Product Barcode Generated")
})
