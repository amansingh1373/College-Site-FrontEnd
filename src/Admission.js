import { useState } from "react";

const Admission = () => {

    const [name,setName] = useState("");
    const [sname,setSname] = useState("");
    const [fname,setFname] = useState("");
    const [mname,setMname] = useState("");
    const [course,setCourse] = useState("");
    const [percentage,setPercentage] = useState("");
    const [adress,setAdress] = useState("");
    const [gender,setGender] = useState("male");
    const [board,setBoard] = useState("");


    return ( 
        <div className="admission-container">
            <div class="ad-form-container">
                <form>
                    <label className="label">Your Name:</label>
                    <div className="form-element">
                        <input type="text" className="text-feild" name="name"  value={name} onChange={(e) => setName(e.target.value ) }/>
                    </div>
                    <label className="label">Father's Name:</label>
                    <div className="form-element">
                        <input type="text" className="text-feild" name="name"  value={fname} onChange={(e) => setFname(e.target.value ) }/>
                    </div>
                    <label className="label">Mother's Name:</label>
                    <div className="form-element">
                        <input type="text" className="text-feild" name="name"  value={mname} onChange={(e) => setMname(e.target.value ) }/>
                    </div>
                    <br/>
                    <label className="label">gender:</label>
                    <br/><br/>
                    <input type="radio" value="male" name="gender"  onClick={() => setGender('Male') }/> &nbsp;&nbsp;&nbsp;
                    <label className="label">Male</label> &nbsp;&nbsp;&nbsp;
                    <input type="radio" value="female" name="gender" onClick={() => setGender('Female') }/> &nbsp;&nbsp;&nbsp;
                    <label className="label">Female</label> &nbsp;&nbsp;&nbsp;
                    <input type="radio" value="others" name="gender" onClick={() => setGender('others') }/> &nbsp;&nbsp;&nbsp;
                    <label className="label">others</label>
                    <br/><br/><br/>
                    <label className="label">Address:</label>
                    <div className="form-element">
                        <input type="text" className="text-feild" name="name"  value={adress} onChange={(e) => setAdress(e.target.value ) }/>
                    </div>
                    <label className="label">School Name:</label>
                    <div className="form-element">
                        <input type="text" className="text-feild" name="name"  value={sname} onChange={(e) => setSname(e.target.value ) }/>
                    </div>
                    <label className="label">Board:</label>
                    <label className="label">Percentage Scored:</label>
                    <div className="form-element">
                        <input type="text" className="text-feild" name="name"  value={percentage} onChange={(e) => setPercentage(e.target.value ) }/>
                    </div>
                    <label className="label">Enter the course you want to get enrolled in:</label>
                    <div className="form-element">
                        <input type="text" className="text-feild" name="name"  value={course} onChange={(e) => setCourse(e.target.value ) }/>
                    </div>
                    <div className="apply-button-container">
                        <button class="apply-button green">Apply</button>
                    </div>
                </form>
            </div>
        </div>
     );
}
 
export default Admission;