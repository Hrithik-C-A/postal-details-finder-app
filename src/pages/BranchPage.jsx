import { useEffect, useState } from "react";
import axios from "axios";
import '../Pages.css';
import LinkSwitch from "../components/LinkSwitch";

const BranchPage = () => {
  const [Branch, setBranch] = useState('palakkad');
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`https://api.postalpincode.in/postoffice/${Branch}`)
      .then(res => {
        setData(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
      });
  }, []);

  const handleSubmit = (e)=>{
    e.preventDefault();
    axios.get(`https://api.postalpincode.in/postoffice/${Branch}`)
      .then(res => {
        setData(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
      });

  }

  return (
    <div>
      {/* <a href="/" className="home-link">Home</a> */}
      <LinkSwitch  linkUrl={'/'} linkCss={'home-link'} linkName={'Home'}/>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Enter Branch Name" onChange={(e) => setBranch(e.target.value)} />
        <button type="submit">Submit</button>
      </form>
      <LinkSwitch  linkUrl={'/search/pincode'} linkCss={'link-switch'} linkName={'Switch To Pincode'}/>
      <div>
        {loading ? (
          <h1>Loading...</h1>
        ) : (
          data === null || data === undefined || data[0].PostOffice === null ? (
            <h1>No data found</h1>
          ) : (
          <div>
          <h3>{data[0].Message} <span className="push-left">Status: {data[0].Status}</span></h3>
            <table>
              <thead>
                <tr>
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
                </tr>
              </thead>
              <tbody>
                {data[0].PostOffice.map((result,index) => (
                  <tr key={index}>
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
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          )
        )}
      </div>
    </div>
  );
};

export default BranchPage;
