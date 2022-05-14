import '../Styles/Cargo.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { create } from "ipfs-http-client";
import '../Styles/Cargo.css'

const client = create("https://ipfs.infura.io:5001/api/v0");
function Cargo({imagesCargo, updateImagesCargo}){
    async function addImagesCargo(imgFileUrl) {
        let imgElement = imgFileUrl
        updateImagesCargo([...imagesCargo, imgElement]);
      }

    async function onChange(e) {
        const file = e.target.files[0];
        try{
            console.log(file);

            const added = await client.add(file);
            const url = `https://ipfs.infura.io/ipfs/${added.path}`;
            console.log(url);
            console.log(111);
            addImagesCargo(url);
        }catch(error){
            console.log("ERROR uploading file : ", error);
            alert("error uploading file ", error);
        }
    }

        return (
            <section className="section sectionCargo" id="cargo">
                <div className="list">
                    <ul>
                        <li>İsim</li>
                        <li>Telefon</li>
                        <li>Adres</li>
                        <li>Konum</li>
                    </ul>
                </div>
                <div className="imagesCargo">
                    <form>
                        <div className="image">
                                <img src={imagesCargo[imagesCargo.length - 1]} alt="soneklenencargoresim"/>
                                <FontAwesomeIcon icon="fa_cloud_arrow_up" className="cloudIcon" />
                        </div>
                        <input className="uploadFoto button" type="file" onChange={onChange}></input>
                    </form>
                </div>
            </section>
        )
}

export default Cargo
