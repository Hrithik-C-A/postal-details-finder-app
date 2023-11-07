import { useEffect, useState } from "react";
import axios from "axios";
import '../Pages.css';
import LinkSwitch from "../components/LinkSwitch";
import RedirectToMaps from "../components/RedirectToMaps";

const PincodePage = () => {
  const [pincode, setPincode] = useState(678641);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  const apiCall = () => {
    axios.get(`https://api.postalpincode.in/pincode/${pincode}`)
    .then(res => {
      setData(res.data);
      setLoading(false);
    })
    .catch(err => {
      console.error(err);
    });
  }

  useEffect(() => {
      apiCall();
  }, []);

  const handleSubmit = (e)=>{
    e.preventDefault();
    apiCall();
  }

  return (
    <div>
       <LinkSwitch  linkUrl={'/'} linkCss={'home-link'} linkName={'Home'}/>
      <a href="/" className="home-link">Home</a>
      <form style={{marginBottom:'1.5rem'}} onSubmit={handleSubmit}>
        <input type="number" placeholder="Enter Pincode" onChange={(e) => setPincode(e.target.value)} />
        <button type="submit">Submit</button>
      </form>
      <LinkSwitch  linkUrl={'/search/branchname'} linkCss={'link-switch'} linkName={'Switch to BranchName'}/>
      <div>
        {loading ? (
          <h1 style={{textAlign: 'center'}}>Loading...</h1>
        ) : (
          data === null || data === undefined || data[0].PostOffice === null ? (
            <h1>No data found</h1>
          ) : (
          <>
          <div className="status">
          <h3>{data[0].Message}</h3>
          <h3>Status: {data[0].Status}</h3>
          </div>
            <div className="table">
            <table>
              <thead>
                <tr>
                  <th>Block</th>
                  <th>BranchType</th>
                  <th>Circle</th>
                  <th>Country</th>
                  <th>DeliveryStatus</th>
                  <th>District</th>
                  <th>Division</th>
                  <th>Name</th>
                  <th>Pincode</th>
                  <th>Region</th>
                  <th>State</th>
                  <th>Maps</th>
                </tr>
              </thead>
              <tbody>
                {data[0].PostOffice.map((result,index) => (
                  <tr key={index}>
                    <td>{result.Block}</td>
                    <td>{result.BranchType}</td>
                    <td>{result.Circle}</td>
                    <td>{result.Country}</td>
                    <td>{result.DeliveryStatus}</td>
                    <td>{result.District}</td>
                    <td>{result.Division}</td>
                    <td>{result.Name}</td>
                    <td>{result.Pincode}</td>
                    <td>{result.Region}</td>
                    <td>{result.State}</td>
                    <td><RedirectToMaps query={`${result.BranchType}, ${result.Name}, ${result.Circle}, ${result.Pincode}`}/></td>
                  </tr>
                ))}
              </tbody>
            </table>
            </div>
          </>
          )
        )}
      </div>
    </div>
  );
};

export default PincodePage;
