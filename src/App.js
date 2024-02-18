import "./Style.css";
import { useState } from "react";

function App() {
  const [projectname, setProjectName] = useState('');
  const [projecttype, setWebsite] = useState('');
  const [userprofile, setUserProfile] = useState('');
  const [budget, setBudget] = useState('');
  const [referencewebsites, setReference] = useState('');
  const [companylogo, setCompanylogo] = useState('');
  const [technologies, setTechnologies] = useState('');
  const [timeline, setTimeline] = useState('');
  const [addads, setAddads]= useState('');
  const [moto, setMoto]= useState('');
  

  const handleSubmit = async () => {
    if (projectname.length === 0 || projecttype.length === 0 || userprofile.length === 0 || budget.length === 0 || referencewebsites.length === 0 || companylogo.length === 0 || technologies.length === 0 ||timeline.length === 0) {
      alert("Please fill in all fields!");
      return;
    }

    try {
      const response = await fetch('http://localhost:5001/adduserinfo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ projectname, projecttype, userprofile,budget,referencewebsites,companylogo,technologies,timeline,addads}),
      });

      if (!response.ok) {
        throw new Error('Failed to save data');
      }

      alert("User registered successfully.");
     
      setProjectName('');
      setWebsite('');
      setUserProfile('');
      setBudget('');
      setReference();
      setCompanylogo();
      setTimeline();
      setAddads();

    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while saving data');
    }
  };

  return (
    <> 
    <div className="bg-container">
    <center>
    
      <div className="container">
        <h2 className="heading">Requirements Gathering Form Client</h2>
        <form>
        <label htmlFor="projectname">Project Name</label>
        <input type="text" name="projectname" id="projectname" value={projectname} onChange={(e) => setProjectName(e.target.value)} />
        <label htmlFor="projecttype">Do you need a website or app?</label>
        <input type="text" name="projecttype" id="projecttype" value={projecttype} onChange={(e) => setWebsite(e.target.value)} />
        <label htmlFor="userprofile">How many user profiles?</label>
        <input type="text" name="userprofile" id="userprofile" value={userprofile} onChange={(e) => setUserProfile(e.target.value)} /> 
        <label htmlFor="budget">what is your budget?</label>
        <input type="text" name="setMotobudget" id="budget" value={budget} onChange={(e) => setBudget(e.target.value)} /> 
        <label htmlFor="referencewebsites">Any reference websites?</label>
        <input type="text" name="referencewebsites" id="referencewebsites" value={referencewebsites} onChange={(e) => setReference(e.target.value)} /> 
        <label htmlFor="companylogo">Enter your company logo and brand name</label>
        <input type="text" name="companylogo" id="companylogo" value={companylogo} onChange={(e) => setCompanylogo(e.target.value)} />
        <label htmlFor="moto">What is the Moto Of Your Website?</label>
        <input type="text" name="moto" id="moto" value={moto} onChange={(e) => setMoto(e.target.value)} />
        <label htmlFor="Ads">Would Like Allow Ads In yours Website</label>
        <input type="text" name="Ads" id="Ads" value={addads} onChange={(e) => setAddads(e.target.value)} />  
        <label htmlFor="technologies">Technologies preferences?</label>
        <input type="text" name="technologies" id="technologies" value={technologies} onChange={(e) => setTechnologies(e.target.value)} /> 
        <label htmlFor="timeline">Timeline when are you expecting to launch?</label>
        <input type="text" name="timeline" id="timeline" value={timeline} onChange={(e) => setTimeline(e.target.value)} /> 
        <input type="button" name="send" id="send" value="SEND" onClick={handleSubmit} />
        </form>
        
      </div>
      </center>
      </div>
    </>
  );
}

export default App;
