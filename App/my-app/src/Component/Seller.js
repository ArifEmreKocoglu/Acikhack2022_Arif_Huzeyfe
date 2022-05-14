import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { create } from "ipfs-http-client";
// import backgroundImage from '../img/3.jpg'
import '../Styles/Seller.css'

const client = create("https://ipfs.infura.io:5001/api/v0");
function Seller(){
        const [images, updateImages] = useState("");
        async function addImages(imgFileUrl) {
            let randomThing = Math.floor(Math.random() * 10) + 1;
            let imgElement = imgFileUrl && (
              <div className="image">
                <img src={imgFileUrl} alt={randomThing} />
              </div>
            );
            updateImages([...images, imgElement]);
          }
        async function onChange(e) {
            const file = e.target.files[0];
            try{
                console.log(file);

                const added = await client.add(file);
                const url = `https://ipfs.infura.io/ipfs/${added.path}`;
                console.log(url);
                addImages(url);
            }catch(error){
                console.log("ERROR uploading file : ", error);
                alert("error uploading file ", error);
            }
        }
        return (
            <section className="section sectionSeller">
                {/* <img src={ backgroundImage } alt="" id="backgroundImage"></img> */}
                <form>
                    <div className="image">
                        {images}
                        <FontAwesomeIcon icon="fa_cloud_arrow_up" className="cloudIcon" />
                    </div>
                    <input className="uploadFoto button" type="file" onChange={onChange}></input>
                    <input type="textarea" className="trackingNumber" placeholder="lütfen takip numarasını giriniz"></input>
                    <button className="uploadButton button"> Kaydet </button>
                </form>

            </section>
        )
}

export default Seller
